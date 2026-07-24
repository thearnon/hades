import './styles/main.css';

import { renderNav } from './app/navigation';
import { revealContent } from './app/motion';
import { isSectionId, state } from './app/state';
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

function goToSection(id: string, afterRender?: () => void): void {
  if (!isSectionId(id)) return;

  state.section = id;
  const hash = `#${id}`;
  if (window.location.hash !== hash) window.history.pushState(null, '', hash);
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
    return;
  }

  const characterToggle = closest(event.target, '[data-character-toggle]');
  if (characterToggle?.dataset.characterToggle) {
    const id = characterToggle.dataset.characterToggle;
    state.expandAllCharacters = false;
    state.expandedCharacter = state.expandedCharacter === id ? null : id;
    updateCharacterExpansion();
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
    return;
  }

  const god = closest(event.target, '[data-god]');
  if (god?.dataset.god) {
    state.god = god.dataset.god;
    updateGodSelection();
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

window.addEventListener('resize', () => {
  if (state.section === 'relations') window.setTimeout(() => drawRelationshipLines(false), 0);
});

// Browser back/forward navigate between sections (each is pushed in goToSection).
window.addEventListener('popstate', () => {
  const requested = window.location.hash.slice(1);
  const next = isSectionId(requested) ? requested : 'overview';
  if (next === state.section) return;
  state.section = next;
  render(scrollMainToTop);
});

render();
