import { Matcher } from "../../types";
import { BrokkosEdge as BE, BrokkosTag as BT } from "./brokkosTypes";

export const BrokkosMatchers: Matcher[] = [{
  relationship: BE.Fuels,
  isMatch: (a,b) =>
    a.tags.has(BT.IsBigBoy) &&
    b.tags.has(BT.WantsBigBoy),
}, {
  relationship: BE.GrantsAbilities,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesDeathtouch) &&
    b.tags.has(BT.WantsDeathtouch),
}, {
  relationship: BE.GrantsAbilities,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesLifelink) &&
    b.tags.has(BT.WantsLifelink),
}, {
  relationship: BE.GrantsAbilities,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesTrample) &&
    b.tags.has(BT.WantsTrample),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesDeathtouch) &&
    b.tags.has(BT.HasTrample),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesTrample) &&
    b.tags.has(BT.HasDeathtouch),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesPower) &&
    b.tags.has(BT.WantsPower),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesToughness) &&
    b.tags.has(BT.WantsToughness),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesPlusCounters) &&
    b.tags.has(BT.WantsPlusCounters),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesPlusCounters) &&
    b.tags.has(BT.GivesMinusCounters),
}, {
  relationship: BE.GrantsAbilities,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesRegeneration) &&
    b.tags.has(BT.WantsRegeneration),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.IsSacrificeOutlet) &&
    b.tags.has(BT.WantsSacrificeOutlet),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.Entombs) &&
    b.tags.has(BT.WantsToBeInGraveyard),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.SetsPT) &&
    b.tags.has(BT.HasPlusCounters),
}];
