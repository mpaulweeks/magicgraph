import { CardDraft, CardType } from "../../types";
import { MonumentCategory as MC, MonumentEdge as ME, MonumentTag as MT } from "./types";

export const NonLands: CardDraft[] = [{
  name: `Monument to Perfection`,
  types: [CardType.Artifact],
  category: MC.Draw,
  tags: [MT.CaresAboutBasics],
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other => other.subtypes.has('Sphere'),
    },
  ],
},
{
  name: `Thaumatic Compass // Spires of Orazca`,
  types: [CardType.Artifact],
  category: MC.Draw,
  tags: [MT.CaresAboutBasics],
},
{
  name: `Mirage Mirror`,
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
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Threat,
},
{
  name: `The World Spell`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `Waking the Trolls`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Threat,
},
{
  name: `The Bath Song`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Draw,
},
{
  name: `Myojin of Towering Might`,
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
  types: [CardType.Creature],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Threat,
},
{
  name: `Solphim, Mayhem Dominus`,
  types: [CardType.Creature],
  tags: [
    MT.HasAbilityCounters,
    MT.HasIndestructible,
  ],
  category: MC.Threat,
},
{
  name: `Omnath, Locus of Rage`,
  types: [CardType.Creature],
  tags: [MT.HasLandfall, MT.MakesTokens],
  category: MC.Threat,
},
{
  name: `Tatyova, Benthic Druid`,
  types: [CardType.Creature],
  tags: [MT.HasLandfall],
  category: MC.Draw,
},
{
  name: `Lifetap`,
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutForests],
  category: MC.Lifegain,
},
{
  name: `Taurean Mauler`,
  types: [CardType.Creature],
  subtypes: ['Changeling'],
  category: MC.Threat,
},
{
  name: `Moritte of the Frost`,
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
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Willbreaker`,
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  tags: [MT.CaresAboutTargeting, MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Elvish Reclaimer`,
  types: [CardType.Creature],
  tags: [MT.SacrificesLands],
  category: MC.Draw,
},
{
  name: `Expedition Map`,
  types: [CardType.Artifact],
  mc: '1',
  category: MC.Draw,
},
{
  name: `Scute Swarm`,
  types: [CardType.Creature],
  subtypes: ['Insect'],
  tags: [MT.MakesTokens],
  category: MC.Threat,
},
{
  name: `Dragonlair Spider`,
  types: [CardType.Creature],
  subtypes: ['Spider'],
  tags: [MT.MakesTokens],
  category: MC.Threat,
},
{
  name: `Sundial of the Infinite`,
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
  types: [CardType.Artifact],
  category: MC.Buff,
  tags: [
    MT.HasMinusCounters,
    MT.TargetsCreatures,
  ],
},
{
  name: `Battle of Frost and Fire`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
  tags: [MT.TargetsTribal],
},
{
  name: `Transmogrifying Wand`,
  types: [CardType.Artifact],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Interaction,
},
{
  name: `Nissa, Ascended Animist`,
  types: [CardType.Planeswalker],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Interaction,
},
{
  name: `Nevinyrral's Disk`,
  types: [CardType.Artifact],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Boompile`,
  types: [CardType.Artifact],
  tags: [MT.DestroysAll],
  category: MC.Interaction,
},
{
  name: `Proteus Staff`,
  types: [CardType.Artifact],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Jalira, Master Polymorphist`,
  types: [CardType.Creature],
  tags: [MT.UsesTokens],
  category: MC.Draw,
},
{
  name: `Reality Scramble`,
  types: [CardType.Sorcery],
  tags: [MT.UsesTokens],
  category: MC.Draw,
},
{
  name: `Kindred Discovery`,
  types: [CardType.Enchantment],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesTokens],
},
{
  name: `Hordewing Skaab`,
  types: [CardType.Creature],
  category: MC.Draw,
  tags: [MT.TargetsTribal, MT.UsesZombies],
},
{
  name: `Djinn of Infinite Deceits`,
  types: [CardType.Creature],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Helm of Possession`,
  types: [CardType.Artifact],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Barrin, Master Wizard`,
  types: [CardType.Creature],
  tags: [MT.UsesTokens],
  category: MC.Interaction,
},
{
  name: `Perilous Forays`,
  types: [CardType.Enchantment],
  tags: [MT.UsesTokens, MT.CaresAboutBasics],
  category: MC.Ramp,
},
{
  name: `Rootpath Purifier`,
  types: [CardType.Creature],
  category: MC.Draw,
  combos: [
    {
      relationship: ME.CombosWith,
      isMatch: other => other.tags.has(MT.CaresAboutBasics),
    },
  ],
},
{
  name: `Aven Courier`,
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
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Constant Mists`,
  types: [CardType.Instant],
  tags: [MT.SacrificesLands],
  category: MC.Lifegain,
},
{
  name: `Nacatl War-Pride`,
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
  types: [CardType.Artifact],
  tags: [MT.CaresAboutOpponentCreatures],
  category: MC.Interaction,
},
{
  name: `Realmbreaker, the Invasion Tree`,
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
  types: [CardType.Creature],
  tags: [MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Callous Oppressor`,
  types: [CardType.Creature],
  tags: [MT.ThreatensCreatures],
  category: MC.Interaction,
},
{
  name: `Utvara Hellkite`,
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
  types: [CardType.Creature],
  tags: [MT.VulnerableAttacker, MT.SundialFriendly],
  category: MC.Ramp,
},
{
  name: `Sword of the Animist`,
  types: [CardType.Equipment],
  tags: [MT.VulnerableAttacker, MT.SundialFriendly],
  category: MC.Ramp,
},
{
  name: `Vizier of Tumbling Sands`,
  types: [CardType.Creature],
  tags: [MT.UntapsLand, MT.UntapsCreature],
  category: MC.Ramp,
},
{
  name: `Seedborn Muse`,
  types: [CardType.Creature],
  tags: [MT.UntapsAllLands],
  category: MC.Ramp,
},
{
  name: `Manascape Refractor`,
  types: [CardType.Artifact],
  category: MC.Ramp,
  tags: [MT.CopiesLands, MT.CopiesWithMirror],
},
{
  name: `Wilderness Reclamation`,
  types: [CardType.Enchantment],
  tags: [MT.UntapsAllLands],
  category: MC.Ramp,
},
{
  name: `Krenko, Tin Street Kingpin`,
  types: [CardType.Creature],
  tags: [MT.MakesTokens, MT.VulnerableAttacker],
  category: MC.Threat,
},
{
  name: `The Akroan War`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `Spike Weaver`,
  types: [CardType.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Lifegain,
},
{
  name: `Myojin of Life's Web`,
  types: [CardType.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Threat,
},
{
  name: `Myojin of Seeing Winds`,
  types: [CardType.Creature],
  tags: [MT.HasLimitedUseCounters],
  category: MC.Draw,
},
{
  name: `Scavenged Brawler`,
  types: [CardType.Creature, CardType.Artifact],
  tags: [MT.HasAbilityCounters, MT.Flashback],
  category: MC.Buff,
},
{
  name: `Slippery Bogbonder`,
  types: [CardType.Creature],
  tags: [MT.HasAbilityCounters],
  category: MC.Buff,
},
{
  name: `Shapesharer`,
  types: [CardType.Creature],
  subtypes: ['Changeling'],
  category: MC.Threat,
},
{
  name: `Starke of Rath`,
  types: [CardType.Creature],
  tags: [MT.DonatesSelf],
  category: MC.Interaction,
},
{
  name: `Puca's Mischief`,
  types: [CardType.Enchantment],
  tags: [MT.ExchangesForCreature],
  category: MC.Interaction,
},
{
  name: `Perplexing Chimera`,
  types: [CardType.Creature, CardType.Enchantment],
  tags: [MT.DonatesSelf],
  category: MC.Interaction,
},
{
  name: `Lithoform Engine`,
  types: [CardType.Artifact],
  category: MC.Misc,
},
{
  name: `Fortitude`,
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutForests, MT.SacrificesLands],
  category: MC.Buff,
},
{
  name: `Roots of Life`,
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutSwamps],
  category: MC.Lifegain,
},
{
  name: `Spreading Algae`,
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutSwamps, MT.CaresAboutGettingLandTapped],
  category: MC.Interaction,
},
{
  name: `Nightmare Lash`,
  types: [CardType.Artifact],
  tags: [MT.CaresAboutSwamps],
  category: MC.Buff,
},
{
  name: `Dualcaster Mage`,
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Draw,
},
{
  name: `Radiant Performer`,
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
},
{
  name: `Heartless Hidetsugu`,
  types: [CardType.Creature],
  tags: [MT.DealsDamageToPlayers],
  category: MC.Threat,
},
{
  name: `Apex Altisaur`,
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Interaction,
},
{
  name: `Polyraptor`,
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Threat,
},
{
  name: `Ranging Raptors`,
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Ramp,
},
{
  name: `Vigor`,
  types: [CardType.Creature],
  tags: [MT.Enrage],
  category: MC.Threat,
},
{
  name: `Fractured Loyalty`,
  types: [CardType.Enchantment],
  tags: [MT.CaresAboutTargeting],
  category: MC.Interaction,
},
{
  name: `Dreamscape Artist`,
  types: [CardType.Creature],
  tags: [MT.SacrificesLands, MT.CaresAboutGettingUntapped],
  category: MC.Ramp,
},
{
  name: `Dowsing Dagger // Lost Vale`,
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
  nick: `Conqueror's Galleon`,
  types: [CardType.Artifact],
  tags: [
    MT.LikesBeingCopiedWithCast,
    MT.LikesBeingCopiedWithETB,
    MT.LikesBeingCopiedWithMirror,
  ],
  category: MC.Draw,
},
{
  name: `Awakening of Vitu-Ghazi`,
  types: [CardType.Instant],
  tags: [MT.AnimatesLand],
  category: MC.Threat,
},
{
  name: `Spawning Grounds`,
  types: [CardType.Enchantment],
  tags: [MT.AnimatesLand, MT.CaresAboutGettingUntapped],
  category: MC.Threat,
},
{
  name: `Druid Class`,
  types: [CardType.Enchantment],
  tags: [MT.AnimatesLand],
  category: MC.Threat,
},
{
  name: `Stone-Seeder Hierophant`,
  types: [CardType.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `Fatestitcher`,
  types: [CardType.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `Kiora's Follower`,
  types: [CardType.Creature],
  tags: [MT.UntapsLand],
  category: MC.Ramp,
},
{
  name: `The Phasing of Zhalfir`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
  category: MC.Interaction,
},
{
  name: `World Breaker`,
  types: [CardType.Creature],
  tags: [MT.SacrificesLands],
  category: MC.Interaction,
},
{
  name: `Cyclone Summoner`,
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
  tags: [MT.LikesBeingCopiedWithCast],
},
{
  name: `Sower of Temptation`,
  types: [CardType.Creature],
  subtypes: ['Wizard'],
  category: MC.Interaction,
},
{
  name: `Pendant of Prosperity`,
  types: [CardType.Artifact],
  category: MC.Draw,
  tags: [MT.LikesBeingCopiedWithMirror],
},
{
  name: `Skullclamp`,
  types: [CardType.Artifact, CardType.Equipment],
  category: MC.Draw,
  mc: '1',
  combos: [
    {
      relationship: ME.FueledBy,
      isMatch: other => other.tags.has(MT.MakesTokens),
    },
  ],
},
{
  name: `Humble Defector`,
  types: [CardType.Creature],
  tags: [MT.DonatesSelf, MT.CaresAboutGettingUntapped],
  category: MC.Draw,
},
{
  name: `Khârn the Betrayer`,
  types: [CardType.Creature],
  tags: [MT.DonatesSelf],
  category: MC.Draw,
},
{
  name: `Sun Titan`,
  types: [CardType.Creature],
  category: MC.Draw,
  combos: [{
    relationship: ME.FueledBy,
    isMatch: other => other.mv <= 3 && other.tags.has(MT.SacrificesSelf),
  }]
},
];
