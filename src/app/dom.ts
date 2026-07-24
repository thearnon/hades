// Small DOM helpers shared by the targeted in-page updates.
//
// The app used to re-render the whole #content on every click (weapon swap,
// god swap, filter, checklist tick). These helpers let each interaction patch
// only the region that actually depends on the changed state, so unrelated
// content stays put and keyboard focus is preserved on the clicked control.
// View Transitions are reserved for whole-section navigation (see main.ts).

/**
 * Replace a region's contents. When `animate` is true a subtle entrance is
 * replayed on the container so a swapped-in panel reads as a deliberate change
 * rather than a flash. Reduced-motion neutralises the animation via CSS.
 */
export function swapRegion(region: Element | null, html: string, animate = true): void {
  if (!region) return;
  region.innerHTML = html;
  if (!animate || !(region instanceof HTMLElement)) return;
  region.classList.remove('region-enter');
  void region.offsetWidth; // force reflow so the animation restarts on every swap
  region.classList.add('region-enter');
}

/** Toggle `is-active` (and optionally aria-pressed) across a set of controls. */
export function setActive(
  controls: Iterable<Element>,
  isActive: (el: HTMLElement) => boolean,
  pressed = true,
): void {
  for (const el of controls) {
    if (!(el instanceof HTMLElement)) continue;
    const active = isActive(el);
    el.classList.toggle('is-active', active);
    if (pressed) el.setAttribute('aria-pressed', String(active));
  }
}
