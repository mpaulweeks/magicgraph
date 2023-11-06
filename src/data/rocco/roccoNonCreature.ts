import { CardDraft, CardType as CT } from "../../types";
import { ReanimatesCombo } from "./roccoMatcher";
import { RoccoEdge as RE, RoccoEdge, RoccoTag as RT } from "./roccoTypes";

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
  tags: [RT.WantsCreatureETBs],
}, {
  name: `Call for Unity`,
  mc: '3WW',
  types: [CT.Enchantment],
  tags: [RT.WantsLTBs],
}, {
  name: `Confusion in the Ranks`,
  mc: '3RR',
  types: [CT.Enchantment],
  tags: [RT.WantsTokens],
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
  tags: [RT.WantsNonTokenETBs],
},
{
  name: `Bow of Nylea`,
  mc: '4',
  types: [CT.Artifact, CT.Enchantment, CT.Legendary],
  tags: [RT.GivesDeathtouchWhileAttacking, RT.GivesPlusCounters],
},
{
  name: `Sword of Kaldra`,
  mc: '4',
  types: [CT.Artifact, CT.Equipment],
  tags: [RT.GivesDeathtouchAlways, RT.GivesPower],
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
  tags: [RT.GivesDeathtouchAlways, RT.GivesLifelink],
},
{
  name: `Maskwood Nexus`,
  mc: '4',
  types: [CT.Artifact],
  tags: [
    RT.GivesConspiracy,
    RT.MakesTokens,
    RT.MakesElfTokens,
    RT.MakesSmallTokens,
  ],
},
{
  name: `Okina, Temple to the Grandfathers`,
  types: [CT.Land, CT.Legendary],
  combos: [{
    relationship: RoccoEdge.Buffs,
    isMatch: other =>
      other.types.all(CT.Legendary, CT.Creature) &&
      other.tags.has(RT.WantsPower),
  }],
},
{
  name: `Eiganjo Castle`,
  types: [CT.Land, CT.Legendary],
},
{
  name: `Shinka, the Bloodsoaked Keep`,
  types: [CT.Land, CT.Legendary],
  combos: [{
    relationship: RoccoEdge.Buffs,
    isMatch: other =>
      other.types.all(CT.Legendary, CT.Creature) &&
      other.tags.has(RT.AttackTrigger),
  }],
},
{
  name: `Sokenzan, Crucible of Defiance`,
  types: [CT.Land, CT.Legendary],
  tags: [RT.MakesTokens, RT.MakesSmallTokens],
},
{
  name: `Minas Tirith`,
  types: [CT.Land, CT.Legendary],
  tags: [RT.WantsGoWide],
},
];
