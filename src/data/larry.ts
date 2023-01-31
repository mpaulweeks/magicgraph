import { CardDraft, CardType, Matcher } from "../types";

export enum LarryCategory {
  Disk = 'Disk',
  Recursion = 'Recursion',
  Protection = 'Protection',
  Other = 'Other',
}

enum LarryTag {
  Bounces = 'Bounces',
  IsBouncable = 'Is Bouncable',

  HasPhasing = 'Has Phasing',
  HasIndestructible = 'Has Indestructible',
  HasFalseDeath = 'Has FalseDeath',

  GivesPhasing = 'Gives Phasing',
  GivesIndestructible = 'Gives Indestructible',
  GivesFalseDeath = 'Gives FalseDeath',

  RemovesCounters = 'Removes Counters',
  BouncesWizards = 'Bounces Wizards',

  ReanimatesArtifacts = 'Reanimates Artifacts',
  ReanimatesEnchantments = 'Reanimates Enchantments',
  ReanimatesCreatures = 'Reanimates Creatures',
  Reanimates2orLess = 'Reanimates 2orLess',
  Reanimates3orLess = 'Reanimates 3orLess',

  DestroysArtifactEnchantment = 'Destroys Artifacts and Enchantments',
  DestroysOnlyArtifactEnchantment = 'Destroys Only Artifacts and Enchantments',
  DestroysNonArtifacts = 'Does Not Destroy Artifacts',
}

enum LarryEdge {
  TwoCardCombo = '2-Card Combo!',

  TopDeckedBy = 'Topdecked by',
  SurvivesWith = 'Survives with',
  LoopsETBWith = 'Loops ETB with',
  ReanimatesDisk = 'Reanimates Disk',
  BounceLoops = 'Bounce Loops',

  TopDecks = 'Topdecks',
  Protects = 'Protects',
  LoopsETB = 'Loops ETB',
  ReanimatedBy = 'Reanimated By',
  BounceLoopedBy = 'Bounce Looped By',
}
export function LarryInverseEdge(edge: string) {
  return {
    [LarryEdge.TwoCardCombo]: LarryEdge.TwoCardCombo,

    [LarryEdge.TopDeckedBy]: LarryEdge.TopDecks,
    [LarryEdge.SurvivesWith]: LarryEdge.Protects,
    [LarryEdge.LoopsETBWith]: LarryEdge.LoopsETB,
    [LarryEdge.ReanimatesDisk]: LarryEdge.ReanimatedBy,
    [LarryEdge.BounceLoops]: LarryEdge.BounceLoopedBy,

    [LarryEdge.TopDecks]: LarryEdge.TopDeckedBy,
    [LarryEdge.Protects]: LarryEdge.SurvivesWith,
    [LarryEdge.LoopsETB]: LarryEdge.LoopsETBWith,
    [LarryEdge.ReanimatedBy]: LarryEdge.ReanimatesDisk,
    [LarryEdge.BounceLoopedBy]: LarryEdge.BounceLoops,
  }[edge] ?? 'Unknown Edge';
}
export const OrderedEdges: string[] = [
  LarryEdge.TwoCardCombo,

  LarryEdge.BounceLoops,
  LarryEdge.BounceLoopedBy,

  LarryEdge.SurvivesWith,
  LarryEdge.Protects,

  LarryEdge.LoopsETBWith,
  LarryEdge.LoopsETB,

  LarryEdge.ReanimatesDisk,
  LarryEdge.ReanimatedBy,

  LarryEdge.TopDeckedBy,
  LarryEdge.TopDecks,
];

export const LarryDraft: CardDraft[] = [
// Disks
{
  name: `Magus of the Disk`,
  types: [CardType.Creature, 'Wizard'],
  mc: '2WW',
  category: LarryCategory.Disk,
  notes: [`ETBs tapped`, `Bounce/phase in response to the activation`],
  tags: [LarryTag.IsBouncable, LarryTag.DestroysArtifactEnchantment],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
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
  notes: [`ETBs tapped`],
  tags: [LarryTag.IsBouncable, LarryTag.DestroysArtifactEnchantment],
}, {
  name: `Planar Collapse`,
  types: [CardType.Enchantment],
  mc: '2',
  category: LarryCategory.Disk,
  notes: [`Triggers on upkeep`, `Only hits creatures`],
  tags: [LarryTag.IsBouncable],
}, {
  name: `Serenity`,
  types: [CardType.Enchantment],
  mc: '2',
  category: LarryCategory.Disk,
  notes: [`Triggers on upkeep`, `Doesn't hit creatures`],
  tags: [LarryTag.IsBouncable, LarryTag.DestroysArtifactEnchantment, LarryTag.DestroysOnlyArtifactEnchantment],
}, {
  name: `Phyrexian Scriptures`,
  types: [CardType.Enchantment],
  mc: '4',
  category: LarryCategory.Disk,
  notes: [`Only hits non-artifact creatures`],
  tags: [LarryTag.IsBouncable],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.tags.intersects(LarryTag.RemovesCounters),
  }],
}, {
  name: `The Phasing of Zhalfir`,
  types: [CardType.Enchantment],
  mc: '4',
  category: LarryCategory.Disk,
  notes: [`Only hits creatures`],
  tags: [LarryTag.IsBouncable],
}, {
  name: `Scourglass`,
  types: [CardType.Artifact],
  mc: '3WW',
  category: LarryCategory.Disk,
  notes: [`Triggers on upkeep`, `Only hits non-land, non-artifact`],
  tags: [LarryTag.DestroysNonArtifacts],
},

// Bounce
{
  name: `Capsize`,
  types: [CardType.Instant],
  mc: '4UU',
  category: LarryCategory.Recursion,
  tags: [LarryTag.Bounces],
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
  pending: true,
  name: `Emeria Shepherd`,
  types: [CardType.Creature],
  mc: '5WW',
  category: LarryCategory.Recursion,
  notes: [`Activates via Landfall (Loop Bounceland)`],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && !c.types.intersects(CardType.Land) && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.ReanimatesDisk,
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
  notes: [`Activates via tapping`],
  tags: [LarryTag.ReanimatesArtifacts, LarryTag.ReanimatesEnchantments],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Artifact, CardType.Enchantment) && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Ironsoul Enforcer`,
  types: [CardType.Creature, CardType.Artifact],
  mc: '4W',
  category: LarryCategory.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LarryTag.ReanimatesArtifacts],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Artifact) && c.tags.intersects(LarryTag.DestroysNonArtifacts),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Lurrus of the Dream-Den`,
  types: [CardType.Creature],
  mc: '1WW',
  category: LarryCategory.Recursion,
  notes: [`Activates once per turn`],
  tags: [LarryTag.Reanimates2orLess],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.mv <= 2 && !c.types.intersects(CardType.Land) && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Silent Sentinel`,
  types: [CardType.Creature],
  mc: '5WW',
  category: LarryCategory.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LarryTag.ReanimatesEnchantments],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Enchantment) && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Sun Titan`,
  types: [CardType.Creature],
  mc: '4WW',
  category: LarryCategory.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LarryTag.Reanimates3orLess],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.mv <= 3 && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  name: `Treasury Thrull`,
  types: [CardType.Creature],
  mc: '4WB',
  category: LarryCategory.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LarryTag.ReanimatesArtifacts, LarryTag.ReanimatesEnchantments, LarryTag.ReanimatesCreatures],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Creature, CardType.Artifact, CardType.Enchantment) && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
}, {
  pending: true,
  name: `Twilight Shepherd`,
  types: [CardType.Creature],
  mc: '4WW',
  category: LarryCategory.Recursion,
  notes: ['Activates by ETB'],
  combos: [{
    edgeType: LarryEdge.LoopsETBWith,
    match: c => c.tags.intersects(LarryTag.RemovesCounters) || c.tags.intersects(LarryTag.GivesFalseDeath),
  }, {
    edgeType: LarryEdge.ReanimatesDisk,
    match: c => c.category === LarryCategory.Disk && c.category === LarryCategory.Disk,
  }],
}, {
  pending: true,
  name: `Norika Yamazaki, the Poet`,
  types: [CardType.Creature],
  mc: '2W',
  category: LarryCategory.Recursion,
  tags: [LarryTag.ReanimatesEnchantments],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Enchantment) && c.tags.intersects(LarryTag.DestroysOnlyArtifactEnchantment),
  }, {
    edgeType: LarryEdge.SurvivesWith,
    match: c => c.tags.intersects(LarryTag.GivesFalseDeath, LarryTag.GivesIndestructible, LarryTag.GivesPhasing),
  }],
},

// Other
{
  name: `Nesting Grounds`,
  types: [CardType.Land],
  category: LarryCategory.Other,
  tags: [LarryTag.RemovesCounters],
  notes: [`Sorcery speed limits combos`],
}, {
  name: `Hall of Heliod's Generosity`,
  types: [CardType.Land],
  category: LarryCategory.Recursion,
  notes: [`Requires card draw to not softlock self`],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Enchantment),
  }, {
    edgeType: LarryEdge.TopDecks,
    match: c => c.category !== LarryCategory.Disk && c.types.intersects(CardType.Enchantment),
  }],
},
{
  name: `Academy Ruins`,
  types: [CardType.Land],
  category: LarryCategory.Recursion,
  notes: [`Requires card draw to not softlock self`],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Artifact),
  }, {
    edgeType: LarryEdge.TopDecks,
    match: c => c.category !== LarryCategory.Disk && c.types.intersects(CardType.Artifact),
  }],
}, {
  name: `Riptide Laboratory`,
  types: [CardType.Land],
  category: LarryCategory.Other,
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.types.intersects('Wizard') && c.name === 'Magus of the Disk',
  }],
}, {
  pending: true,
  name: `Enchanted Evening`,
  types: [CardType.Enchantment],
  mc: '3WU',
  category: LarryCategory.Other,
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.tags.intersects(LarryTag.DestroysArtifactEnchantment),
  }],
}, {
  pending: true,
  name: `Mycosynth Lattice`,
  types: [CardType.Artifact],
  mc: '6',
  category: LarryCategory.Other,
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.tags.intersects(LarryTag.DestroysArtifactEnchantment),
  }],
},

// Speculative
{
  pending: true,
  name: `Volrath's Stronghold`,
  types: [CardType.Land],
  category: LarryCategory.Recursion,
  notes: [`Requires card draw to not softlock self`],
  combos: [{
    edgeType: LarryEdge.TwoCardCombo,
    match: c => c.category === LarryCategory.Disk && c.types.intersects(CardType.Creature),
  }, {
    edgeType: LarryEdge.TopDecks,
    match: c => c.category !== LarryCategory.Disk && c.types.intersects(CardType.Creature),
  }],
},

];


export const LarryMatchers: Matcher[] = [{
  relationship: LarryEdge.TwoCardCombo,
  isMatch: (a, b) => a.types.intersects(CardType.Instant) && a.tags.intersects(LarryTag.Bounces) && b.tags.intersects(LarryTag.IsBouncable),
}, {
  relationship: LarryEdge.BounceLoops,
  isMatch: (a, b) => a.tags.intersects(LarryTag.Bounces) && b.tags.intersects(LarryTag.IsBouncable),
}, {
  relationship: LarryEdge.ReanimatesDisk,
  isMatch: (a, b) =>
    a.category === LarryCategory.Recursion &&
    b.category === LarryCategory.Disk && (
      (a.tags.intersects(LarryTag.ReanimatesArtifacts) && b.types.intersects(CardType.Artifact)) ||
      (a.tags.intersects(LarryTag.ReanimatesEnchantments) && b.types.intersects(CardType.Enchantment)) ||
      (a.tags.intersects(LarryTag.ReanimatesCreatures) && b.types.intersects(CardType.Creature)) ||
      (a.tags.intersects(LarryTag.Reanimates2orLess) && b.mv <= 2 && !b.types.intersects(CardType.Land)) ||
      (a.tags.intersects(LarryTag.Reanimates3orLess) && b.mv <= 3)
    ),
}];
