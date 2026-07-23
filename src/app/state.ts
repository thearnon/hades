import { SECTIONS } from '../data/navigation';
import type { AppState, SectionId } from '../types/content';

const requestedSection = window.location.hash.slice(1);
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
