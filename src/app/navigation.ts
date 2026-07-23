import { SECTIONS } from '../data/navigation';
import { icon } from './assets';
import { state } from './state';

export function renderNav(): void {
  const nav = document.getElementById('nav');
  if (!nav) throw new Error('Missing #nav mount point');

  nav.innerHTML = SECTIONS.map((section) => {
    const active = section.id === state.section;
    return `<button class="nav-item${active ? ' is-active' : ''}" data-section="${section.id}">
      ${active ? '<span class="nav-item__bar"></span>' : ''}
      ${icon(section.iconPath, 19)}
      <span>${section.label}</span>
    </button>`;
  }).join('');
}
