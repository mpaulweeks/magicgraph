import { CardDraft, Cardlike, CardType } from "../types";

enum LarryTag {
  Disk = 'Disk',
  Recursion = 'Recursion',
  GivesPhasing = 'GivesPhasing',
  GivesIndestructible = 'GivesIndestructible',
}

enum LarryEdge {
  Survives = 'Survives',
  Reanimates = 'Reanimates',
}

export const LarryDraft: CardDraft[] = [{
  name: 'Magus of the Disk',
  types: [CardType.Creature],
  mc: '2WW',
  tags: [LarryTag.Disk],
  combos: [{
    edgeType: LarryEdge.Survives,
    match: c => c.tags.intersects([LarryTag.GivesPhasing, LarryTag.GivesIndestructible]),
  }],
}, {
  name: 'Sun Titan',
  types: [CardType.Creature],
  mc: '4WW',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.mv <= 3,
  }],
}, {
  name: 'Oblivion Stone',
  types: [CardType.Artifact],
  mc: '3',
  tags: [LarryTag.Disk],
}, {
  name: 'Darksteel Plate',
  types: [CardType.Artifact],
  mc: '3',
  tags: [LarryTag.GivesIndestructible],
}];
