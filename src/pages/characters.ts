import { state } from '../app/state';
import { setActive, swapRegion } from '../app/dom';
import { animateCount } from '../app/motion';
import {
  RELATIONSHIP_LAYOUT,
  characterPortrait,
  icon,
} from '../app/assets';
import {
  CHARACTER_FILTERS,
  CHARACTER_RELATIONSHIPS,
  CHARACTERS,
  RELATIONSHIP_TYPES,
} from '../data/characters';

type Character = (typeof CHARACTERS)[number];
type CharacterRelationship = (typeof CHARACTER_RELATIONSHIPS)[number];

const RELATION_ICON = 'M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M16 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6 M4 22v-2a4 4 0 0 1 4-4 M20 22v-2a4 4 0 0 0-4-4 M8 12h8';
const LOCATION_ICON = 'M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6';
const GIFT_ICON = 'M20 12v10H4V12 M2 7h20v5H2z M12 7v15 M12 7H7.5A2.5 2.5 0 1 1 12 4.5z M12 7h4.5A2.5 2.5 0 1 0 12 4.5z';

function activeCharacterFilter(): string {
  return CHARACTER_FILTERS.some((filter) => filter.id === state.characterFilter)
    ? state.characterFilter : 'all';
}

function visibleCharacters(): Character[] {
  const activeFilter = activeCharacterFilter();
  return CHARACTERS.filter((character) => activeFilter === 'all' || character.groups.includes(activeFilter));
}

function isCharacterExpanded(character: Character): boolean {
  return state.expandAllCharacters || state.expandedCharacter === character.id;
}

// One dossier card. The detail wrapper is always present (no `hidden`) so the
// open/close can animate as a CSS grid-rows accordion; `.is-expanded` + the
// aria state carry the actual open/closed meaning.
function characterCard(character: Character): string {
  const expanded = isCharacterExpanded(character);
  return `<article class="character-dossier${expanded ? ' is-expanded' : ''}" id="character-${character.id}">
      <div class="character-dossier__head">
        <div class="character-dossier__portrait">${characterPortrait(character, 'character-dossier__img')}</div>
        <div class="character-dossier__identity">
          <div class="character-dossier__name-row">
            <h2 class="character-dossier__name">${character.name}</h2>
            <span class="character-dossier__thai">${character.thai}</span>
          </div>
          <div class="character-dossier__latin">${character.latin}</div>
          <div class="character-dossier__meta"><span>${character.faction}</span><i aria-hidden="true"></i><span>${character.role}</span></div>
        </div>
        <button class="character-dossier__toggle" data-character-toggle="${character.id}" aria-expanded="${expanded}" aria-controls="character-detail-${character.id}" aria-label="${expanded ? 'ย่อ' : 'เปิด'}รายละเอียด ${character.name}">
          ${icon('M6 9l6 6 6-6', 18, { width: 1.8 })}
        </button>
      </div>
      <div class="character-dossier__detail" id="character-detail-${character.id}" aria-hidden="${!expanded}">
        <div class="character-dossier__detail-inner">
          <p class="character-dossier__story">${character.detail}</p>
          <div class="character-facts">
            <div class="character-fact">
              <span class="character-fact__icon character-fact__icon--relation">${icon(RELATION_ICON, 18, { width: 1.6 })}</span>
              <div><b>ความสัมพันธ์</b><p>${character.relationships}</p></div>
            </div>
            <div class="character-fact">
              <span class="character-fact__icon character-fact__icon--location">${icon(LOCATION_ICON, 18, { width: 1.6 })}</span>
              <div><b>พบที่</b><p>${character.encounter}</p></div>
            </div>
            <div class="character-fact">
              <span class="character-fact__icon character-fact__icon--gift">${icon(GIFT_ICON, 18, { width: 1.6 })}</span>
              <div><b>สิ่งที่ปลดล็อก / มอบให้</b><p>${character.unlock}</p></div>
            </div>
          </div>
        </div>
      </div>
    </article>`;
}

export function renderChars() {
  const filters = CHARACTER_FILTERS.map((filter) => `
    <button class="character-filter${filter.id === activeCharacterFilter() ? ' is-active' : ''}" data-character-filter="${filter.id}" aria-pressed="${filter.id === activeCharacterFilter()}">
      <span>${filter.label}</span>
    </button>`).join('');

  const visible = visibleCharacters();
  const cards = visible.map(characterCard).join('');

  return `<div class="screen" data-screen-label="ตัวละคร">
    <div class="eyebrow">CHARACTER ARCHIVE</div>
    <h1 class="section-title">รู้จักทุกตัวละคร</h1>
    <p class="lead">รวมตัวละครและ NPC ที่มีชื่อทั้งหมด <b>${CHARACTERS.length} ตัว</b> พร้อมบทบาท เรื่องราว จุดที่พบ สิ่งที่มอบให้ และความสัมพันธ์สำคัญ <span class="spoiler-note">มีรายละเอียดเนื้อเรื่องช่วงท้าย</span></p>

    <div class="character-toolbar" aria-label="ตัวกรองตัวละคร">
      <div class="character-filters">${filters}</div>
      <div class="character-toolbar__meta">
        <span data-character-count>พบ ${visible.length} ตัวละคร</span>
        <button class="character-expand-all" data-character-expand-all aria-pressed="${state.expandAllCharacters}">
          ${state.expandAllCharacters ? 'ย่อทั้งหมด' : 'เปิดรายละเอียดทั้งหมด'}
        </button>
      </div>
    </div>

    <div class="character-dossier-grid">${cards}</div>

    <div class="character-relation-cta">
      <div>
        <b>อยากเห็นว่าใครเกี่ยวข้องกับใคร?</b>
        <p>เปิดผังสายเลือด คู่รัก มิตร ผู้บังคับบัญชา และคู่ปรับแบบโต้ตอบได้</p>
      </div>
      <button class="btn-teal" data-section="relations">ดูผังความสัมพันธ์ &#8594;</button>
    </div>
  </div>`;
}

function syncExpandAllButton(): void {
  const expandAll = document.querySelector('[data-character-expand-all]');
  if (!expandAll) return;
  expandAll.setAttribute('aria-pressed', String(state.expandAllCharacters));
  expandAll.textContent = state.expandAllCharacters ? 'ย่อทั้งหมด' : 'เปิดรายละเอียดทั้งหมด';
}

// Changing the filter: flip filter active-states, patch the count, and rebuild
// only the card grid.
export function updateCharacterFilter(): void {
  const activeFilter = activeCharacterFilter();
  setActive(document.querySelectorAll('[data-character-filter]'), (el) => el.dataset.characterFilter === activeFilter);
  const visible = visibleCharacters();
  swapRegion(document.querySelector('.character-dossier-grid'), visible.map(characterCard).join(''));
  const count = document.querySelector('[data-character-count]');
  if (count) animateCount(count, visible.length, (n) => `พบ ${n} ตัวละคร`);
  syncExpandAllButton();
}

// Expand/collapse: re-sync every card's open state from `state` (a single toggle
// can also collapse a previously-open card), no innerHTML rebuild so the CSS
// accordion animates and scroll position is preserved.
export function updateCharacterExpansion(): void {
  document.querySelectorAll<HTMLElement>('.character-dossier').forEach((card) => {
    const id = card.id.replace('character-', '');
    const character = CHARACTERS.find((item) => item.id === id);
    const expanded = character ? isCharacterExpanded(character) : false;
    card.classList.toggle('is-expanded', expanded);
    const toggle = card.querySelector('[data-character-toggle]');
    toggle?.setAttribute('aria-expanded', String(expanded));
    if (character) {
      toggle?.setAttribute('aria-label', `${expanded ? 'ย่อ' : 'เปิด'}รายละเอียด ${character.name}`);
    }
    card.querySelector('.character-dossier__detail')?.setAttribute('aria-hidden', String(!expanded));
  });

  syncExpandAllButton();
}

// ---- Relationship map ----------------------------------------------------

function relationIsVisible(relation: CharacterRelationship) {
  const modeTypes = state.relationshipMode === 'kinship' ? ['blood', 'foster'] : null;
  if (modeTypes && !modeTypes.includes(relation.type)) return false;
  return state.relationshipFilter === 'all' || state.relationshipFilter === relation.type;
}

function focusedCharacter(): Character {
  return CHARACTERS.find((character) => character.id === state.relationshipFocus) || CHARACTERS[0];
}

function relationsTouching(selected: Character): CharacterRelationship[] {
  return CHARACTER_RELATIONSHIPS.filter((relation) => relation.from === selected.id || relation.to === selected.id);
}

// Inner markup of the right-hand inspector, rebuilt when the focused node changes.
function relationshipInspectorInner(selected: Character, activeRelations: CharacterRelationship[]): string {
  const typeById = Object.fromEntries(RELATIONSHIP_TYPES.map((type) => [type.id, type.label]));
  const directRows = activeRelations.map((relation) => {
    const otherId = relation.from === selected.id ? relation.to : relation.from;
    const other = CHARACTERS.find((character) => character.id === otherId);
    if (!other) return '';
    return `<button class="direct-relation relation-${relation.type}" data-relation-node="${other.id}">
      <span class="direct-relation__portrait">${characterPortrait(other, 'direct-relation__img')}</span>
      <span class="direct-relation__copy"><b>${other.name}</b><small>${relation.label}</small></span>
      <span class="direct-relation__type">${typeById[relation.type]}</span>
    </button>`;
  }).join('');

  return `
        <div class="relationship-inspector__hero">
          <div class="relationship-inspector__portrait">${characterPortrait(selected, 'relationship-inspector__img')}</div>
          <div><h2>${selected.name}</h2><span>${selected.thai}</span><small>${selected.latin}</small></div>
        </div>
        <p>${selected.role}</p>
        <div class="relationship-inspector__title">ความสัมพันธ์โดยตรง · ${activeRelations.length}</div>
        <div class="direct-relation-list">${directRows || '<p class="relationship-empty">ยังไม่มีเส้นความสัมพันธ์ในผังนี้</p>'}</div>
        <button class="relationship-detail-link" data-character-link="${selected.id}">ดูรายละเอียดตัวละคร &#8594;</button>`;
}

export function renderRelations() {
  const selected = focusedCharacter();
  const activeRelations = relationsTouching(selected);
  const modeButtons = [
    { id: 'overview', label: 'ภาพรวม' },
    { id: 'kinship', label: 'เครือญาติ' },
  ].map((mode) => `<button class="relationship-mode${state.relationshipMode === mode.id ? ' is-active' : ''}" data-relationship-mode="${mode.id}" aria-pressed="${state.relationshipMode === mode.id}">${mode.label}</button>`).join('');
  const legend = RELATIONSHIP_TYPES.slice(1).map((type) => `
    <button class="relationship-legend__item relation-${type.id}${state.relationshipFilter === type.id ? ' is-active' : ''}" data-relationship-filter="${type.id}" aria-pressed="${state.relationshipFilter === type.id}">
      <span class="relationship-legend__line" aria-hidden="true"></span>${type.label}
    </button>`).join('');

  const nodes = CHARACTERS.map((character) => {
    const position = RELATIONSHIP_LAYOUT[character.id];
    const isFocused = character.id === selected.id;
    const isConnected = isFocused || activeRelations.some((relation) => relation.from === character.id || relation.to === character.id);
    return `<button class="relationship-node${isFocused ? ' is-focused' : ''}${isConnected ? ' is-connected' : ''}" style="--node-x:${position[0]}px;--node-y:${position[1]}px" data-relation-node="${character.id}" aria-pressed="${isFocused}">
      <span class="relationship-node__portrait">${characterPortrait(character, 'relationship-node__img')}</span>
      <span class="relationship-node__copy"><b>${character.name}</b><small>${character.thai}</small></span>
    </button>`;
  }).join('');

  const mobileGroups = [
    { label: 'ครอบครัวและสายใกล้ชิด', ids: ['zagreus', 'hades', 'persephone', 'nyx', 'thanatos', 'hypnos', 'charon', 'cerberus', 'chaos'] },
    { label: 'เทพโอลิมปัส', ids: ['zeus', 'poseidon', 'demeter', 'athena', 'aphrodite', 'ares', 'artemis', 'dionysus', 'hermes'] },
    { label: 'พันธมิตรและชาวยมโลก', ids: ['achilles', 'patroclus', 'orpheus', 'eurydice', 'sisyphus', 'bouldy', 'dusa', 'skelly', 'house-contractor', 'wretched-broker'] },
    { label: 'คู่ปรับและผู้คุมทาง', ids: ['megaera', 'alecto', 'tisiphone', 'theseus', 'asterius'] },
  ].map((group) => `<section class="relationship-mobile-group"><h2>${group.label}</h2><div>${group.ids.map((id) => {
    const character = CHARACTERS.find((item) => item.id === id);
    if (!character) return '';
    return `<button class="relationship-mobile-node${id === selected.id ? ' is-focused' : ''}" data-relation-node="${id}">${character.name}<small>${character.thai}</small></button>`;
  }).join('')}</div></section>`).join('');

  return `<div class="screen relationship-screen" data-screen-label="ผังความสัมพันธ์">
    <div class="eyebrow">RELATIONSHIP MAP</div>
    <h1 class="section-title">ผังความสัมพันธ์แห่งยมโลก</h1>
    <p class="lead">สำรวจสายเลือด ครอบครัวบุญธรรม คู่รัก มิตรภาพ ผู้บังคับบัญชา และคู่ปรับของตัวละครทั้ง <b>${CHARACTERS.length} ตัว</b> คลิกโหนดเพื่อเน้นสายสัมพันธ์โดยตรง</p>

    <div class="relationship-controls">
      <div class="relationship-modes" aria-label="รูปแบบผัง">${modeButtons}</div>
      <div class="relationship-legend" aria-label="กรองชนิดความสัมพันธ์">
        <button class="relationship-legend__all${state.relationshipFilter === 'all' ? ' is-active' : ''}" data-relationship-filter="all" aria-pressed="${state.relationshipFilter === 'all'}">ทั้งหมด</button>
        ${legend}
      </div>
    </div>

    <div class="relationship-workspace">
      <div class="relationship-map-scroll" tabindex="0" aria-label="ผังความสัมพันธ์ เลื่อนแนวนอนได้">
        <div class="relationship-canvas">
          <div class="relationship-band relationship-band--olympus"><span>เทพโอลิมปัส</span></div>
          <div class="relationship-band relationship-band--family"><span>ครอบครัวและสายใกล้ชิด</span></div>
          <div class="relationship-band relationship-band--allies"><span>พันธมิตรและชาวยมโลก</span></div>
          <div class="relationship-band relationship-band--rivals"><span>คู่ปรับและผู้คุมทาง</span></div>
          <svg class="relationship-lines" id="relationship-lines" aria-hidden="true"></svg>
          ${nodes}
        </div>
      </div>

      <aside class="relationship-inspector">${relationshipInspectorInner(selected, activeRelations)}</aside>
    </div>

    <div class="relationship-mobile-map">${mobileGroups}</div>
  </div>`;
}

// Any relationship interaction (focus a node, switch mode, filter a type):
// re-sync control states + node highlights + inspector from `state`, then
// redraw the connecting lines. Never rebuilds the 33-node canvas.
export function updateRelationshipView(): void {
  const selected = focusedCharacter();
  const activeRelations = relationsTouching(selected);

  setActive(document.querySelectorAll('[data-relationship-mode]'), (el) => el.dataset.relationshipMode === state.relationshipMode);
  setActive(document.querySelectorAll('[data-relationship-filter]'), (el) => el.dataset.relationshipFilter === state.relationshipFilter);

  document.querySelectorAll<HTMLElement>('.relationship-node').forEach((node) => {
    const id = node.dataset.relationNode;
    const isFocused = id === selected.id;
    const isConnected = isFocused || activeRelations.some((relation) => relation.from === id || relation.to === id);
    node.classList.toggle('is-focused', isFocused);
    node.classList.toggle('is-connected', isConnected);
    node.setAttribute('aria-pressed', String(isFocused));
  });

  document.querySelectorAll<HTMLElement>('.relationship-mobile-node').forEach((node) => {
    node.classList.toggle('is-focused', node.dataset.relationNode === selected.id);
  });

  const inspector = document.querySelector('.relationship-inspector');
  if (inspector) swapRegion(inspector, relationshipInspectorInner(selected, activeRelations));

  drawRelationshipLines();
}

export function drawRelationshipLines(animateReveal = true) {
  const canvas = document.querySelector('.relationship-canvas');
  const svg = document.getElementById('relationship-lines');
  if (!canvas || !svg) return;
  const visibleRelations = CHARACTER_RELATIONSHIPS.filter(relationIsVisible);
  const canvasRect = canvas.getBoundingClientRect();
  const pairTotals = new Map();
  visibleRelations.forEach((relation) => {
    const key = [relation.from, relation.to].sort().join(':');
    pairTotals.set(key, (pairTotals.get(key) || 0) + 1);
  });
  const pairIndexes = new Map();
  const paths = visibleRelations.map((relation) => {
    const fromNode = canvas.querySelector(`[data-relation-node="${relation.from}"]`);
    const toNode = canvas.querySelector(`[data-relation-node="${relation.to}"]`);
    if (!fromNode || !toNode) return '';
    const fromRect = fromNode.getBoundingClientRect();
    const toRect = toNode.getBoundingClientRect();
    const sx = fromRect.left - canvasRect.left + fromRect.width / 2;
    const sy = fromRect.top - canvasRect.top + fromRect.height / 2;
    const tx = toRect.left - canvasRect.left + toRect.width / 2;
    const ty = toRect.top - canvasRect.top + toRect.height / 2;
    const pairKey = [relation.from, relation.to].sort().join(':');
    const pairIndex = pairIndexes.get(pairKey) || 0;
    pairIndexes.set(pairKey, pairIndex + 1);
    const pairTotal = pairTotals.get(pairKey) || 1;
    const offset = (pairIndex - (pairTotal - 1) / 2) * 24;
    const length = Math.hypot(tx - sx, ty - sy) || 1;
    const perpendicularX = -(ty - sy) / length;
    const perpendicularY = (tx - sx) / length;
    const mx = (sx + tx) / 2 + perpendicularX * offset;
    const my = (sy + ty) / 2 + perpendicularY * offset;
    const touchesFocus = relation.from === state.relationshipFocus || relation.to === state.relationshipFocus;
    return `<path class="relationship-line relation-${relation.type}${touchesFocus ? ' is-focused' : ''}" d="M ${sx.toFixed(1)} ${sy.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${tx.toFixed(1)} ${ty.toFixed(1)}"><title>${relation.label}</title></path>`;
  }).join('');
  svg.setAttribute('viewBox', `0 0 ${canvas.clientWidth} ${canvas.clientHeight}`);
  svg.innerHTML = paths;

  // Fade the layer in on a deliberate redraw (focus/filter change), but not on
  // resize where it would flicker on every tick.
  if (animateReveal) {
    svg.classList.remove('is-drawing');
    void svg.getBoundingClientRect(); // reflow so the animation restarts
    svg.classList.add('is-drawing');
  }
}
