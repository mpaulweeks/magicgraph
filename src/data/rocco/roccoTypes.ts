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
  BlinksOther = 'BlinksOther',
  BouncesSelf = 'BouncesSelf',
  BouncesElf = 'BouncesElf',
  BouncesCreature = 'BouncesCreature',
  WantsBounce = 'WantsBounce',

  HasETB = 'HasETB',
  WantsCreatureETBs = 'WantsCreatureETBs',
  WantsCreatureCast = 'WantsCreatureCast',
  WantsNonTokenETBs = 'WantsNonTokenETBs',
  WantsLTBs = 'WantsLTBs',

  GivesEvasion = 'GivesEvasion',
  WantsEvasion = 'WantsEvasion',

  SelfSacrifice = 'SelfSacrfice',

  NeedsDiscard = 'NeedsDiscard',
  FuelsDiscard = 'FuelsDiscard',

  HasKeywords = 'HasKeywords',
  MakesTokens = 'MakesTokens',
  MakesElfTokens = 'MakesElfTokens',
  MakesSmallTokens = 'MakesSmallTokens',
  BuffsElves = 'BuffsElves',

  HasDeathtouch = 'HasDeathtouch',
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
  GivesLure = 'GivesLure',

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
  WantsLure = 'WantsLure',

  LifegainTrigger = 'LifegainTrigger',
  GainsLife = 'GainsLife',

  HasTapAbility = 'HasTapAbility',
  UntapsCreature = 'UntapsCreature',
  UntapsLand = 'UntapsLand',
  NeedsFewerLands = 'NeedsFewerLands',
  TutorsEquipment = 'TutorsEquipment',
  TutorsLand = 'TutorsLand',
  TutorsLegends = 'TutorsLegends',
  AttackTrigger = 'AttackTrigger',
  VulnerableAttacker = 'VulnerableAttacker',
  Exerts = 'Exerts',
  HatesColor = 'HatesColor',
  ChangesColor = 'ChangesColor',
}

export enum RoccoEdge {
  CombosWith = 'Combos With',
  Untap = 'Untap',
  Haste = 'Haste',
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
