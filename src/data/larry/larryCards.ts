import {
  CardDraft,
  CardType as CT
} from '../../types';
import { TwoCardCombo } from './larryMatcher';
import { LarryCategory as LC, LarryEdge as LE, LarryTag as LT } from './larryTypes';

export const LarryDraft: CardDraft[] = [
// Disks
{
  name: `Boompile`,
  types: [CT.Artifact],
  mc: '4',
  category: LC.Disk,
  tags: [LT.WantsBounce],
},
{
  name: `Coercive Portal`,
  types: [CT.Artifact],
  mc: '4',
  category: LC.Disk,
  tags: [LT.WantsBounce],
},
{
  name: `Magus of the Disk`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '2WW',
  category: LC.Disk,
  notes: [`ETBs tapped`, `Bounce/phase in response to the activation`],
  tags: [LT.WantsBounce, LT.DestroysArtifactEnchantment],
},
{
  name: `Nevinyrral's Disk`,
  types: [CT.Artifact],
  mc: '4',
  category: LC.Disk,
  notes: [`ETBs tapped`],
  tags: [LT.WantsBounce, LT.DestroysArtifactEnchantment],
},
{
  name: `Oblivion Stone`,
  types: [CT.Artifact],
  mc: '3',
  category: LC.Disk,
},
{
  name: `Phyrexian Scriptures`,
  types: [CT.Enchantment],
  mc: '4',
  category: LC.Disk,
  notes: [`Only hits non-artifact creatures`],
  tags: [
    LT.WantsBounce,
    LT.DestroysNonArtifacts,
    LT.DestroysNonCreatures,
    LT.WantsCountersRemoved,
  ],
  combos: [TwoCardCombo(c => c.tags.has(LT.RemovesCountersInstant, LT.RemovesCountersSorcery))],
},
{
  name: `Planar Collapse`,
  types: [CT.Enchantment],
  mc: '2',
  category: LC.Disk,
  notes: [`Triggers on upkeep`, `Only hits creatures`],
  tags: [LT.WantsBounce],
},
{
  name: `Scourglass`,
  types: [CT.Artifact],
  mc: '3WW',
  category: LC.Disk,
  notes: [`Triggers on upkeep`, `Only hits non-land, non-artifact`],
  tags: [LT.DestroysNonArtifacts],
},
{
  name: `Serenity`,
  types: [CT.Enchantment],
  mc: '2',
  category: LC.Disk,
  notes: [`Triggers on upkeep`, `Doesn't hit creatures`],
  tags: [
    LT.WantsBounce,
    LT.DestroysArtifactEnchantment,
    LT.DestroysOnlyArtifactEnchantment,
  ],
},
{
  name: `The Phasing of Zhalfir`,
  types: [CT.Enchantment],
  mc: '4',
  category: LC.Disk,
  notes: [`Only hits creatures`],
  tags: [
    LT.WantsBounce,
    LT.WantsCountersRemovedInstant,
  ],
},

// Bounce
{
  name: `Capsize`,
  types: [CT.Instant],
  mc: '4UU',
  category: LC.Bouncer,
  tags: [LT.Bounces],
},
{
  name: `Heidar, Rimewind Master`,
  types: [CT.Creature, CT.Legendary],
  mc: '4U',
  category: LC.Bouncer,
  tags: [LT.Bounces],
  combos: [{
    relationship: LE.CombosWith,
    isMatch: other => other.types.has(CT.Snow),
  }],
},
{
  name: `Vedalken Mastermind`,
  types: [CT.Creature],
  mc: 'UU',
  category: LC.Bouncer,
  tags: [LT.Bounces],
},

// Protection
{
  name: `Darksteel Plate`,
  types: [CT.Artifact, CT.Equipment],
  mc: '3',
  category: LC.Protection,
  tags: [LT.HasIndestructible, LT.GivesIndestructible],
},
{
  name: `Mithril Coat`,
  types: [CT.Artifact, CT.Equipment, CT.Legendary],
  mc: '3',
  category: LC.Protection,
  tags: [LT.HasIndestructible, LT.GivesIndestructible],
},
{
  name: `Kaldra Compleat`,
  types: [CT.Artifact, CT.Equipment, CT.Legendary],
  mc: '7',
  category: LC.Protection,
  tags: [LT.HasIndestructible, LT.GivesIndestructible],
},
{
  name: `Shield of Kaldra`,
  types: [CT.Artifact, CT.Equipment, CT.Legendary],
  mc: '4',
  category: LC.Protection,
  tags: [LT.HasIndestructible, LT.GivesIndestructible],
},
{
  name: `Robe of Stars`,
  types: [CT.Artifact, CT.Equipment],
  mc: '2',
  category: LC.Protection,
  tags: [LT.HasPhasing, LT.GivesPhasing],
},
{
  name: `Vanishing`,
  types: [CT.Enchantment, CT.Aura],
  mc: '2',
  category: LC.Protection,
  tags: [LT.HasPhasing, LT.GivesPhasing],
},
{
  name: `Athreos, Shroud-Veiled`,
  types: [CT.Creature, CT.Enchantment, CT.Legendary],
  mc: '6',
  category: LC.Protection,
  tags: [LT.HasIndestructible, LT.GivesFalseDeath],
},
{
  name: `Gift of Immortality`,
  types: [CT.Enchantment, CT.Aura],
  mc: '3',
  category: LC.Protection,
  tags: [LT.HasFalseDeath, LT.GivesFalseDeath],
},
{
  name: `Fool's Demise`,
  types: [CT.Enchantment, CT.Aura],
  mc: '5',
  category: LC.Protection,
  tags: [LT.HasFalseDeath, LT.GivesFalseDeath],
},

// Recursion
{
  name: `Emeria Shepherd`,
  types: [CT.Creature],
  mc: '5WW',
  category: LC.Recursion,
  notes: [`Activates via Landfall (Loop Bounceland)`],
  tags: [
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.ReanimatesCreatures,
  ],
},
{
  name: `Emry, Lurker of the Loch`,
  types: [CT.Creature, CT.Legendary],
  mc: '2U',
  category: LC.Recursion,
  notes: [`Activates via tapping`],
  tags: [LT.ReanimatesArtifacts],
},
{
  name: `Hanna, Ship's Navigator`,
  types: [CT.Creature, CT.Legendary],
  mc: '1WU',
  category: LC.Recursion,
  notes: [`Activates via tapping`],
  tags: [LT.ReanimatesArtifacts, LT.ReanimatesEnchantments],
},
{
  name: `Ironsoul Enforcer`,
  types: [CT.Creature, CT.Artifact],
  mc: '4W',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LT.ReanimatesArtifacts],
},
{
  name: `Lurrus of the Dream-Den`,
  types: [CT.Creature, CT.Legendary],
  mc: '1WW',
  category: LC.Recursion,
  notes: [`Activates once per turn`],
  tags: [LT.ReanimatesNonland2orLess],
},
{
  name: `Silent Sentinel`,
  types: [CT.Creature],
  mc: '5WW',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LT.ReanimatesEnchantments],
},
{
  name: `Sun Titan`,
  types: [CT.Creature],
  mc: '4WW',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LT.Reanimates3orLess],
},
{
  name: `Guardian Scalelord`,
  types: [CT.Creature],
  mc: '4W',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [LT.ReanimatesNonland4orLess],
},
{
  name: `Treasury Thrull`,
  types: [CT.Creature],
  mc: '4WB',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.ReanimatesCreatures,
  ],
},
{
  name: `Twilight Shepherd`,
  types: [CT.Creature],
  mc: '4WW',
  category: LC.Recursion,
  notes: ['Activates by ETB'],
  tags: [
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.ReanimatesCreatures,
    LT.WantsCountersRemoved,
  ],
  combos: [
    {
      relationship: LE.LoopsETBWith,
      isMatch: c =>
        c.tags.has(LT.GivesFalseDeath),
    },
  ],
},
{
  name: `Norika Yamazaki, the Poet`,
  types: [CT.Creature, CT.Legendary],
  mc: '2W',
  category: LC.Recursion,
  tags: [LT.ReanimatesEnchantments],
},

// Other
{
  name: `Nesting Grounds`,
  types: [CT.Land],
  category: LC.Other,
  tags: [LT.RemovesCountersSorcery],
  notes: [`Sorcery speed limits combos`],
},
{
  name: `Hall of Heliod's Generosity`,
  types: [CT.Land, CT.Legendary],
  category: LC.Recursion,
  notes: [`Requires card draw to not softlock self`],
  tags: [LT.ReanimatesEnchantments],
},
{
  name: `Academy Ruins`,
  types: [CT.Land, CT.Legendary],
  category: LC.Recursion,
  notes: [`Requires card draw to not softlock self`],
  tags: [LT.ReanimatesArtifacts],
},
{
  name: `Riptide Laboratory`,
  types: [CT.Land],
  category: LC.Bouncer,
  tags: [LT.BouncesWizards],
},
{
  name: `Enchanted Evening`,
  types: [CT.Enchantment],
  mc: '3WU',
  category: LC.Other,
  combos: [TwoCardCombo(c => c.tags.has(LT.DestroysArtifactEnchantment))],
},
{
  name: `Mycosynth Lattice`,
  types: [CT.Artifact],
  mc: '6',
  category: LC.Other,
  combos: [TwoCardCombo(c => c.tags.has(LT.DestroysArtifactEnchantment))],
},

// Speculative
{
  name: `Volrath's Stronghold`,
  types: [CT.Land, CT.Legendary],
  category: LC.Recursion,
  notes: [`Requires card draw to not softlock self`],
  tags: [LT.ReanimatesCreatures],
},
{
  name: `Induced Amnesia`,
  types: [CT.Enchantment],
  mc: '2U',
  category: LC.Draw,
},
{
  name: `Shrine of Piercing Vision`,
  types: [CT.Artifact],
  mc: '2',
  category: LC.Draw,
},
{
  name: `Baleful Strix`,
  types: [CT.Artifact, CT.Creature],
  mc: 'UB',
  category: LC.Draw,
  tags: [LT.WantsBounce],
},
{
  name: `The One Ring`,
  types: [CT.Artifact, CT.Legendary],
  mc: '4',
  category: LC.Draw,
  combos: [TwoCardCombo(o => o.tags.has(LT.Bounces))],
},
{
  name: `Scholar of New Horizons`,
  types: [CT.Creature],
  mc: '1W',
  category: LC.Ramp,
  tags: [LT.RemovesCountersInstant],
},
{
  name: `Nihil Spellbomb`,
  types: [CT.Artifact],
  mc: '1',
  category: LC.Draw,
},
{
  name: `Soul-Guide Lantern`,
  types: [CT.Artifact],
  mc: '1',
  category: LC.Draw,
},
{
  name: `Stone of Erech`,
  types: [CT.Artifact, CT.Legendary],
  mc: '1',
  category: LC.Draw,
},
{
  name: `The Night of the Doctor`,
  types: [CT.Enchantment],
  mc: '4WW',
  category: LC.Disk,
  tags: [
    LT.WantsCountersRemoved,
  ],
  combos: [TwoCardCombo(c =>
    c.tags.has(
      LT.RemovesCountersInstant,
      LT.RemovesCountersSorcery,
      LT.ReanimatesEnchantments,
      LT.Bounces,
    ) && (
      c.types.all(CT.Legendary, CT.Creature) ||
      !c.types.has(CT.Creature)
    )
  )]
},
{
  name: `Navigation Orb`,
  types: [CT.Artifact],
  mc: '3',
  category: LC.Ramp,
  tags: [],
},
{
  name: `Expedition Map`,
  types: [CT.Artifact],
  mc: '1',
  category: LC.Ramp,
  tags: [],
},
{
  name: `Burnished Hart`,
  types: [CT.Artifact, CT.Creature],
  mc: '3',
  category: LC.Ramp,
  tags: [
    LT.WantsFalseDeath,
  ],
},
{
  name: `Marit Lage's Slumber`,
  types: [CT.Enchantment, CT.Legendary, CT.Snow],
  mc: '1U',
  category: LC.Draw,
  tags: [],
},
{
  name: `Courier's Capsule`,
  types: [CT.Artifact],
  mc: '1U',
  category: LC.Draw,
  tags: [],
},
{
  name: `Mnemonic Sphere`,
  types: [CT.Artifact],
  mc: '1U',
  category: LC.Draw,
  tags: [],
},
{
  name: `Font of Fortunes`,
  types: [CT.Enchantment],
  mc: '1U',
  category: LC.Draw,
  tags: [],
},
{
  name: `Omen of the Sea`,
  types: [CT.Enchantment],
  mc: '1U',
  category: LC.Draw,
  tags: [],
},
{
  name: `Mystic Remora`,
  types: [CT.Enchantment],
  mc: 'U',
  category: LC.Draw,
  tags: [
    LT.WantsCountersRemoved,
  ],
},
];
