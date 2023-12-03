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

  HasDeathtouch = 'HasDeathtouch',
  GivesDeathtouch = 'GivesDeathtouch',
  WantsDeathtouch = 'WantsDeathtouch',

  Entombs = 'Entombs',
  WantsToBeInGraveyard = 'WantsToBeInGraveyard',

  GivesLifelink = 'GivesLifelink',
  WantsLifelink = 'WantsLifelink',

  HasTrample = 'HasTrample',
  GivesTrample = 'GivesTrample',
  WantsTrample = 'WantsTrample',

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
  [BrokkosTag.GivesDeathtouch]: [
    BrokkosTag.HasDeathtouch,
  ],
  [BrokkosTag.GivesTrample]: [
    BrokkosTag.HasTrample,
  ],
  [BrokkosTag.GivesPower]: [
    BrokkosTag.IsBigBoy,
  ],
  [BrokkosTag.Mutates]: [
    BrokkosTag.GivesPower,
    BrokkosTag.GivesToughness,
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
  GrantsAbilities = 'Grants Abilities',
  GetsAbilities = 'Abilities From',
  Fuels = 'Fuels',
  FueledBy = 'Fueled By',
}
export const BrokkosInverseEdge = {
  [BrokkosEdge.Buffs]: BrokkosEdge.BuffedBy,
  [BrokkosEdge.Fuels]: BrokkosEdge.FueledBy,
  [BrokkosEdge.GrantsAbilities]: BrokkosEdge.GetsAbilities,
};
export const BrokkosEdges: string[] = [
  // dont care
];
