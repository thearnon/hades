// Motion-powered enhancements layered on top of the native transitions.
//
// Scope is deliberately small and non-conflicting: reveal content that starts
// below the fold as it scrolls into view, and count the character total when
// the filter changes. Above-the-fold content is left untouched so it is shown
// instantly by the section's View Transition, and interactive controls keep
// their CSS hover/press transforms (we only animate non-interactive blocks).
//
// Everything opts out under reduced-motion, leaving content fully visible.

import { animate, inView, stagger } from 'motion';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const EASE_OUT: [number, number, number, number] = [0.2, 0.75, 0.25, 1];

// Blocks whose children should reveal one-by-one rather than as a single unit.
// Kept to small grids — the large character grid is excluded (it has its own
// auto-animate and too many children to stagger tastefully).
const STAGGER_GRID = '.grid, .stack, .steps, .combat-flow, .run-goal-grid, .region-gallery, .reward-strip';

// Live inView observers, torn down before the next section reveal so swapping
// sections never leaves observers watching detached nodes.
let revealStoppers: VoidFunction[] = [];

/**
 * Reveal the current screen's top-level blocks that begin below the fold,
 * rising them in as they scroll into view. Called after every section render.
 */
export function revealContent(): void {
  revealStoppers.forEach((stop) => stop());
  revealStoppers = [];
  if (reduceMotion.matches) return;

  const blocks = [...document.querySelectorAll<HTMLElement>('#content .screen > *')];
  const fold = window.innerHeight * 0.9;

  for (const block of blocks) {
    // Above the fold: leave visible — the View Transition already brought it in.
    if (block.getBoundingClientRect().top < fold) continue;

    const isGrid = block.matches(STAGGER_GRID) && block.children.length > 1;
    const targets = isGrid ? ([...block.children] as HTMLElement[]) : [block];
    targets.forEach((el) => { el.style.opacity = '0'; });

    const stop = inView(block, () => {
      if (isGrid) {
        // Opacity only: a leftover transform on interactive children (e.g. weapon
        // chips) would override their hover lift, so we never translate them.
        animate(targets, { opacity: [0, 1] }, { duration: 0.45, ease: EASE_OUT, delay: stagger(0.05) });
      } else {
        animate(targets[0], { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, ease: EASE_OUT });
      }
    }, { amount: 0.15 });
    revealStoppers.push(stop);
  }
}

/**
 * Tween a numeric label to `to`, formatting each step. Used for the character
 * count so filtering reads as a change rather than a jump.
 */
export function animateCount(el: Element, to: number, format: (n: number) => string): void {
  const from = Number.parseInt(el.textContent?.replace(/\D/g, '') ?? '', 10) || 0;
  if (reduceMotion.matches || from === to) {
    el.textContent = format(to);
    return;
  }
  animate(from, to, {
    duration: 0.4,
    ease: EASE_OUT,
    onUpdate: (value) => { el.textContent = format(Math.round(value)); },
  });
}
