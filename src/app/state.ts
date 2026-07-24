import { SECTIONS } from '../data/navigation';
import type { AppState, SectionId } from '../types/content';

// Hash is #section or #section/selection (the selection is applied in main.ts).
const requestedSection = window.location.hash.slice(1).split('/')[0];
const initialSection = SECTIONS.find((section) => section.id === requestedSection)?.id ?? 'overview';

export const state: AppState = {
  section: initialSection,
  weapon: 'stygius',
  god: 'zeus',
  showLatin: true,
  characterFilter: 'all',
  expandedCharacter: 'zagreus',
  expandAllCharacters: false,
  relationshipMode: 'overview',
  relationshipFilter: 'all',
  relationshipFocus: 'zagreus',
  beginnerScenario: 'no-core',
  beginnerChecklist: [],
};

export function isSectionId(value: string): value is SectionId {
  return SECTIONS.some((section) => section.id === value);
}
