import { CardDraft, CardType as CT } from "../../types";
import { ReanimatesCombo } from "./roccoMatcher";
import { RoccoEdge as RE, RoccoTag as RT } from "./roccoTypes";

export const NonCreatures: Omit<CardDraft, 'category'>[] = [{
  name: `Sword of the Animist`,
  mc: '2',
  types: [CT.Artifact],
  subtypes: [CT.Equipment],
  tags: [RT.WantsEvasion],
}, {
  name: `Sword of Feast and Famine`,
  mc: '2',
  types: [CT.Artifact],
  subtypes: [CT.Equipment],
  tags: [RT.WantsEvasion],
}, {
  name: `Solitary Confinement`,
  mc: '2W',
  types: [CT.Enchantment],
  tags: [RT.NeedsDiscard],
}, {
  name: `Aura Shards`,
  mc: '1WG',
  types: [CT.Enchantment],
  tags: [RT.WantsETBs],
}, {
  name: `Call for Unity`,
  mc: '3WW',
  types: [CT.Enchantment],
  tags: [RT.WantsLTBs],
}, {
  name: `Confusion in the Ranks`,
  mc: '3RR',
  types: [CT.Enchantment],
  combos: [{
    relationship: RE.CombosWith,
    isMatch: other => other.tags.has(RT.BlinksSelf),
  }],
}, {
  name: `Abiding Grace`,
  mc: '2W',
  types: [CT.Enchantment],
  combos: [ReanimatesCombo(other =>
    other.types.has(CT.Creature) &&
    other.mv === 1,
  )],
}, {
  name: `Guardian Project`,
  mc: '3G',
  types: [CT.Enchantment],
  tags: [RT.WantsETBs],
},
{
  name: `Bow of Nylea`,
  mc: '4',
  types: [CT.Artifact, CT.Equipment],
  tags: [RT.GivesDeathtouch, RT.GivesPlusCounters],
},
{
  name: `Sword of Kaldra`,
  mc: '4',
  types: [CT.Artifact, CT.Equipment],
  tags: [RT.GivesDeathtouch, RT.GivesPower],
},
{
  name: `Shield of Kaldra`,
  mc: '4',
  types: [CT.Artifact, CT.Equipment],
  tags: [RT.GivesIndestructible],
},
{
  name: `Helm of Kaldra`,
  mc: '4',
  types: [CT.Artifact, CT.Equipment],
  tags: [RT.GivesHaste],
},
{
  name: `Basilisk Collar`,
  mc: '4',
  types: [CT.Artifact, CT.Equipment],
  tags: [RT.GivesDeathtouch, RT.GivesLifelink],
},
];
