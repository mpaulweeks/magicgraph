import { CardDraft, CardListStatus, CardType } from "../../types";
import { ReanimatesCombo } from "./roccoMatcher";
import { RocEdge, RocTag } from "./roccoTypes";

export const NonCreatures: Omit<CardDraft, 'category'>[] = [{
  name: `Sword of the Animist`,
  mc: '2',
  types: [CardType.Artifact],
  subtypes: [CardType.Equipment],
  tags: [RocTag.WantsEvasion],
}, {
  name: `Sword of Feast and Famine`,
  mc: '2',
  types: [CardType.Artifact],
  subtypes: [CardType.Equipment],
  tags: [RocTag.WantsEvasion],
}, {
  name: `Solitary Confinement`,
  mc: '2W',
  types: [CardType.Enchantment],
  tags: [RocTag.NeedsDiscard],
}, {
  name: `Aura Shards`,
  mc: '1WG',
  types: [CardType.Enchantment],
  tags: [RocTag.WantsETBs],
}, {
  name: `Call for Unity`,
  mc: '3WW',
  types: [CardType.Enchantment],
  tags: [RocTag.WantsLTBs],
}, {
  status: CardListStatus.Pending,
  name: `Confusion in the Ranks`,
  mc: '3RR',
  types: [CardType.Enchantment],
  combos: [{
    relationship: RocEdge.CombosWith,
    isMatch: other => other.tags.has(RocTag.BlinksSelf),
  }],
}, {
  name: `Abiding Grace`,
  mc: '2W',
  types: [CardType.Enchantment],
  combos: [ReanimatesCombo(other =>
    other.types.has(CardType.Creature) &&
    other.mv === 1,
  )],
}];
