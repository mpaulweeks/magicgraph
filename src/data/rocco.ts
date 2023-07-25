import {
  CardCombo,
  CardDraft,
  CardListStatus,
  CardType,
  Cardlike,
  DeckData,
  Matcher,
} from '../types';

enum RocCat {
  Creature = 'Creature',
  NonCreature = 'Non Creature',
}
const CategoryColorMap = {
  [RocCat.Creature]: 'lightgreen',
  [RocCat.NonCreature]: 'lightblue',
};

enum RocTag {
  BlinksSelf = 'BlinksSelf',
  BouncesSelf = 'BounceSelf',
  WantsETBs = 'WantsETBs',
  WantsLTBs = 'WantsLTBs',

  Unblockable = 'Unblockable',
  WantsEvasion = 'WantsEvasion',

  SelfSacrifice = 'SelfSacrfice',

  NeedsDiscard = 'NeedsDiscard',
  FuelsDiscard = 'FuelsDiscard',
}

enum RocEdge {
  CombosWith = 'Combos With',

  Equipment = 'Equipment',
  AttachesTo = 'Attaches To',

  Reanimates = 'Reanimates',
  ReanimatedBy = 'Reanimated By',
}
const RocInverseEdge = {
  [RocEdge.CombosWith]: RocEdge.CombosWith,

  [RocEdge.Equipment]: RocEdge.AttachesTo,
  [RocEdge.AttachesTo]: RocEdge.Equipment,

  [RocEdge.Reanimates]: RocEdge.ReanimatedBy,
  [RocEdge.ReanimatedBy]: RocEdge.Reanimates,
};
const RocEdges: string[] = [
  // dont care
];

function ReanimatesCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: RocEdge.Reanimates,
    isMatch: cb,
  }
}

const Creatures: Omit<CardDraft, 'types' | 'category'>[] = [{
  status: CardListStatus.Pending,
  name: `Norin the Wary`,
  mc: 'R',
  tags: [RocTag.BlinksSelf],
}, {
  name: `Saltskitter`,
  mc: '3W',
  tags: [RocTag.BlinksSelf],
}, {
  name: `Ardenn, Intrepid Archaeologist`,
  mc: '2W',
  combos: [{
    relationship: RocEdge.CombosWith,
    isMatch: other =>
      other.subtypes.has(CardType.Aura) ||
      other.subtypes.has(CardType.Equipment),
  }],
}, {
  name: `Soltari Foot Soldier`,
  mc: 'W',
  tags: [RocTag.Unblockable],
}, {
  name: `Spore Frog`,
  mc: 'G',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Kami of False Hope`,
  mc: 'W',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Selfless Spirit`,
  mc: '1W',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Saffi Eriksdotter`,
  mc: 'WG',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Whitemane Lion`,
  mc: '1W',
  tags: [RocTag.BouncesSelf],
}, {
  name: `Stonecloaker`,
  mc: '2W',
  tags: [RocTag.BouncesSelf],
}, {
  name: `Squee, Goblin Nabob`,
  mc: '2R',
  tags: [RocTag.FuelsDiscard],
}, {
  name: `Guardian Scalelord`,
  mc: '4W',
  combos: [ReanimatesCombo(other =>
    !other.types.has(CardType.Land) &&
    other.mv <= 3,
  )],
}, {
  name: `Sun Titan`,
  mc: '4WW',
  combos: [ReanimatesCombo(other =>
    other.mv <= 3,
  )],
}];

const NonCreatures: Omit<CardDraft, 'category'>[] = [{
  name: `Sword of the Animist`,
  mc: '2',
  types: [CardType.Artifact],
  subtypes: [CardType.Equipment],
  tags: [RocTag.WantsEvasion],
}, {
  name: `Sword of Feast and Famine`,
  mc: '2',
  types: [CardType.Artifact],
  subtypes: [CardType.Equipment],
  tags: [RocTag.WantsEvasion],
}, {
  name: `Solitary Confinement`,
  mc: '2W',
  types: [CardType.Enchantment],
  tags: [RocTag.NeedsDiscard],
}, {
  name: `Aura Shards`,
  mc: '1WG',
  types: [CardType.Enchantment],
  tags: [RocTag.WantsETBs],
}, {
  name: `Call for Unity`,
  mc: '3WW',
  types: [CardType.Enchantment],
  tags: [RocTag.WantsLTBs],
}, {
  status: CardListStatus.Pending,
  name: `Confusion in the Ranks`,
  mc: '3RR',
  types: [CardType.Enchantment],
  combos: [{
    relationship: RocEdge.CombosWith,
    isMatch: other => other.tags.has(RocTag.BlinksSelf),
  }],
}, {
  name: `Abiding Grace`,
  mc: '2W',
  types: [CardType.Enchantment],
  combos: [ReanimatesCombo(other =>
    other.types.has(CardType.Creature) &&
    other.mv === 1,
  )],
}];

const RocMatchers: Matcher[] = [{
  relationship: RocEdge.Equipment,
  isMatch: (a,b) =>
    a.types.has(CardType.Creature) &&
    a.tags.has(RocTag.Unblockable) &&
    b.subtypes.has(CardType.Equipment) &&
    b.tags.has(RocTag.WantsEvasion),
}, {
  relationship: RocEdge.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RocTag.NeedsDiscard) &&
    b.tags.has(RocTag.FuelsDiscard),
}, {
  relationship: RocEdge.CombosWith,
  isMatch: (a,b) =>
    (a.tags.has(RocTag.WantsETBs) || a.tags.has(RocTag.WantsLTBs)) &&
    (b.tags.has(RocTag.BlinksSelf) || b.tags.has(RocTag.BouncesSelf)),
}];

export const RoccoData: DeckData = {
  name: 'Rocco.dec',
  url: 'https://tappedout.net/mtg-decks/heartless-rocco/',
  cardDrafts: [
    ...Creatures.map(c => ({
      ...c,
      types: [CardType.Creature],
      category: RocCat.Creature,
      emphasize: true,
    })),
    ...NonCreatures.map(nc => ({
      ...nc,
      category: RocCat.NonCreature,
    }))
  ],
  matchers: RocMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: RocInverseEdge,
  relationshipOrder: RocEdges,
};
