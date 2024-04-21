import { collate } from '../../lib/collate';
import {
  CardDraft,
  CardType,
  DeckData
} from '../../types';
import { parseList } from '../../util/list';
import { Lands } from './monumentLand';
import { MonMatchers } from './monumentMatcher';
import { NonLands } from './monumentNonLand';
import { MonumentCategory, MonumentEdges, MonumentInverseEdge } from './monumentTypes';

const current = parseList(`
Amareth, the Lustrous
Cyclone Summoner
Deserted Temple
Drownyard Temple
Elvish Reclaimer
Expedition Map
Field of the Dead
Glacial Chasm
Helm of Possession
Karn's Bastion
Kiora Bests the Sea God
Lotus Field
Magus of the Disk
Maze of Ith
Mirrex
Monument to Perfection
Moritte of the Frost
Myojin of Cleansing Fire
Myojin of Towering Might
Nesting Grounds
Riptide Laboratory
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
Evolutionary Leap
Woodfall Primus
Doubling Season
Echoing Deeps
Mangara of Corondor
High Market

Doppelgang
Nacatl War-Pride
Sundial of the Infinite
Mirage Mirror

Basilisk Collar

The One Ring
Phyrexia's Core
Spine of Ish Sah
Scroll Rack
Flagstones of Trokair
Hall of the Bandit Lord

Crested Sunmare

Restless Prairie
Restless Anchorage
The Shire
Mirri, Weatherlight Duelist
Divine Visitation
Selesnya Eulogist
Sun Titan
Trostani, Selesnya's Voice
Mirrorpool

Lumbering Falls
Elspeth Conquers Death
Innocuous Researcher
World Breaker
Darksteel Garrison
Song of the Dryads
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
Shapesharer
Angel of Condemnation
Shanna, Purifying Blade
Proteus Staff

Blinkmoth Well
Winter Orb
Static Orb
Storage Matrix

Recycle
Reliquary Tower

Imprisoned in the Moon
Memnarch
`);

// todo add section Illegal for red cards
const rejected = parseList(`
Thaumatic Compass // Spires of Orazca
Essence of the Wild
Lithoform Engine
Tomb of the Spirit Dragon
Restless Vinestalk
Lifetap

Littjara Mirrorlake
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
Forbidden Orchard
Illustrious Wanderglyph
Prime Speaker Zegana
Battle at the Helvault
Lunar Hatchling
Kamahl's Will
Summoning Station
The Night of the Doctor
Hidden Nursery
Pit of Offerings
Tyrite Sanctum
Nevinyrral's Disk
Rootpath Purifier
Boompile
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
Runed Stalactite
Swarmyard
Retrofitter Foundry
Martyr's Cause
Glen Elendra Archmage
Fabled Passage
Odric, Lunarch Marshal
Swashbuckler's Whip
Kindred Discovery
Hall of Heliod's Generosity

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
Academy Ruins
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
Sower of Temptation
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
Mutavault
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
Selvala, Explorer Returned
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
The Phasing of Zhalfir
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
Silverbluff Bridge
Dowsing Dagger // Lost Vale
Conqueror's Galleon // Conqueror's Foothold
`);

const allCards: CardDraft[] = [
  ...Lands.map(c => ({
    ...c,
    types: [
      CardType.Land,
      ...(c.additionalTypes ?? []),
    ],
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
  description: 'Bant deck that tutors nonbasic lands to form multiple small A/B combos',
  notes: [
    '2024/04/11: Minimize Monunent package to basics and utility spheres, now has exactly 9 sources.',
    '2023/11/09: New criteria for Sagas: Stage 2 must be spammable. Looping Stage 1 requires having Nesting Grounds already in play and mana to spare.',
    '2023/11/04: Due to color screw and mediocre blue Myojin, start reducing blue to a splash.',
    '2023/10/30: Swap Temur for Bant to gain more indestructible and land tutors.',
  ],
  links: [{
    name: 'Monument to Hubris (retired)',
    url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  }, {
    name: 'Monument to Bant',
    url: 'https://tappedout.net/mtg-decks/monument-to-bant/',
  }],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
