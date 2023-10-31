import { CardDraft, CardType } from "../../types";
import { MonumentCategory as MC, MonumentEdge as ME, MonumentTag as MT } from "./types";

export const NonLands: CardDraft[] = [{
  name: `Monument to Perfection`,
  mc: '2',
  types: [CardType.Artifact],
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
  mc: '2',
  types: [CardType.Artifact],
  category: MC.Draw,
  tags: [MT.TutorsBasic],
},
{
  name: `Mirage Mirror`,
  mc: '3',
  types: [CardType.Artifact],
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
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Threat,
},
{
  name: `The World Spell`,
  mc: '5GG',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `Waking the Trolls`,
  mc: '4RG',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Threat,
},
{
  name: `The Bath Song`,
  mc: '3U',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `Myojin of Towering Might`,
  mc: '5GGG',
  types: [CardType.Creature],
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
  types: [CardType.Creature],
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
  types: [CardType.Creature],
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
  types: [],
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
  types: [],
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
  types: [CardType.Creature],
  tags: [
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Threat,
},
{
  name: `Omnath, Locus of Rage`,
  mc: '3RRGG',
  types: [CardType.Creature],
  tags: [MT.HasLandfall, MT.MakesTokens],
  category: MC.Threat,
},
{
  name: `Tatyova, Benthic Druid`,
  mc: '3UG',
  types: [CardType.Creature],
  tags: [MT.HasLandfall],
  category: MC.Draw,
},
{
  name: `Lifetap`,
  mc: 'UU',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutForests],
  category: MC.Lifegain,
},
{
  name: `Taurean Mauler`,
  mc: '2R',
  types: [CardType.Creature],
  subtypes: ['Changeling'],
  category: MC.Threat,
},
{
  name: `Moritte of the Frost`,
  mc: '2UUG',
  types: [CardType.Creature],
  subtypes: ['Changeling'],
  tags: [
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
  types: [CardType.Artifact],
  subtypes: ['Changeling'],
  tags: [MT.MakesTokens],
  category: MC.Buff,
},
{
  name: `Runed Stalactite`,
  mc: '1',
  types: [CardType.Artifact, CardType.Equipment],
  subtypes: ['Changeling'],
  category: MC.Buff,
},
{
  name: `Animation Module`,
  mc: '1',
  types: [CardType.Artifact],
  tags: [MT.Proliferates, MT.MakesTokens],
  category: MC.Buff,
},
{
  name: `Dismiss into Dream`,
  mc: '6U',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Willbreaker`,
  mc: '3UU',
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  tags: [MT.CaresAboutTargeting, MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Elvish Reclaimer`,
  mc: 'G',
  types: [CardType.Creature],
  tags: [MT.SacrificesLands, MT.TriggersLandfall],
  category: MC.Tutor,
},
{
  name: `Expedition Map`,
  mc: '1',
  types: [CardType.Artifact],
  tags: [MT.SacrificesSelf],
  category: MC.Tutor,
},
{
  name: `Scute Swarm`,
  mc: '2G',
  types: [CardType.Creature],
  subtypes: ['Insect'],
  tags: [MT.MakesTokens, MT.HasLandfall],
  category: MC.Threat,
},
{
  name: `Dragonlair Spider`,
  mc: '2RRGG',
  types: [CardType.Creature],
  subtypes: ['Spider'],
  tags: [MT.MakesTokens],
  category: MC.Threat,
},
{
  name: `Sundial of the Infinite`,
  mc: '2',
  types: [CardType.Artifact],
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
  types: [CardType.Artifact],
  category: MC.Buff,
  tags: [
    MT.HasMinusCounters,
    MT.TargetsCreatures,
  ],
},
{
  name: `Battle of Frost and Fire`,
  mc: '3RU',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
  tags: [MT.TargetsTribal],
},
{
  name: `Transmogrifying Wand`,
  mc: '3',
  types: [CardType.Artifact],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Interaction,
},
{
  name: `Nissa, Ascended Animist`,
  mc: '3GGGG',
  types: [CardType.Planeswalker],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Interaction,
},
{
  name: `Nevinyrral's Disk`,
  mc: '4',
  types: [CardType.Artifact],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Boompile`,
  mc: '4',
  types: [CardType.Artifact],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Proteus Staff`,
  mc: '3',
  types: [CardType.Artifact],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Jalira, Master Polymorphist`,
  mc: '3U',
  types: [CardType.Creature],
  tags: [MT.UsesTokens],
  category: MC.Draw,
},
{
  name: `Reality Scramble`,
  mc: '2RR',
  types: [CardType.Sorcery],
  tags: [MT.UsesTokens],
  category: MC.Draw,
},
{
  name: `Kindred Discovery`,
  mc: '3RR',
  types: [CardType.Enchantment],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesTokens],
},
{
  name: `Hordewing Skaab`,
  mc: '4U',
  types: [CardType.Creature],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesZombies],
},
{
  name: `Djinn of Infinite Deceits`,
  mc: '4UU',
  types: [CardType.Creature],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Helm of Possession`,
  mc: '4',
  types: [CardType.Artifact],
  tags: [MT.UsesTokens, MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Barrin, Master Wizard`,
  mc: '2UU',
  types: [CardType.Creature],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Perilous Forays`,
  mc: '3GG',
  types: [CardType.Enchantment],
  tags: [MT.UsesTokens, MT.TutorsBasic],
  category: MC.Ramp,
},
{
  name: `Rootpath Purifier`,
  mc: '3G',
  types: [CardType.Creature],
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
  types: [CardType.Creature],
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
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Constant Mists`,
  mc: '1G',
  types: [CardType.Instant],
  tags: [MT.SacrificesLands],
  category: MC.Lifegain,
},
{
  name: `Nacatl War-Pride`,
  mc: '3GGG',
  types: [CardType.Creature],
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
  types: [CardType.Artifact],
  tags: [MT.CaresAboutOpponentCreatures],
  category: MC.Interaction,
},
{
  name: `Realmbreaker, the Invasion Tree`,
  mc: '3',
  types: [CardType.Artifact, CardType.Legendary],
  category: MC.Ramp,
  combos: [{
    relationship: ME.TribalSynergy,
    isMatch: other => (
      other.types.has('Creature') &&
      other.subtypes.has('Changeling')
    ),
  }],
},
{
  name: `Overtaker`,
  mc: '3U',
  types: [CardType.Creature],
  tags: [MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Callous Oppressor`,
  mc: '1UU',
  types: [CardType.Creature],
  tags: [MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Utvara Hellkite`,
  mc: '6RR',
  types: [CardType.Creature],
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
  types: [CardType.Creature],
  tags: [MT.VulnerableAttacker, MT.SundialFriendly],
  category: MC.Ramp,
},
{
  name: `Sword of the Animist`,
  mc: '2',
  types: [CardType.Equipment],
  tags: [MT.VulnerableAttacker, MT.SundialFriendly],
  category: MC.Ramp,
},
{
  name: `Vizier of Tumbling Sands`,
  mc: '2U',
  types: [CardType.Creature],
  tags: [MT.UntapsLand, MT.UntapsCreature],
  category: MC.Ramp,
},
{
  name: `Seedborn Muse`,
  mc: '3GG',
  types: [CardType.Creature],
  tags: [MT.UntapsAllLands],
  category: MC.Ramp,
},
{
  name: `Manascape Refractor`,
  mc: '3',
  types: [CardType.Artifact],
  category: MC.Ramp,
  tags: [MT.CopiesLands, MT.CopiesWithMirror],
},
{
  name: `Wilderness Reclamation`,
  mc: '3G',
  types: [CardType.Enchantment],
  tags: [MT.UntapsAllLands],
  category: MC.Ramp,
},
{
  name: `Krenko, Tin Street Kingpin`,
  mc: '2R',
  types: [CardType.Creature],
  tags: [MT.MakesTokens, MT.VulnerableAttacker],
  category: MC.Threat,
},
{
  name: `The Akroan War`,
  mc: '3R',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `Spike Weaver`,
  mc: '2GG',
  types: [CardType.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Lifegain,
},
{
  name: `Myojin of Life's Web`,
  mc: '6GGG',
  types: [CardType.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Threat,
},
{
  name: `Myojin of Seeing Winds`,
  mc: '7UUU',
  types: [CardType.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Draw,
},
{
  name: `Scavenged Brawler`,
  mc: '6',
  types: [CardType.Creature, CardType.Artifact],
  tags: [MT.HasAbilityCounters, MT.Flashback],
  category: MC.Buff,
},
{
  name: `Slippery Bogbonder`,
  mc: '3G',
  types: [CardType.Creature],
  tags: [MT.HasAbilityCounters],
  category: MC.Buff,
},
{
  name: `Shapesharer`,
  mc: '2U',
  types: [CardType.Creature],
  subtypes: ['Changeling'],
  category: MC.Threat,
},
{
  name: `Starke of Rath`,
  mc: '1RR',
  types: [CardType.Creature],
  tags: [MT.DonatesSelf],
  category: MC.Interaction,
},
{
  name: `Puca's Mischief`,
  mc: '3U',
  types: [CardType.Enchantment],
  tags: [MT.ExchangesForCreature],
  category: MC.Interaction,
},
{
  name: `Perplexing Chimera`,
  mc: '3U',
  types: [CardType.Creature, CardType.Enchantment],
  tags: [MT.DonatesSelf],
  category: MC.Interaction,
},
{
  name: `Lithoform Engine`,
  mc: '4',
  types: [CardType.Artifact],
  category: MC.Misc,
},
{
  name: `Fortitude`,
  mc: '1G',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutForests, MT.SacrificesLands],
  category: MC.Buff,
},
{
  name: `Roots of Life`,
  mc: '1GG',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutSwamps],
  category: MC.Lifegain,
},
{
  name: `Spreading Algae`,
  mc: 'G',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutSwamps, MT.CaresAboutGettingLandTapped],
  category: MC.Interaction,
},
{
  name: `Nightmare Lash`,
  mc: '4',
  types: [CardType.Artifact],
  tags: [MT.CaresAboutSwamps],
  category: MC.Buff,
},
{
  name: `Dualcaster Mage`,
  mc: '1RR',
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Draw,
},
{
  name: `Radiant Performer`,
  mc: '3RR',
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
},
{
  name: `Heartless Hidetsugu`,
  mc: '3RR',
  types: [CardType.Creature],
  tags: [MT.DealsDamageToPlayers],
  category: MC.Threat,
},
{
  name: `Apex Altisaur`,
  mc: '7GG',
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Interaction,
},
{
  name: `Polyraptor`,
  mc: '6GG',
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Threat,
},
{
  name: `Ranging Raptors`,
  mc: '2G',
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Ramp,
},
{
  name: `Vigor`,
  mc: '3GGG',
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Threat,
},
{
  name: `Fractured Loyalty`,
  mc: '1R',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Dreamscape Artist`,
  mc: '2U',
  types: [CardType.Creature],
  tags: [MT.SacrificesLands, MT.CaresAboutGettingUntapped],
  category: MC.Ramp,
},
{
  name: `Dowsing Dagger // Lost Vale`,
  mc: '2',
  nick: `Dowsing Dagger`,
  types: [CardType.Artifact],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
  category: MC.Ramp,
},
{
  name: `Conqueror's Galleon // Conqueror's Foothold`,
  mc: '4',
  nick: `Conqueror's Galleon`,
  types: [CardType.Artifact],
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
  types: [CardType.Instant],
  tags: [MT.AnimatesLand],
  category: MC.Threat,
},
{
  name: `Spawning Grounds`,
  mc: '6GG',
  types: [CardType.Enchantment],
  tags: [MT.AnimatesLand, MT.CaresAboutGettingUntapped],
  category: MC.Threat,
},
{
  name: `Druid Class`,
  mc: '1G',
  types: [CardType.Enchantment],
  tags: [MT.AnimatesLand],
  category: MC.Threat,
},
{
  name: `Stone-Seeder Hierophant`,
  mc: '2GG',
  types: [CardType.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `Fatestitcher`,
  mc: '3U',
  types: [CardType.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `Kiora's Follower`,
  mc: 'UG',
  types: [CardType.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `The Phasing of Zhalfir`,
  mc: '2UU',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `World Breaker`,
  mc: '6G',
  types: [CardType.Creature],
  tags: [MT.SacrificesLands],
  category: MC.Interaction,
},
{
  name: `Cyclone Summoner`,
  mc: '5UU',
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
  tags: [MT.LikesBeingCopiedWithCast],
},
{
  name: `Sower of Temptation`,
  mc: '2UU',
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  tags: [MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Pendant of Prosperity`,
  mc: '3',
  types: [CardType.Artifact],
  category: MC.Draw,
  tags: [MT.LikesBeingCopiedWithMirror],
},
{
  name: `Skullclamp`,
  mc: '1',
  types: [CardType.Artifact, CardType.Equipment],
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
  types: [CardType.Creature],
  tags: [MT.DonatesSelf, MT.CaresAboutGettingUntapped],
  category: MC.Draw,
},
{
  name: `Khârn the Betrayer`,
  mc: '3R',
  types: [CardType.Creature],
  tags: [MT.DonatesSelf],
  category: MC.Draw,
},
{
  name: `Sun Titan`,
  mc: '4WW',
  types: [CardType.Creature],
  category: MC.Recursion,
  combos: [{
    relationship: ME.FueledBy,
    isMatch: other =>
      other.tags.has(MT.SacrificesLands) ||
      (other.mv <= 3 && (
        other.subtypes.has('Saga') ||
        other.tags.has(MT.SacrificesSelf)
      )),
  }]
},
{
  name: `Arwen, Mortal Queen`,
  mc: '1WG',
  types: [CardType.Creature],
  tags: [MT.HasIndestructible, MT.HasAbilityCounters],
  category: MC.Misc,
},
{
  name: `Luminous Broodmoth`,
  mc: '3WW',
  types: [CardType.Creature],
  tags: [MT.HasAbilityCounters],
  category: MC.Recursion,
},
{
  name: `Mondrak, Glory Dominus`,
  mc: '2WW',
  types: [CardType.Creature],
  tags: [MT.HasIndestructible, MT.HasAbilityCounters, MT.UsesTokens, MT.MakesTokens],
  category: MC.Misc,
},
{
  name: `Weathered Wayfarer`,
  mc: 'W',
  types: [CardType.Creature],
  tags: [MT.TutorsLand, MT.TriggersLandfall],
  category: MC.Tutor,
},
{
  name: `Karma`,
  mc: '2WW',
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutSwamps, MT.DealsDamageToPlayers, MT.SundialFriendly],
  category: MC.Misc,
},
{
  name: `Wargate`,
  mc: 'WUG',
  types: [CardType.Sorcery],
  tags: [MT.TutorsLand],
  category: MC.Tutor,
},
{
  name: `Selvala, Explorer Returned`,
  mc: '1WG',
  types: [CardType.Creature, CardType.Legendary],
  subtypes: ['Elf'],
  tags: [MT.CaresAboutGettingUntapped],
  category: MC.Draw,
},
{
  name: `Oath of Lieges`,
  mc: '1W',
  types: [CardType.Enchantment],
  tags: [MT.TutorsBasic],
  category: MC.Ramp,
},
{
  name: `Rubinia Soulsinger`,
  mc: '2WUG',
  types: [CardType.Creature, CardType.Legendary],
  tags: [MT.ThreatensCreatures, MT.CaresAboutGettingUntapped],
  category: MC.Interaction,
},
{
  name: `Novablast Wurm`,
  mc: '3WWGG',
  types: [CardType.Creature],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Magus of the Disk`,
  mc: '2WW',
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Tale of Tinúviel`,
  mc: '3WW',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Recursion,
},
{
  name: `Emeria Shepherd`,
  mc: '5WW',
  types: [CardType.Creature],
  tags: [MT.CaresAboutPlains, MT.HasLandfall],
  category: MC.Recursion,
},
{
  name: `Twilight Shepherd`,
  mc: '3WWW',
  types: [CardType.Creature],
  tags: [MT.HasMinusCounters],
  category: MC.Recursion,
},
{
  name: `Mirror Entity`,
  mc: '2W',
  types: [CardType.Creature],
  subtypes: ['Changeling'],
  category: MC.Threat,
},
{
  name: `The Fall of Lord Konda // Fragment of Konda`,
  mc: '2W',
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `Staff of Titania`,
  mc: '2',
  types: [CardType.Artifact, CardType.Equipment],
  tags: [MT.CaresAboutForests],
  category: MC.Threat,
},
{
  name: `Eldrazi Monument`,
  mc: '5',
  types: [CardType.Artifact],
  tags: [MT.UsesTokens],
  category: MC.Buff,
},
];
