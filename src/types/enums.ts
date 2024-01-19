export enum CardListStatus {
  Current = 1,
  ChoppingBlock,
  Pending,
  Rejected,
}

export enum CardType {
  Land = 'Land',
  Creature = 'Creature',
  Artifact = 'Artifact',
  Equipment = 'Equipment',
  Enchantment = 'Enchantment',
  Saga = 'Saga',
  Aura = 'Aura',
  Instant = 'Instant',
  Sorcery = 'Sorcery',
  Planeswalker = 'Planeswalker',
  Battle = 'Battle',
  Legendary = 'Legendary',
  Snow = 'Snow',
}

export const Colors = ['W', 'B', 'U', 'R', 'G'] as const;
export type Color = typeof Colors[number];
