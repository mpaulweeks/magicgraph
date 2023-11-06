export enum RoccoCategory {
  Creature = 'Creature',
  NonCreature = 'Non Creature',
}
export const RoccoCategoryColorMap = {
  [RoccoCategory.Creature]: 'lightgreen',
  [RoccoCategory.NonCreature]: 'lightblue',
};

export enum RoccoTag {
  BlinksSelf = 'BlinksSelf',
  BouncesSelf = 'BouncesSelf',
  BouncesElf = 'BouncesElf',
  BouncesCreature = 'BouncesCreature',
  WantsBounce = 'WantsBounce',

  HasETB = 'HasETB',
  WantsCreatureETBs = 'WantsCreatureETBs',
  WantsNonTokenETBs = 'WantsNonTokenETBs',
  WantsLTBs = 'WantsLTBs',

  Unblockable = 'Unblockable',
  WantsEvasion = 'WantsEvasion',

  SelfSacrifice = 'SelfSacrfice',

  NeedsDiscard = 'NeedsDiscard',
  FuelsDiscard = 'FuelsDiscard',

  HasKeywords = 'HasKeywords',
  MakesTokens = 'MakesTokens',
  MakesElfTokens = 'MakesElfTokens',
  MakesSmallTokens = 'MakesSmallTokens',

  GivesMassTribal = 'GivesMassTribal',
  GivesConspiracy = 'GivesConspiracy',
  GivesHaste = 'GivesHaste',
  GivesDeathtouchWhileAttacking = 'GivesDeathtouchWhileAttacking',
  GivesDeathtouchWhileTapped = 'GivesDeathtouchWhileTapped',
  GivesDeathtouchAlways = 'GivesDeathtouchAlways',
  GivesLifelink = 'GivesLifelink',
  GivesIndestructible = 'GivesIndestructible',
  GivesPlusCounters = 'GivesPlusCounters',
  GivesPower = 'GivesPower',

  WantsMassTribal = 'WantsMassTribal',
  WantsConspiracy = 'WantsConspiracy',
  WantsHaste = 'WantsHaste',
  WantsDeathtouchWhileAttacking = 'WantsDeathtouchWhileAttacking',
  WantsDeathtouchWhileTapped = 'WantsDeathtouchWhileTapped',
  WantsDeathtouchAlways = 'WantsDeathtouchAlways',
  WantsDeathtouchFlexible = 'WantsDeathtouchFlexible',
  WantsLifelink = 'WantsLifelink',
  WantsIndestructible = 'WantsIndestructible',
  WantsPlusCounters = 'WantsPlusCounters',
  WantsPower = 'WantsPower',
  WantsTokens = 'WantsTokens',
  WantsGoWide = 'WantsGoWide',

  HasTapAbility = 'HasTapAbility',
  UntapsCreature = 'UntapsCreature',
  TutorsEquipment = 'TutorsEquipment',
  TutorsLegends = 'TutorsLegends',
  AttackTrigger = 'AttackTrigger',
}

export enum RoccoEdge {
  CombosWith = 'Combos With',
  Buffs = 'Buffs',
  Tutors = 'Tutors',

  Equipment = 'Equipment',
  AttachesTo = 'Attaches To',

  Reanimates = 'Reanimates',
  ReanimatedBy = 'Reanimated By',
}
export const RocInverseEdge = {
  [RoccoEdge.Equipment]: RoccoEdge.AttachesTo,
  [RoccoEdge.AttachesTo]: RoccoEdge.Equipment,

  [RoccoEdge.Reanimates]: RoccoEdge.ReanimatedBy,
  [RoccoEdge.ReanimatedBy]: RoccoEdge.Reanimates,
};
export const RocEdges: string[] = [
  // dont care
];
