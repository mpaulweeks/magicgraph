import { Matcher } from "../../types";
import { BrokkosEdge as BE, BrokkosTag as BT } from "./brokkosTypes";

export const BrokkosMatchers: Matcher[] = [{
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(
      BT.IsBigBoy,
      BT.GivesPower,
      BT.GivesPlusCounters,
      BT.Mutates,
    ) &&
    b.tags.has(BT.WantsBigBoy),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesDeathtouch) &&
    b.tags.has(BT.WantsDeathtouch),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesLifelink) &&
    b.tags.has(BT.WantsLifelink),
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
    b.tags.has(BT.WantsPlusCounters, BT.WantsPower, BT.WantsToughness),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesPlusCounters) &&
    b.tags.has(BT.GivesMinusCounters),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.GivesRegeneration) &&
    b.tags.has(BT.WantsRegeneration),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.IsSacrificeOutlet) &&
    b.tags.has(BT.WantsSacrificeOutlet, BT.WantsToBeInGraveyard),
}, {
  relationship: BE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(BT.Entombs) &&
    b.tags.has(BT.WantsToBeInGraveyard),
}, {
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.Mutates) &&
    !b.subtypes.has('Human') &&
    b.tags.has(BT.WantsPower, BT.WantsToughness),
}];
