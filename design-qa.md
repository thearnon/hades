# Design QA

## Comparison target

- Source visual truth: `D:\Users\arnon.k.ERAWANSUGAR\.codex\generated_images\019f88bf-b795-7750-95e6-57e95fac6516\exec-dc427719-6978-4b29-9040-ed9dc366f2a3.png`
- Implementation screenshot: `D:\tmp\hades-layout-final.png`
- Full-view comparison: `D:\tmp\hades-layout-comparison-final.png`
- Focused hero comparison: `D:\tmp\hades-layout-hero-comparison-final.png`
- Responsive evidence: `D:\tmp\hades-layout-mobile-final.png`
- State: overview/default, with navigation and Boon selection checked separately
- Viewport: 1504 × 1046 CSS px at device scale factor 1
- Source pixels: 1504 × 1046
- Implementation pixels: 1504 × 1046
- Density normalization: none required; source and implementation use identical pixel dimensions

## Full-view comparison evidence

The implementation now follows the reference composition: a 282 px fixed sidebar; copy-left/art-right hero; a three-card feature rail beginning at y=466; compact quick links on the left; and the Tartarus image lifted beside the discovery heading. The implementation preserves the existing live navigation and guide content while matching the reference's main proportions.

## Focused hero comparison evidence

The focused comparison confirms that the HADES title scale, text column, hero-art focal point, fade into the page background, ornamental divider, and feature-card baseline align with the reference. The official Zagreus asset remains sharp and is not distorted. No source-credit label is rendered over the image.

## Required fidelity surfaces

- Fonts and typography: Cinzel remains the display face; Kanit and IBM Plex Sans Thai preserve the reference's display/body hierarchy. The desktop HADES title was increased to 86 px to match the reference scale. Mobile retains its existing clamp.
- Spacing and layout rhythm: the feature rail is 1042 px wide with three equal 347 px tracks and no gaps, and starts at y=466. Quick-link cards were reduced to 50 px minimum height and the discovery image was lifted 38 px.
- Colors and tokens: the existing plum, ember, gold, and teal tokens match the selected direction. Contrast remains readable.
- Image quality and asset fidelity: the official raster artwork is used directly. The hero crop is scaled and positioned without stretching, then masked at the container edge to merge with the background.
- Copy and content: existing Thai guide copy is preserved. Only image-source overlay labels were removed; attribution remains in the sidebar and attribution file.
- Responsiveness: 390 × 844 renders without horizontal overflow, clipped controls, or broken images.
- Interaction and accessibility: semantic buttons still drive navigation and god selection; image alt text remains present and reduced-motion handling is unchanged.

## Comparison history

### Iteration 1

- [P2] Feature cards stretched to 1118 px and ended too close to the viewport edge, unlike the narrower reference rail.
- [P2] Zagreus was too small and the image read as a separate rectangular block.
- [P2] Quick-link cards were too tall and wrapped labels; the Tartarus image began about 38 px below the reference position.

Fixes made: narrowed the feature rail to 1042 px, expanded and blended the hero-media area, adjusted the Zagreus focal position, compacted quick-link controls, and lifted the discovery image.

### Final pass

Post-fix evidence is recorded in the full-view and focused comparison images above. No actionable P0, P1, or P2 mismatch remains. A minor P3 difference remains in the exact ornamental/icon drawing detail because the implementation preserves the project's existing icon assets rather than rasterizing the generated concept.

## Browser verification

- Browser plugin: not available in this session.
- Playwright project/runtime: not installed in the repository.
- Fallback: installed Chrome headless controlled through the DevTools protocol.
- Page identity and meaningful content: passed.
- Broken images: 0.
- Source labels on images: 0.
- Console errors or warnings: 0.
- Horizontal overflow at desktop/mobile: none.
- Interaction tested: overview → Boon page → Athena selected; active navigation and panel heading updated correctly.

final result: passed

## Asset integration pass — 2026-07-22

- Reference and final overview were reviewed together in this pass: the accepted hero composition, Thai copy, sidebar width, feature rail, and discovery image remain unchanged.
- Current evidence: `D:\tmp\hades-assets-overview-final.png`, `D:\tmp\hades-assets-characters-final.png`, `D:\tmp\hades-assets-weapons-final.png`, `D:\tmp\hades-assets-boons-athena-final.png`, `D:\tmp\hades-assets-keepsakes-final.png`, and `D:\tmp\hades-assets-mobile-boons-final.png`.
- Viewports: 1440 × 1100 desktop and 390 × 844 mobile at device scale factor 1.

### Comparison ledger

1. Overview/reference composition — unchanged; no image-source label was reintroduced over the hero artwork.
2. Character cards — square profile artwork now sits in a consistent 72 × 82 px frame; names and roles retain their original hierarchy and no card overflows.
3. Weapon controls — all six Infernal Arms use contained artwork in equal-height selectors, and the selected weapon repeats at a larger, bounded scale in the detail panel.
4. God/Boon surface — the previously static Zeus/Athena banner pair was replaced by one contextual selected-god panel, with a portrait, symbol, and five matching Boon icons; this aligns image and text state after each click.
5. Keepsake surface — eight named keepsakes have one icon each, while the Olympian aggregate card uses an eight-icon grid rather than a misleading single object.
6. Responsive behavior — the selected-god panel stacks portrait before copy at 390 px; horizontal overflow remains zero.

### Iteration findings

- [P1 fixed] The first pass used a generic image `onload` handler that hid the previous sibling. In the Olympian keepsake row this hid seven valid icons. The handler now hides only a sibling explicitly marked `.asset-fallback`; the rerun shows all 8/8 god keepsakes.
- [P2 fixed] Fallback initials and SVGs remained visible behind transparent PNG artwork because an author `display` rule overrode the HTML `hidden` state. An explicit `.asset-fallback[hidden]` rule now prevents double imagery and layout expansion.

### Final asset QA

- Browser plugin: unavailable.
- Playwright: not installed; `npx --no-install playwright --version` could not resolve a local runtime and attempted a restricted npm cache access, so no dependency was installed.
- Fallback: installed Chrome headless controlled through the DevTools protocol against `http://127.0.0.1:4173/`.
- Page identity, non-blank content, and framework-overlay checks: passed.
- Local image failures across Core, Characters, Weapons, Boons, and Keepsakes: 0.
- Runtime exceptions, console errors/warnings, and failed network responses: 0.
- Interaction proof: Coronacht selection updated both active chip and detail image; Athena and Chaos selection each updated the portrait, heading, and five-icon Boon set.
- Counts verified: 8 currencies, 4 other reward icons, 9 character cards, 6 weapon selectors, 10 god selectors, 5 Boon examples per selected god, 8 core keepsakes, and 8 Olympian keepsake icons.
- Final result: passed.

## Character archive and relationship map — 2026-07-23

- Character concept: `D:\Users\arnon.k.ERAWANSUGAR\.codex\generated_images\019f8cd4-e38f-7460-8b37-046dc1731bc2\exec-7581f4ee-98d1-452d-8d90-6b298d060916.png`
- Relationship concept: `D:\Users\arnon.k.ERAWANSUGAR\.codex\generated_images\019f8cd4-e38f-7460-8b37-046dc1731bc2\exec-b2fded9f-3d95-4d43-b67c-b18ffdd82044.png`
- Desktop renders: `D:\tmp\hades-characters-final.png` and `D:\tmp\hades-relations-final.png`
- Mobile renders: `D:\tmp\hades-characters-mobile-final.png` and `D:\tmp\hades-relations-mobile-final.png`
- Native comparison viewport: 1504 × 1046 CSS px at device scale factor 1, matching both concept images exactly.

### Fidelity ledger

1. Information architecture — preserved the project’s existing sidebar and added one explicit relationship-map destination immediately after Characters.
2. Character archive — matches the concept’s heading/filter/detail rhythm, while expanding the concept’s representative set to all 33 named characters and service NPCs requested.
3. Dossier anatomy — keeps portrait, identity, faction/role, relationship, encounter location, unlock/gift information, and an open/closed state; Zagreus is open by default.
4. Relationship canvas — matches the grouped mythic-map treatment with a selected central node, six line types, mode controls, and a direct-relationship inspector; the full 33-node canvas scrolls horizontally inside the established narrower content shell.
5. Palette and typography — reuses the locked plum-black, ember, gold, teal, violet, Cinzel, Kanit, and IBM Plex Sans Thai system without changing the accepted overview design.
6. Responsive behavior — at 390 × 844 the canvas becomes four grouped node lists plus the same selected-character inspector; no document-level horizontal overflow remains.

### Functional verification

- Browser plugin: unavailable; fallback used installed Chrome headless through the DevTools protocol.
- Character archive: 33 cards, 6 filters, 9 Olympian results, all-detail expansion, and 0 broken images.
- Relationship map: 33 nodes, 57 relationship edges, 5 romance edges, 15 kinship-mode edges, and node-to-inspector selection verified for Nyx and Persephone.
- Runtime: 0 JavaScript exceptions, 0 console errors, 0 failed local requests, and no horizontal overflow at desktop or mobile.
- Above-the-fold copy diff: requested headings, filter labels, mode controls, and relationship legend are present; no unrelated navigation or feature copy was added.
- Intentional deviation: portrait framing uses the project’s official/local game-profile assets rather than the concept’s invented painted portraits; this preserves source fidelity and attribution.
- Final result: faithfully verified against both accepted concepts; no actionable visual or functional mismatch remains.
