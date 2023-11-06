import {
  CardDraft,
  CardListStatus,
  CardType
} from '../../types';
import { LarryCategory, LarryEdge, LarryTag } from './larryTypes';

export const LarryDraft: CardDraft[] = [
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
        relationship: LarryEdge.TwoCardCombo,
        isMatch: c => c.tags.has(LarryTag.RemovesCounters),
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
        relationship: LarryEdge.LoopsETBWith,
        isMatch: c =>
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
        relationship: LarryEdge.TwoCardCombo,
        isMatch: c => c.tags.has(LarryTag.DestroysArtifactEnchantment),
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
        relationship: LarryEdge.TwoCardCombo,
        isMatch: c => c.tags.has(LarryTag.DestroysArtifactEnchantment),
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
