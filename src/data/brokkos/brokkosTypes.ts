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
  [BrokkosCategory.Buff]: 'mauve',
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

  GivesDeathtouch = 'GivesDeathtouch',
  WantsDeathtouch = 'WantsDeathtouch',

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

export enum BrokkosEdge {
  CombosWith = 'Combos With',
  Buffs = 'Buffs',
}
export const BrokkosInverseEdge = {
};
export const BrokkosEdges: string[] = [
  // dont care
];
