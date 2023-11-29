import { CardDraft, CardType as CT } from "../../types";
import { MonumentCategory as MC, MonumentEdge as ME, MonumentTag as MT } from "./monumentTypes";

export const NonLands: CardDraft[] = [{
  name: `Amareth, the Lustrous`,
  mc: '3WUG',
  types: [CT.Creature, CT.Legendary],
  subtypes: ['Dragon'],
  category: MC.Draw,
  tags: [MT.CaresAboutTopdeck, MT.UsesTokens, MT.HasLandfall],
}, {
  name: `Monument to Perfection`,
  mc: '2',
  types: [CT.Artifact],
  category: MC.Draw,
  tags: [MT.TutorsBasic],
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
  tags: [MT.TutorsBasic],
},
{
  name: `Mirage Mirror`,
  mc: '3',
  types: [CT.Artifact],
  category: MC.Interaction,
  tags: [
    MT.CopiesCreatures,
    MT.CopiesArtifacts,
    MT.CopiesLands,
    MT.CopiesWithMirror,
  ],
},
{
  name: `Kiora Bests the Sea God`,
  mc: '5UU',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Threat,
},
{
  name: `The World Spell`,
  mc: '5GG',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `Waking the Trolls`,
  mc: '4RG',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Threat,
},
{
  name: `The Bath Song`,
  mc: '3U',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
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
    MT.MakesTokens,
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
  tags: [MT.HasLandfall, MT.MakesTokens],
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
  tags: [MT.CaresAboutForests],
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
  types: [CT.Creature, CT.Legendary],
  tags: [
    MT.HasChangeling,
    MT.CopiesCreatures,
    MT.CopiesArtifacts,
    MT.CopiesLands,
    MT.CopiesWithCast,
    MT.HasPlusCounters,
  ],
  category: MC.Threat,
},
{
  name: `Maskwood Nexus`,
  mc: '4',
  types: [CT.Artifact],
  tags: [MT.MakesTokens, MT.GivesChangeling],
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
  tags: [MT.Proliferates, MT.MakesTokens],
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
  tags: [MT.CaresAboutTargeting, MT.WantsSacrificeOutlet],
  category: MC.Interaction,
},
{
  name: `Elvish Reclaimer`,
  mc: 'G',
  types: [CT.Creature],
  tags: [MT.SacrificesLands, MT.TriggersLandfall],
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
  tags: [MT.MakesTokens, MT.HasLandfall],
  category: MC.Threat,
},
{
  name: `Dragonlair Spider`,
  mc: '2RRGG',
  types: [CT.Creature],
  subtypes: ['Spider'],
  tags: [MT.MakesTokens],
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
    MT.WantsSacrificeOutlet,
  ],
},
{
  name: `Battle of Frost and Fire`,
  mc: '3RU',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
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
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Jalira, Master Polymorphist`,
  mc: '3U',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.UsesTokens, MT.SacrificeOutlet],
  category: MC.Draw,
},
{
  name: `Reality Scramble`,
  mc: '2RR',
  types: [CT.Sorcery],
  tags: [MT.UsesTokens, MT.SacrificeOutlet],
  category: MC.Draw,
},
{
  name: `Kindred Discovery`,
  mc: '3RR',
  types: [CT.Enchantment],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesTokens],
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
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Helm of Possession`,
  mc: '4',
  types: [CT.Artifact],
  tags: [MT.UsesTokens, MT.SacrificeOutlet, MT.WantsSacrificeOutlet],
  category: MC.Interaction,
},
{
  name: `Barrin, Master Wizard`,
  mc: '2UU',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.UsesTokens, MT.SacrificeOutlet],
  category: MC.Interaction,
},
{
  name: `Perilous Forays`,
  mc: '3GG',
  types: [CT.Enchantment],
  tags: [MT.UsesTokens, MT.TutorsBasic, MT.SacrificeOutlet],
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
      isMatch: other => other.tags.has(MT.TutorsBasic),
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
  tags: [MT.SacrificesLands],
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
  tags: [MT.TutorsChangeling],
  category: MC.Ramp,
},
{
  name: `Overtaker`,
  mc: '3U',
  types: [CT.Creature],
  tags: [MT.WantsSacrificeOutlet],
  category: MC.Interaction,
},
{
  name: `Callous Oppressor`,
  mc: '1UU',
  types: [CT.Creature],
  tags: [MT.WantsSacrificeOutlet],
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
  tags: [MT.CopiesLands, MT.CopiesWithMirror],
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
  tags: [MT.MakesTokens, MT.VulnerableAttacker],
  category: MC.Threat,
},
{
  name: `The Akroan War`,
  mc: '3R',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
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
  tags: [MT.HasChangeling],
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
},
{
  name: `Fortitude`,
  mc: '1G',
  types: [CT.Enchantment],
  tags: [MT.CaresAboutForests, MT.SacrificesLands],
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
  tags: [MT.SacrificesLands, MT.CaresAboutGettingUntapped],
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
  tags: [MT.AnimatesLand, MT.CaresAboutGettingUntapped],
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
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `World Breaker`,
  mc: '6G',
  types: [CT.Creature],
  tags: [MT.SacrificesLands],
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
  tags: [MT.WantsSacrificeOutlet],
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
      isMatch: other => other.tags.has(MT.MakesTokens),
    },
  ],
},
{
  name: `Humble Defector`,
  mc: '1R',
  types: [CT.Creature],
  tags: [MT.DonatesSelf, MT.CaresAboutGettingUntapped],
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
      other.tags.has(MT.SacrificesLands) ||
      (other.mv <= 3 && (
        other.subtypes.has('Saga') ||
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
  tags: [MT.HasIndestructible, MT.HasAbilityCounters, MT.UsesTokens, MT.MakesTokens, MT.SacrificeOutlet],
  category: MC.Misc,
},
{
  name: `Weathered Wayfarer`,
  mc: 'W',
  types: [CT.Creature],
  tags: [MT.TutorsLand, MT.TriggersLandfall, MT.CaresAboutGettingUntapped],
  category: MC.Tutor,
},
{
  name: `Knight of the Reliquary`,
  mc: '1WG',
  types: [CT.Creature],
  tags: [MT.TutorsLand, MT.TriggersLandfall, MT.SacrificesLands, MT.CaresAboutForests, MT.CaresAboutPlains, MT.CaresAboutGettingUntapped],
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
  tags: [MT.CaresAboutGettingUntapped],
  category: MC.Draw,
},
{
  name: `Oath of Lieges`,
  mc: '1W',
  types: [CT.Enchantment],
  tags: [MT.TutorsBasic],
  category: MC.Ramp,
},
{
  name: `Rubinia Soulsinger`,
  mc: '2WUG',
  types: [CT.Creature, CT.Legendary],
  tags: [MT.WantsSacrificeOutlet, MT.CaresAboutGettingUntapped],
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
  types: [CT.Enchantment],
  subtypes: ['Saga'],
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
  tags: [MT.HasMinusCounters, MT.WantsSacrificeOutlet],
  category: MC.Recursion,
},
{
  name: `Mirror Entity`,
  mc: '2W',
  types: [CT.Creature],
  tags: [MT.HasChangeling],
  category: MC.Threat,
},
{
  name: `The Fall of Lord Konda // Fragment of Konda`,
  nick: `The Fall of Lord Konda`,
  mc: '2W',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `Elspeth Conquers Death`,
  mc: '3WW',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
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
  tags: [MT.UsesTokens],
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
  tags: [MT.UsesTokens],
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
        other.subtypes.has('Saga') ||
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
    MT.UsesTokens,
    MT.SacrificeOutlet,
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
    MT.CaresAboutGettingUntapped,
  ],
  category: MC.Threat,
},
{
  name: `Avarice Totem`,
  mc: '1',
  types: [CT.Artifact],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Retrofitter Foundry`,
  mc: '1',
  types: [CT.Artifact],
  tags: [MT.TargetsTribal, MT.MakesTokens],
  category: MC.Threat,
},
{
  name: `Sensei's Divining Top`,
  mc: '1',
  types: [CT.Artifact],
  category: MC.Threat,
  combos: [{
    relationship: ME.CombosWith,
    isMatch: other => other.tags.has(
      MT.CaresAboutTopdeck,
      MT.TutorsBasic,
      MT.TutorsForest,
      MT.TutorsPlains,
      MT.TutorsLand,
    ),
  }]
},
{
  name: `Evolutionary Leap`,
  mc: '1G',
  types: [CT.Enchantment],
  tags: [MT.SacrificeOutlet, MT.UsesTokens],
  category: MC.Draw,
},
{
  name: `Glen Elendra Archmage`,
  mc: '3U',
  types: [CT.Creature],
  subtypes: ['Wizard'],
  tags: [MT.HasMinusCounters],
  category: MC.Interaction,
},
{
  name: `Blossoming Tortoise`,
  mc: '2GG',
  types: [CT.Creature],
  tags: [],
  category: MC.Recursion,
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.tags.has(MT.SacrificesLands) || (
        other.types.has(CT.Land) &&
        other.tags.has(MT.SacrificesSelf)
      ),
  }],
},
{
  name: `Scaretiller`,
  mc: '4',
  types: [CT.Artifact, CT.Creature],
  category: MC.Recursion,
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.tags.has(MT.SacrificesLands) || (
        other.types.has(CT.Land) &&
        other.tags.has(MT.SacrificesSelf)
      ),
  }],
},
{
  name: `Martyr's Cause`,
  mc: '2W',
  types: [CT.Enchantment],
  tags: [MT.SacrificeOutlet, MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Phyrexian Swarmlord`,
  mc: '4GG',
  types: [CT.Creature],
  subtypes: ['Insect', 'Horror'],
  tags: [MT.MakesTokens, MT.PoisonCounters],
  category: MC.Threat,
},
{
  name: `Woodfall Primus`,
  mc: '5GGG',
  types: [CT.Creature],
  tags: [MT.WantsSacrificeOutlet, MT.HasMinusCounters],
  category: MC.Interaction,
},
{
  name: `Battle at the Helvault`,
  mc: '4WW',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `The Night of the Doctor`,
  mc: '4WW',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `The Mending of Dominaria`,
  mc: '3GG',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Recursion,
  combos: [{
    relationship: ME.Reanimates,
    isMatch: other =>
      other.tags.has(MT.SacrificesLands) || (
        other.types.has(CT.Land) &&
        other.tags.has(MT.SacrificesSelf)
      ),
  }],
},
{
  name: `Song of Eärendil`,
  mc: '3GU',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `Behold the Unspeakable // Vision of the Unspeakable`,
  nick: `Behold the Unspeakable`,
  mc: '3UU',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `The Caves of Androzani`,
  mc: '3W',
  types: [CT.Enchantment],
  subtypes: ['Saga'],
  tags: [MT.ProliferatesNonSaga, MT.TutorsChangeling],
  category: MC.Tutor,
},
{
  name: `Scholar of New Horizons`,
  mc: '1W',
  types: [CT.Creature],
  tags: [MT.RemovesCounters, MT.TutorsPlains],
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
      other.subtypes.has('Saga'),
  }],
},
];
