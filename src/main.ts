import './styles/main.css';

import { renderNav } from './app/navigation';
import { revealContent } from './app/motion';
import { isSectionId, state } from './app/state';
import { GODS, WEAPONS } from './data/arsenal';
import { CHARACTERS } from './data/characters';
import {
  renderBeginner,
  renderCore,
  renderMindset,
  renderOverview,
  updateBeginnerChecklist,
  updateBeginnerScenario,
} from './pages/basics';
import {
  drawRelationshipLines,
  initCharacterGrid,
  renderChars,
  renderRelations,
  updateCharacterExpansion,
  updateCharacterFilter,
  updateRelationshipView,
} from './pages/characters';
import {
  renderBoons,
  renderWeapons,
  updateGodSelection,
  updateWeaponSelection,
} from './pages/arsenal';
import {
  renderBiomes,
  renderKeepsakes,
  renderUpgrades,
} from './pages/world';
import type { SectionId } from './types/content';

type Renderer = () => string;

const RENDERERS: Record<SectionId, Renderer> = {
  overview: renderOverview,
  core: renderCore,
  mindset: renderMindset,
  beginner: renderBeginner,
  chars: renderChars,
  relations: renderRelations,
  weapons: renderWeapons,
  boons: renderBoons,
  biomes: renderBiomes,
  upgrades: renderUpgrades,
  keepsakes: renderKeepsakes,
};

function getContentMount(): HTMLElement {
  const content = document.getElementById('content');
  if (!content) throw new Error('Missing #content mount point');
  return content;
}

function closest(target: EventTarget | null, selector: string): HTMLElement | null {
  return target instanceof Element ? target.closest<HTMLElement>(selector) : null;
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Data attributes that mark a re-rendered interactive control. Used to return
// keyboard focus to the same control after the content is rebuilt.
const FOCUS_ATTRS = [
  'data-section',
  'data-character-filter',
  'data-character-toggle',
  'data-character-expand-all',
  'data-relationship-mode',
  'data-relationship-filter',
  'data-relation-node',
  'data-weapon',
  'data-god',
  'data-beginner-scenario',
  'data-beginner-check',
  'data-beginner-reset',
] as const;

let previousSection: SectionId | null = null;

function focusSelector(element: Element | null): string | null {
  if (!element) return null;
  for (const attr of FOCUS_ATTRS) {
    const value = element.getAttribute(attr);
    if (value === null) continue;
    return value === '' ? `[${attr}]` : `[${attr}="${CSS.escape(value)}"]`;
  }
  return null;
}

function doRender(): void {
  renderNav();
  getContentMount().innerHTML = RENDERERS[state.section]();
  if (state.section === 'relations') window.setTimeout(() => drawRelationshipLines(), 0);
  if (state.section === 'chars') initCharacterGrid();
}

function render(afterRender?: () => void): void {
  const sectionChanged = state.section !== previousSection;
  previousSection = state.section;

  // Keep the keyboard user on the same control across the full re-render.
  const restoreTarget = focusSelector(document.activeElement);
  const settle = (): void => {
    if (restoreTarget) {
      document.querySelector<HTMLElement>(restoreTarget)?.focus({ preventScroll: true });
    }
    afterRender?.();
    revealContent(); // scroll-reveal below-fold blocks (runs after scroll is reset)
  };

  const startViewTransition = document.startViewTransition?.bind(document);
  if (startViewTransition && !prefersReducedMotion.matches) {
    // Native crossfade between states — no dependency; reduced-motion opts out above.
    startViewTransition(doRender).updateCallbackDone.then(settle).catch(() => {});
    return;
  }

  doRender();
  if (sectionChanged && !prefersReducedMotion.matches) {
    getContentMount().firstElementChild?.classList.add('screen--enter');
  }
  settle();
}

function scrollMainToTop(): void {
  const main = document.getElementById('main');
  if (main) main.scrollTop = 0;
}

// Sections whose primary selection is encoded in the URL as #section/selection,
// so a specific weapon / god / character view is shareable and bookmarkable.
interface SelectionAccessor {
  get: () => string | null;
  set: (id: string) => void;
  isValid: (id: string) => boolean;
}
const SECTION_SELECTION: Partial<Record<SectionId, SelectionAccessor>> = {
  weapons: {
    get: () => state.weapon,
    set: (id) => { state.weapon = id; },
    isValid: (id) => WEAPONS.some((weapon) => weapon.id === id),
  },
  boons: {
    get: () => state.god,
    set: (id) => { state.god = id; },
    isValid: (id) => GODS.some((god) => god.id === id),
  },
  chars: {
    get: () => state.expandedCharacter,
    set: (id) => { state.expandedCharacter = id; },
    isValid: (id) => CHARACTERS.some((character) => character.id === id),
  },
  relations: {
    get: () => state.relationshipFocus,
    set: (id) => { state.relationshipFocus = id; },
    isValid: (id) => CHARACTERS.some((character) => character.id === id),
  },
};

function currentHash(): string {
  const selection = SECTION_SELECTION[state.section]?.get();
  return selection ? `#${state.section}/${selection}` : `#${state.section}`;
}

// Reflect section + selection in the URL. 'push' adds a history entry (section
// navigation); 'replace' updates in place (an in-page selection change).
function syncHash(mode: 'push' | 'replace'): void {
  const hash = currentHash();
  if (window.location.hash === hash) return;
  if (mode === 'push') window.history.pushState(null, '', hash);
  else window.history.replaceState(null, '', hash);
}

// Apply the selection encoded in the current hash to the active section's state.
function applyHashSelection(): void {
  const selection = window.location.hash.slice(1).split('/')[1];
  const accessor = SECTION_SELECTION[state.section];
  if (selection && accessor?.isValid(selection)) accessor.set(selection);
}

function goToSection(id: string, afterRender?: () => void): void {
  if (!isSectionId(id)) return;

  state.section = id;
  syncHash('push');
  render(() => {
    scrollMainToTop();
    afterRender?.();
  });
}

document.addEventListener('click', (event) => {
  const characterLink = closest(event.target, '[data-character-link]');
  if (characterLink?.dataset.characterLink) {
    state.characterFilter = 'all';
    state.expandAllCharacters = false;
    state.expandedCharacter = characterLink.dataset.characterLink;
    goToSection('chars', () => {
      requestAnimationFrame(() => {
        document.getElementById(`character-${state.expandedCharacter}`)?.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      });
    });
    return;
  }

  const nav = closest(event.target, '[data-section]');
  if (nav?.dataset.section) {
    goToSection(nav.dataset.section);
    return;
  }

  const characterFilter = closest(event.target, '[data-character-filter]');
  if (characterFilter?.dataset.characterFilter) {
    state.characterFilter = characterFilter.dataset.characterFilter;
    state.expandAllCharacters = false;
    const visible = CHARACTERS.filter((character) => (
      state.characterFilter === 'all' || character.groups.includes(state.characterFilter)
    ));
    if (!visible.some((character) => character.id === state.expandedCharacter)) {
      state.expandedCharacter = visible[0]?.id ?? 'zagreus';
    }
    updateCharacterFilter();
    syncHash('replace');
    return;
  }

  const characterToggle = closest(event.target, '[data-character-toggle]');
  if (characterToggle?.dataset.characterToggle) {
    const id = characterToggle.dataset.characterToggle;
    state.expandAllCharacters = false;
    state.expandedCharacter = state.expandedCharacter === id ? null : id;
    updateCharacterExpansion();
    syncHash('replace');
    requestAnimationFrame(() => {
      document.getElementById(`character-${id}`)?.scrollIntoView({ block: 'nearest' });
    });
    return;
  }

  if (closest(event.target, '[data-character-expand-all]')) {
    state.expandAllCharacters = !state.expandAllCharacters;
    updateCharacterExpansion();
    return;
  }

  const relationshipNode = closest(event.target, '[data-relation-node]');
  if (relationshipNode?.dataset.relationNode) {
    state.relationshipFocus = relationshipNode.dataset.relationNode;
    updateRelationshipView();
    syncHash('replace');
    return;
  }

  const relationshipMode = closest(event.target, '[data-relationship-mode]');
  const relationshipModeId = relationshipMode?.dataset.relationshipMode;
  if (relationshipModeId === 'overview' || relationshipModeId === 'kinship') {
    state.relationshipMode = relationshipModeId;
    state.relationshipFilter = 'all';
    updateRelationshipView();
    return;
  }

  const relationshipFilter = closest(event.target, '[data-relationship-filter]');
  if (relationshipFilter?.dataset.relationshipFilter) {
    state.relationshipFilter = relationshipFilter.dataset.relationshipFilter;
    if (
      state.relationshipMode === 'kinship'
      && !['all', 'blood', 'foster'].includes(state.relationshipFilter)
    ) {
      state.relationshipMode = 'overview';
    }
    updateRelationshipView();
    return;
  }

  const weapon = closest(event.target, '[data-weapon]');
  if (weapon?.dataset.weapon) {
    state.weapon = weapon.dataset.weapon;
    updateWeaponSelection();
    syncHash('replace');
    return;
  }

  const god = closest(event.target, '[data-god]');
  if (god?.dataset.god) {
    state.god = god.dataset.god;
    updateGodSelection();
    syncHash('replace');
    return;
  }

  const beginnerScenario = closest(event.target, '[data-beginner-scenario]');
  if (beginnerScenario?.dataset.beginnerScenario) {
    state.beginnerScenario = beginnerScenario.dataset.beginnerScenario;
    updateBeginnerScenario();
    return;
  }

  const beginnerCheck = closest(event.target, '[data-beginner-check]');
  if (beginnerCheck?.dataset.beginnerCheck) {
    const id = beginnerCheck.dataset.beginnerCheck;
    state.beginnerChecklist = state.beginnerChecklist.includes(id)
      ? state.beginnerChecklist.filter((item) => item !== id)
      : [...state.beginnerChecklist, id];
    updateBeginnerChecklist();
    return;
  }

  if (closest(event.target, '[data-beginner-reset]')) {
    state.beginnerChecklist = [];
    updateBeginnerChecklist();
  }
});

// Fade art in once it decodes. Capture phase catches load/error from any image
// regardless of which render path created it (load/error do not bubble). Marking
// on error too guarantees a failed image is never stuck invisible.
const markImageLoaded = (event: Event): void => {
  if (event.target instanceof HTMLImageElement) event.target.classList.add('is-loaded');
};
document.addEventListener('load', markImageLoaded, true);
document.addEventListener('error', markImageLoaded, true);

window.addEventListener('resize', () => {
  if (state.section === 'relations') window.setTimeout(() => drawRelationshipLines(false), 0);
});

// Browser back/forward navigate between sections and restore the deep-linked
// selection. Section or selection may have changed, so always re-apply + render.
window.addEventListener('popstate', () => {
  const rawSection = window.location.hash.slice(1).split('/')[0];
  const next = isSectionId(rawSection) ? rawSection : 'overview';
  state.section = next;
  applyHashSelection();
  render(scrollMainToTop);
});

applyHashSelection(); // restore a deep-linked selection for the initial section
render();
