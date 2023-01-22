export enum CardType {
  Land = 'Land',
  Creature = 'Creature',
  Artifact = 'Artifact',
  Enchantment = 'Enchantment',
  Instant = 'Instant',
  Sorcery = 'Sorcery',
  Planeswalker = 'Planeswalker',
}

export interface Card {
  name: string;
  mv: number;
  types: string[];
  tags: string[];
  combos: {
    tags: string[];
    match: (other: Card) => boolean;
  }[];
}
