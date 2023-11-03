export enum RocCat {
  Creature = 'Creature',
  NonCreature = 'Non Creature',
}
export const CategoryColorMap = {
  [RocCat.Creature]: 'lightgreen',
  [RocCat.NonCreature]: 'lightblue',
};

export enum RocTag {
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

export enum RocEdge {
  CombosWith = 'Combos With',

  Equipment = 'Equipment',
  AttachesTo = 'Attaches To',

  Reanimates = 'Reanimates',
  ReanimatedBy = 'Reanimated By',
}
export const RocInverseEdge = {
  [RocEdge.Equipment]: RocEdge.AttachesTo,
  [RocEdge.AttachesTo]: RocEdge.Equipment,

  [RocEdge.Reanimates]: RocEdge.ReanimatedBy,
  [RocEdge.ReanimatedBy]: RocEdge.Reanimates,
};
export const RocEdges: string[] = [
  // dont care
];
