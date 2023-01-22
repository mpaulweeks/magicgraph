import { CardDraft, CardType } from "../types";

export enum LarryCategory {
  Disk = 'Disk',
  Recursion = 'Recursion',
  Protection = 'Protection',
}

enum LarryTag {
  HasPhasing = 'HasPhasing',
  HasIndestructible = 'HasIndestructible',
  HasFalseDeath = 'HasFalseDeath',

  GivesPhasing = 'GivesPhasing',
  GivesIndestructible = 'GivesIndestructible',
  GivesFalseDeath = 'GivesFalseDeath',
  RemovesCounters = 'RemovesCounters',
}

enum LarryEdge {
  LoopsWith = 'LoopsWith',
  Reanimates = 'Reanimates',
}

export const LarryDraft: CardDraft[] = [
// Other
{
  name: `Nesting Grounds`,
  types: [CardType.Land],
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

// Recursion
{
  name: `Emeria Shepherd`,
  types: [CardType.Creature],
  mc: '5WW',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => !c.types.intersects(CardType.Land),
  }],
}, {
  name: `Hanna, Ship's Navigator`,
  types: [CardType.Creature],
  mc: '1WU',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Artifact, CardType.Enchantment),
  }],
}, {
  name: `Ironsoul Enforcer`,
  types: [CardType.Creature],
  mc: '4W',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Artifact, CardType.Enchantment),
  }],
}, {
  name: `Lurrus of the Dream-Den`,
  types: [CardType.Creature],
  mc: '1WW',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.mv <= 2 && !c.types.intersects(CardType.Land),
  }],
}, {
  name: `Silent Sentinel`,
  types: [CardType.Creature],
  mc: '5WW',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Enchantment),
  }],
}, {
  name: `Sun Titan`,
  types: [CardType.Creature],
  mc: '4WW',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.mv <= 3,
  }],
}, {
  name: `Treasury Thrull`,
  types: [CardType.Creature],
  mc: '4WB',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Creature, CardType.Artifact, CardType.Enchantment),
  }],
}, {
  name: `Twilight Shepherd`,
  types: [CardType.Creature],
  mc: '4WW',
  category: LarryCategory.Recursion,
  combos: [{
    edgeType: LarryEdge.LoopsWith,
    match: c => c.tags.intersects(LarryTag.RemovesCounters),
  }, {
    edgeType: LarryEdge.Reanimates,
    match: c => true,
  }],
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
}];
