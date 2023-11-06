export enum LarryCategory {
  Disk = 'Disk',
  Recursion = 'Recursion',
  Bouncer = 'Bouncer',
  Protection = 'Protection',
  Draw = 'Draw',
  Ramp = 'Ramp',
  Other = 'Other',
}

export const CategoryColorMap = {
  [LarryCategory.Disk]: 'salmon',
  [LarryCategory.Recursion]: 'lightgreen',
  [LarryCategory.Bouncer]: 'lightblue',
  [LarryCategory.Protection]: 'khaki',
  [LarryCategory.Draw]: 'lightgrey',
  [LarryCategory.Ramp]: 'lightgrey',
  [LarryCategory.Other]: 'lightgrey',
};

export enum LarryTag {
  Bounces = 'Bounces',
  WantsBounce = 'Wants Bounce',

  HasPhasing = 'Has Phasing',
  HasIndestructible = 'Has Indestructible',
  HasFalseDeath = 'Has FalseDeath',

  GivesPhasing = 'Gives Phasing',
  GivesIndestructible = 'Gives Indestructible',
  GivesFalseDeath = 'Gives FalseDeath',

  WantsCountersRemovedInstant = 'Wants Counters Removed Instant',
  WantsCountersRemoved = 'Wants Counters Removed',
  RemovesCountersSorcery = 'Removes Counters Sorcery',
  RemovesCountersInstant = 'Removes Counters Instant',
  BouncesWizards = 'Bounces Wizards',

  ReanimatesArtifacts = 'Reanimates Artifacts',
  ReanimatesEnchantments = 'Reanimates Enchantments',
  ReanimatesCreatures = 'Reanimates Creatures',
  ReanimatesNonland2orLess = 'Reanimates Nonland 2orLess',
  ReanimatesNonland4orLess = 'Reanimates Nonland 4orLess',
  Reanimates3orLess = 'Reanimates 3orLess',

  DestroysArtifactEnchantment = 'Destroys Artifacts and Enchantments',
  DestroysOnlyArtifactEnchantment = 'Destroys Only Artifacts and Enchantments',
  DestroysNonArtifacts = 'Does Not Destroy Artifacts',
  DestroysNonCreatures = 'Does Not Destroy Creatures',
}

export enum LarryEdge {
  CombosWith = 'Combos With',
  TwoCardCombo = '2-Card Combo!',

  SurvivesWith = 'Survives with',
  LoopsETBWith = 'Loops ETB with',
  Reanimates = 'Reanimates',
  BounceLoops = 'Bounce Loops',

  Protects = 'Protects',
  LoopsETB = 'Loops ETB',
  ReanimatedBy = 'Reanimated By',
  BounceLoopedBy = 'Bounce Looped By',
}
export const LarryInverseEdge = {
  [LarryEdge.SurvivesWith]: LarryEdge.Protects,
  [LarryEdge.LoopsETBWith]: LarryEdge.LoopsETB,
  [LarryEdge.Reanimates]: LarryEdge.ReanimatedBy,
  [LarryEdge.BounceLoops]: LarryEdge.BounceLoopedBy,

  [LarryEdge.Protects]: LarryEdge.SurvivesWith,
  [LarryEdge.LoopsETB]: LarryEdge.LoopsETBWith,
  [LarryEdge.ReanimatedBy]: LarryEdge.Reanimates,
  [LarryEdge.BounceLoopedBy]: LarryEdge.BounceLoops,
};

export const OrderedEdges: string[] = [
  LarryEdge.TwoCardCombo,

  LarryEdge.CombosWith,

  LarryEdge.BounceLoops,
  LarryEdge.BounceLoopedBy,

  LarryEdge.SurvivesWith,
  LarryEdge.Protects,

  LarryEdge.LoopsETBWith,
  LarryEdge.LoopsETB,

  LarryEdge.Reanimates,
  LarryEdge.ReanimatedBy,
];
