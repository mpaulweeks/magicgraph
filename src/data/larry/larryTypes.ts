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
  SacrificesSelf = 'Sacrifices Self',

  Bounces = 'Bounces',
  WantsBounce = 'Wants Bounce',

  HasPhasing = 'Has Phasing',
  HasIndestructible = 'Has Indestructible',
  HasFalseDeath = 'Has FalseDeath',

  GivesPhasing = 'Gives Phasing',
  GivesIndestructible = 'Gives Indestructible',
  GivesFalseDeath = 'Gives FalseDeath',

  WantsPhasing = 'Wants Phasing',
  WantsIndestructible = 'Wants Indestructible',
  WantsFalseDeath = 'Wants FalseDeath',

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

  DestroysArtifacts = 'Destroys Artifacts',
  DestroysEnchantments = 'Destroys Enchantments',
  DestroysCreatures = 'Destroys Creatures',
  DestroysOtherCreatures = 'Destroys Other Creatures',
  DestroysNonArtifactNonLand = 'Destroys Non Artifacts Non Lands',
  DestroysNonLand = 'Destroys Non Land',
}

export enum LarryEdge {
  TwoCardLock = '2-Card Lock!',
  CombosWith = 'Combos With',

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
  LarryEdge.TwoCardLock,

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
