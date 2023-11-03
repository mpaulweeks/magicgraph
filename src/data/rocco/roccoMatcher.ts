import { CardCombo, CardType, Cardlike, Matcher } from "../../types";
import { RocEdge, RocTag } from "./roccoTypes";

export function ReanimatesCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: RocEdge.Reanimates,
    isMatch: cb,
  }
}

export const RocMatchers: Matcher[] = [{
  relationship: RocEdge.Equipment,
  isMatch: (a,b) =>
    a.types.has(CardType.Creature) &&
    a.tags.has(RocTag.Unblockable) &&
    b.subtypes.has(CardType.Equipment) &&
    b.tags.has(RocTag.WantsEvasion),
}, {
  relationship: RocEdge.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RocTag.NeedsDiscard) &&
    b.tags.has(RocTag.FuelsDiscard),
}, {
  relationship: RocEdge.CombosWith,
  isMatch: (a,b) =>
    (a.tags.has(RocTag.WantsETBs) || a.tags.has(RocTag.WantsLTBs)) &&
    (b.tags.has(RocTag.BlinksSelf) || b.tags.has(RocTag.BouncesSelf)),
}];
