// Motion-powered enhancements layered on top of the native transitions.
//
// Scope is deliberately small and non-conflicting: reveal content that starts
// below the fold as it scrolls into view, and count the character total when
// the filter changes. Above-the-fold content is left untouched so it is shown
// instantly by the section's View Transition, and interactive controls keep
// their CSS hover/press transforms (we only animate non-interactive blocks).
//
// Everything opts out under reduced-motion, leaving content fully visible.

import { animate, inView } from 'motion';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const EASE_OUT: [number, number, number, number] = [0.2, 0.75, 0.25, 1];

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

  const blocks = document.querySelectorAll<HTMLElement>('#content .screen > *');
  const fold = window.innerHeight * 0.9;

  blocks.forEach((el) => {
    // Above the fold: leave visible — the View Transition already brought it in.
    if (el.getBoundingClientRect().top < fold) return;

    el.style.opacity = '0';
    const stop = inView(
      el,
      (element) => {
        animate(
          element,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.5, ease: EASE_OUT },
        );
      },
      { amount: 0.15 },
    );
    revealStoppers.push(stop);
  });
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
