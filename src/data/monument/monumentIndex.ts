import { collate } from '../../lib/collate';
import { CardDraft, CardType, DeckData } from '../../types';
import { parseList } from '../../util/list';
import { Lands } from './monumentLand';
import { MonMatchers } from './monumentMatcher';
import { NonLands } from './monumentNonLand';
import {
  MonumentCategory,
  MonumentEdges,
  MonumentInverseEdge,
  MonumentTagLinks,
} from './monumentTypes';

const current = parseList(`
Amareth, the Lustrous
Deserted Temple
Drownyard Temple
Elvish Reclaimer
Expedition Map
Field of the Dead
Glacial Chasm
Karn's Bastion
Kiora Bests the Sea God
Lotus Field
Maze of Ith
Mirrex
Monument to Perfection
Moritte of the Frost
Myojin of Towering Might
Nesting Grounds
Spara's Headquarters
Thawing Glaciers
The Mycosynth Gardens
Thespian's Stage
Urza's Saga
Yavimaya, Cradle of Growth
Vesuva
Aura Shards
Knight of the Reliquary
Weathered Wayfarer
Scholar of New Horizons
Arwen, Mortal Queen
Mondrak, Glory Dominus
Sensei's Divining Top
Grove of the Guardian
Myojin of Blooming Dawn
Minamo, School at Water's Edge
Captain Sisay
Blossoming Tortoise
Dust Bowl
Scaretiller
Dark Depths

Shorikai, Genesis Engine
Doubling Season
Echoing Deeps

Doppelgang
Nacatl War-Pride
Mirage Mirror

Basilisk Collar

The One Ring
Flagstones of Trokair
Hall of the Bandit Lord

Crested Sunmare

Restless Prairie
Restless Anchorage
The Shire
Divine Visitation
Selesnya Eulogist
Trostani, Selesnya's Voice
Mirrorpool

Lumbering Falls
Elspeth Conquers Death
Innocuous Researcher
Song of the Dryads
Forbidden Orchard
Mutavault
Progenitor Mimic

Littjara Mirrorlake
The Eternal Wanderer

Realms Uncharted
Imprisoned in the Moon
Hall of Heliod's Generosity
The Night of the Doctor

Faceless Haven
Cleaver Skaab
Timber Protector
Keeper of the Accord
Esika's Chariot

Nesting Dovehawk
Vault 75: Middle School
Strict Proctor
Phyrexian Dreadnought
Dino DNA
Stolen Identity
Emeria, the Sky Ruin
Dryad of the Ilysian Grove
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
Shapesharer
Proteus Staff

Runed Stalactite
Replication Technique
Blinkmoth Nexus

Arcane Heist
Sharding Sphinx

Endbringer
Sphinx of the Second Sun
Combine Chrysalis
Rhys the Redeemed
Gargoyle Castle

Three Blind Mice
Conclave Evangelist
Ocelot Pride
Boseiju, Who Endures
Drowner of Truth
Strength of the Harvest
Suppression Ray
Mosswort Bridge
Shifting Woodland
Prismatic Omen
Realmwright
Planar Nexus
Meloku the Clouded Mirror
Trade Routes
Scryb Ranger
Zimone, Quandrix Prodigy
Budoka Gardener
The Curse of Fenric

Selvala, Explorer Returned
Yenna, Redtooth Regent
Yisan, the Wanderer Bard
Arcum Dagsson
Tolsimir Wolfblood
Arcane Artisan
Helm of the Host
Bramble Sovereign
Spitting Image
Trenzalore Clocktower
Thornglint Bridge
Prototype Portal
`);

// todo add section Illegal for red cards
const rejected = parseList(`
Myojin of Cleansing Fire
Riptide Laboratory
Mangara of Corondor
Magus of the Disk
Galecaster Colossus
Disciple of Caelus Nin
Meddling Mage
Mirri, Weatherlight Duelist

Sundial of the Infinite
The Phasing of Zhalfir
Helm of Possession
Out of Time
Sower of Temptation
Scroll Rack

High Market
Battle at the Helvault
Darksteel Garrison
Evolutionary Leap

Academy Ruins
Nevinyrral's Disk
Boompile
Coercive Portal

Blinkmoth Well
Winter Orb
Static Orb
Storage Matrix

Phyrexia's Core
Spine of Ish Sah
World Breaker
Woodfall Primus
Cyclone Summoner

Smirking Spelljacker
Portal Manipulator

Mechanized Production
Urza, Prince of Kroog
Mishra's Factory
Inkmoth Nexus
Darksteel Citadel

Marit Lage's Slumber
Angel of Condemnation
Shanna, Purifying Blade
Recycle
Reliquary Tower
Sun Titan
Memnarch
Thaumatic Compass // Spires of Orazca
Essence of the Wild
Lithoform Engine
Tomb of the Spirit Dragon
Restless Vinestalk
Lifetap

Nykthos, Shrine to Nyx
Gruff Triplets
Esix, Fractal Bloom
The Restoration of Eiganjo // Architect of Restoration
The Hunter Maze
Castle Ardenvale
Chromatic Orrery
Rubinia Soulsinger
Behold the Unspeakable // Vision of the Unspeakable
Selesnya Sanctuary
Eldrazi Monument
Magus of the Unseen
Sinister Concierge
The World Spell
The Bath Song
Thelonite Druid
Urborg, Tomb of Yawgmoth
Roots of Life
Karma
Hadana's Climb // Winged Temple of Orazca
Illustrious Wanderglyph
Prime Speaker Zegana
Lunar Hatchling
Kamahl's Will
Summoning Station
Hidden Nursery
Pit of Offerings
Tyrite Sanctum
Rootpath Purifier
Darksteel Splicer
Terrain Generator
Unstable Glyphbridge // Sandswirl Wanderglyph
Golden Guardian // Gold-Forge Garrison
Apex Altisaur
Court of Bounty
Desert
Eye of Ugin
Maskwood Nexus
Avarice Totem
Petrified Field
Barrin, Master Wizard
Cauldron of Souls
Mirror Entity
Swarmyard
Retrofitter Foundry
Martyr's Cause
Glen Elendra Archmage
Fabled Passage
Odric, Lunarch Marshal
Swashbuckler's Whip
Kindred Discovery

Perilous Forays
Solemnity
Zopandrel, Hunger Dominus
Riftstone Portal
Gavony Township
Animation Module
Song of Eärendil
The Caves of Androzani
Phyrexian Swarmlord
Twilight Shepherd
Demolition Field
Hordewing Skaab
Tolaria West
Tekuthal, Inquiry Dominus
Myojin of Cryptic Dreams
Kjeldoran Outpost
Tameshi, Reality Architect
Mistveil Plains
Oboro Breezecaller
Luminous Broodmoth
Tale of Tinúviel
The Mending of Dominaria
Kor Haven
Krosan Verge
Vitu-Ghazi, the City-Tree
The Fall of Lord Konda // Fragment of Konda
Jalira, Master Polymorphist
Staff of Titania
Canopy Vista
Dismiss into Dream
Prairie Stream
Willbreaker
Alchemist's Refuge
Aven Courier
Awakening of Vitu-Ghazi
Battle of Frost and Fire
Callous Oppressor
Cascading Cataracts
Celestial Colonnade
Constant Mists
Contested Cliffs
Cowardice
Desolate Lighthouse
Djinn of Infinite Deceits
Dragonlair Spider
Dreamscape Artist
Druid Class
Dualcaster Mage
Emeria Shepherd
Fatestitcher
Flamekin Village
Fortitude
Fractured Loyalty
Hammerheim
Heartless Hidetsugu
Homeward Path
Humble Defector
Kessig Wolf Run
Kher Keep
Khârn the Betrayer
Kiora's Follower
Krenko, Tin Street Kingpin
Manascape Refractor
Moorland Haunt
Myojin of Life's Web
Myojin of Roaring Blades
Myojin of Seeing Winds
Nightmare Lash
Nissa, Ascended Animist
Novablast Wurm
Oath of Lieges
Okina, Temple to the Grandfathers
Omnath, Locus of Rage
Oran-Rief, the Vastwood
Overtaker
Pendant of Prosperity
Perplexing Chimera
Polyraptor
Primeval Herald
Puca's Mischief
Radiant Performer
Ranging Raptors
Reality Scramble
Realmbreaker, the Invasion Tree
Rishadan Port
Scavenged Brawler
Scute Swarm
Seedborn Muse
Shinka, the Bloodsoaked Keep
Skullclamp
Slippery Bogbonder
Solphim, Mayhem Dominus
Sorrow's Path
Spawning Grounds
Spike Weaver
Spreading Algae
Starke of Rath
Stone-Seeder Hierophant
Sword of the Animist
Tatyova, Benthic Druid
Taurean Mauler
The Akroan War
Tolaria
Transmogrifying Wand
Utvara Hellkite
Vigor
Vizier of Tumbling Sands
Waking the Trolls
Ward of Bones
Wilderness Reclamation
Wirewood Lodge
Yavimaya Hollow
Hanweir Battlements // Hanweir, the Writhing Township
Dowsing Dagger // Lost Vale
Conqueror's Galleon // Conqueror's Foothold
`);

const allCards: CardDraft[] = [
  ...Lands.map(c => ({
    ...c,
    types: [CardType.Land, ...(c.additionalTypes ?? [])],
    category: c.overrideCategory ?? MonumentCategory.ComboLand,
    tags: (c.tags ?? []).concat('Is Land'),
    emphasize: true,
  })),
  ...NonLands.map(c => ({
    ...c,
    tags: (c.tags ?? []).concat('Is Not Land'),
  })),
];

const collated = collate({
  current,
  pending,
  choppingBlock,
  rejected,
  cards: allCards,
  tagLinks: MonumentTagLinks,
});

const CategoryColorMap: Record<MonumentCategory, string> = {
  [MonumentCategory.PillowLand]: '#ddf',
  [MonumentCategory.MulticolorLand]: '#dfd',
  [MonumentCategory.ComboLand]: '#fdd',
  [MonumentCategory.Tutor]: '#6ff',
  [MonumentCategory.Misc]: 'grey',
  [MonumentCategory.Threat]: 'salmon',
  [MonumentCategory.Lifegain]: 'lightyellow',
  [MonumentCategory.Buff]: 'Orchid',
  [MonumentCategory.Interaction]: '#FFB010',
  [MonumentCategory.Draw]: 'lightblue',
  [MonumentCategory.Ramp]: 'lightgreen',
  [MonumentCategory.Recursion]: 'orange',
};
export const MonumentData: DeckData = {
  name: 'Monument.dec',
  description:
    'Bant deck that tutors nonbasic lands to form multiple small A/B combos',
  notes: [
    '2024/04/25: Reducing the curve / focusing on mana efficiency (eg cutting Spine of Ish Sah).',
    '2024/04/11: Minimize Monunent package to basics and utility spheres, now has exactly 9 sources.',
    '2023/11/09: New criteria for Sagas: Stage 2 must be spammable. Looping Stage 1 requires having Nesting Grounds already in play and mana to spare.',
    '2023/11/04: Due to color screw and mediocre blue Myojin, start reducing blue to a splash.',
    '2023/10/30: Swap Temur for Bant to gain more indestructible and land tutors.',
  ],
  links: [
    {
      name: 'Monument to Hubris (retired)',
      url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
    },
    {
      name: 'Monument to Bant',
      url: 'https://tappedout.net/mtg-decks/monument-to-bant/',
    },
  ],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
