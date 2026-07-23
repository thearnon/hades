import './styles/main.css';

import { renderNav } from './app/navigation';
import { isSectionId, state } from './app/state';
import { CHARACTERS } from './data/characters';
import {
  renderBeginner,
  renderCore,
  renderMindset,
  renderOverview,
} from './pages/basics';
import {
  drawRelationshipLines,
  renderChars,
  renderRelations,
} from './pages/characters';
import { renderBoons, renderWeapons } from './pages/arsenal';
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

function render(): void {
  renderNav();
  getContentMount().innerHTML = RENDERERS[state.section]();
  if (state.section === 'relations') window.setTimeout(drawRelationshipLines, 0);
}

function goToSection(id: string): void {
  if (!isSectionId(id)) return;

  state.section = id;
  if (window.location.hash !== `#${id}`) window.history.replaceState(null, '', `#${id}`);
  render();

  const main = document.getElementById('main');
  if (main) main.scrollTop = 0;
}

document.addEventListener('click', (event) => {
  const characterLink = closest(event.target, '[data-character-link]');
  if (characterLink?.dataset.characterLink) {
    state.characterFilter = 'all';
    state.expandAllCharacters = false;
    state.expandedCharacter = characterLink.dataset.characterLink;
    goToSection('chars');
    requestAnimationFrame(() => {
      document.getElementById(`character-${state.expandedCharacter}`)?.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
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
    render();
    return;
  }

  const characterToggle = closest(event.target, '[data-character-toggle]');
  if (characterToggle?.dataset.characterToggle) {
    const id = characterToggle.dataset.characterToggle;
    state.expandAllCharacters = false;
    state.expandedCharacter = state.expandedCharacter === id ? null : id;
    render();
    requestAnimationFrame(() => {
      document.getElementById(`character-${id}`)?.scrollIntoView({ block: 'nearest' });
    });
    return;
  }

  if (closest(event.target, '[data-character-expand-all]')) {
    state.expandAllCharacters = !state.expandAllCharacters;
    render();
    return;
  }

  const relationshipNode = closest(event.target, '[data-relation-node]');
  if (relationshipNode?.dataset.relationNode) {
    state.relationshipFocus = relationshipNode.dataset.relationNode;
    render();
    return;
  }

  const relationshipMode = closest(event.target, '[data-relationship-mode]');
  const relationshipModeId = relationshipMode?.dataset.relationshipMode;
  if (relationshipModeId === 'overview' || relationshipModeId === 'kinship') {
    state.relationshipMode = relationshipModeId;
    state.relationshipFilter = 'all';
    render();
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
    render();
    return;
  }

  const weapon = closest(event.target, '[data-weapon]');
  if (weapon?.dataset.weapon) {
    state.weapon = weapon.dataset.weapon;
    render();
    return;
  }

  const god = closest(event.target, '[data-god]');
  if (god?.dataset.god) {
    state.god = god.dataset.god;
    render();
    return;
  }

  const beginnerScenario = closest(event.target, '[data-beginner-scenario]');
  if (beginnerScenario?.dataset.beginnerScenario) {
    state.beginnerScenario = beginnerScenario.dataset.beginnerScenario;
    render();
    return;
  }

  const beginnerCheck = closest(event.target, '[data-beginner-check]');
  if (beginnerCheck?.dataset.beginnerCheck) {
    const id = beginnerCheck.dataset.beginnerCheck;
    state.beginnerChecklist = state.beginnerChecklist.includes(id)
      ? state.beginnerChecklist.filter((item) => item !== id)
      : [...state.beginnerChecklist, id];
    render();
    return;
  }

  if (closest(event.target, '[data-beginner-reset]')) {
    state.beginnerChecklist = [];
    render();
  }
});

window.addEventListener('resize', () => {
  if (state.section === 'relations') window.setTimeout(drawRelationshipLines, 0);
});

render();
