import { CardDraft, CardType } from "../../types";
import { MonumentCategory as MC, MonumentEdge as ME, MonumentTag as MT } from "./types";

export const Lands: (Omit<CardDraft, 'types' | 'category'> & {
  overrideCategory?: string;
})[] = [{
  name: `Nesting Grounds`,
  tags: [MT.TargetsCreatures],
  combos: [
    {
      relationship: ME.ManipulatesCounters,
      isMatch: other =>
        other.tags.has(MT.HasPlusCounters) ||
        other.tags.has(MT.HasMinusCounters) ||
        other.tags.has(MT.HasAbilityCounters) ||
        other.tags.has(MT.HasAgeCounters) ||
        other.subtypes.has('Saga'),
    },
  ],
},
{
  name: `Karn's Bastion`,
  tags: [MT.Proliferates],
},
{
  name: `Yavimaya, Cradle of Growth`,
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
    MT.HasPlusCounters,
    MT.HasAbilityCounters,
    MT.TargetsCreatures,
    MT.TargetsTribal,
    MT.HasIndestructible,
  ],
},
{
  name: `Contested Cliffs`,
  tags: [
    MT.TargetsTribal,
  ],
},
{
  name: `Glacial Chasm`,
  tags: [
    MT.HasAgeCounters,
    MT.CannotTapForMana,
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
    MT.SacrificesLands,
    MT.SundialFriendly,
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
  tags: [MT.TargetsCreatures],
},
{
  name: `Hammerheim`,
  tags: [MT.TargetsCreatures],
},
{
  name: `Swarmyard`,
  combos: [
    {
      relationship: ME.TribalSynergy,
      isMatch: other => other.subtypes.has('Changeling', 'Insect', 'Rat', 'Spider', 'Squirrel'),
    },
  ],
},
{
  name: `Kessig Wolf Run`,
  tags: [MT.TargetsCreatures, MT.ManaSink],
},
{
  name: `Drownyard Temple`,
  tags: [MT.ManaSink, MT.WantsToBeSacrificed],
},
{
  name: `Thespian's Stage`,
  tags: [
    MT.CopiesLands,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Lotus Field`,
  tags: [
    MT.CaresAboutGettingUntapped,
    MT.LikesBeingCopiedWithMirror,
    MT.LandWithProtection,
    MT.SundialFriendly,
  ],
},
{
  name: `Simic Growth Chamber`,
  nick: `Bouncelands`,
  tags: [
    MT.CaresAboutGettingUntapped,
    MT.LikesBeingCopiedWithMirror,
    MT.SundialFriendly,
    MT.TriggersLandfall,
  ],
},
{
  name: `Maze of Ith`,
  tags: [MT.CannotTapForMana, MT.TargetsCreatures],
  combos: [
    {
      relationship: ME.ProtectsAttacker,
      isMatch: other => other.tags.has(MT.VulnerableAttacker),
    },
  ],
},
{
  name: `Thawing Glaciers`,
  tags: [
    MT.CannotTapForMana,
    MT.CaresAboutGettingUntapped,
    MT.SundialFriendly,
    MT.TutorsBasic,
    MT.TriggersLandfall,
  ],
},
{
  name: `Mirrex`,
  subtypes: ['Sphere'],
  tags: [MT.MakesTokens, MT.ManaSink],
},
{
  name: `The Mycosynth Gardens`,
  subtypes: ['Sphere'],
  tags: [
    MT.CopiesArtifacts,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Kher Keep`,
  tags: [MT.MakesTokens],
},
{
  name: `Field of the Dead`,
  tags: [MT.MakesTokens, MT.HasLandfall],
  subtypes: ['Zombie'],
},
{
  name: `Urza's Saga`,
  tags: [MT.CaresAboutTrinkets],
},
{
  name: `Alchemist's Refuge`,
  tags: [MT.ManaSink],
},
{
  name: `Oran-Rief, the Vastwood`,
  tags: [MT.HasPlusCounters],
},
{
  name: `High Market`,
  combos: [
    {
      relationship: ME.Fuels,
      isMatch: other => other.tags.has(MT.ThreatensCreatures),
    },
  ],
},
{
  name: `Mutavault`,
  subtypes: ['Changeling'],
},
{
  name: `Forbidden Orchard`,
  combos: [
    {
      relationship: ME.Fuels,
      isMatch: other => other.tags.has(MT.CaresAboutOpponentCreatures),
    },
  ],
},
{
  name: `Desolate Lighthouse`,
  combos: [
    {
      relationship: ME.Bins,
      isMatch: other => other.tags.has(MT.Flashback),
    },
  ],
},
{
  name: `Urborg, Tomb of Yawgmoth`,
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
      relationship: ME.Retrieves,
      isMatch: other =>
        other.tags.has(MT.ExchangesForCreature) ||
        (other.types.has(CardType.Creature) &&
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
  tags: [MT.TargetsCreatures],
},
{
  name: `Tolaria`,
  tags: [MT.TargetsCreatures, MT.TutorsLand],
  overrideCategory: MC.Tutor,
},
{
  name: `Yavimaya Hollow`,
  tags: [MT.TargetsCreatures],
},
{
  name: `Okina, Temple to the Grandfathers`,
  tags: [MT.TargetsCreatures],
},
{
  name: `Minamo, School at Water's Edge`,
  tags: [MT.TargetsCreatures],
  combos: [{
    relationship: ME.Untaps,
    isMatch: other =>
      other.types.all(CardType.Creature, CardType.Legendary) &&
      other.tags.has(MT.CaresAboutGettingUntapped),
  }],
},
{
  name: `Shinka, the Bloodsoaked Keep`,
  tags: [MT.TargetsCreatures],
},
{
  name: `Cascading Cataracts`,
  tags: [MT.LandWithProtection],
},
{
  name: `Silverbluff Bridge`,
  nick: 'Bridge Lands',
  tags: [MT.LandWithProtection],
},
{
  name: `Rishadan Port`,
  tags: [MT.TapsTargetLand],
},
{
  name: `Riptide Laboratory`,
  tags: [MT.TargetsTribal],
  combos: [
    {
      relationship: ME.TribalSynergy,
      isMatch: b => b.subtypes.has('Wizard'),
    },
  ],
},
{
  name: `Celestial Colonnade`,
  tags: [MT.ManLand],
},
{
  name: `Flagstones of Trokair`,
  tags: [MT.WantsToBeSacrificed, MT.TutorsPlains],
},
{
  name: `Academy Ruins`,
  combos: [{
    relationship: ME.Retrieves,
    isMatch: other => other.types.has(CardType.Artifact),
  }]
},
{
  name: `Hall of Heliod's Generosity`,
  combos: [{
    relationship: ME.Retrieves,
    isMatch: other => other.types.has(CardType.Enchantment),
  }]
},
{
  name: `Kjeldoran Outpost`,
  tags: [MT.MakesTokens],
},
{
  name: `Kor Haven`,
},
{
  name: `Moorland Haunt`,
  tags: [MT.MakesTokens],
},
{
  name: `The Hunter Maze`,
  nick: `Tap Spheres`,
  subtypes: ['Sphere'],
  tags: [MT.SacrificesSelf],
},
{
  name: `Wirewood Lodge`,
  tags: [MT.TargetsTribal],
  combos: [{
    relationship: ME.Untaps,
    isMatch: other =>
      other.types.has(CardType.Creature) &&
      other.subtypes.has('Elf', 'Changeling') &&
      other.tags.has(MT.CaresAboutGettingUntapped),
  }],
},
{
  name: `Riftstone Portal`,
  tags: [MT.WantsToBeSacrificed, MT.GrantsLandTypes],
},
{
  name: `Gavony Township`,
  tags: [MT.HasPlusCounters],
},
{
  name: `Hall of the Bandit Lord`,
  tags: [MT.CannotTapForMana],
},
{
  name: `Krosan Verge`,
  tags: [
    MT.TutorsForest,
    MT.TutorsPlains,
    MT.SacrificesSelf,
    MT.TriggersLandfall,
  ],
},
{
  name: `Canopy Vista`,
  subtypes: ['Plains', 'Forest'],
},
{
  name: `Prairie Stream`,
  subtypes: ['Plains', 'Island'],
},
{
  name: `Spara's Headquarters`,
  subtypes: ['Plains', 'Island', 'Forest'],
},
{
  name: `Tolaria West`,
  tags: [MT.TutorsLand],
},
{
  name: `Deserted Temple`,
  tags: [MT.UntapsLand],
},
{
  name: `Restless Vinestalk`,
  tags: [MT.TargetsCreatures],
},
{
  name: 'Castle Ardenvale',
  tags: [MT.MakesTokens],
},
{
  name: `Vitu-Ghazi, the City-Tree`,
  tags: [MT.MakesTokens],
}
];
