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
  tags: [
    LT.WantsBounce,
    LT.DestroysNonLand,
    LT.SacrificesSelf,
  ],
},
{
  name: `Coercive Portal`,
  types: [CT.Artifact],
  mc: '4',
  category: LC.Disk,
  tags: [
    LT.WantsBounce,
    LT.DestroysNonLand,
    LT.SacrificesSelf,
  ],
},
{
  name: `Magus of the Disk`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '2WW',
  category: LC.Disk,
  notes: [`ETBs tapped`, `Activate, hold priority, then bounce/phase out`],
  tags: [
    LT.WantsBounce,
    LT.WantsProtection,
    LT.DestroysArtifacts,
    LT.DestroysCreatures,
    LT.DestroysEnchantments,
    LT.SacrificesSelf,
  ],
},
{
  name: `Nevinyrral's Disk`,
  types: [CT.Artifact],
  mc: '4',
  category: LC.Disk,
  notes: [`ETBs tapped`],
  tags: [
    LT.WantsBounce,
    LT.DestroysArtifacts,
    LT.DestroysCreatures,
    LT.DestroysEnchantments,
    LT.SacrificesSelf,
  ],
},
{
  name: `Oblivion Stone`,
  types: [CT.Artifact],
  mc: '3',
  category: LC.Disk,
  tags: [
    LT.DestroysNonLand,
    LT.SacrificesSelf,
  ],
},
{
  name: `Planar Collapse`,
  types: [CT.Enchantment],
  mc: '2',
  category: LC.Disk,
  notes: [`Triggers on upkeep`, `Only hits creatures`],
  tags: [
    LT.WantsBounce,
    LT.DestroysCreatures,
    LT.SacrificesSelf,
  ],
},
{
  name: `Scourglass`,
  types: [CT.Artifact],
  mc: '3WW',
  category: LC.Disk,
  notes: [`Triggers on upkeep`, `Only hits non-land, non-artifact`],
  tags: [
    LT.DestroysNonArtifactNonLand,
    LT.SacrificesSelf,
  ],
},
{
  name: `Serenity`,
  types: [CT.Enchantment],
  mc: '2',
  category: LC.Disk,
  notes: [`Triggers on upkeep`, `Doesn't hit creatures`],
  tags: [
    LT.WantsBounce,
    LT.DestroysArtifacts,
    LT.DestroysEnchantments,
    LT.SacrificesSelf,
  ],
},
{
  name: `The Moment`,
  types: [CT.Artifact, CT.Legendary],
  mc: '2',
  category: LC.Disk,
  tags: [
    LT.WantsBounce,
    LT.DestroysNonLand,
    LT.SacrificesSelf,
  ],
},
{
  name: `Phyrexian Scriptures`,
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  mc: '2BB',
  category: LC.Disk,
  tags: [
    LT.WantsBounce,
    LT.WantsCountersRemoved,
    LT.DestroysOtherCreatures,
  ],
  combos: [TwoCardCombo(c => c.tags.has(LT.RemovesCountersInstant, LT.RemovesCountersSorcery))],
},
{
  name: `One Ring to Rule Them All`,
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  mc: '2BB',
  category: LC.Disk,
  tags: [
    LT.WantsBounce,
    LT.WantsCountersRemoved,
    LT.DestroysOtherCreatures,
  ],
  combos: [TwoCardCombo(c => c.tags.has(LT.RemovesCountersInstant, LT.RemovesCountersSorcery))],
},
{
  name: `The Phasing of Zhalfir`,
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  mc: '4',
  category: LC.Disk,
  notes: [`Only hits creatures`],
  tags: [
    LT.WantsBounce,
    LT.WantsCountersRemovedInstant,
    LT.DestroysCreatures,
  ],
  combos: [
    TwoCardCombo(c => c.tags.has(LT.ReanimatesEnchantments, LT.ReanimatesNonland4orLess)),
  ],
},
{
  name: `The Night of the Doctor`,
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  mc: '4WW',
  category: LC.Disk,
  tags: [
    LT.WantsBounce,
    LT.WantsCountersRemoved,
    LT.DestroysCreatures,
  ],
  combos: [
    TwoCardCombo(c =>
      !c.types.has(CT.Creature) &&
      c.tags.has(LT.RemovesCountersInstant, LT.RemovesCountersSorcery)),
    TwoCardCombo(c =>
      c.tags.has(LT.ReanimatesEnchantments) && (
        c.types.all(CT.Legendary, CT.Creature) ||
        !c.types.has(CT.Creature)
      ),
    ),
  ],
},
{
  name: `Invasion of Fiora // Marchesa, Resolute Monarch`,
  types: [CT.Battle],
  mc: '4BB',
  category: LC.Disk,
  tags: [
    LT.HasETB,
    LT.DestroysCreatures,
  ],
},
{
  name: `Myojin of Cleansing Fire`,
  types: [CT.Creature, CT.Legendary],
  mc: '5WWW',
  category: LC.Disk,
  tags: [
    LT.HasCastTrigger,
    LT.DestroysCreatures,
  ],
},
{
  name: `Angel of the Dire Hour`,
  types: [CT.Creature],
  mc: '5WW',
  category: LC.Disk,
  tags: [
    LT.HasCastTrigger,
    LT.DestroysOtherCreatures,
  ],
},
{
  name: `Cyclone Summoner`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '5UU',
  category: LC.Disk,
  tags: [
    LT.BouncesNonWizards,
    LT.HasCastTrigger,
  ],
  combos: [
    TwoCardCombo(o =>
      o.tags.has(LT.Bounces) &&
      o.subtypes.has('Wizard')
    ),
  ],
},
{
  name: `Dread Cacodemon`,
  types: [CT.Creature],
  mc: '7BBB',
  category: LC.Disk,
  tags: [
    LT.HasCastTrigger,
    LT.DestroysOtherCreatures,
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
  subtypes: ['Wizard'],
  mc: '4U',
  category: LC.Bouncer,
  tags: [
    LT.Bounces,
    LT.WantsProtection,
  ],
  combos: [{
    relationship: LE.SynergyWith,
    isMatch: other => other.types.has(CT.Snow),
  }],
},
{
  name: `Vedalken Mastermind`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: 'UU',
  category: LC.Bouncer,
  tags: [
    LT.Bounces,
    LT.WantsProtection,
  ],
},
{
  name: `Temporal Adept`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '1UU',
  category: LC.Bouncer,
  tags: [
    LT.Bounces,
    LT.WantsProtection,
  ],
},
{
  name: `Meticulous Excavation`,
  types: [CT.Enchantment],
  mc: 'W',
  category: LC.Bouncer,
  tags: [
    LT.Bounces,
  ],
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
  name: `Hall of Heliod's Generosity`,
  types: [CT.Land, CT.Legendary],
  category: LC.Recursion,
  notes: [`Requires card draw to not softlock self`],
  tags: [
    LT.ReanimatesToHand,
    LT.ReanimatesEnchantments,
  ],
},
{
  name: `Academy Ruins`,
  types: [CT.Land, CT.Legendary],
  category: LC.Recursion,
  notes: [`Requires card draw to not softlock self`],
  tags: [
    LT.ReanimatesToHand,
    LT.ReanimatesArtifacts,
  ],
},
{
  name: `Emeria Shepherd`,
  types: [CT.Creature],
  mc: '5WW',
  category: LC.Recursion,
  notes: [`Activates via Landfall (Loop Bounceland)`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.ReanimatesToHand,
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.ReanimatesCreatures,
    LT.WantsProtection,
  ],
},
{
  name: `Emry, Lurker of the Loch`,
  types: [CT.Creature, CT.Legendary],
  subtypes: ['Wizard'],
  mc: '2U',
  category: LC.Recursion,
  notes: [`Activates via tapping`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.ReanimatesArtifacts,
    LT.WantsProtection,
  ],
},
{
  name: `Hanna, Ship's Navigator`,
  types: [CT.Creature, CT.Legendary],
  mc: '1WU',
  category: LC.Recursion,
  notes: [`Activates via tapping`],
  tags: [
    LT.ReanimatesToHand,
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.WantsProtection,
  ],
},
{
  name: `Ironsoul Enforcer`,
  types: [CT.Creature, CT.Artifact],
  mc: '4W',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.ReanimatesArtifacts,
    LT.WantsProtection,
  ],
},
{
  name: `Lurrus of the Dream-Den`,
  types: [CT.Creature, CT.Legendary],
  mc: '1WW',
  category: LC.Recursion,
  notes: [`Activates once per turn`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.ReanimatesNonland2orLess,
    LT.WantsProtection,
  ],
},
{
  name: `Silent Sentinel`,
  types: [CT.Creature],
  mc: '5WW',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.ReanimatesEnchantments,
    LT.WantsProtection,
  ],
},
{
  name: `Sun Titan`,
  types: [CT.Creature],
  mc: '4WW',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.Reanimates3orLess,
    LT.WantsProtection,
  ],
},
{
  name: `Guardian Scalelord`,
  types: [CT.Creature],
  mc: '4W',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [
    LT.ReanimatesToBattlefield,
    LT.ReanimatesNonland4orLess,
    LT.WantsProtection,
  ],
},
{
  name: `Treasury Thrull`,
  types: [CT.Creature],
  mc: '4WB',
  category: LC.Recursion,
  notes: [`Acivates via attacking`],
  tags: [
    LT.ReanimatesToHand,
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.ReanimatesCreatures,
    LT.WantsProtection,
  ],
},
{
  name: `Twilight Shepherd`,
  types: [CT.Creature],
  mc: '4WW',
  category: LC.Recursion,
  notes: ['Activates by ETB'],
  tags: [
    LT.ReanimatesToHand,
    LT.ReanimatesArtifacts,
    LT.ReanimatesEnchantments,
    LT.ReanimatesCreatures,
    LT.WantsCountersRemoved,
    LT.HasETB,
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
  tags: [
    LT.ReanimatesEnchantments,
    LT.WantsProtection,
  ],
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
  combos: [TwoCardCombo(c => c.tags.has(LT.DestroysEnchantments))],
},
{
  name: `Mycosynth Lattice`,
  types: [CT.Artifact],
  mc: '6',
  category: LC.Other,
  combos: [TwoCardCombo(c => c.tags.has(LT.DestroysArtifacts))],
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
  notes: ['Card advantage when destroyed', 'Mill win-con when bounced'],
  tags: [
    LT.HasETB,
  ],
  combos: [{
    relationship: LE.SynergyWith,
    isMatch: other => other.tags.has(
      LT.DestroysEnchantments,
      LT.DestroysNonArtifactNonLand,
      LT.DestroysNonLand,
    ),
  }]
},
{
  name: `Shrine of Piercing Vision`,
  types: [CT.Artifact],
  mc: '2',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Baleful Strix`,
  types: [CT.Artifact, CT.Creature],
  mc: 'UB',
  category: LC.Draw,
  tags: [LT.HasETB],
},
{
  name: `The One Ring`,
  types: [CT.Artifact, CT.Legendary],
  mc: '4',
  category: LC.Draw,
  combos: [TwoCardCombo(o => o.tags.has(LT.Bounces))],
},
{
  name: `Nihil Spellbomb`,
  types: [CT.Artifact],
  mc: '1',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Soul-Guide Lantern`,
  types: [CT.Artifact],
  mc: '1',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Stone of Erech`,
  types: [CT.Artifact, CT.Legendary],
  mc: '1',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},

{
  name: `Scholar of New Horizons`,
  types: [CT.Creature],
  mc: '1W',
  category: LC.Mana,
  tags: [
    LT.RemovesCountersInstant,
    LT.WantsProtection,
  ],
},
{
  name: `Navigation Orb`,
  types: [CT.Artifact],
  mc: '3',
  category: LC.Mana,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Expedition Map`,
  types: [CT.Artifact],
  mc: '1',
  category: LC.Mana,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Burnished Hart`,
  types: [CT.Artifact, CT.Creature],
  mc: '3',
  category: LC.Mana,
  tags: [
    LT.SacrificesSelf,
    LT.WantsFalseDeath,
  ],
},
{
  name: `Weathered Wayfarer`,
  types: [CT.Creature],
  mc: 'W',
  category: LC.Mana,
  tags: [LT.TutorsLand],
},
{
  name: `Skyclave Relic`,
  types: [CT.Artifact],
  mc: '3',
  category: LC.Mana,
  tags: [
    LT.HasCastTrigger,
    LT.HasIndestructible,
  ],
},
{
  name: `Solemn Simulacrum`,
  types: [CT.Artifact, CT.Creature],
  mc: '4',
  category: LC.Mana,
  tags: [
    LT.HasETB,
  ],
},
{
  name: `Thaumatic Compass // Spires of Orazca`,
  types: [CT.Artifact],
  mc: '2',
  category: LC.Mana,
  tags: [],
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
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Mnemonic Sphere`,
  types: [CT.Artifact],
  mc: '1U',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Font of Fortunes`,
  types: [CT.Enchantment],
  mc: '1U',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Omen of the Sea`,
  types: [CT.Enchantment],
  mc: '1U',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
  ],
},
{
  name: `Mystic Remora`,
  types: [CT.Enchantment],
  mc: 'U',
  category: LC.Draw,
  tags: [
    LT.SacrificesSelf,
    LT.WantsCountersRemoved,
  ],
},
];
