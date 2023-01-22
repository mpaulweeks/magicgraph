import { Interset } from "../util/interset";

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
  readonly name: string;
  readonly mc: string;
  readonly mv: number;
  readonly types: Interset<string>;
  readonly tags: Interset<string>;
  readonly combos: CardCombo[];
  getEdges(allCards: Cardlike[]): CardEdges[];
}

export interface CardCombo {
  edgeType: string;
  match: (other: Cardlike) => boolean;
}

export interface CardDraft {
  name: string;
  types: string[];
  mc?: string;
  tags?: string[];
  combos?: CardCombo[];
}

export interface CardEdges {
  category: string;
  related: Cardlike[];
}

export interface Deck {
  name: string;
  cards: Cardlike[];
}
