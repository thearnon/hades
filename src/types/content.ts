export type SectionId =
  | 'overview'
  | 'core'
  | 'mindset'
  | 'beginner'
  | 'chars'
  | 'relations'
  | 'weapons'
  | 'boons'
  | 'biomes'
  | 'upgrades'
  | 'keepsakes';

export type RelationshipMode = 'overview' | 'kinship';

export interface Character {
  id: string;
  name: string;
  thai: string;
  latin: string;
  faction: string;
  groups: string[];
  role: string;
  detail: string;
  relationships: string;
  encounter: string;
  unlock: string;
}

export interface AppState {
  section: SectionId;
  weapon: string;
  god: string;
  showLatin: boolean;
  characterFilter: string;
  expandedCharacter: string | null;
  expandAllCharacters: boolean;
  relationshipMode: RelationshipMode;
  relationshipFilter: string;
  relationshipFocus: string;
  beginnerScenario: string;
  beginnerChecklist: string[];
}
