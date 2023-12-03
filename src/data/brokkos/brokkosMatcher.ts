import { Matcher } from "../../types";
import { BrokkosEdge as BE, BrokkosTag as BT } from "./brokkosTypes";

export const BrokkosMatchers: Matcher[] = [{
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
  relationship: BE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(BT.Mutates) &&
    !b.subtypes.has('Human') &&
    b.tags.has(BT.WantsPower, BT.WantsToughness),
}];
