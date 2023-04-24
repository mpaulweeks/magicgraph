import { Interset } from '../util/interset';

export enum CardListStatus {
  Default = 1,
  Pending,
  Rejected,
}

export enum CardType {
  Land = 'Land',
  Creature = 'Creature',
  Artifact = 'Artifact',
  Equipment = 'Equipment',
  Enchantment = 'Enchantment',
  Aura = 'Aura',
  Instant = 'Instant',
  Sorcery = 'Sorcery',
  Planeswalker = 'Planeswalker',
}

export interface Cardlike {
  readonly id: string;
  readonly name: string;
  readonly nick: string;
  readonly types: Interset<string>;
  readonly subtypes: Interset<string>;
  readonly mc: string;
  readonly mv: number;
  readonly category: string;
  readonly tags: Interset<string>;
  readonly notes: string[];
  readonly combos: CardCombo[];
  readonly pending: boolean;
  readonly rejected: boolean;
}

export interface CardCombo {
  edgeType: string;
  match: (other: Cardlike) => boolean;
}

export interface Matcher {
  relationship: string;
  isMatch(a: Cardlike, b: Cardlike): boolean;
}

export interface CardDraft {
  status?: CardListStatus;
  name: string;
  nick?: string;
  types: string[];
  subtypes?: string[];
  mc?: string;
  category: string;
  tags?: string[];
  notes?: string[];
  combos?: CardCombo[];
}

export interface CardEdge {
  relationship: string;
  related: Cardlike[];
}

export type DeckData = {
  name: string;
  url?: string;
  cardDrafts: CardDraft[];
  matchers: Matcher[];
};
