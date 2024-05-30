import { Matcher } from '../../types';
import { BrokkosEdge as BE, BrokkosTag as BT } from './brokkosTypes';

export const BrokkosMatchers: Matcher[] = [
  {
    relationship: BE.Fuels,
    isMatch: (a, b) => a.tags.any(BT.IsBigBoy) && b.tags.any(BT.WantsBigBoy),
  },
  {
    relationship: BE.GrantsAbilities,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesDeathtouch) && b.tags.any(BT.WantsDeathtouch),
  },
  {
    relationship: BE.GrantsAbilities,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesLifelink) && b.tags.any(BT.WantsLifelink),
  },
  {
    relationship: BE.GrantsAbilities,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesTrample) && b.tags.any(BT.WantsTrample),
  },
  {
    relationship: BE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesDeathtouch) && b.tags.any(BT.HasTrample),
  },
  {
    relationship: BE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesTrample) && b.tags.any(BT.HasDeathtouch),
  },
  {
    relationship: BE.Buffs,
    isMatch: (a, b) => a.tags.any(BT.GivesPower) && b.tags.any(BT.WantsPower),
  },
  {
    relationship: BE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesToughness) && b.tags.any(BT.WantsToughness),
  },
  {
    relationship: BE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesPlusCounters) && b.tags.any(BT.WantsPlusCounters),
  },
  {
    relationship: BE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesPlusCounters) && b.tags.any(BT.GivesMinusCounters),
  },
  {
    relationship: BE.GrantsAbilities,
    isMatch: (a, b) =>
      a.tags.any(BT.GivesRegeneration) && b.tags.any(BT.WantsRegeneration),
  },
  {
    relationship: BE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(BT.IsSacrificeOutlet) && b.tags.any(BT.WantsSacrificeOutlet),
  },
  {
    relationship: BE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(BT.Entombs) && b.tags.any(BT.WantsToBeInGraveyard),
  },
  {
    relationship: BE.CombosWith,
    isMatch: (a, b) => a.tags.any(BT.SetsPT) && b.tags.any(BT.HasPlusCounters),
  },
];
