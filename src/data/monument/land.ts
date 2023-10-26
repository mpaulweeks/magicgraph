import { CardDraft, CardType } from "../../types";
import { MonumentEdge as ME, MonumentTag as MT } from "./types";

export const Lands: Omit<CardDraft, 'types' | 'category'>[] = [
  {
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
    tags: [MT.ManaSink],
    combos: [
      {
        relationship: ME.Fuels,
        isMatch: other => other.tags.has(MT.SacrificesLands),
      },
    ],
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
    name: `Izzet Boilerworks`,
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
      MT.CaresAboutBasics,
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
    tags: [MT.MakesTokens],
    subtypes: ['Zombie'],
  },
  {
    name: `Urza's Saga`,
    tags: [MT.CaresAboutTrinkets],
  },
];

export const LandsRejected: Omit<CardDraft,
  'status' | 'types' | 'category'
>[] = [
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
    tags: [MT.TargetsCreatures],
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
];
