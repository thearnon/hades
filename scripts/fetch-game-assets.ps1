[CmdletBinding()]
param(
  [switch]$Force,
  [string]$OutputRoot
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

$repoRoot = Split-Path -Parent $PSScriptRoot
$manifestPath = Join-Path $repoRoot 'assets/source-manifest.json'
if (-not $OutputRoot) {
  $OutputRoot = Join-Path $repoRoot 'assets/game'
}

$manifest = Get-Content -LiteralPath $manifestPath -Raw -Encoding UTF8 | ConvertFrom-Json
$entries = @(
  foreach ($group in $manifest.groups.PSObject.Properties) {
    foreach ($asset in $group.Value) {
      [pscustomobject]@{
        Group  = $group.Name
        Source = [string]$asset.source
        Path   = [string]$asset.path
        Label  = [string]$asset.label
      }
    }
  }
)

$headers = @{
  'User-Agent' = 'HadesFanGuideAssetFetcher/1.0 (non-commercial fan guide; local setup)'
  'Accept' = 'application/json,image/png;q=0.9,*/*;q=0.1'
}

$resolved = @{}
$batchSize = 40
for ($offset = 0; $offset -lt $entries.Count; $offset += $batchSize) {
  $last = [Math]::Min($offset + $batchSize - 1, $entries.Count - 1)
  $batch = @($entries[$offset..$last])
  $titles = @($batch | ForEach-Object { "File:$($_.Source)" }) -join '|'
  $query = @{
    action = 'query'
    format = 'json'
    formatversion = '2'
    prop = 'imageinfo'
    iiprop = 'url|size|mime'
    titles = $titles
  }
  $queryString = @(
    foreach ($pair in $query.GetEnumerator()) {
      '{0}={1}' -f [Uri]::EscapeDataString([string]$pair.Key), [Uri]::EscapeDataString([string]$pair.Value)
    }
  ) -join '&'
  $response = Invoke-RestMethod -Uri "$($manifest.api)?$queryString" -Headers $headers
  foreach ($page in $response.query.pages) {
    $resolved[[string]$page.title] = $page
  }
}

$downloaded = 0
$skipped = 0
foreach ($asset in $entries) {
  $title = "File:$($asset.Source)"
  $page = $resolved[$title]
  if (-not $page -or ($page.PSObject.Properties.Name -contains 'missing') -or -not $page.imageinfo) {
    throw "MediaWiki file not found: $title"
  }

  $info = $page.imageinfo[0]
  # Use the original URL. Fandom's thumbnail CDN can content-negotiate WebP while
  # retaining a .png-looking URL, which creates a MIME/extension mismatch on hosts.
  $downloadUrl = [string]$info.url
  $downloadUrl += if ($downloadUrl.Contains('?')) { '&format=original' } else { '?format=original' }
  $destination = Join-Path $OutputRoot $asset.Path
  $destinationDir = Split-Path -Parent $destination
  New-Item -ItemType Directory -Path $destinationDir -Force | Out-Null

  if ((Test-Path -LiteralPath $destination) -and -not $Force) {
    $skipped++
    continue
  }

  $temporary = "$destination.part"
  try {
    Invoke-WebRequest -Uri $downloadUrl -Headers $headers -OutFile $temporary
    $file = Get-Item -LiteralPath $temporary
    if ($file.Length -lt 100) {
      throw "Downloaded file is unexpectedly small: $title"
    }
    $signature = [IO.File]::ReadAllBytes($temporary)
    $isPng = $signature.Length -ge 8 -and
      $signature[0] -eq 0x89 -and $signature[1] -eq 0x50 -and
      $signature[2] -eq 0x4e -and $signature[3] -eq 0x47
    if (-not $isPng) {
      throw "Downloaded file is not a PNG: $title"
    }
    Move-Item -LiteralPath $temporary -Destination $destination -Force
    $downloaded++
    Write-Host ("Fetched [{0}] {1}" -f $asset.Group, $asset.Label)
  }
  finally {
    if (Test-Path -LiteralPath $temporary) {
      Remove-Item -LiteralPath $temporary -Force
    }
  }
}

Write-Host ''
Write-Host ("Asset setup complete: {0} downloaded, {1} already present, {2} total." -f $downloaded, $skipped, $entries.Count)
Write-Host ("Local asset directory: {0}" -f (Resolve-Path -LiteralPath $OutputRoot))
