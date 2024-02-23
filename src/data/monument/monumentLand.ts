import { CardDraft, CardType as CT } from "../../types";
import { MonumentCategory as MC, MonumentEdge as ME, MonumentTag as MT } from "./monumentTypes";

export const Lands: (Omit<CardDraft, 'types' | 'category'> & {
  additionalTypes?: string[];
  overrideCategory?: string;
})[] = [{
  name: `Nesting Grounds`,
  tags: [
    MT.TargetsCreatures,
    MT.TransfersCounters,
    MT.RemovesCounters,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Karn's Bastion`,
  tags: [
    MT.Proliferates,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Yavimaya, Cradle of Growth`,
  additionalTypes: [CT.Legendary],
  tags: [MT.GrantsLandTypes],
  combos: [
    {
      relationship: ME.LandTypeMatters,
      isMatch: other => other.tags.has(MT.CaresAboutForests),
    },
  ],
},
{
  name: `Tyrite Sanctum`,
  tags: [
    MT.HasAbilityCounters,
    MT.TargetsCreatures,
    MT.TargetsTribal,
    MT.HasIndestructible,
    MT.SacrificesSelf,
    MT.CaresAboutGettingUntapped,
  ],
  combos: [{
    relationship: ME.Protects,
    isMatch: other =>
      other.types.all(CT.Creature, CT.Legendary),
  }, {
    relationship: ME.ManipulatesCounters,
    isMatch: other =>
      !other.types.has(CT.Creature) &&
      other.tags.has(MT.HasMinusCounters),
  }],
},
{
  name: `Contested Cliffs`,
  tags: [
    MT.TargetsTribal,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Glacial Chasm`,
  overrideCategory: MC.PillowLand,
  tags: [
    MT.HasAgeCounters,
    MT.CannotTapForMana,
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
    MT.SacrificeOutletLand,
    MT.SundialFriendly,
    MT.LikesBeingBounced,
  ],
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other => other.tags.has(MT.DealsDamageToPlayers),
    },
  ],
},
{
  name: `Flamekin Village`,
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Hammerheim`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Swarmyard`,
  tags: [
    MT.CaresAboutGettingUntapped,
  ],
  combos: [
    {
      relationship: ME.TribalSynergy,
      isMatch: other =>
        other.tags.has(MT.HasChangeling, MT.GivesChangeling) ||
        other.subtypes.has('Insect', 'Rat', 'Spider', 'Squirrel'),
    },
  ],
},
{
  name: `Kessig Wolf Run`,
  tags: [
    MT.TargetsCreatures,
    MT.ManaSink,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Drownyard Temple`,
  tags: [MT.ManaSink, MT.WantsToBeSacrificed],
},
{
  name: `Thespian's Stage`,
  overrideCategory: MC.MulticolorLand,
  tags: [
    MT.CopiesLands,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Vesuva`,
  overrideCategory: MC.MulticolorLand,
  tags: [
    MT.CopiesLands,
    MT.CopiesWithETB,
  ],
},
{
  name: `Lotus Field`,
  overrideCategory: MC.MulticolorLand,
  tags: [
    MT.CaresAboutGettingUntapped,
    MT.LikesBeingCopiedWithMirror,
    MT.LandWithProtection,
    MT.SundialFriendly,
    MT.SacrificeOutletLand,
  ],
},
{
  name: `Selesnya Sanctuary`,
  nick: 'Bouncelands',
  overrideCategory: MC.MulticolorLand,
  tags: [
    MT.LikesBeingCopiedWithMirror,
    MT.SundialFriendly,
    MT.TriggersLandfall,
    MT.BouncesLand,
  ],
},
{
  name: `Maze of Ith`,
  overrideCategory: MC.PillowLand,
  tags: [
    MT.CannotTapForMana,
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
  combos: [
    {
      relationship: ME.ProtectsAttacker,
      isMatch: other => other.tags.has(MT.VulnerableAttacker),
    },
  ],
},
{
  name: `Thawing Glaciers`,
  overrideCategory: MC.MulticolorLand,
  tags: [
    MT.CannotTapForMana,
    MT.CaresAboutGettingUntapped,
    MT.SundialFriendly,
    MT.TutorsBasicsToBattlefield,
    MT.TriggersLandfall,
    MT.LikesBeingBounced,
  ],
},
{
  name: `Mirrex`,
  subtypes: ['Sphere'],
  tags: [
    MT.MakesMultipleTokens,
    MT.ManaSink,
    MT.CaresAboutGettingUntapped,
    MT.PoisonCounters,
  ],
},
{
  name: `The Mycosynth Gardens`,
  overrideCategory: MC.MulticolorLand,
  subtypes: ['Sphere'],
  tags: [
    MT.CopiesArtifacts,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Kher Keep`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.MakesMultipleTokens,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Field of the Dead`,
  tags: [
    MT.MakesMultipleTokens,
    MT.HasLandfall,
  ],
  subtypes: ['Zombie'],
},
{
  name: `Urza's Saga`,
  additionalTypes: [CT.Enchantment, CT.Saga],
  overrideCategory: MC.Tutor,
  tags: [
    MT.CaresAboutTrinkets,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Alchemist's Refuge`,
  tags: [
    MT.ManaSink,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Oran-Rief, the Vastwood`,
  tags: [
    MT.HasPlusCounters,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `High Market`,
  tags: [
    MT.SacrificeOutletCreature,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Mutavault`,
  subtypes: [MT.GivesChangeling],
},
{
  name: `Forbidden Orchard`,
  overrideCategory: MC.MulticolorLand,
  combos: [
    {
      relationship: ME.Fuels,
      isMatch: other => other.tags.has(MT.CaresAboutOpponentCreatures),
    },
  ],
},
{
  name: `Desolate Lighthouse`,
  tags: [
    MT.CaresAboutGettingUntapped,
  ],
  combos: [
    {
      relationship: ME.Bins,
      isMatch: other => other.tags.has(MT.Flashback),
    },
  ],
},
{
  name: `Urborg, Tomb of Yawgmoth`,
  additionalTypes: [CT.Legendary],
  tags: [MT.GrantsLandTypes],
  combos: [
    {
      relationship: ME.LandTypeMatters,
      isMatch: other => other.tags.has(MT.CaresAboutSwamps),
    },
  ],
},
{
  name: `Desert`,
  tags: [
    MT.DealsDamageToCreatures,
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Sorrow's Path`,
  tags: [
    MT.DealsDamageToCreatures,
    MT.CannotTapForMana,
    MT.CaresAboutGettingLandTapped,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Homeward Path`,
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other =>
        other.tags.has(MT.ExchangesForCreature) ||
        (other.types.has(CT.Creature) &&
          other.tags.has(MT.DonatesSelf)),
    },
  ],
},
{
  name: `Littjara Mirrorlake`,
  tags: [
    MT.CopiesCreatures,
    MT.CopiesWithETB,
  ],
},
{
  name: `Hanweir Battlements // Hanweir, the Writhing Township`,
  nick: `Hanweir Battlements`,
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Tolaria`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.TargetsCreatures,
    MT.TutorsLand,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Yavimaya Hollow`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Okina, Temple to the Grandfathers`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Minamo, School at Water's Edge`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
  combos: [{
    relationship: ME.Untaps,
    isMatch: other =>
      other.types.has(CT.Legendary) &&
      other.tags.has(MT.CaresAboutGettingUntapped, MT.CopiesArtifacts, MT.CopiesCreatures, MT.CopiesLands),
  }],
},
{
  name: `Shinka, the Bloodsoaked Keep`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.TargetsCreatures,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Cascading Cataracts`,
  overrideCategory: MC.MulticolorLand,
  tags: [MT.LandWithProtection],
},
{
  name: `Silverbluff Bridge`,
  nick: 'Bridge Lands',
  additionalTypes: [CT.Artifact],
  tags: [MT.LandWithProtection],
},
{
  name: `Rishadan Port`,
  tags: [
    MT.TapsTargetLand,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Riptide Laboratory`,
  tags: [
    MT.TargetsTribal,
    MT.CaresAboutGettingUntapped,
  ],
  combos: [
    {
      relationship: ME.TribalSynergy,
      isMatch: b => b.subtypes.has('Wizard'),
    },
  ],
},
{
  name: `Celestial Colonnade`,
  overrideCategory: MC.MulticolorLand,
  tags: [MT.ManLand],
},
{
  name: `Flagstones of Trokair`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.WantsToBeSacrificed,
    MT.TutorsPlains,
    MT.LikesBeingCopiedWithMirror,
  ],
},
{
  name: `Academy Ruins`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.CaresAboutGettingUntapped,
  ],
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.types.has(CT.Artifact) &&
      other.tags.has(MT.SacrificesSelf, MT.DestroysAll),
  }]
},
{
  name: `Hall of Heliod's Generosity`,
  additionalTypes: [CT.Legendary],
  tags: [
    MT.CaresAboutGettingUntapped,
  ],
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.types.has(CT.Enchantment) && (
        other.types.has(CT.Saga) ||
        other.tags.has(MT.SacrificesSelf)
      ),
  }]
},
{
  name: `Kjeldoran Outpost`,
  tags: [
    MT.MakesMultipleTokens,
    MT.CaresAboutPlains,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Kor Haven`,
  additionalTypes: [CT.Legendary],
  overrideCategory: MC.PillowLand,
  tags: [
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Moorland Haunt`,
  tags: [
    MT.MakesMultipleTokens,
  ],
},
{
  name: `The Hunter Maze`,
  nick: `Tap Spheres`,
  subtypes: ['Sphere'],
  tags: [MT.SacrificesSelf],
},
{
  name: `Wirewood Lodge`,
  tags: [
    MT.TargetsTribal,
    MT.CaresAboutGettingUntapped,
  ],
  combos: [{
    relationship: ME.Untaps,
    isMatch: other =>
      other.types.has(CT.Creature) &&
      other.tags.has(MT.CaresAboutGettingUntapped) && (
        other.tags.has(MT.HasChangeling, MT.GivesChangeling) ||
        other.subtypes.has('Elf')
      ),
  }],
},
{
  name: `Riftstone Portal`,
  tags: [MT.WantsToBeSacrificed, MT.GrantsLandTypes],
},
{
  name: `Gavony Township`,
  tags: [
    MT.HasPlusCounters,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Hall of the Bandit Lord`,
  additionalTypes: [CT.Legendary],
  tags: [MT.CannotTapForMana],
},
{
  name: `Krosan Verge`,
  overrideCategory: MC.MulticolorLand,
  tags: [
    MT.TutorsForest,
    MT.TutorsPlains,
    MT.SacrificesSelf,
    MT.TriggersLandfall,
  ],
},
{
  name: `Canopy Vista`,
  overrideCategory: MC.MulticolorLand,
  subtypes: ['Plains', 'Forest'],
},
{
  name: `Prairie Stream`,
  overrideCategory: MC.MulticolorLand,
  subtypes: ['Plains', 'Island'],
},
{
  name: `Spara's Headquarters`,
  overrideCategory: MC.MulticolorLand,
  subtypes: ['Plains', 'Island', 'Forest'],
},
{
  name: `Tolaria West`,
  overrideCategory: MC.Tutor,
  tags: [MT.TutorsLand, MT.LikesBeingBounced],
},
{
  name: `Deserted Temple`,
  tags: [MT.UntapsLand],
},
{
  name: `Restless Vinestalk`,
  overrideCategory: MC.MulticolorLand,
  tags: [MT.TargetsCreatures],
},
{
  name: 'Castle Ardenvale',
  tags: [
    MT.MakesMultipleTokens,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Vitu-Ghazi, the City-Tree`,
  tags: [
    MT.MakesMultipleTokens,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Mistveil Plains`,
  subtypes: ['Plains'],
  overrideCategory: MC.Recursion,
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.tags.has(MT.SacrificeOutletLand) || (
        other.types.has(CT.Land) &&
        other.tags.has(MT.SacrificesSelf)
      ),
  }],
},
{
  name: `Grove of the Guardian`,
  tags: [
    MT.SacrificesSelf,
    MT.MakesBigToken,
  ],
  overrideCategory: MC.Threat,
},
{
  name: `Demolition Field`,
  tags: [MT.TutorsBasicsToBattlefield, MT.SacrificesSelf],
},
{
  name: `Fabled Passage`,
  tags: [MT.TutorsBasicsToBattlefield, MT.SacrificesSelf],
},
{
  name: `Dust Bowl`,
  overrideCategory: MC.Interaction,
  tags: [
    MT.SacrificeOutletLand,
    MT.CaresAboutGettingUntapped,
  ],
},
{
  name: `Dark Depths`,
  additionalTypes: [CT.Legendary, CT.Snow],
  overrideCategory: MC.Threat,
  tags: [
    MT.SacrificesSelf,
    MT.LikesBeingCopiedWithMirror,
    MT.HasAgeCounters,
    MT.CannotTapForMana,
  ],
},
{
  name: `Terrain Generator`,
  overrideCategory: MC.Ramp,
  tags: [
    MT.CaresAboutGettingUntapped,
  ],
  combos: [{
    relationship: ME.FueledBy,
    isMatch: other => other.tags.has(
      MT.TutorsBasicsToHand,
      MT.BouncesLand,
    ),
  }],
},
{
  name: `Hidden Nursery`,
  tags: [MT.SacrificesSelf],
},
{
  name: `Pit of Offerings`,
},
{
  name: `Echoing Deeps`,
},
{
  name: `Petrified Field`,
  tags: [
    MT.SacrificesSelf,
  ],
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.tags.has(MT.SacrificeOutletLand) || (
        other.types.has(CT.Land) &&
        other.tags.has(MT.SacrificesSelf)
      ),
  }],
},
{
  name: `Eye of Ugin`,
  tags: [
    MT.CannotTapForMana,
    MT.TargetsTribal,
  ],
  combos: [{
    relationship: ME.Tutors,
    isMatch: other =>
      other.types.has(CT.Creature) &&
      other.colors.length === 0,
  }],
},
{
  name: `Phyrexia's Core`,
  tags: [
    MT.SacrificeOutletArtifact,
  ],
},
{
  name: `Tomb of the Spirit Dragon`,
  tags: [
  ],
  combos: [{
    relationship: ME.CombosWith,
    isMatch: other =>
      other.tags.has(MT.MakesColorlessCreatures),
  }],
},
];
