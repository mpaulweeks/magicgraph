import { CardDraft, Cardlike, CardType } from "../types";

enum LarryTag {
  Disk = 'Disk',
  Recursion = 'Recursion',

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
  tags: [LarryTag.Disk],
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
  tags: [LarryTag.Disk],
}, {
  name: `Nevinyrral's Disk`,
  types: [CardType.Artifact],
  mc: '4',
  tags: [LarryTag.Disk],
}, {
  name: `Planar Collapse`,
  types: [CardType.Enchantment],
  mc: '2',
  tags: [LarryTag.Disk],
}, {
  name: `Serenity`,
  types: [CardType.Enchantment],
  mc: '2',
  tags: [LarryTag.Disk],
}, {
  name: `Phyrexian Scriptures`,
  types: [CardType.Enchantment],
  mc: '4',
  tags: [LarryTag.Disk],
  combos: [{
    edgeType: LarryEdge.LoopsWith,
    match: c => c.tags.intersects(LarryTag.RemovesCounters),
  }]
}, {
  name: `The Phasing of Zhalfir`,
  types: [CardType.Enchantment],
  mc: '4',
  tags: [LarryTag.Disk],
},

// Recursion
{
  name: `Emeria Shepherd`,
  types: [CardType.Creature],
  mc: '5WW',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => !c.types.intersects(CardType.Land),
  }],
}, {
  name: `Hanna, Ship's Navigator`,
  types: [CardType.Creature],
  mc: '1WU',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Artifact, CardType.Enchantment),
  }],
}, {
  name: `Ironsoul Enforcer`,
  types: [CardType.Creature],
  mc: '4W',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Artifact, CardType.Enchantment),
  }],
}, {
  name: `Lurrus of the Dream-Den`,
  types: [CardType.Creature],
  mc: '1WW',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.mv <= 2 && !c.types.intersects(CardType.Land),
  }],
}, {
  name: `Silent Sentinel`,
  types: [CardType.Creature],
  mc: '5WW',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Enchantment),
  }],
}, {
  name: `Sun Titan`,
  types: [CardType.Creature],
  mc: '4WW',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.mv <= 3,
  }],
}, {
  name: `Treasury Thrull`,
  types: [CardType.Creature],
  mc: '4WB',
  tags: [LarryTag.Recursion],
  combos: [{
    edgeType: LarryEdge.Reanimates,
    match: c => c.types.intersects(CardType.Creature, CardType.Artifact, CardType.Enchantment),
  }],
}, {
  name: `Twilight Shepherd`,
  types: [CardType.Creature],
  mc: '4WW',
  tags: [LarryTag.Recursion],
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
  tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
}, {
  name: `Kaldra Compleat`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '7',
  tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
}, {
  name: `Shield of Kaldra`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '4',
  tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
}, {
  name: `Robe of Stars`,
  types: [CardType.Artifact, CardType.Equipment],
  mc: '2',
  tags: [LarryTag.HasPhasing, LarryTag.GivesPhasing],
}, {
  name: `Vanishing`,
  types: [CardType.Enchantment, CardType.Aura],
  mc: '2',
  tags: [LarryTag.HasPhasing, LarryTag.GivesPhasing],
}, {
  name: `Athreos, Shroud-Veiled`,
  types: [CardType.Creature, CardType.Enchantment],
  mc: '6',
  tags: [LarryTag.HasIndestructible, LarryTag.GivesFalseDeath],
}, {
  name: `Gift of Immortality`,
  types: [CardType.Enchantment, CardType.Aura],
  mc: '3',
  tags: [LarryTag.HasFalseDeath, LarryTag.GivesFalseDeath],
}, {
  name: `Fool's Demise`,
  types: [CardType.Enchantment, CardType.Aura],
  mc: '5',
  tags: [LarryTag.HasFalseDeath, LarryTag.GivesFalseDeath],
}];
