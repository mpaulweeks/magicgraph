import { CardDraft, CardType } from "../../types";
import { MonTag, MonumentEdge } from "./types";

export const Lands: Omit<CardDraft, 'types' | 'category'>[] = [
  {
    name: `Nesting Grounds`,
    tags: [MonTag.TargetsCreatures],
    combos: [
      {
        relationship: MonumentEdge.ManipulatesCounters,
        isMatch: other =>
          other.tags.has(MonTag.HasPlusCounters) ||
          other.tags.has(MonTag.HasMinusCounters) ||
          other.tags.has(MonTag.HasAbilityCounters) ||
          other.tags.has(MonTag.HasAgeCounters) ||
          other.subtypes.has('Saga'),
      },
    ],
  },
  {
    name: `Karn's Bastion`,
    tags: [MonTag.Proliferates],
  },
  {
    name: `Yavimaya, Cradle of Growth`,
    tags: [MonTag.GrantsLandTypes],
    combos: [
      {
        relationship: MonumentEdge.LandTypeMatters,
        isMatch: other => other.tags.has(MonTag.CaresAboutForests),
      },
    ],
  },
  {
    name: `Tyrite Sanctum`,
    tags: [
      MonTag.HasPlusCounters,
      MonTag.HasAbilityCounters,
      MonTag.TargetsCreatures,
      MonTag.TargetsTribal,
      MonTag.HasIndestructible,
    ],
  },
  {
    name: `Contested Cliffs`,
    tags: [
      MonTag.TargetsTribal,
    ],
  },
  {
    name: `Glacial Chasm`,
    tags: [
      MonTag.HasAgeCounters,
      MonTag.CannotTapForMana,
      MonTag.LikesBeingCopiedWithCast,
      MonTag.LikesBeingCopiedWithETB,
      MonTag.LikesBeingCopiedWithMirror,
      MonTag.SacrificesLands,
    ],
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.tags.has(MonTag.DealsDamageToPlayers),
      },
    ],
  },
  {
    name: `Flamekin Village`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Hammerheim`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Swarmyard`,
    combos: [
      {
        relationship: MonumentEdge.TribalSynergy,
        isMatch: other => other.subtypes.has('Changeling', 'Insect', 'Rat', 'Spider', 'Squirrel'),
      },
    ],
  },
  {
    name: `Kessig Wolf Run`,
    tags: [MonTag.TargetsCreatures, MonTag.ManaSink],
  },
  {
    name: `Drownyard Temple`,
    tags: [MonTag.ManaSink],
    combos: [
      {
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.SacrificesLands),
      },
    ],
  },
  {
    name: `Thespian's Stage`,
    tags: [
      MonTag.CopiesLands,
      MonTag.CopiesWithMirror,
    ],
  },
  {
    name: `Lotus Field`,
    tags: [
      MonTag.CaresAboutGettingUntapped,
      MonTag.LikesBeingCopiedWithMirror,
      MonTag.LandWithProtection,
      MonTag.SundialFriendly,
    ],
  },
  {
    name: `Izzet Boilerworks`,
    nick: `Bouncelands`,
    tags: [
      MonTag.CaresAboutGettingUntapped,
      MonTag.LikesBeingCopiedWithMirror,
      MonTag.SundialFriendly,
      MonTag.TriggersLandfall,
    ],
  },
  {
    name: `Maze of Ith`,
    tags: [MonTag.CannotTapForMana, MonTag.TargetsCreatures],
    combos: [
      {
        relationship: MonumentEdge.ProtectsAttacker,
        isMatch: other => other.tags.has(MonTag.VulnerableAttacker),
      },
    ],
  },
  {
    name: `Thawing Glaciers`,
    tags: [
      MonTag.CannotTapForMana,
      MonTag.CaresAboutGettingUntapped,
      MonTag.SundialFriendly,
      MonTag.CaresAboutBasics,
      MonTag.TriggersLandfall,
    ],
  },
  {
    name: `Mirrex`,
    subtypes: ['Sphere'],
    tags: [MonTag.MakesTokens, MonTag.ManaSink],
  },
  {
    name: `The Mycosynth Gardens`,
    subtypes: ['Sphere'],
    tags: [
      MonTag.CopiesArtifacts,
      MonTag.CopiesWithMirror,
    ],
  },
  {
    name: `Kher Keep`,
    tags: [MonTag.MakesTokens],
  },
  {
    name: `Field of the Dead`,
    tags: [MonTag.MakesTokens],
    subtypes: ['Zombie'],
  },
  {
    name: `Urza's Saga`,
    tags: [MonTag.CaresAboutTrinkets],
  },
];

export const LandsRejected: Omit<CardDraft,
  'status' | 'types' | 'category'
>[] = [
  {
    name: `Alchemist's Refuge`,
    tags: [MonTag.ManaSink],
  },
  {
    name: `Oran-Rief, the Vastwood`,
    tags: [MonTag.HasPlusCounters],
  },
  {
    name: `High Market`,
    combos: [
      {
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.ThreatensCreatures),
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
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.CaresAboutOpponentCreatures),
      },
    ],
  },
  {
    name: `Desolate Lighthouse`,
    combos: [
      {
        relationship: MonumentEdge.Bins,
        isMatch: other => other.tags.has(MonTag.Flashback),
      },
    ],
  },
  {
    name: `Urborg, Tomb of Yawgmoth`,
    tags: [MonTag.GrantsLandTypes],
    combos: [
      {
        relationship: MonumentEdge.LandTypeMatters,
        isMatch: other => other.tags.has(MonTag.CaresAboutSwamps),
      },
    ],
  },
  {
    name: `Desert`,
    tags: [
      MonTag.DealsDamageToCreatures,
      MonTag.TargetsCreatures,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    name: `Sorrow's Path`,
    tags: [
      MonTag.DealsDamageToCreatures,
      MonTag.CannotTapForMana,
      MonTag.CaresAboutGettingLandTapped,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    name: `Homeward Path`,
    combos: [
      {
        relationship: MonumentEdge.Retrieves,
        isMatch: other =>
          other.tags.has(MonTag.ExchangesForCreature) ||
          (other.types.has(CardType.Creature) &&
            other.tags.has(MonTag.DonatesSelf)),
      },
    ],
  },
  {
    name: `Littjara Mirrorlake`,
    tags: [
      MonTag.CopiesCreatures,
      MonTag.CopiesWithETB,
    ],
  },
  {
    name: `Hanweir Battlements // Hanweir, the Writhing Township`,
    nick: `Hanweir Battlements`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Tolaria`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Yavimaya Hollow`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Okina, Temple to the Grandfathers`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Minamo, School at Water's Edge`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Shinka, the Bloodsoaked Keep`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Cascading Cataracts`,
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Silverbluff Bridge`,
    nick: 'Bridge Lands',
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Rishadan Port`,
    tags: [MonTag.TapsTargetLand],
  },
  {
    name: `Riptide Laboratory`,
    tags: [MonTag.TargetsTribal],
    combos: [
      {
        relationship: MonumentEdge.TribalSynergy,
        isMatch: b => b.subtypes.has('Wizard'),
      },
    ],
  },
];
