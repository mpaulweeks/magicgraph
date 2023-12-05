import { CardType as CT, Matcher } from "../../types";
import { LifeswapEdge as LE, LifeswapTag as LT } from "./lifeswapTypes";

// ordering matters, only looks for first match
export const LifeswapMatchers: Matcher[] = [{
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.SwapsLife) &&
    b.tags.has(LT.PayAnyLife),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.SwapsLife) &&
    b.tags.has(LT.DrainsLife),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.ResetsLife) &&
    b.tags.has(LT.PayAnyLife),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.ReanimatesCreatures) &&
    b.types.has(CT.Creature) &&
    b.tags.has(LT.SacrificeSelf),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.RemovesCounters, LT.Proliferates) &&
    b.types.has(CT.Saga),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.RemovesCounters) &&
    b.tags.has(LT.WantsRemoveCounters),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.Persist) &&
    b.tags.has(LT.AddsPlusCounters),
}, {
  relationship: LE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(LT.Undying) &&
    b.tags.has(LT.AddsMinusCounters),
}];
