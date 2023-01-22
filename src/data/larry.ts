import { CardDraft, CardType } from "../types";

export enum LarryCategory {
  Disk = 'Disk',
  Recursion = 'Recursion',
  Protection = 'Protection',
  Other = 'Other',
}

enum LarryTag {
  LoopsWithBounceLand = 'Loops w/ BounceLand',
  LoopsWithAttacking = 'Loops w/ Attacking',
  LoopsWithTapping = 'Loops w/ Tapping',

  HasPhasing = 'Has Phasing',
  HasIndestructible = 'Has Indestructible',
  HasFalseDeath = 'Has FalseDeath',

  GivesPhasing = 'Gives Phasing',
  GivesIndestructible = 'Gives Indestructible',
  GivesFalseDeath = 'Gives FalseDeath',
  RemovesCounters = 'Removes Counters',
}

enum LarryEdge {
  SurvivesWith = 'Survives With',
  LoopsWith = 'Loops With',
  Reanimates = 'Reanimates',

  Protects = 'Protects',
  Loops = 'Loops',
  ReanimatedBy = 'Reanimated By',
}
export function LarryInverseEdge(edge: string) {
  return {
    [LarryEdge.SurvivesWith]: LarryEdge.Protects,
    [LarryEdge.LoopsWith]: LarryEdge.Loops,
    [LarryEdge.Reanimates]: LarryEdge.ReanimatedBy,

    [LarryEdge.Protects]: LarryEdge.SurvivesWith,
    [LarryEdge.Loops]: LarryEdge.LoopsWith,
    [LarryEdge.ReanimatedBy]: LarryEdge.Reanimates,
  }[edge] ?? 'Unknown Edge';
}

export const LarryDraft: CardDraft[] = [
// Other
{
  name: `Nesting Grounds`,
  types: [CardType.Land],
  category: LarryCategory.Other,
  tags: [LarryTag.RemovesCounters],
},

// Disks
{
  name: `Magus of the Disk`,
  types: [CardType.Creature],
  mc: '2WW',
  category: LarryCategory.Disk,
  combos: [{
    edgeType: LarryEdge.LoopsWith,
    match: c => c.tags.intersects(
      LarryTag.GivesPhasing,
      LarryTag.GivesIndestructible,
      LarryTag.GivesFalseDeath,
    ),
  }],
}, {
  name: `Oblivion Stone`,
  types: [CardType.Artifact],
  mc: '3',
  category: LarryCategory.Disk,
}, {
  name: `Nevinyrral's Disk`,
  types: [CardType.Artifact],
  mc: '4',
  category: LarryCategory.Disk,
}, {
  name: `Planar Collapse`,
  types: [CardType.Enchantment],
  mc: '2',
  category: LarryCategory.Disk,
}, {
  name: `Serenity`,
  types: [CardType.Enchantment],
  mc: '2',
  category: LarryCategory.Disk,
}, {
  name: `Phyrexian Scriptures`,
  types: [CardType.Enchantment],
  mc: '4',
  category: LarryCategory.Disk,
  combos: [{
    edgeType: LarryEdge.LoopsWith,
    match: c => c.tags.intersects(LarryTag.RemovesCounters),
  }]
}, {
  name: `The Phasing of Zhalfir`,
  types: [CardType.Enchantment],
  mc: '4',
  category: LarryCategory.Disk,
},

// Protection
{
  name: `Darksteel Plate`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '3',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
}, {
  name: `Kaldra Compleat`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '7',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
}, {
  name: `Shield of Kaldra`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '4',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
}, {
  name: `Robe of Stars`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '2',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasPhasing, LarryTag.GivesPhasing],
}, {
  name: `Vanishing`,
  types: [CardType.Enchantment, CardType.Aura],
  mc: '2',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasPhasing, LarryTag.GivesPhasing],
}, {
  name: `Athreos, Shroud-Veiled`,
  types: [CardType.Creature, CardType.Enchantment],
  mc: '6',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasIndestructible, LarryTag.GivesFalseDeath],
}, {
  name: `Gift of Immortality`,
  types: [CardType.Enchantment, CardType.Aura],
  mc: '3',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasFalseDeath, LarryTag.GivesFalseDeath],
}, {
  name: `Fool's Demise`,
  types: [CardType.Enchantment, CardType.Aura],
  mc: '5',
  category: LarryCategory.Protection,
  tags: [LarryTag.HasFalseDeath, LarryTag.GivesFalseDeath],
},

// Recursion
{
  name: `Emeria Shepherd`,
  types: [CardType.Creature],
  mc: '5WW',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithBounceLand],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && !c.types.intersects(CardType.Land),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Hanna, Ship's Navigator`,
  types: [CardType.Creature],
  mc: '1WU',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithTapping],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Artifact, CardType.Enchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Ironsoul Enforcer`,
  types: [CardType.Creature],
  mc: '4W',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithAttacking],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Artifact, CardType.Enchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Lurrus of the Dream-Den`,
  types: [CardType.Creature],
  mc: '1WW',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithTapping],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.mv <= 2 && !c.types.intersects(CardType.Land),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Silent Sentinel`,
  types: [CardType.Creature],
  mc: '5WW',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithAttacking],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Enchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Sun Titan`,
  types: [CardType.Creature],
  mc: '4WW',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithAttacking],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.mv <= 3,
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Treasury Thrull`,
  types: [CardType.Creature],
  mc: '4WB',
  category: LarryCategory.Recursion,
  tags: [LarryTag.LoopsWithAttacking],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Creature, CardType.Artifact, CardType.Enchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Twilight Shepherd`,
  types: [CardType.Creature],
  mc: '4WW',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.LoopsWith,
    match: c => c.tags.intersects(LarryTag.RemovesCounters) || c.tags.intersects(LarryTag.GivesFalseDeath),
  }, {
    edgeType: LarryEdge.Reanimates,
    match: c => c.category === LarryCategory.Disk && c.category === LarryCategory.Disk,
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
},

];
