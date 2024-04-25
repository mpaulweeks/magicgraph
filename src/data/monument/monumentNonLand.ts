import { CardDraft, CardType as CT } from "../../types";
import { MonumentCategory as MC, MonumentEdge as ME, MonumentTag as MT } from "./monumentTypes";

export const NonLands: CardDraft[] = [{
  name: `Amareth, the Lustrous`,
  mc: '3WUG',
  types: [CT.Creature, CT.Legendary],
  subtypes: ['Dragon'],
  category: MC.Draw,
  tags: [
    MT.CaresAboutTopdeck,
    MT.UsesPermanentETBs,
    MT.HasLandfall,
  ],
}, {
  name: `Monument to Perfection`,
  mc: '2',
  types: [CT.Artifact],
  category: MC.Draw,
  tags: [MT.TutorsBasicsToHand],
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other => other.subtypes.has('Sphere'),
    },
  ],
},
{
  name: `Thaumatic Compass // Spires of Orazca`,
  nick: `Thaumatic Compass`,
  mc: '2',
  types: [CT.Artifact],
  category: MC.Draw,
  tags: [MT.TutorsBasicsToHand],
},
{
  name: `Mirage Mirror`,
  mc: '3',
  types: [CT.Artifact],
  category: MC.Interaction,
  tags: [
    MT.CopiesPermanent,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Kiora Bests the Sea God`,
  mc: '5UU',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Threat,
  tags: [
    MT.MakesValuableTokens,
  ],
},
{
  name: `The World Spell`,
  mc: '5GG',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Draw,
},
{
  name: `Waking the Trolls`,
  mc: '4RG',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Threat,
},
{
  name: `The Bath Song`,
  mc: '3U',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Draw,
},
{
  name: `Myojin of Towering Might`,
  mc: '5GGG',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.HasAbilityCounters,
    MT.HasPlusCounters,
    MT.HasIndestructible,
  ],
  category: MC.Threat,
},
{
  name: `Myojin of Cryptic Dreams`,
  mc: '5UUU',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Draw,
},
{
  name: `Myojin of Roaring Blades`,
  mc: '5RRR',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Threat,
},
{
  name: `Myojin of Blooming Dawn`,
  mc: '5WWW',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.HasAbilityCounters,
    MT.HasIndestructible,
    MT.MakesColorlessCreatures,
    MT.MakesMassTokens,
    MT.MakesDisposableTokens,
  ],
  category: MC.Threat,
},
{
  name: `Myojin of Cleansing Fire`,
  mc: '5WWW',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Interaction,
},
{
  name: `Solphim, Mayhem Dominus`,
  mc: '2RR',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Threat,
},
{
  name: `Omnath, Locus of Rage`,
  mc: '3RRGG',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasLandfall,
    MT.MakesCreatureTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
  ],
  category: MC.Threat,
},
{
  name: `Tatyova, Benthic Druid`,
  mc: '3UG',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.HasLandfall],
  category: MC.Draw,
},
{
  name: `Lifetap`,
  mc: 'UU',
  types: [CT.Enchantment],
  tags: [
    MT.CaresAboutForests,
    MT.GainsLife,
  ],
  category: MC.Lifegain,
},
{
  name: `Taurean Mauler`,
  mc: '2R',
  types: [CT.Creature],
  tags: [MT.HasChangeling],
  category: MC.Threat,
},
{
  name: `Moritte of the Frost`,
  mc: '2UUG',
  types: [CT.Creature, CT.Legendary, CT.Snow],
  tags: [
    MT.HasChangeling,
    MT.CopiesPermanent,
    MT.CopiesWithCast,
    MT.HasPlusCounters,
  ],
  category: MC.Threat,
},
{
  name: `Maskwood Nexus`,
  mc: '4',
  types: [CT.Artifact],
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesColorlessCreatures,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
    MT.GivesChangeling,
  ],
  category: MC.Buff,
},
{
  name: `Runed Stalactite`,
  mc: '1',
  types: [CT.Artifact, CT.Equipment],
  tags: [MT.GivesChangeling],
  category: MC.Buff,
},
{
  name: `Animation Module`,
  mc: '1',
  types: [CT.Artifact],
  tags: [
    MT.Proliferates,
    MT.MakesCreatureTokens,
    MT.MakesArtifactTokens,
    MT.MakesColorlessCreatures,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
  ],
  category: MC.Buff,
},
{
  name: `Dismiss into Dream`,
  mc: '6U',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Willbreaker`,
  mc: '3UU',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  tags: [MT.CaresAboutTargeting, MT.WantsSacrificeOutletCreature],
  category: MC.Interaction,
},
{
  name: `Elvish Reclaimer`,
  mc: 'G',
  types: [CT.Creature],
  tags: [MT.SacrificeOutletLand, MT.TriggersLandfall],
  category: MC.Tutor,
},
{
  name: `Expedition Map`,
  mc: '1',
  types: [CT.Artifact],
  tags: [MT.SacrificesSelf],
  category: MC.Tutor,
},
{
  name: `Scute Swarm`,
  mc: '2G',
  types: [CT.Creature],
  subtypes: ['Insect'],
  tags: [
    MT.MakesMassTokens,
    MT.MakesDisposableTokens,
    MT.HasLandfall,
  ],
  category: MC.Threat,
},
{
  name: `Dragonlair Spider`,
  mc: '2RRGG',
  types: [CT.Creature],
  subtypes: ['Spider'],
  tags: [
    MT.MakesMassTokens,
    MT.MakesDisposableTokens,
  ],
  category: MC.Threat,
},
{
  name: `Sundial of the Infinite`,
  mc: '2',
  types: [CT.Artifact],
  category: MC.Misc,
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other => other.tags.has(MT.SundialFriendly),
    },
  ],
},
{
  name: `Cauldron of Souls`,
  mc: '5',
  types: [CT.Artifact],
  category: MC.Buff,
  tags: [
    MT.HasMinusCounters,
    MT.TargetsCreatures,
    MT.WantsSacrificeOutletCreature,
  ],
},
{
  name: `Battle of Frost and Fire`,
  mc: '3RU',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
  tags: [MT.TargetsTribal],
},
{
  name: `Transmogrifying Wand`,
  mc: '3',
  types: [CT.Artifact],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Interaction,
},
{
  name: `Nissa, Ascended Animist`,
  mc: '3GGGG',
  types: [CT.Planeswalker, CT.Legendary],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Interaction,
},
{
  name: `Nevinyrral's Disk`,
  mc: '4',
  types: [CT.Artifact],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Boompile`,
  mc: '4',
  types: [CT.Artifact],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Proteus Staff`,
  mc: '3',
  types: [CT.Artifact],
  tags: [MT.UsesDisposableCreatureTokens],
  category: MC.Interaction,
},
{
  name: `Jalira, Master Polymorphist`,
  mc: '3U',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.UsesDisposableCreatureTokens, MT.SacrificeOutletCreature],
  category: MC.Draw,
},
{
  name: `Reality Scramble`,
  mc: '2RR',
  types: [CT.Sorcery],
  tags: [
    MT.UsesDisposableArtifactTokens,
    MT.UsesDisposableCreatureTokens,
    MT.SacrificeOutletArtifact,
    MT.SacrificeOutletCreature,
  ],
  category: MC.Draw,
},
{
  name: `Kindred Discovery`,
  mc: '3RR',
  types: [CT.Enchantment],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesCreatureETBs],
},
{
  name: `Hordewing Skaab`,
  mc: '4U',
  types: [CT.Creature],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesZombies],
},
{
  name: `Djinn of Infinite Deceits`,
  mc: '4UU',
  types: [CT.Creature],
  tags: [MT.UsesDisposableCreatureTokens],
  category: MC.Interaction,
},
{
  name: `Helm of Possession`,
  mc: '4',
  types: [CT.Artifact],
  tags: [
    MT.UsesDisposableCreatureTokens,
    MT.SacrificeOutletCreature,
    MT.WantsSacrificeOutletCreature,
  ],
  category: MC.Interaction,
},
{
  name: `Barrin, Master Wizard`,
  mc: '2UU',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.UsesDisposableCreatureTokens,
    MT.SacrificeOutletCreature,
  ],
  category: MC.Interaction,
},
{
  name: `Perilous Forays`,
  mc: '3GG',
  types: [CT.Enchantment],
  tags: [
    MT.UsesDisposableCreatureTokens,
    MT.TutorsBasicsToBattlefield,
    MT.SacrificeOutletCreature,
  ],
  category: MC.Ramp,
},
{
  name: `Rootpath Purifier`,
  mc: '3G',
  types: [CT.Creature],
  category: MC.Misc,
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other => other.tags.has(
        MT.TutorsBasicsToBattlefield,
        MT.TutorsBasicsToHand,
      ),
    },
  ],
},
{
  name: `Aven Courier`,
  mc: '1U',
  types: [CT.Creature],
  category: MC.Misc,
  combos: [
    {
      relationship: ME.ManipulatesCounters,
      isMatch: other =>
        other.tags.has(MT.HasAbilityCounters),
    },
  ],
},
{
  name: `Cowardice`,
  mc: '3UU',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Constant Mists`,
  mc: '1G',
  types: [CT.Instant],
  tags: [MT.SacrificeOutletLand],
  category: MC.Lifegain,
},
{
  name: `Nacatl War-Pride`,
  mc: '3GGG',
  types: [CT.Creature],
  tags: [
    MT.VulnerableAttacker,
    MT.SundialFriendly,
    MT.CaresAboutOpponentCreatures,
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
    MT.MakesCreatureTokens,
    MT.MakesDevotion,
    MT.MakesMassTokens,
    MT.MakesValuableTokens,
    MT.WantsHaste,
  ],
  category: MC.Threat,
},
{
  name: `Ward of Bones`,
  mc: '6',
  types: [CT.Artifact],
  tags: [MT.CaresAboutOpponentCreatures],
  category: MC.Interaction,
},
{
  name: `Realmbreaker, the Invasion Tree`,
  mc: '3',
  types: [CT.Artifact, CT.Legendary],
  tags: [MT.TutorsCreatureType],
  category: MC.Ramp,
},
{
  name: `Overtaker`,
  mc: '3U',
  types: [CT.Creature],
  tags: [MT.WantsSacrificeOutletCreature],
  category: MC.Interaction,
},
{
  name: `Callous Oppressor`,
  mc: '1UU',
  types: [CT.Creature],
  tags: [MT.WantsSacrificeOutletCreature],
  category: MC.Interaction,
},
{
  name: `Utvara Hellkite`,
  mc: '6RR',
  types: [CT.Creature],
  tags: [
    MT.TargetsTribal,
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
  category: MC.Threat,
},
{
  name: `Primeval Herald`,
  mc: '3G',
  types: [CT.Creature],
  tags: [MT.VulnerableAttacker, MT.SundialFriendly],
  category: MC.Ramp,
},
{
  name: `Sword of the Animist`,
  mc: '2',
  types: [CT.Equipment, CT.Legendary],
  tags: [MT.VulnerableAttacker, MT.SundialFriendly],
  category: MC.Ramp,
},
{
  name: `Vizier of Tumbling Sands`,
  mc: '2U',
  types: [CT.Creature],
  tags: [MT.UntapsLand, MT.UntapsCreature],
  category: MC.Ramp,
},
{
  name: `Seedborn Muse`,
  mc: '3GG',
  types: [CT.Creature],
  tags: [MT.UntapsAllLands],
  category: MC.Ramp,
},
{
  name: `Manascape Refractor`,
  mc: '3',
  types: [CT.Artifact],
  category: MC.Ramp,
  tags: [
    MT.CopiesLands,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Wilderness Reclamation`,
  mc: '3G',
  types: [CT.Enchantment],
  tags: [MT.UntapsAllLands],
  category: MC.Ramp,
},
{
  name: `Krenko, Tin Street Kingpin`,
  mc: '2R',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.MakesMassTokens,
    MT.MakesDisposableTokens,
    MT.VulnerableAttacker,
  ],
  category: MC.Threat,
},
{
  name: `The Akroan War`,
  mc: '3R',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
},
{
  name: `Spike Weaver`,
  mc: '2GG',
  types: [CT.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Lifegain,
},
{
  name: `Myojin of Life's Web`,
  mc: '6GGG',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Threat,
},
{
  name: `Myojin of Seeing Winds`,
  mc: '7UUU',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Draw,
},
{
  name: `Scavenged Brawler`,
  mc: '6',
  types: [CT.Creature, CT.Artifact],
  tags: [MT.HasAbilityCounters, MT.Flashback],
  category: MC.Buff,
},
{
  name: `Slippery Bogbonder`,
  mc: '3G',
  types: [CT.Creature],
  tags: [MT.HasAbilityCounters],
  category: MC.Buff,
},
{
  name: `Shapesharer`,
  mc: '2U',
  types: [CT.Creature],
  tags: [
    MT.HasChangeling,
    MT.CopiesCreatures,
    MT.CopiesWithMirror,
  ],
  category: MC.Threat,
},
{
  name: `Starke of Rath`,
  mc: '1RR',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.DonatesSelf],
  category: MC.Interaction,
},
{
  name: `Puca's Mischief`,
  mc: '3U',
  types: [CT.Enchantment],
  tags: [MT.ExchangesForCreature],
  category: MC.Interaction,
},
{
  name: `Perplexing Chimera`,
  mc: '3U',
  types: [CT.Creature, CT.Enchantment],
  tags: [MT.DonatesSelf],
  category: MC.Interaction,
},
{
  name: `Lithoform Engine`,
  mc: '4',
  types: [CT.Artifact, CT.Legendary],
  category: MC.Misc,
  tags: [
    MT.HasTapAbility,
  ],
},
{
  name: `Fortitude`,
  mc: '1G',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutForests, MT.SacrificeOutletLand],
  category: MC.Buff,
},
{
  name: `Roots of Life`,
  mc: '1GG',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutSwamps],
  category: MC.Lifegain,
},
{
  name: `Spreading Algae`,
  mc: 'G',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutSwamps, MT.CaresAboutGettingLandTapped],
  category: MC.Interaction,
},
{
  name: `Nightmare Lash`,
  mc: '4',
  types: [CT.Artifact],
  tags: [MT.CaresAboutSwamps],
  category: MC.Buff,
},
{
  name: `Dualcaster Mage`,
  mc: '1RR',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  category: MC.Draw,
},
{
  name: `Radiant Performer`,
  mc: '3RR',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
},
{
  name: `Heartless Hidetsugu`,
  mc: '3RR',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.DealsDamageToPlayers],
  category: MC.Threat,
},
{
  name: `Apex Altisaur`,
  mc: '7GG',
  types: [CT.Creature],
  tags: [MT.Enrage],
  category: MC.Interaction,
},
{
  name: `Polyraptor`,
  mc: '6GG',
  types: [CT.Creature],
  tags: [MT.Enrage],
  category: MC.Threat,
},
{
  name: `Ranging Raptors`,
  mc: '2G',
  types: [CT.Creature],
  tags: [MT.Enrage],
  category: MC.Ramp,
},
{
  name: `Vigor`,
  mc: '3GGG',
  types: [CT.Creature],
  tags: [MT.Enrage],
  category: MC.Threat,
},
{
  name: `Fractured Loyalty`,
  mc: '1R',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Dreamscape Artist`,
  mc: '2U',
  types: [CT.Creature],
  tags: [MT.SacrificeOutletLand, MT.HasTapAbility],
  category: MC.Ramp,
},
{
  name: `Dowsing Dagger // Lost Vale`,
  nick: `Dowsing Dagger`,
  mc: '2',
  types: [CT.Artifact],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
  category: MC.Ramp,
},
{
  name: `Conqueror's Galleon // Conqueror's Foothold`,
  nick: `Conqueror's Galleon`,
  mc: '4',
  types: [CT.Artifact],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
  category: MC.Recursion,
},
{
  name: `Awakening of Vitu-Ghazi`,
  mc: '3GG',
  types: [CT.Instant],
  tags: [MT.AnimatesLand],
  category: MC.Threat,
},
{
  name: `Spawning Grounds`,
  mc: '6GG',
  types: [CT.Enchantment],
  tags: [MT.AnimatesLand, MT.HasTapAbility],
  category: MC.Threat,
},
{
  name: `Druid Class`,
  mc: '1G',
  types: [CT.Enchantment],
  tags: [MT.AnimatesLand],
  category: MC.Threat,
},
{
  name: `Stone-Seeder Hierophant`,
  mc: '2GG',
  types: [CT.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `Fatestitcher`,
  mc: '3U',
  types: [CT.Creature],
  subtypes: ['Zombie'],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `Kiora's Follower`,
  mc: 'UG',
  types: [CT.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `The Phasing of Zhalfir`,
  mc: '2UU',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
},
{
  name: `World Breaker`,
  mc: '6G',
  colors: [],
  types: [CT.Creature],
  tags: [
    MT.SacrificeOutletLand,
    MT.WantsSacrificeOutletCreature,
  ],
  category: MC.Interaction,
},
{
  name: `Cyclone Summoner`,
  mc: '5UU',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
  tags: [MT.LikesBeingCopiedWithCast, MT.TargetsTribal],
},
{
  name: `Sower of Temptation`,
  mc: '2UU',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  tags: [MT.WantsSacrificeOutletCreature],
  category: MC.Interaction,
},
{
  name: `Pendant of Prosperity`,
  mc: '3',
  types: [CT.Artifact],
  category: MC.Draw,
  tags: [MT.LikesBeingCopiedWithMirror],
},
{
  name: `Skullclamp`,
  mc: '1',
  types: [CT.Artifact, CT.Equipment],
  category: MC.Draw,
  combos: [
    {
      relationship: ME.FueledBy,
      isMatch: other => other.tags.has(MT.MakesDisposableTokens),
    },
  ],
},
{
  name: `Humble Defector`,
  mc: '1R',
  types: [CT.Creature],
  tags: [MT.DonatesSelf, MT.HasTapAbility],
  category: MC.Draw,
},
{
  name: `Khârn the Betrayer`,
  mc: '3R',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.DonatesSelf],
  category: MC.Draw,
},
{
  name: `Sun Titan`,
  mc: '4WW',
  types: [CT.Creature],
  category: MC.Recursion,
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.tags.has(MT.SacrificeOutletLand) ||
      (other.mv <= 3 && (
        other.types.has(CT.Saga) ||
        other.tags.has(MT.SacrificesSelf)
      )),
  }],
},
{
  name: `Arwen, Mortal Queen`,
  mc: '1WG',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasIndestructible,
    MT.HasAbilityCounters,
    MT.HasPlusCounters,
  ],
  category: MC.Misc,
},
{
  name: `Luminous Broodmoth`,
  mc: '3WW',
  types: [CT.Creature],
  subtypes: ['Insect'],
  tags: [MT.HasAbilityCounters],
  category: MC.Recursion,
},
{
  name: `Mondrak, Glory Dominus`,
  mc: '2WW',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasIndestructible,
    MT.HasAbilityCounters,
    MT.UsesDisposableArtifactTokens,
    MT.UsesDisposableCreatureTokens,
    MT.SacrificeOutletArtifact,
    MT.SacrificeOutletCreature,
    MT.DoublesTokens,
  ],
  category: MC.Misc,
},
{
  name: `Weathered Wayfarer`,
  mc: 'W',
  types: [CT.Creature],
  tags: [
    MT.TutorsLand,
    MT.TriggersLandfall,
    MT.HasTapAbility,
    MT.WantsLessLands,
  ],
  category: MC.Tutor,
},
{
  name: `Knight of the Reliquary`,
  mc: '1WG',
  types: [CT.Creature],
  tags: [MT.TutorsLand, MT.TriggersLandfall, MT.SacrificeOutletLand, MT.CaresAboutForests, MT.CaresAboutPlains, MT.HasTapAbility],
  category: MC.Tutor,
},
{
  name: `Karma`,
  mc: '2WW',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutSwamps, MT.DealsDamageToPlayers, MT.SundialFriendly],
  category: MC.Misc,
},
{
  name: `Selvala, Explorer Returned`,
  mc: '1WG',
  types: [CT.Creature, CT.Legendary],
  subtypes: ['Elf'],
  tags: [MT.HasTapAbility],
  category: MC.Draw,
},
{
  name: `Oath of Lieges`,
  mc: '1W',
  types: [CT.Enchantment],
  tags: [MT.TutorsBasicsToBattlefield],
  category: MC.Ramp,
},
{
  name: `Rubinia Soulsinger`,
  mc: '2WUG',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.WantsSacrificeOutletCreature,
    MT.HasTapAbility,
  ],
  category: MC.Interaction,
},
{
  name: `Novablast Wurm`,
  mc: '3WWGG',
  types: [CT.Creature],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Magus of the Disk`,
  mc: '2WW',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Tale of Tinúviel`,
  mc: '3WW',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Recursion,
},
{
  name: `Emeria Shepherd`,
  mc: '5WW',
  types: [CT.Creature],
  tags: [MT.CaresAboutPlains, MT.HasLandfall],
  category: MC.Recursion,
},
{
  name: `Twilight Shepherd`,
  mc: '3WWW',
  types: [CT.Creature],
  tags: [
    MT.HasMinusCounters,
    MT.WantsSacrificeOutletCreature,
  ],
  category: MC.Recursion,
},
{
  name: `Mirror Entity`,
  mc: '2W',
  types: [CT.Creature],
  tags: [
    MT.HasChangeling,
    MT.GivesChangeling,
    MT.UsesDisposableCreatureTokens,
  ],
  category: MC.Threat,
},
{
  name: `The Fall of Lord Konda // Fragment of Konda`,
  nick: `The Fall of Lord Konda`,
  mc: '2W',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
},
{
  name: `Elspeth Conquers Death`,
  mc: '3WW',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
},
{
  name: `Staff of Titania`,
  mc: '2',
  types: [CT.Artifact, CT.Equipment],
  tags: [MT.CaresAboutForests],
  category: MC.Threat,
},
{
  name: `Eldrazi Monument`,
  mc: '5',
  types: [CT.Artifact],
  tags: [
    MT.UsesDisposableCreatureTokens,
  ],
  category: MC.Buff,
},
{
  name: `Oboro Breezecaller`,
  mc: '1U',
  types: [CT.Creature],
  tags: [MT.BouncesLand, MT.TriggersLandfall, MT.UntapsLand],
  category: MC.Misc,
},
{
  name: `Aura Shards`,
  mc: '1WG',
  types: [CT.Enchantment],
  tags: [
    MT.UsesCreatureETBs,
  ],
  category: MC.Interaction,
},
{
  name: `Tameshi, Reality Architect`,
  mc: '2U',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.BouncesLand],
  category: MC.Recursion,
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.types.has(CT.Artifact, CT.Enchantment) && (
        other.types.has(CT.Saga) ||
        other.tags.has(MT.SacrificesSelf)
      ),
  }],
},
{
  name: `Zopandrel, Hunger Dominus`,
  mc: '5GG',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasAbilityCounters,
    MT.HasIndestructible,
    MT.UsesDisposableCreatureTokens,
    MT.SacrificeOutletCreature,
  ],
  category: MC.Threat,
},
{
  name: `Tekuthal, Inquiry Dominus`,
  mc: '2UU',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasAbilityCounters,
    MT.HasIndestructible,
    MT.Proliferates,
  ],
  category: MC.Threat,
},
{
  name: `Captain Sisay`,
  mc: '2GW',
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.TutorsLegendary,
    MT.HasTapAbility,
  ],
  category: MC.Threat,
},
{
  name: `Avarice Totem`,
  mc: '1',
  types: [CT.Artifact],
  tags: [
    MT.UsesDisposableArtifactTokens,
    MT.UsesDisposableCreatureTokens,
  ],
  category: MC.Interaction,
},
{
  name: `Retrofitter Foundry`,
  mc: '1',
  types: [CT.Artifact],
  tags: [
    MT.TargetsTribal,
    MT.MakesCreatureTokens,
    MT.MakesArtifactTokens,
    MT.MakesColorlessCreatures,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
  ],
  category: MC.Threat,
},
{
  name: `Sensei's Divining Top`,
  mc: '1',
  types: [CT.Artifact],
  category: MC.Threat,
  tags: [
    MT.ManipulatesTopDeck,
  ],
},
{
  name: `Evolutionary Leap`,
  mc: '1G',
  types: [CT.Enchantment],
  tags: [MT.SacrificeOutletCreature, MT.UsesDisposableCreatureTokens],
  category: MC.Draw,
},
{
  name: `Glen Elendra Archmage`,
  mc: '3U',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  tags: [MT.HasMinusCounters, MT.WantsSacrificeOutletCreature],
  category: MC.Interaction,
},
{
  name: `Blossoming Tortoise`,
  mc: '2GG',
  types: [CT.Creature],
  category: MC.Recursion,
  tags: [
    MT.WantsSacrificeOutletLand,
    MT.WantsHaste,
  ],
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.types.has(CT.Land) &&
      other.tags.has(MT.SacrificesSelf),
  }],
},
{
  name: `Scaretiller`,
  mc: '4',
  types: [CT.Artifact, CT.Creature],
  category: MC.Recursion,
  tags: [
    MT.WantsSacrificeOutletLand,
    MT.WantsToBeTapped,
  ],
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.types.has(CT.Land) &&
      other.tags.has(MT.SacrificesSelf),
  }],
},
{
  name: `Martyr's Cause`,
  mc: '2W',
  types: [CT.Enchantment],
  tags: [MT.SacrificeOutletCreature, MT.UsesDisposableCreatureTokens],
  category: MC.Interaction,
},
{
  name: `Phyrexian Swarmlord`,
  mc: '4GG',
  types: [CT.Creature],
  subtypes: ['Insect', 'Horror'],
  tags: [
    MT.MakesMassTokens,
    MT.MakesDisposableTokens,
    MT.PoisonCounters,
  ],
  category: MC.Threat,
},
{
  name: `Woodfall Primus`,
  mc: '5GGG',
  types: [CT.Creature],
  tags: [
    MT.WantsSacrificeOutletCreature,
    MT.HasMinusCounters,
  ],
  category: MC.Interaction,
},
{
  name: `Battle at the Helvault`,
  mc: '4WW',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
  tags: [
    MT.MakesValuableTokens,
  ],
},
{
  name: `The Night of the Doctor`,
  mc: '4WW',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Interaction,
},
{
  name: `The Mending of Dominaria`,
  mc: '3GG',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Recursion,
  tags: [MT.WantsSacrificeOutletLand],
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.types.has(CT.Land) &&
      other.tags.has(MT.SacrificesSelf),
  }],
},
{
  name: `Song of Eärendil`,
  mc: '3GU',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Draw,
},
{
  name: `Behold the Unspeakable // Vision of the Unspeakable`,
  nick: `Behold the Unspeakable`,
  mc: '3UU',
  types: [CT.Enchantment, CT.Saga],
  category: MC.Draw,
},
{
  name: `The Caves of Androzani`,
  mc: '3W',
  types: [CT.Enchantment, CT.Saga],
  tags: [MT.ProliferatesNonSaga, MT.TutorsCreatureType],
  category: MC.Tutor,
},
{
  name: `Scholar of New Horizons`,
  mc: '1W',
  types: [CT.Creature],
  tags: [
    MT.RemovesCounters,
    MT.TutorsPlains,
    MT.WantsLessLands,
  ],
  category: MC.Ramp,
},
{
  name: `Odric, Lunarch Marshal`,
  mc: '3W',
  types: [CT.Creature, CT.Legendary],
  tags: [],
  category: MC.Ramp,
  combos: [{
    relationship: ME.CombosWith,
    isMatch: other =>
      other.types.has(CT.Creature) &&
      other.tags.has(MT.HasIndestructible),
  }],
},
{
  name: `Solemnity`,
  mc: '2W',
  types: [CT.Enchantment],
  tags: [],
  category: MC.Misc,
  combos: [{
    relationship: ME.CombosWith,
    isMatch: other =>
      other.types.has(CT.Land, CT.Creature, CT.Artifact) &&
      other.tags.has(MT.HasAgeCounters, MT.HasMinusCounters),
  }, {
    relationship: ME.Nonbo,
    isMatch: other =>
      other.tags.has(
        MT.PoisonCounters,
        MT.HasAbilityCounters,
        MT.HasLimitedUseCounters,
        MT.HasPlusCounters,
      ) ||
      other.types.has(CT.Saga),
  }],
},
{
  name: `Swashbuckler's Whip`,
  types: [CT.Artifact, CT.Equipment],
  mc: '1',
  category: MC.Draw,
},
{
  name: `Shorikai, Genesis Engine`,
  types: [CT.Artifact, CT.Legendary],
  mc: '2WU',
  category: MC.Draw,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesColorlessCreatures,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
    MT.HasTapAbility,
  ],
},
{
  name: `Prime Speaker Zegana`,
  types: [CT.Creature, CT.Legendary],
  subtypes: ['Wizard'],
  mc: '2GGUU',
  category: MC.Draw,
  tags: [
    MT.LikesBeingBounced,
  ],
},
{
  name: `Chromatic Orrery`,
  types: [CT.Artifact, CT.Legendary],
  mc: '7',
  category: MC.Ramp,
  tags: [
    MT.HasTapAbility,
  ],
},
{
  name: `Court of Bounty`,
  types: [CT.Enchantment],
  mc: '2GG',
  category: MC.Ramp,
  tags: [
  ],
},
{
  name: `Doubling Season`,
  types: [CT.Enchantment],
  mc: '4G',
  category: MC.Misc,
  tags: [
    MT.DoublesTokens,
  ],
  combos: [{
    relationship: ME.CombosWith,
    isMatch: other =>
      other.tags.has(
        MT.HasAbilityCounters,
      ),
  }],
},
{
  name: `Golden Guardian // Gold-Forge Garrison`,
  types: [CT.Artifact, CT.Creature],
  mc: '4',
  category: MC.Ramp,
  tags: [
    MT.WantsToBeSacrificed,
    MT.HasTapAbility,
    MT.MakesCreatureTokens,
    MT.MakesArtifactTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
  ],
},
{
  name: `Spine of Ish Sah`,
  types: [CT.Artifact],
  mc: '7',
  category: MC.Interaction,
  tags: [
    MT.WantsToBeSacrificed,
    MT.LikesBeingBounced,
  ],
},
{
  name: `Magus of the Unseen`,
  types: [CT.Creature],
  mc: '1U',
  category: MC.Interaction,
  tags: [
    MT.WantsSacrificeOutletArtifact,
    MT.HasTapAbility,
  ],
},
{
  name: `Unstable Glyphbridge // Sandswirl Wanderglyph`,
  types: [CT.Artifact],
  mc: '3WW',
  category: MC.Interaction,
  tags: [
    MT.LikesBeingBounced,
    MT.LikesBeingCopiedWithCast,
    MT.CaresAboutOpponentCreatures,
  ],
},
{
  name: `Mangara of Corondor`,
  types: [CT.Creature, CT.Legendary],
  subtypes: ['Wizard'],
  mc: '1WW',
  category: MC.Interaction,
  tags: [
    MT.HasTapAbility,
  ],
},

{
  name: `Summoning Station`,
  types: [CT.Artifact],
  mc: '7',
  category: MC.Threat,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesColorlessCreatures,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
  ],
},
{
  name: `Illustrious Wanderglyph`,
  types: [CT.Creature, CT.Artifact],
  mc: '4W',
  category: MC.Threat,
  tags: [
    MT.MakesColorlessCreatures,
    MT.MakesMassTokens,
    MT.MakesArtifactTokens,
    MT.MakesDisposableTokens,
  ],
},
{
  name: `Darksteel Splicer`,
  types: [CT.Creature],
  mc: '6W',
  category: MC.Threat,
  tags: [
    MT.MakesColorlessCreatures,
    MT.MakesMassTokens,
    MT.MakesValuableTokens,
    MT.TargetsTribal,
    MT.LikesBeingCopiedWithETB,
  ],
},
{
  name: `Thelonite Druid`,
  types: [CT.Creature],
  mc: '2G',
  category: MC.Threat,
  tags: [
    MT.SacrificeOutletCreature,
    MT.MakesColorlessCreatures,
  ],
},
{
  name: `Lunar Hatchling`,
  types: [CT.Creature],
  mc: '4GU',
  category: MC.Threat,
  tags: [
    MT.TutorsBasicsToHand,
  ],
},
{
  name: `Doppelgang`,
  types: [CT.Sorcery],
  mc: 'XXXGU',
  category: MC.Threat,
  tags: [
    MT.MakesDevotion,
    MT.MakesMassTokens,
    MT.MakesValuableTokens,
    MT.CopiesPermanent,
    MT.CopiesWithETB,
  ],
},
{
  name: `Kamahl's Will`,
  types: [CT.Instant],
  mc: '3G',
  category: MC.Interaction,
  tags: [
    MT.MakesColorlessCreatures,
  ],
},
{
  name: `Basilisk Collar`,
  types: [CT.Artifact, CT.Equipment],
  mc: '1',
  category: MC.Threat,
  tags: [
    MT.GainsLife,
  ],
},
{
  name: `Essence of the Wild`,
  types: [CT.Creature],
  mc: '3GGG',
  category: MC.Threat,
  tags: [
    MT.MakesDevotion,
    MT.UsesDisposableCreatureTokens,
    MT.WantsSacrificeOutletCreature,
  ],
},
{
  name: `Gruff Triplets`,
  types: [CT.Creature],
  mc: '3GGG',
  category: MC.Threat,
  tags: [
    MT.MakesDevotion,
    MT.WantsSacrificeOutletCreature,
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
},
{
  name: `The One Ring`,
  types: [CT.Artifact, CT.Legendary],
  mc: '4',
  category: MC.Draw,
  tags: [
    MT.HasAgeCounters,
    MT.WantsToBeSacrificed,
    MT.HasTapAbility,
  ],
},
{
  name: `Hadana's Climb // Winged Temple of Orazca`,
  types: [CT.Enchantment, CT.Legendary, CT.Land],
  mc: '1UG',
  category: MC.Ramp,
  tags: [
    MT.HasTapAbility,
    MT.HasPlusCounters,
  ],
},
{
  name: `Scroll Rack`,
  types: [CT.Artifact],
  mc: '2',
  category: MC.Draw,
  tags: [
    MT.ManipulatesTopDeck,
    MT.HasTapAbility,
  ],
},
{
  name: `Sinister Concierge`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '1U',
  category: MC.Interaction,
  tags: [
    MT.WantsToBeSacrificed,
  ],
},
{
  name: `Trostani, Selesnya's Voice`,
  types: [CT.Creature, CT.Legendary],
  mc: 'WWGG',
  category: MC.Threat,
  tags: [
    MT.Populates,
    MT.GainsLife,
    MT.HasTapAbility,
    MT.UsesCreatureETBs,
  ],
},
{
  name: `Selesnya Eulogist`,
  types: [CT.Creature],
  mc: '2G',
  category: MC.Threat,
  tags: [
    MT.Populates,
  ],
},
{
  name: `The Restoration of Eiganjo // Architect of Restoration`,
  types: [CT.Creature, CT.Saga],
  mc: '2W',
  category: MC.Draw,
  tags: [
    MT.MakesColorlessCreatures,
  ],
},
{
  name: `Innocuous Researcher`,
  types: [CT.Creature],
  mc: '3G',
  category: MC.Ramp,
  tags: [
    MT.UntapsAllLands,
    MT.MakesArtifactTokens,
  ],
},
{
  name: `Esix, Fractal Bloom`,
  types: [CT.Creature, CT.Legendary],
  mc: '4UG',
  category: MC.Threat,
  tags: [
    MT.UsesDisposableCreatureTokens,
    MT.UsesDisposableArtifactTokens,
  ],
},
{
  name: `Mirri, Weatherlight Duelist`,
  types: [CT.Creature, CT.Legendary],
  mc: '1WG',
  category: MC.PillowLand,
  tags: [
    MT.WantsToBeTapped,
    MT.VulnerableAttacker,
  ],
},
{
  name: `Angel of Condemnation`,
  types: [CT.Creature],
  mc: '2WW',
  category: MC.Interaction,
  tags: [
    MT.WantsHaste,
    MT.HasTapAbility,
    MT.VulnerableAttacker,
  ],
},
{
  name: `Divine Visitation`,
  types: [CT.Creature],
  mc: '3WW',
  category: MC.Threat,
  tags: [
    MT.UsesDisposableCreatureTokens,
  ],
},
{
  name: `Crested Sunmare`,
  types: [CT.Creature],
  mc: '3WW',
  category: MC.Threat,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
    MT.WantsLifegain,
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
    MT.TargetsTribal,
  ],
},
{
  name: `Shanna, Purifying Blade`,
  types: [CT.Creature, CT.Legendary],
  mc: 'GWU',
  category: MC.Draw,
  tags: [
    MT.GainsLife,
    MT.WantsLifegain,
  ],
},
{
  name: `Darksteel Garrison`,
  types: [CT.Artifact],
  mc: '2',
  category: MC.Misc,
  tags: [
    MT.TriggersOnLandTap,
    MT.ProtectsLand,
  ],
},
{
  name: `Winter Orb`,
  types: [CT.Artifact],
  mc: '2',
  category: MC.Interaction,
  tags: [
    MT.WantsToBeTapped,
    MT.WantsToBeSacrificed,
  ],
},
{
  name: `Static Orb`,
  types: [CT.Artifact],
  mc: '3',
  category: MC.Interaction,
  tags: [
    MT.WantsToBeTapped,
    MT.WantsToBeSacrificed,
  ],
},
{
  name: `Storage Matrix`,
  types: [CT.Artifact],
  mc: '3',
  category: MC.Interaction,
  tags: [
    MT.WantsToBeTapped,
    MT.WantsToBeSacrificed,
  ],
},
{
  name: `Recycle`,
  types: [CT.Enchantment],
  mc: '4GG',
  category: MC.Draw,
  tags: [
    MT.MassDraw,
  ],
  combos: [{
    relationship: ME.CombosWith,
    isMatch: o => o.name.includes('Sensei'),
  }],
},
{
  name: `Song of the Dryads`,
  types: [CT.Enchantment, CT.Aura],
  mc: '2G',
  category: MC.Interaction,
  tags: [
    MT.TurnsIntoLand,
  ],
},
{
  name: `Imprisoned in the Moon`,
  types: [CT.Enchantment, CT.Aura],
  mc: '2U',
  category: MC.Interaction,
  tags: [
    MT.TurnsIntoLand,
  ],
},
{
  name: `Memnarch`,
  types: [CT.Artifact, CT.Creature, CT.Legendary],
  mc: '7',
  category: MC.Interaction,
  tags: [
    MT.TurnsIntoArtifact,
  ],
},
{
  name: `Cleaver Skaab`,
  types: [CT.Creature],
  subtypes: ['Zombie'],
  mc: '3U',
  category: MC.Misc,
  tags: [
    MT.TargetsTribal,
    MT.UsesZombies,
    MT.MakesCreatureTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
},
{
  name: `Timber Protector`,
  types: [CT.Creature],
  subtypes: ['Treefolk'],
  mc: '4G',
  category: MC.Misc,
  tags: [
    MT.TargetsTribal,
    MT.CaresAboutForests,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
},
{
  name: `Marit Lage's Slumber`,
  types: [CT.Enchantment, CT.Legendary],
  mc: '1U',
  category: MC.Threat,
  tags: [
    MT.CaresAboutSnow,
    MT.SacrificesSelf,
    MT.MakesValuableTokens,
  ],
},
{
  name: `Galecaster Colossus`,
  types: [CT.Creature],
  subtypes: ['Giant', 'Wizard'],
  mc: '5UU',
  category: MC.Interaction,
  tags: [
    MT.TargetsTribal,
  ],
  combos: [
    {
      relationship: ME.TribalSynergy,
      isMatch: b => b.subtypes.has('Wizard'),
    },
  ],
},
{
  name: `Progenitor Mimic`,
  types: [CT.Creature],
  mc: '4GU',
  category: MC.Misc,
  tags: [
    MT.CopiesCreatures,
    MT.CopiesManLands,
    MT.CopiesWithCast,
    MT.MakesCreatureTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
  ],
},
{
  name: `Stolen Identity`,
  types: [CT.Sorcery],
  mc: '4UU',
  category: MC.Misc,
  tags: [
    MT.CopiesCreatures,
    MT.CopiesManLands,
    MT.CopiesWithETB,
    MT.MakesCreatureTokens,
    MT.MakesArtifactTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
  ],
},
{
  name: `Esika's Chariot`,
  types: [CT.Artifact],
  mc: '3G',
  category: MC.Misc,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesArtifactTokens,
    MT.MakesValuableTokens,
    MT.MakesDisposableTokens,
    MT.DoublesTokens,
  ],
},
{
  name: `Mechanized Production`,
  types: [CT.Enchantment, CT.Aura],
  mc: '2UU',
  category: MC.Misc,
  tags: [
    MT.MakesArtifactTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
    MT.CopiesArtifacts,
    MT.CopiesWithETB,
  ],
},
{
  name: `Prototype Portal`,
  types: [CT.Artifact],
  mc: '4',
  category: MC.Misc,
  tags: [
    MT.MakesArtifactTokens,
    MT.MakesValuableTokens,
    MT.MakesGradualTokens,
    MT.CopiesArtifacts,
    MT.CopiesWithETB,
    MT.ImprintsFromHand,
  ],
},
{
  name: `The Eternal Wanderer`,
  types: [CT.Planeswalker, CT.Legendary],
  mc: '4WW',
  category: MC.Interaction,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
    MT.CaresAboutOpponentCreatures,
  ],
},
{
  name: `Keeper of the Accord`,
  types: [CT.Creature],
  mc: '3W',
  category: MC.Misc,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
    MT.CaresAboutOpponentCreatures,
    MT.WantsLessLands,
  ],
},
{
  name: `Urza, Prince of Kroog`,
  types: [CT.Creature],
  mc: '2WU',
  category: MC.Threat,
  tags: [
    MT.MakesCreatureTokens,
    MT.MakesGradualTokens,
    MT.MakesDisposableTokens,
    MT.CopiesArtifacts,
    MT.CopiesWithETB,
  ],
},
{
  name: `Smirking Spelljacker`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '4U',
  category: MC.Interaction,
  tags: [
    MT.LikesBeingBounced,
    MT.VulnerableAttacker,
  ],
},
{
  name: `Portal Manipulator`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '2WU',
  category: MC.Interaction,
  tags: [
    MT.LikesBeingBounced,
  ],
},
{
  name: `Disciple of Caelus Nin`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: '4W',
  category: MC.Interaction,
  tags: [
    MT.LikesBeingBounced,
  ],
},
{
  name: `Meddling Mage`,
  types: [CT.Creature],
  subtypes: ['Wizard'],
  mc: 'WU',
  category: MC.Interaction,
  tags: [
    MT.LikesBeingBounced,
  ],
},
];
