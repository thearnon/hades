import type { Character } from '../types/content';

interface IconOptions {
  stroke?: string;
  width?: number;
}

interface PortraitLayout {
  scale: number;
  x: string;
  y: string;
  mobileScale: number;
  mobileX: string;
  mobileY: string;
}

/* ---- Small helpers ---------------------------------------------------- */
export const FLAME = 'M12 3c1.7 2.3 3 3.7 3 6.4a3 3 0 0 1-6 0c0-1 .3-1.7.8-2.4C10 8.6 11 9.4 11.6 10c.6-2-.7-4-.6-7z';

// Build an inline SVG icon from a path string.
export function icon(path: string, size = 20, opts: IconOptions = {}) {
  const stroke = opts.stroke || 'currentColor';
  const width = opts.width || 1.7;
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}"
    stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"></path></svg>`;
}
export const flame = (size: number, stroke = '#ff8f4d') => icon(FLAME, size, { stroke, width: 1.8 });
export const MARK = '<span class="tip-list__mark">&#9670;</span>';
export const FEATURE_ICONS = [
  'assets/icons/skull-laurel.svg',
  'assets/icons/greek-helm.svg',
  'assets/icons/cycle-flame.svg',
];

export const GAME_ASSET_ROOT = 'assets/game';
export const CHARACTER_IMAGES: Record<string, string> = {
  Zagreus: 'characters/zagreus.png',
  Nyx: 'characters/nyx.png',
  Hypnos: 'characters/hypnos.png',
  Achilles: 'characters/achilles.png',
  Hades: 'characters/hades.png',
  Cerberus: 'characters/cerberus.png',
  Skelly: 'characters/skelly.png',
  Dusa: 'characters/dusa.png',
  Orpheus: 'characters/orpheus.png',
  Charon: 'characters/charon.png',
  Megaera: 'characters/megaera.png',
  Thanatos: 'characters/thanatos.png',
  Persephone: 'characters/persephone.png',
  Alecto: 'characters/alecto.png',
  Tisiphone: 'characters/tisiphone.png',
  Patroclus: 'characters/patroclus.png',
  Eurydice: 'characters/eurydice.png',
  Sisyphus: 'characters/sisyphus.png',
  Bouldy: 'characters/bouldy.png',
  Theseus: 'characters/theseus.png',
  Asterius: 'characters/asterius.png',
  Zeus: 'gods/portraits/zeus.png',
  Poseidon: 'gods/portraits/poseidon.png',
  Athena: 'gods/portraits/athena.png',
  Aphrodite: 'gods/portraits/aphrodite.png',
  Ares: 'gods/portraits/ares.png',
  Artemis: 'gods/portraits/artemis.png',
  Dionysus: 'gods/portraits/dionysus.png',
  Demeter: 'gods/portraits/demeter.png',
  Hermes: 'gods/portraits/hermes.png',
  Chaos: 'gods/portraits/chaos.png',
};

export const RELATIONSHIP_LAYOUT: Record<string, [number, number]> = {
  zeus: [70, 52], poseidon: [220, 52], demeter: [370, 52], athena: [520, 52], aphrodite: [670, 52],
  ares: [145, 126], artemis: [295, 126], dionysus: [445, 126], hermes: [595, 126], chaos: [870, 126],
  hades: [235, 245], persephone: [410, 245], nyx: [760, 245],
  cerberus: [70, 335], zagreus: [410, 350], thanatos: [620, 335], hypnos: [775, 335], charon: [930, 335],
  achilles: [45, 490], patroclus: [195, 490], orpheus: [345, 490], eurydice: [495, 490], sisyphus: [645, 490], bouldy: [795, 490],
  dusa: [105, 585], skelly: [255, 585], megaera: [430, 585], alecto: [580, 585], tisiphone: [730, 585],
  'house-contractor': [880, 555], 'wretched-broker': [880, 625],
  theseus: [405, 720], asterius: [615, 720],
};
export const WEAPON_IMAGES: Record<string, string> = {
  stygius: 'weapons/stygius.png',
  varatha: 'weapons/varatha.png',
  aegis: 'weapons/aegis.png',
  coronacht: 'weapons/coronacht.png',
  malphon: 'weapons/malphon.png',
  exagryph: 'weapons/exagryph.png',
};
export const GOD_IMAGES: Record<string, { portrait: string; symbol: string }> = Object.fromEntries([
  'zeus', 'poseidon', 'athena', 'aphrodite', 'ares',
  'artemis', 'dionysus', 'demeter', 'hermes', 'chaos',
].map((id) => [id, {
  portrait: `gods/portraits/${id}.png`,
  symbol: `gods/symbols/${id}.png`,
}]));
// Portrait canvases vary from very wide (Poseidon) to very tall (Chaos).
// These focal-point values keep each god at a deliberate, dialogue-scale crop.
export const GOD_PORTRAIT_LAYOUT: Record<string, PortraitLayout> = {
  zeus:      { scale: 1.32, x: '-3%', y: '3%', mobileScale: 1.20, mobileX: '-3%', mobileY: '3%' },
  poseidon:  { scale: 1.78, x: '0%',  y: '2%', mobileScale: 1.45, mobileX: '0%',  mobileY: '2%' },
  athena:    { scale: 1.10, x: '4%',  y: '3%', mobileScale: 0.98, mobileX: '4%',  mobileY: '4%' },
  aphrodite: { scale: 1.05, x: '0%',  y: '6%', mobileScale: 0.98, mobileX: '0%',  mobileY: '5%' },
  ares:      { scale: 1.18, x: '2%',  y: '2%', mobileScale: 1.06, mobileX: '2%',  mobileY: '2%' },
  artemis:   { scale: 1.12, x: '-4%', y: '2%', mobileScale: 1.02, mobileX: '-3%', mobileY: '3%' },
  dionysus:  { scale: 1.04, x: '4%',  y: '4%', mobileScale: 0.98, mobileX: '4%',  mobileY: '4%' },
  demeter:   { scale: 1.02, x: '0%',  y: '7%', mobileScale: 0.96, mobileX: '0%',  mobileY: '6%' },
  hermes:    { scale: 1.33, x: '-2%', y: '2%', mobileScale: 1.15, mobileX: '-2%', mobileY: '2%' },
  chaos:     { scale: 1.12, x: '2%',  y: '7%', mobileScale: 0.96, mobileX: '2%',  mobileY: '6%' },
};
export const ITEM_IMAGES: Record<string, string> = {
  Darkness: 'items/darkness.png',
  'Chthonic Keys': 'items/chthonic-key.png',
  Gemstones: 'items/gemstone.png',
  Nectar: 'items/nectar.png',
  Ambrosia: 'items/ambrosia.png',
  'Titan Blood': 'items/titan-blood.png',
  Diamonds: 'items/diamond.png',
  Obols: 'items/charons-obol.png',
};
export const RUN_REWARD_ASSETS = [
  { name: 'Daedalus Hammer', desc: 'เปลี่ยนท่าอาวุธ', image: 'items/daedalus-hammer.png' },
  { name: 'Centaur Heart', desc: 'เพิ่ม HP สูงสุด', image: 'items/centaur-heart.png' },
  { name: 'Pom of Power', desc: 'เพิ่มเลเวล Boon', image: 'items/pom-of-power.png' },
  { name: 'Heat', desc: 'ตัวปรับความยากหลังจบเกม', image: 'items/heat.png' },
];
export const KEEPSAKE_IMAGES: Record<string, string> = {
  'Old Spiked Collar': 'keepsakes/old-spiked-collar.png',
  'Lucky Tooth': 'keepsakes/lucky-tooth.png',
  'Myrmidon Bracer': 'keepsakes/myrmidon-bracer.png',
  'Pierced Butterfly': 'keepsakes/pierced-butterfly.png',
  'Distant Memory': 'keepsakes/distant-memory.png',
  'Bone Hourglass': 'keepsakes/bone-hourglass.png',
  'Chthonic Coin Purse': 'keepsakes/chthonic-coin-purse.png',
  'Lambent Plume': 'keepsakes/lambent-plume.png',
};
export const GOD_KEEPSAKE_IMAGES = [
  'thunder-signet', 'conch-shell', 'owl-pendant', 'eternal-rose',
  'blood-filled-vial', 'adamant-arrowhead', 'overflowing-cup', 'frostbitten-horn',
].map((name) => `keepsakes/${name}.png`);
export const BOON_STARTERS: Record<string, Array<[string, string, string]>> = {
  zeus: [
    ['Lightning Strike', 'Attack', 'lightning-strike'], ['Thunder Flourish', 'Special', 'thunder-flourish'],
    ['Electric Shot', 'Cast', 'electric-shot'], ['Thunder Dash', 'Dash', 'thunder-dash'], ['Zeus\' Aid', 'Call', 'zeus-aid'],
  ],
  poseidon: [
    ['Tempest Strike', 'Attack', 'tempest-strike'], ['Tempest Flourish', 'Special', 'tempest-flourish'],
    ['Flood Shot', 'Cast', 'flood-shot'], ['Tidal Dash', 'Dash', 'tidal-dash'], ['Poseidon\'s Aid', 'Call', 'poseidon-aid'],
  ],
  athena: [
    ['Divine Strike', 'Attack', 'divine-strike'], ['Divine Flourish', 'Special', 'divine-flourish'],
    ['Phalanx Shot', 'Cast', 'phalanx-shot'], ['Divine Dash', 'Dash', 'divine-dash'], ['Athena\'s Aid', 'Call', 'athena-aid'],
  ],
  aphrodite: [
    ['Heartbreak Strike', 'Attack', 'heartbreak-strike'], ['Heartbreak Flourish', 'Special', 'heartbreak-flourish'],
    ['Crush Shot', 'Cast', 'crush-shot'], ['Passion Dash', 'Dash', 'passion-dash'], ['Aphrodite\'s Aid', 'Call', 'aphrodite-aid'],
  ],
  ares: [
    ['Curse of Agony', 'Attack', 'curse-of-agony'], ['Curse of Pain', 'Special', 'curse-of-pain'],
    ['Slicing Shot', 'Cast', 'slicing-shot'], ['Blade Dash', 'Dash', 'blade-dash'], ['Ares\' Aid', 'Call', 'ares-aid'],
  ],
  artemis: [
    ['Deadly Strike', 'Attack', 'deadly-strike'], ['Deadly Flourish', 'Special', 'deadly-flourish'],
    ['True Shot', 'Cast', 'true-shot'], ['Hunter Dash', 'Dash', 'hunter-dash'], ['Artemis\' Aid', 'Call', 'artemis-aid'],
  ],
  dionysus: [
    ['Drunken Strike', 'Attack', 'drunken-strike'], ['Drunken Flourish', 'Special', 'drunken-flourish'],
    ['Trippy Shot', 'Cast', 'trippy-shot'], ['Drunken Dash', 'Dash', 'drunken-dash'], ['Dionysus\' Aid', 'Call', 'dionysus-aid'],
  ],
  demeter: [
    ['Frost Strike', 'Attack', 'frost-strike'], ['Frost Flourish', 'Special', 'frost-flourish'],
    ['Crystal Beam', 'Cast', 'crystal-beam'], ['Mistral Dash', 'Dash', 'mistral-dash'], ['Demeter\'s Aid', 'Call', 'demeter-aid'],
  ],
  hermes: [
    ['Swift Strike', 'Attack', 'swift-strike'], ['Swift Flourish', 'Special', 'swift-flourish'],
    ['Greater Haste', 'Move', 'greater-haste'], ['Greatest Reflex', 'Dash', 'greatest-reflex'], ['Side Hustle', 'Obols', 'side-hustle'],
  ],
  chaos: [
    ['Strike', 'Attack', 'chaos-strike'], ['Flourish', 'Special', 'chaos-flourish'],
    ['Shot', 'Cast', 'chaos-shot'], ['Lunge', 'Dash Attack', 'chaos-lunge'], ['Soul', 'Max HP', 'chaos-soul'],
  ],
};
export const LEGENDARY_IMAGES: Record<string, string> = {
  'Splitting Bolt': 'boons/splitting-bolt.png',
  'Vicious Cycle': 'boons/vicious-cycle.png',
  'Divine Protection': 'boons/divine-protection.png',
  'Unhealthy Fixation': 'boons/unhealthy-fixation.png',
};

export function gameAsset(relativePath: string, alt: string, className = '') {
  return `<img src="${GAME_ASSET_ROOT}/${relativePath}" alt="${alt}" class="asset-img ${className}" loading="lazy" decoding="async" onload="if(this.previousElementSibling?.classList.contains('asset-fallback'))this.previousElementSibling.hidden=true" onerror="this.hidden=true">`;
}

export function characterPortrait(character: Character, className = '') {
  const path = CHARACTER_IMAGES[character.name];
  const fallback = `<span class="asset-fallback" aria-hidden="true">${character.name[0]}</span>`;
  return path ? `${fallback}${gameAsset(path, `ภาพโปรไฟล์ ${character.name}`, className)}` : fallback;
}

export function mediaFigure(src: string, alt: string, caption: string, className = '') {
  return `<figure class="media-frame ${className}">
    <img src="${src}" alt="${alt}" class="asset-img" loading="lazy" decoding="async">
    <figcaption>${caption}</figcaption>
  </figure>`;
}
