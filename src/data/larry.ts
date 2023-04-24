import {
  CardDraft,
  Cardlike,
  CardListStatus,
  CardType,
  DeckData,
  Matcher,
} from '../types';

export enum LarryCategory {
  Disk = 'Disk',
  Recursion = 'Recursion',
  Bouncer = 'Bouncer',
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
  DestroysNonCreatures = 'Does Not Destroy Creatures',
}

enum LarryEdge {
  TwoCardCombo = '2-Card Combo!',

  SurvivesWith = 'Survives with',
  LoopsETBWith = 'Loops ETB with',
  Reanimates = 'Reanimates',
  BounceLoops = 'Bounce Loops',

  Protects = 'Protects',
  LoopsETB = 'Loops ETB',
  ReanimatedBy = 'Reanimated By',
  BounceLoopedBy = 'Bounce Looped By',
}
export const LarryInverseEdge = (edge: string) =>
  ({
    [LarryEdge.TwoCardCombo]: LarryEdge.TwoCardCombo,

    [LarryEdge.SurvivesWith]: LarryEdge.Protects,
    [LarryEdge.LoopsETBWith]: LarryEdge.LoopsETB,
    [LarryEdge.Reanimates]: LarryEdge.ReanimatedBy,
    [LarryEdge.BounceLoops]: LarryEdge.BounceLoopedBy,

    [LarryEdge.Protects]: LarryEdge.SurvivesWith,
    [LarryEdge.LoopsETB]: LarryEdge.LoopsETBWith,
    [LarryEdge.ReanimatedBy]: LarryEdge.Reanimates,
    [LarryEdge.BounceLoopedBy]: LarryEdge.BounceLoops,
  }[edge]);

export const OrderedEdges: string[] = [
  LarryEdge.TwoCardCombo,

  LarryEdge.BounceLoops,
  LarryEdge.BounceLoopedBy,

  LarryEdge.SurvivesWith,
  LarryEdge.Protects,

  LarryEdge.LoopsETBWith,
  LarryEdge.LoopsETB,

  LarryEdge.Reanimates,
  LarryEdge.ReanimatedBy,
];

const LarryDraft: CardDraft[] = [
  // Disks
  {
    name: `Boompile`,
    types: [CardType.Artifact],
    mc: '4',
    category: LarryCategory.Disk,
    tags: [LarryTag.IsBouncable],
  },
  {
    name: `Coercive Portal`,
    types: [CardType.Artifact],
    mc: '4',
    category: LarryCategory.Disk,
    tags: [LarryTag.IsBouncable],
  },
  {
    name: `Magus of the Disk`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    mc: '2WW',
    category: LarryCategory.Disk,
    notes: [`ETBs tapped`, `Bounce/phase in response to the activation`],
    tags: [LarryTag.IsBouncable, LarryTag.DestroysArtifactEnchantment],
  },
  {
    name: `Nevinyrral's Disk`,
    types: [CardType.Artifact],
    mc: '4',
    category: LarryCategory.Disk,
    notes: [`ETBs tapped`],
    tags: [LarryTag.IsBouncable, LarryTag.DestroysArtifactEnchantment],
  },
  {
    name: `Oblivion Stone`,
    types: [CardType.Artifact],
    mc: '3',
    category: LarryCategory.Disk,
  },
  {
    name: `Phyrexian Scriptures`,
    types: [CardType.Enchantment],
    mc: '4',
    category: LarryCategory.Disk,
    notes: [`Only hits non-artifact creatures`],
    tags: [
      LarryTag.IsBouncable,
      LarryTag.DestroysNonArtifacts,
      LarryTag.DestroysNonCreatures,
    ],
    combos: [
      {
        edgeType: LarryEdge.TwoCardCombo,
        match: c => c.tags.has(LarryTag.RemovesCounters),
      },
    ],
  },
  {
    name: `Planar Collapse`,
    types: [CardType.Enchantment],
    mc: '2',
    category: LarryCategory.Disk,
    notes: [`Triggers on upkeep`, `Only hits creatures`],
    tags: [LarryTag.IsBouncable],
  },
  {
    name: `Scourglass`,
    types: [CardType.Artifact],
    mc: '3WW',
    category: LarryCategory.Disk,
    notes: [`Triggers on upkeep`, `Only hits non-land, non-artifact`],
    tags: [LarryTag.DestroysNonArtifacts],
  },
  {
    name: `Serenity`,
    types: [CardType.Enchantment],
    mc: '2',
    category: LarryCategory.Disk,
    notes: [`Triggers on upkeep`, `Doesn't hit creatures`],
    tags: [
      LarryTag.IsBouncable,
      LarryTag.DestroysArtifactEnchantment,
      LarryTag.DestroysOnlyArtifactEnchantment,
    ],
  },
  {
    name: `The Phasing of Zhalfir`,
    types: [CardType.Enchantment],
    mc: '4',
    category: LarryCategory.Disk,
    notes: [`Only hits creatures`],
    tags: [LarryTag.IsBouncable],
  },

  // Bounce
  {
    status: CardListStatus.Pending,
    name: `Capsize`,
    types: [CardType.Instant],
    mc: '4UU',
    category: LarryCategory.Bouncer,
    tags: [LarryTag.Bounces],
  },
  {
    name: `Heidar, Rimewind Master`,
    types: [CardType.Creature],
    mc: '4U',
    category: LarryCategory.Bouncer,
    tags: [LarryTag.Bounces],
  },
  {
    name: `Vedalken Mastermind`,
    types: [CardType.Creature],
    mc: 'UU',
    category: LarryCategory.Bouncer,
    tags: [LarryTag.Bounces],
  },

  // Protection
  {
    name: `Darksteel Plate`,
    types: [CardType.Artifact, CardType.Equipment],
    mc: '3',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
  },
  {
    name: `Kaldra Compleat`,
    types: [CardType.Artifact, CardType.Equipment],
    mc: '7',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
  },
  {
    status: CardListStatus.Pending,
    name: `Shield of Kaldra`,
    types: [CardType.Artifact, CardType.Equipment],
    mc: '4',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasIndestructible, LarryTag.GivesIndestructible],
  },
  {
    name: `Robe of Stars`,
    types: [CardType.Artifact, CardType.Equipment],
    mc: '2',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasPhasing, LarryTag.GivesPhasing],
  },
  {
    name: `Vanishing`,
    types: [CardType.Enchantment, CardType.Aura],
    mc: '2',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasPhasing, LarryTag.GivesPhasing],
  },
  {
    name: `Athreos, Shroud-Veiled`,
    types: [CardType.Creature, CardType.Enchantment],
    mc: '6',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasIndestructible, LarryTag.GivesFalseDeath],
  },
  {
    name: `Gift of Immortality`,
    types: [CardType.Enchantment, CardType.Aura],
    mc: '3',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasFalseDeath, LarryTag.GivesFalseDeath],
  },
  {
    name: `Fool's Demise`,
    types: [CardType.Enchantment, CardType.Aura],
    mc: '5',
    category: LarryCategory.Protection,
    tags: [LarryTag.HasFalseDeath, LarryTag.GivesFalseDeath],
  },

  // Recursion
  {
    status: CardListStatus.Pending,
    name: `Emeria Shepherd`,
    types: [CardType.Creature],
    mc: '5WW',
    category: LarryCategory.Recursion,
    notes: [`Activates via Landfall (Loop Bounceland)`],
    tags: [
      LarryTag.ReanimatesArtifacts,
      LarryTag.ReanimatesEnchantments,
      LarryTag.ReanimatesCreatures,
    ],
  },
  {
    name: `Emry, Lurker of the Loch`,
    types: [CardType.Creature],
    mc: '2U',
    category: LarryCategory.Recursion,
    notes: [`Activates via tapping`],
    tags: [LarryTag.ReanimatesArtifacts],
  },
  {
    name: `Hanna, Ship's Navigator`,
    types: [CardType.Creature],
    mc: '1WU',
    category: LarryCategory.Recursion,
    notes: [`Activates via tapping`],
    tags: [LarryTag.ReanimatesArtifacts, LarryTag.ReanimatesEnchantments],
  },
  {
    name: `Ironsoul Enforcer`,
    types: [CardType.Creature, CardType.Artifact],
    mc: '4W',
    category: LarryCategory.Recursion,
    notes: [`Acivates via attacking`],
    tags: [LarryTag.ReanimatesArtifacts],
  },
  {
    name: `Lurrus of the Dream-Den`,
    types: [CardType.Creature],
    mc: '1WW',
    category: LarryCategory.Recursion,
    notes: [`Activates once per turn`],
    tags: [LarryTag.Reanimates2orLess],
  },
  {
    name: `Silent Sentinel`,
    types: [CardType.Creature],
    mc: '5WW',
    category: LarryCategory.Recursion,
    notes: [`Acivates via attacking`],
    tags: [LarryTag.ReanimatesEnchantments],
  },
  {
    name: `Sun Titan`,
    types: [CardType.Creature],
    mc: '4WW',
    category: LarryCategory.Recursion,
    notes: [`Acivates via attacking`],
    tags: [LarryTag.Reanimates3orLess],
  },
  {
    name: `Treasury Thrull`,
    types: [CardType.Creature],
    mc: '4WB',
    category: LarryCategory.Recursion,
    notes: [`Acivates via attacking`],
    tags: [
      LarryTag.ReanimatesArtifacts,
      LarryTag.ReanimatesEnchantments,
      LarryTag.ReanimatesCreatures,
    ],
  },
  {
    status: CardListStatus.Pending,
    name: `Twilight Shepherd`,
    types: [CardType.Creature],
    mc: '4WW',
    category: LarryCategory.Recursion,
    notes: ['Activates by ETB'],
    tags: [
      LarryTag.ReanimatesArtifacts,
      LarryTag.ReanimatesEnchantments,
      LarryTag.ReanimatesCreatures,
    ],
    combos: [
      {
        edgeType: LarryEdge.LoopsETBWith,
        match: c =>
          c.tags.has(LarryTag.RemovesCounters) ||
          c.tags.has(LarryTag.GivesFalseDeath),
      },
    ],
  },
  {
    status: CardListStatus.Pending,
    name: `Norika Yamazaki, the Poet`,
    types: [CardType.Creature],
    mc: '2W',
    category: LarryCategory.Recursion,
    tags: [LarryTag.ReanimatesEnchantments],
  },

  // Other
  {
    name: `Nesting Grounds`,
    types: [CardType.Land],
    category: LarryCategory.Other,
    tags: [LarryTag.RemovesCounters],
    notes: [`Sorcery speed limits combos`],
  },
  {
    name: `Hall of Heliod's Generosity`,
    types: [CardType.Land],
    category: LarryCategory.Recursion,
    notes: [`Requires card draw to not softlock self`],
    tags: [LarryTag.ReanimatesEnchantments],
  },
  {
    name: `Academy Ruins`,
    types: [CardType.Land],
    category: LarryCategory.Recursion,
    notes: [`Requires card draw to not softlock self`],
    tags: [LarryTag.ReanimatesArtifacts],
  },
  {
    name: `Riptide Laboratory`,
    types: [CardType.Land],
    category: LarryCategory.Bouncer,
    tags: [LarryTag.BouncesWizards],
  },
  {
    status: CardListStatus.Pending,
    name: `Enchanted Evening`,
    types: [CardType.Enchantment],
    mc: '3WU',
    category: LarryCategory.Other,
    combos: [
      {
        edgeType: LarryEdge.TwoCardCombo,
        match: c => c.tags.has(LarryTag.DestroysArtifactEnchantment),
      },
    ],
  },
  {
    status: CardListStatus.Pending,
    name: `Mycosynth Lattice`,
    types: [CardType.Artifact],
    mc: '6',
    category: LarryCategory.Other,
    combos: [
      {
        edgeType: LarryEdge.TwoCardCombo,
        match: c => c.tags.has(LarryTag.DestroysArtifactEnchantment),
      },
    ],
  },

  // Speculative
  {
    status: CardListStatus.Pending,
    name: `Volrath's Stronghold`,
    types: [CardType.Land],
    category: LarryCategory.Recursion,
    notes: [`Requires card draw to not softlock self`],
    tags: [LarryTag.ReanimatesCreatures],
  },
];

// matcher helpers
const bounceLoop = (a: Cardlike, b: Cardlike) =>
  (a.tags.has(LarryTag.Bounces) && b.tags.has(LarryTag.IsBouncable)) ||
  (a.tags.has(LarryTag.BouncesWizards) &&
    b.tags.has(LarryTag.IsBouncable) &&
    b.subtypes.has('Wizard'));
const matchRecursion = (a: Cardlike, b: Cardlike) =>
  (a.tags.has(LarryTag.ReanimatesArtifacts) &&
    b.types.has(CardType.Artifact)) ||
  (a.tags.has(LarryTag.ReanimatesEnchantments) &&
    b.types.has(CardType.Enchantment)) ||
  (a.tags.has(LarryTag.ReanimatesCreatures) &&
    b.types.has(CardType.Creature)) ||
  (a.tags.has(LarryTag.Reanimates2orLess) &&
    b.mv <= 2 &&
    !b.types.has(CardType.Land)) ||
  (a.tags.has(LarryTag.Reanimates3orLess) && b.mv <= 3);
const survivesDisk = (a: Cardlike, b: Cardlike) =>
  a.types.equals(CardType.Land) ||
  a.types.equals(CardType.Instant) ||
  (a.types.has(CardType.Artifact) &&
    b.tags.has(LarryTag.DestroysNonArtifacts)) ||
  (a.types.has(CardType.Creature) &&
    b.tags.has(LarryTag.DestroysNonCreatures)) ||
  (!a.types.has(CardType.Artifact, CardType.Enchantment) &&
    b.tags.has(LarryTag.DestroysOnlyArtifactEnchantment));
const protects = (a: Cardlike, b: Cardlike) =>
  a.tags.has(
    LarryTag.GivesFalseDeath,
    LarryTag.GivesIndestructible,
    LarryTag.GivesPhasing,
  ) && b.types.has(CardType.Creature);

// ordering matters, only looks for first match
const LarryMatchers: Matcher[] = [
  {
    relationship: LarryEdge.TwoCardCombo,
    isMatch: (a, b) => protects(a, b) && b.category === LarryCategory.Disk,
  },
  {
    relationship: LarryEdge.TwoCardCombo,
    isMatch: (a, b) =>
      bounceLoop(a, b) &&
      a.category === LarryCategory.Bouncer &&
      b.category === LarryCategory.Disk &&
      survivesDisk(a, b),
  },
  {
    relationship: LarryEdge.TwoCardCombo,
    isMatch: (a, b) =>
      matchRecursion(a, b) &&
      a.category === LarryCategory.Recursion &&
      b.category === LarryCategory.Disk &&
      survivesDisk(a, b),
  },
  {
    relationship: LarryEdge.Protects,
    isMatch: (a, b) => protects(a, b),
  },
  {
    relationship: LarryEdge.BounceLoops,
    isMatch: (a, b) => bounceLoop(a, b),
  },
  {
    relationship: LarryEdge.Reanimates,
    isMatch: (a, b) => matchRecursion(a, b),
  },
];

export const LarryData: DeckData = {
  name: 'Larry Loops',
  url: 'https://tappedout.net/mtg-decks/tutorless-larry/',
  cardDrafts: LarryDraft,
  matchers: LarryMatchers,
};
