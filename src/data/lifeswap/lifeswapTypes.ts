import { TagLinks } from "../../types";

export enum LifeswapCategory {
  Threat = 'Threat',
  Removal = 'Removal',
  Draw = 'Draw',
  Mana = 'Mana',
  Other = 'Other',
}

export const CategoryColorMap = {
  [LifeswapCategory.Threat]: 'salmon',
  [LifeswapCategory.Removal]: 'orange',
  [LifeswapCategory.Draw]: 'lightblue',
  [LifeswapCategory.Mana]: 'lightgreen',
  [LifeswapCategory.Other]: 'lightgrey',
};

export enum LifeswapTag {
  Persist = 'Persist',
  Undying = 'Undying',
  AddsMinusCounters = 'AddsMinusCounters',
  AddsPlusCounters = 'AddsPlusCounters',

  RemovesCounters = 'RemovesCounters',
  WantsRemoveCounters = 'WantsRemoveCounters',
  Proliferates = 'Proliferates',

  SacrificeSelf = 'SacrificeSelf',
  ExileSelf = 'ExileSelf',
  ReanimatesCreatures = 'ReanimatesCreatures',

  DrainsLife = 'DrainsLife',
  GainsLife = 'GainsLife',
  SwapsLife = 'SwapsLife',
  ResetsLife = 'ResetsLife',

  PaySomeLife = 'PaySomeLife',
  PayAnyLife = 'PayAnyLife',
}

export const LifeswapTagLinks: TagLinks = {
  [LifeswapTag.PayAnyLife]: [
    LifeswapTag.PaySomeLife,
  ],
  [LifeswapTag.Persist]: [
    LifeswapTag.AddsMinusCounters,
    LifeswapTag.WantsRemoveCounters,
  ],
  [LifeswapTag.Undying]: [
    LifeswapTag.AddsPlusCounters,
    LifeswapTag.WantsRemoveCounters,
  ],
};

export enum LifeswapEdge {
  CombosWith = 'Combos With',
}
export const LifeswapInverseEdge = {
};

export const OrderedEdges: string[] = [
];
