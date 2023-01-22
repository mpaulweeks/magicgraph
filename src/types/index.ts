import { Interset } from "../util/set";

export enum CardType {
  Land = 'Land',
  Creature = 'Creature',
  Artifact = 'Artifact',
  Enchantment = 'Enchantment',
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
  readonly combos: {
    edgeType: string;
    match: (other: Cardlike) => boolean;
  }[];
}

export interface CardDraft {
  name: string;
  mc: string;
  types: string[];
  tags?: string[];
  combos?: {
    edgeType: string;
    match: (other: Cardlike) => boolean;
  }[];
}

export interface CardEdges {
  category: string;
  related: Cardlike[];
}
