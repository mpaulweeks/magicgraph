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
  readonly id: string;
  readonly name: string;
  readonly types: Interset<string>;
  readonly mc: string;
  readonly mv: number;
  readonly category: string;
  readonly tags: Interset<string>;
  readonly notes: string[];
  readonly combos: CardCombo[];
  readonly pending: boolean;
}

export interface CardCombo {
  edgeType: string;
  match: (other: Cardlike) => boolean;
}

export interface CardDraft {
  name: string;
  types: string[];
  mc?: string;
  category: string;
  tags?: string[];
  notes?: string[];
  combos?: CardCombo[];
  pending?: boolean;
}

export interface CardEdge {
  relationship: string;
  related: Cardlike[];
}
