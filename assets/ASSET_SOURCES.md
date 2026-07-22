# Downloaded game-asset sources

This project is an unofficial, non-commercial Hades fan guide. The UI uses a small, curated set of game images for identification and commentary; it does not hotlink images from Fandom.

## Reproducible setup

The exact file-by-file mapping is stored in [`source-manifest.json`](source-manifest.json). Each entry records the Hades Wiki filename, the local destination, and the in-guide label. Run this from the repository root to resolve every current URL through the MediaWiki API and download the files locally:

```powershell
./scripts/fetch-game-assets.ps1
```

The generated `assets/game/` directory is intentionally ignored by Git. This keeps copyrighted game binaries out of the public source history while allowing the fan guide to use local files rather than CDN hotlinks. The UI retains text/SVG fallbacks when the local set has not been fetched.

## Source collections

Accessed 2026-07-22.

| Local group | Hades Wiki collection |
| --- | --- |
| Character profile images | [FP icons](https://hades.fandom.com/wiki/Category%3AFP_icons) and [character portraits](https://hades.fandom.com/wiki/Category%3ACharacter_portraits) |
| Infernal Arms | [Weapon images](https://hades.fandom.com/wiki/Category%3AWeapon_images) |
| God portraits and symbols | [Character portraits](https://hades.fandom.com/wiki/Category%3ACharacter_portraits) and [God symbols](https://hades.fandom.com/wiki/Category%3AGod_symbols) |
| Boon icons | [Hades I Boon Icons](https://hades.fandom.com/wiki/Category%3AHades_I_Boon_Icons) |
| Keepsake icons | [Keepsake icons](https://hades.fandom.com/wiki/Category%3AKeepsake_icons) |
| Currency and reward icons | [Item icons](https://hades.fandom.com/wiki/Category%3AItem_icons) |

The fetcher uses MediaWiki `imageinfo` to resolve the original file URL at setup time, requests the original PNG format, and verifies the PNG signature before accepting a file.

## Rights note

Hades, its characters, names, game artwork, icons, and related materials are trademarks and copyrights of Supergiant Games, LLC or its licensors. They are not covered by this repository's MIT license.

Fandom explains that a wiki's text license should not automatically be assumed to cover uploaded game images; many are hosted under fair-use or permission-based terms. Supergiant's Terms of Use separately provide a revocable, non-commercial fansite permission subject to their conditions and notice requirements. This project therefore keeps source records, uses the images only in the context of the guide, and does not treat the binaries as reusable open-source assets.

- [Fandom guidance on reusing wiki images](https://support.fandom.com/hc/en-us/articles/360035075654-I-want-to-reuse-text-or-images-from-a-Fandom-wiki)
- [Supergiant Games Terms of Use — fansites](https://www.supergiantgames.com/blog/terms-of-use/)

This documentation is a practical provenance record, not legal advice.
