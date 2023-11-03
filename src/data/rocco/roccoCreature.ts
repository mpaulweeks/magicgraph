import { CardDraft, CardType } from "../../types";
import { ReanimatesCombo } from "./roccoMatcher";
import { RocEdge, RocTag } from "./roccoTypes";

export const Creatures: Omit<CardDraft, 'types' | 'category'>[] = [{
  name: `Norin the Wary`,
  mc: 'R',
  tags: [RocTag.BlinksSelf],
}, {
  name: `Saltskitter`,
  mc: '3W',
  tags: [RocTag.BlinksSelf],
}, {
  name: `Ardenn, Intrepid Archaeologist`,
  mc: '2W',
  combos: [{
    relationship: RocEdge.CombosWith,
    isMatch: other =>
      other.subtypes.has(CardType.Aura) ||
      other.subtypes.has(CardType.Equipment),
  }],
}, {
  name: `Soltari Foot Soldier`,
  mc: 'W',
  tags: [RocTag.Unblockable],
}, {
  name: `Spore Frog`,
  mc: 'G',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Kami of False Hope`,
  mc: 'W',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Selfless Spirit`,
  mc: '1W',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Saffi Eriksdotter`,
  mc: 'WG',
  tags: [RocTag.SelfSacrifice],
}, {
  name: `Whitemane Lion`,
  mc: '1W',
  tags: [RocTag.BouncesSelf],
}, {
  name: `Stonecloaker`,
  mc: '2W',
  tags: [RocTag.BouncesSelf],
}, {
  name: `Squee, Goblin Nabob`,
  mc: '2R',
  tags: [RocTag.FuelsDiscard],
}, {
  name: `Guardian Scalelord`,
  mc: '4W',
  combos: [ReanimatesCombo(other =>
    !other.types.has(CardType.Land) &&
    other.mv <= 3,
  )],
}, {
  name: `Sun Titan`,
  mc: '4WW',
  combos: [ReanimatesCombo(other =>
    other.mv <= 3,
  )],
}];
