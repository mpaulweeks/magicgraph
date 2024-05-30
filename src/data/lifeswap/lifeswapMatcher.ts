import { CardType as CT, Matcher } from '../../types';
import { LifeswapEdge as LE, LifeswapTag as LT } from './lifeswapTypes';

// ordering matters, only looks for first match
export const LifeswapMatchers: Matcher[] = [
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) => a.tags.any(LT.SwapsLife) && b.tags.any(LT.PayAnyLife),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) => a.tags.any(LT.SwapsLife) && b.tags.any(LT.DrainsLife),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) => a.tags.any(LT.ResetsLife) && b.tags.any(LT.PayAnyLife),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.ReanimatesCreatures) &&
      b.types.any(CT.Creature) &&
      b.tags.any(LT.SacrificeSelf),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.RemovesCounters, LT.Proliferates) && b.types.any(CT.Saga),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.RemovesCounters) && b.tags.any(LT.WantsRemoveCounters),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.Persist) && b.tags.any(LT.AddsPlusCounters),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.Undying) && b.tags.any(LT.AddsMinusCounters),
  },
];
