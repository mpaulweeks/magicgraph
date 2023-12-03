import { TagLinks } from "../../types";

export enum BrokkosCategory {
  Threat = 'Threat',
  Buff = 'Buff',
  Interaction = 'Interaction',
  Ramp = 'Ramp',
  Draw = 'Draw',
  Recursion = 'Recursion',
  Other = 'Other',
}
export const BrokkosCategoryColorMap = {
  [BrokkosCategory.Threat]: 'salmon',
  [BrokkosCategory.Buff]: 'pink',
  [BrokkosCategory.Interaction]: 'orange',
  [BrokkosCategory.Ramp]: 'lightgreen',
  [BrokkosCategory.Draw]: 'lightblue',
  [BrokkosCategory.Recursion]: 'grey',
  [BrokkosCategory.Other]: 'white',
};

export enum BrokkosTag {
  IsBigBoy = 'IsBigBoy',
  WantsBigBoy = 'WantsBigBoy',

  Mutates = 'Mutates',
  SetsPT = 'SetsPT',

  GivesDeathtouch = 'GivesDeathtouch',
  WantsDeathtouch = 'WantsDeathtouch',

  Entombs = 'Entombs',
  WantsToBeInGraveyard = 'WantsToBeInGraveyard',

  GivesLifelink = 'GivesLifelink',
  WantsLifelink = 'WantsLifelink',

  HasPlusCounters = 'HasPlusCounters',
  GivesPlusCounters = 'GivesPlusCounters',
  WantsPlusCounters = 'WantsPlusCounters',

  GivesMinusCounters = 'GivesMinusCounters',

  GivesPower = 'GivesPower',
  WantsPower = 'WantsPower',

  GivesRegeneration = 'GivesRegeneration',
  WantsRegeneration = 'WantsRegeneration',

  GivesToughness = 'GivesToughness',
  WantsToughness = 'WantsToughness',

  IsSacrificeOutlet = 'IsSacrificeOutlet',
  WantsSacrificeOutlet = 'WantsSacrificeOutlet',
}

export const BrokkosTagLinks: TagLinks = {
  [BrokkosTag.GivesPower]: [
    BrokkosTag.IsBigBoy,
  ],
  [BrokkosTag.GivesPlusCounters]: [
    BrokkosTag.GivesPower,
    BrokkosTag.GivesToughness,
  ],
  [BrokkosTag.WantsToBeInGraveyard]: [
    BrokkosTag.WantsSacrificeOutlet,
  ],
};

export enum BrokkosEdge {
  CombosWith = 'Combos With',
  Buffs = 'Buffs',
  BuffedBy = 'Buffed By',
  Fuels = 'Fuels',
  FueledBy = 'Fueled By',
}
export const BrokkosInverseEdge = {
  [BrokkosEdge.Buffs]: BrokkosEdge.BuffedBy,
  [BrokkosEdge.Fuels]: BrokkosEdge.FueledBy,
};
export const BrokkosEdges: string[] = [
  // dont care
];
