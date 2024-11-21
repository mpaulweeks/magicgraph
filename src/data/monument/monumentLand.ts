import { CardDraft, CardType as CT } from '../../types';
import {
  MonumentCategory as MC,
  MonumentEdge as ME,
  MonumentTag as MT,
} from './monumentTypes';

export const Lands: (Omit<CardDraft, 'types' | 'category'> & {
  additionalTypes?: string[];
  overrideCategory?: string;
})[] = [
  {
    name: `Nesting Grounds`,
    tags: [
      MT.TargetsCreatures,
      MT.TransfersCounters,
      MT.RemovesCounters,
      MT.HasTapAbility,
    ],
  },
  {
    name: `Karn's Bastion`,
    tags: [MT.Proliferates, MT.HasTapAbility],
  },
  {
    name: `Yavimaya, Cradle of Growth`,
    additionalTypes: [CT.Legendary],
    tags: [MT.GrantsForestType],
  },
  {
    name: `Tyrite Sanctum`,
    tags: [
      MT.HasAbilityCounters,
      MT.TargetsCreatures,
      MT.TargetsTribal,
      MT.HasIndestructible,
      MT.SacrificesSelf,
      MT.HasTapAbility,
    ],
    combos: [
      {
        relationship: ME.Protects,
        isMatch: other => other.types.all(CT.Creature, CT.Legendary),
      },
      {
        relationship: ME.ManipulatesCounters,
        isMatch: other =>
          !other.types.any(CT.Creature) && other.tags.any(MT.HasMinusCounters),
      },
    ],
  },
  {
    name: `Contested Cliffs`,
    tags: [MT.TargetsTribal, MT.HasTapAbility],
  },
  {
    name: `Glacial Chasm`,
    overrideCategory: MC.PillowLand,
    tags: [
      MT.HasAgeCounters,
      MT.CannotTapForMana,
      MT.SacrificeOutletLand,
      MT.DrawbackETB,
      MT.LikesBeingBounced,
      MT.SacrificeOutletLand,
    ],
    combos: [
      {
        relationship: ME.CombosWith,
        isMatch: other => other.tags.any(MT.DealsDamageToPlayers),
      },
    ],
  },
  {
    name: `Flamekin Village`,
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Hammerheim`,
    additionalTypes: [CT.Legendary],
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Swarmyard`,
    tags: [MT.HasTapAbility, MT.TargetsTribal],
    combos: [
      {
        relationship: ME.TribalSynergy,
        isMatch: other =>
          other.subtypes.any(...'Insect Rat Spider Squirrel'.split(' ')),
      },
    ],
  },
  {
    name: `Kessig Wolf Run`,
    tags: [MT.TargetsCreatures, MT.ManaSink, MT.HasTapAbility],
  },
  {
    name: `Drownyard Temple`,
    tags: [MT.ManaSink, MT.WantsToBeSacrificed],
  },
  {
    name: `Thespian's Stage`,
    overrideCategory: MC.MulticolorLand,
    tags: [MT.CopiesLands, MT.CopiesWithMirror],
  },
  {
    name: `Vesuva`,
    overrideCategory: MC.MulticolorLand,
    tags: [MT.CopiesLands, MT.CopiesWithETB],
  },
  {
    name: `Lotus Field`,
    overrideCategory: MC.MulticolorLand,
    tags: [
      MT.HasTapAbility,
      MT.LikesBeingCopiedWithMirror,
      MT.LandWithProtection,
      MT.DrawbackETB,
      MT.SacrificeOutletLand,
    ],
  },
  {
    name: `Selesnya Sanctuary`,
    nick: 'Bouncelands',
    overrideCategory: MC.MulticolorLand,
    tags: [
      MT.LikesBeingCopiedWithMirror,
      MT.DrawbackETB,
      MT.TriggersLandfall,
      MT.BouncesLand,
    ],
  },
  {
    name: `Maze of Ith`,
    overrideCategory: MC.PillowLand,
    tags: [MT.CannotTapForMana, MT.TargetsCreatures, MT.HasTapAbility],
    combos: [
      {
        relationship: ME.ProtectsAttacker,
        isMatch: other => other.tags.any(MT.VulnerableAttacker),
      },
    ],
  },
  {
    name: `Thawing Glaciers`,
    overrideCategory: MC.MulticolorLand,
    tags: [
      MT.CannotTapForMana,
      MT.HasTapAbility,
      MT.SundialFriendly,
      MT.TutorsBasicsToBattlefield,
      MT.TriggersLandfall,
      MT.LikesBeingBounced,
    ],
  },
  {
    name: `Mirrex`,
    subtypes: 'Sphere',
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesArtifactTokens,
      MT.MakesColorlessCreatures,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
      MT.ManaSink,
      MT.HasTapAbility,
      MT.PoisonCounters,
    ],
  },
  {
    name: `The Mycosynth Gardens`,
    overrideCategory: MC.MulticolorLand,
    subtypes: 'Sphere',
    tags: [MT.CopiesArtifacts, MT.CopiesWithMirror],
  },
  {
    name: `Kher Keep`,
    additionalTypes: [CT.Legendary],
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
      MT.HasTapAbility,
    ],
  },
  {
    name: `Field of the Dead`,
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesGradualTokens,
      MT.HasLandfall,
      MT.MakesDisposableTokens,
    ],
    subtypes: 'Zombie',
  },
  {
    name: `Urza's Saga`,
    additionalTypes: [CT.Enchantment, CT.Saga],
    overrideCategory: MC.Tutor,
    tags: [
      MT.CaresAboutTrinkets,
      MT.HasTapAbility,
      MT.MakesCreatureTokens,
      MT.MakesArtifactTokens,
      MT.MakesColorlessCreatures,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
    ],
  },
  {
    name: `Alchemist's Refuge`,
    tags: [MT.ManaSink, MT.HasTapAbility],
  },
  {
    name: `Oran-Rief, the Vastwood`,
    tags: [MT.HasPlusCounters, MT.HasTapAbility],
  },
  {
    name: `High Market`,
    tags: [MT.SacrificeOutletCreature, MT.HasTapAbility, MT.GainsLife],
  },
  {
    name: `Mutavault`,
    tags: [MT.ManLand, MT.GainsChangeling],
  },
  {
    name: `Faceless Haven`,
    additionalTypes: [CT.Snow],
    tags: [MT.ManLand, MT.GainsChangeling],
  },
  {
    name: `Forbidden Orchard`,
    overrideCategory: MC.MulticolorLand,
    combos: [
      {
        relationship: ME.Fuels,
        isMatch: other => other.tags.any(MT.CaresAboutOpponentCreatures),
      },
    ],
  },
  {
    name: `Desolate Lighthouse`,
    tags: [MT.HasTapAbility],
    combos: [
      {
        relationship: ME.Bins,
        isMatch: other => other.tags.any(MT.Flashback),
      },
    ],
  },
  {
    name: `Urborg, Tomb of Yawgmoth`,
    additionalTypes: [CT.Legendary],
    tags: [MT.GrantsSwampType],
  },
  {
    name: `Desert`,
    tags: [MT.DealsDamageToCreatures, MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Sorrow's Path`,
    tags: [
      MT.DealsDamageToCreatures,
      MT.CannotTapForMana,
      MT.WantsToBeTapped,
      MT.HasTapAbility,
    ],
  },
  {
    name: `Homeward Path`,
    combos: [
      {
        relationship: ME.CombosWith,
        isMatch: other =>
          other.tags.any(MT.ExchangesForCreature) ||
          (other.types.any(CT.Creature) && other.tags.any(MT.DonatesSelf)),
      },
    ],
  },
  {
    name: `Littjara Mirrorlake`,
    tags: [
      MT.MakesValuableTokens,
      MT.SacrificesSelf,
      MT.CopiesCreatures,
      MT.CopiesWithETB,
      MT.CopiesWithToken,
    ],
  },
  {
    name: `Hanweir Battlements // Hanweir, the Writhing Township`,
    nick: `Hanweir Battlements`,
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Tolaria`,
    additionalTypes: [CT.Legendary],
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Yavimaya Hollow`,
    additionalTypes: [CT.Legendary],
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Okina, Temple to the Grandfathers`,
    additionalTypes: [CT.Legendary],
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Minamo, School at Water's Edge`,
    additionalTypes: [CT.Legendary],
    tags: [MT.TargetsCreatures, MT.HasTapAbility, MT.UntapsLegends],
  },
  {
    name: `Shinka, the Bloodsoaked Keep`,
    additionalTypes: [CT.Legendary],
    tags: [MT.TargetsCreatures, MT.HasTapAbility],
  },
  {
    name: `Cascading Cataracts`,
    overrideCategory: MC.MulticolorLand,
    tags: [MT.LandWithProtection],
  },
  {
    name: `Thornglint Bridge`,
    nick: 'Bridge Lands',
    additionalTypes: [CT.Artifact],
    tags: [MT.LandWithProtection],
  },
  {
    name: `Darksteel Citadel`,
    additionalTypes: [CT.Artifact],
    tags: [MT.LandWithProtection],
  },
  {
    name: `Rishadan Port`,
    tags: [MT.TapsTargetLand, MT.HasTapAbility],
  },
  {
    name: `Riptide Laboratory`,
    tags: [MT.TargetsTribal, MT.HasTapAbility],
    combos: [
      {
        relationship: ME.TribalSynergy,
        isMatch: b => b.subtypes.any('Wizard'),
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
    tags: [MT.HasTapAbility],
    combos: [
      {
        relationship: ME.Reanimation,
        isMatch: other =>
          other.types.any(CT.Artifact) &&
          other.tags.any(MT.SacrificesSelf, MT.DestroysAll),
      },
    ],
  },
  {
    name: `Hall of Heliod's Generosity`,
    additionalTypes: [CT.Legendary],
    tags: [MT.HasTapAbility],
    combos: [
      {
        relationship: ME.Reanimation,
        isMatch: other =>
          other.types.any(CT.Enchantment) &&
          (other.types.any(CT.Saga) || other.tags.any(MT.SacrificesSelf)),
      },
    ],
  },
  {
    name: `Kjeldoran Outpost`,
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
      MT.CaresAboutPlains,
      MT.HasTapAbility,
    ],
  },
  {
    name: `Kor Haven`,
    additionalTypes: [CT.Legendary],
    overrideCategory: MC.PillowLand,
    tags: [MT.HasTapAbility],
  },
  {
    name: `Moorland Haunt`,
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
    ],
  },
  {
    name: `The Hunter Maze`,
    nick: `Tap Spheres`,
    subtypes: 'Sphere',
    tags: [MT.SacrificesSelf],
  },
  {
    name: `Wirewood Lodge`,
    tags: [MT.TargetsTribal, MT.HasTapAbility],
    combos: [
      {
        relationship: ME.Untaps,
        isMatch: other =>
          other.types.any(CT.Creature) &&
          other.tags.any(MT.HasTapAbility) &&
          (other.tags.any(MT.HasChangeling, MT.GivesChangeling) ||
            other.subtypes.any('Elf')),
      },
    ],
  },
  {
    name: `Riftstone Portal`,
    tags: [MT.WantsToBeSacrificed, MT.AddsManaAbility],
  },
  {
    name: `Gavony Township`,
    tags: [MT.HasPlusCounters, MT.HasTapAbility],
  },
  {
    name: `Hall of the Bandit Lord`,
    additionalTypes: [CT.Legendary],
    tags: [MT.CannotTapForMana, MT.HasTapAbility, MT.GivesHaste],
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
    subtypes: 'Plains Forest',
  },
  {
    name: `Prairie Stream`,
    overrideCategory: MC.MulticolorLand,
    subtypes: 'Plains Island',
  },
  {
    name: `Spara's Headquarters`,
    overrideCategory: MC.MulticolorLand,
    subtypes: 'Plains Island Forest',
  },
  {
    name: `Tolaria West`,
    overrideCategory: MC.Tutor,
    tags: [MT.TutorsLandToHand, MT.LikesBeingBounced],
  },
  {
    name: `Deserted Temple`,
    tags: [MT.UntapsLand],
    combos: [
      {
        relationship: ME.CombosWith,
        isMatch: other => other.tags.any(MT.TriggersOnLandTap),
      },
    ],
  },
  {
    name: `Restless Vinestalk`,
    overrideCategory: MC.MulticolorLand,
    tags: [MT.ManLand, MT.VulnerableAttacker, MT.TargetsCreatures],
  },
  {
    name: 'Castle Ardenvale',
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
      MT.HasTapAbility,
    ],
  },
  {
    name: `Vitu-Ghazi, the City-Tree`,
    tags: [
      MT.MakesCreatureTokens,
      MT.MakesGradualTokens,
      MT.MakesDisposableTokens,
      MT.HasTapAbility,
    ],
  },
  {
    name: `Mistveil Plains`,
    subtypes: 'Plains',
    overrideCategory: MC.Recursion,
    combos: [
      {
        relationship: ME.Reanimation,
        isMatch: other =>
          other.tags.any(MT.SacrificeOutletLand) ||
          (other.types.any(CT.Land) && other.tags.any(MT.SacrificesSelf)),
      },
    ],
  },
  {
    name: `Grove of the Guardian`,
    tags: [MT.SacrificesSelf, MT.MakesValuableTokens, MT.TapsCreatures],
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
    tags: [MT.SacrificeOutletLand, MT.HasTapAbility],
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
      MT.MakesCreatureTokens,
      MT.MakesValuableTokens,
    ],
  },
  {
    name: `Terrain Generator`,
    overrideCategory: MC.Ramp,
    tags: [MT.HasTapAbility],
    combos: [
      {
        relationship: ME.FueledBy,
        isMatch: other => other.tags.any(MT.TutorsBasicsToHand, MT.BouncesLand),
      },
    ],
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
    tags: [MT.ReanimatesLand],
  },
  {
    name: `Petrified Field`,
    tags: [MT.SacrificesSelf, MT.ReanimatesLand],
  },
  {
    name: `Eye of Ugin`,
    tags: [MT.CannotTapForMana, MT.TutorsCreatureType],
    combos: [
      {
        relationship: ME.Tutors,
        isMatch: other =>
          other.types.any(CT.Creature) && other.colors.length === 0,
      },
    ],
  },
  {
    name: `Phyrexia's Core`,
    tags: [MT.SacrificeOutletArtifact, MT.GainsLife],
  },
  {
    name: `Tomb of the Spirit Dragon`,
    tags: [MT.GainsLife],
    combos: [
      {
        relationship: ME.CombosWith,
        isMatch: other => other.tags.any(MT.MakesColorlessCreatures),
      },
    ],
  },
  {
    name: `Nykthos, Shrine to Nyx`,
    additionalTypes: [CT.Legendary],
    tags: [MT.HasTapAbility],
    combos: [
      {
        relationship: ME.CombosWith,
        isMatch: other => other.tags.any(MT.MakesDevotion),
      },
    ],
  },
  {
    name: `Restless Anchorage`,
    tags: [
      MT.ManLand,
      MT.VulnerableAttacker,
      MT.HasPlusCounters,
      MT.MakesArtifactTokens,
      MT.MakesGradualTokens,
    ],
  },
  {
    name: `Restless Prairie`,
    tags: [MT.ManLand, MT.VulnerableAttacker, MT.UsesDisposableCreatureTokens],
  },
  {
    name: `Lumbering Falls`,
    overrideCategory: MC.MulticolorLand,
    tags: [MT.ManLand],
  },
  {
    name: `The Shire`,
    additionalTypes: [CT.Legendary],
    tags: [
      MT.MakesArtifactTokens,
      MT.MakesDisposableTokens,
      MT.TapsCreatures,
      MT.GainsLife,
    ],
  },
  {
    name: `Mirrorpool`,
    tags: [
      MT.MakesValuableTokens,
      MT.CopiesCreatures,
      MT.CopiesWithETB,
      MT.CopiesWithToken,
      MT.SacrificesSelf,
    ],
  },
  {
    name: `Blinkmoth Well`,
    tags: [MT.TapsNonCreatureArtifacts],
  },
  {
    name: `Reliquary Tower`,
    tags: [MT.UnlocksHandsize],
  },
  {
    name: `Mishra's Factory`,
    tags: [MT.ManLand, MT.TurnsIntoArtifact],
  },
  {
    name: `Blinkmoth Nexus`,
    tags: [MT.ManLand, MT.TurnsIntoArtifact],
  },
  {
    name: `Inkmoth Nexus`,
    tags: [MT.ManLand, MT.TurnsIntoArtifact, MT.PoisonCounters],
  },
  {
    name: `Emeria, the Sky Ruin`,
    tags: [MT.CaresAboutPlains],
  },
  {
    name: `Urza's Cave`,
    tags: [MT.SacrificesSelf, MT.TutorsLandToBattlefield],
  },
  {
    name: `Inventors' Fair`,
    tags: [MT.TutorsArtifact, MT.GainsLife],
  },
  {
    name: `Arctic Treeline`,
    overrideCategory: MC.MulticolorLand,
    additionalTypes: [CT.Snow],
    subtypes: 'Plains',
  },
  {
    name: `Lazotep Quarry`,
    tags: [MT.MakesCreatureTokens, MT.MakesValuableTokens, MT.SacrificesSelf],
  },
  {
    name: `Gargoyle Castle`,
    tags: [MT.MakesCreatureTokens, MT.MakesValuableTokens, MT.SacrificesSelf],
  },
  {
    name: `Boseiju, Who Endures`,
    additionalTypes: [CT.Legendary],
    tags: [MT.SacrificesSelf],
  },
  {
    name: `Mosswort Bridge`,
    tags: [MT.LikesBeingBounced],
  },
  {
    name: `Shifting Woodland`,
    tags: [MT.ManLand, MT.CopiesPermanent, MT.CopiesWithMirror],
  },
  {
    name: `Planar Nexus`,
    subtypes: 'Sphere',
  },
  {
    name: `Arena`,
    tags: [MT.CannotTapForMana, MT.DealsDamageToCreatures],
  },
  {
    name: `Cabal Coffers`,
    tags: [MT.CannotTapForMana, MT.CaresAboutSwamps],
  },
  {
    name: `The Monumental Facade`,
    subtypes: 'Sphere',
    tags: [MT.HasAbilityCounters],
  },
  {
    name: `Vault of the Archangel`,
    tags: [MT.GivesDeathtouch],
  },
  {
    name: `Westvale Abbey // Ormendahl, Profane Prince`,
    tags: [
      MT.HasTapAbility,
      MT.MakesCreatureTokens,
      MT.MakesDisposableTokens,
      MT.UsesDisposableCreatureTokens,
    ],
  },
  {
    name: `Bojuka Bog`,
    tags: [MT.HasETB],
  },
  {
    name: `Lair of the Hydra`,
    tags: [MT.ManaSink, MT.ManLand],
  },
  {
    name: `Monumental Henge`,
    tags: [MT.ManaSink, MT.HasTapAbility],
  },
  {
    name: `Indatha Triome`,
    overrideCategory: MC.MulticolorLand,
    subtypes: 'Plains Island Forest',
  },
  {
    name: `Murmuring Bosk`,
    overrideCategory: MC.MulticolorLand,
    subtypes: 'Forest',
  },
  {
    name: `Khalni Garden`,
    tags: [MT.HasETB, MT.MakesDisposableTokens],
  },
  {
    name: `Sejiri Steppe`,
    tags: [MT.HasETB],
  },
  {
    name: `Talon Gates of Madara`,
    tags: [MT.HasETB],
  },
  {
    name: `Hive of the Eye Tyrant`,
    tags: [MT.ManLand],
  },
];
