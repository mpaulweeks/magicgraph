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
Boompile
Cyclone Summoner
Deserted Temple
Drownyard Temple
Eldrazi Monument
Elvish Reclaimer
Expedition Map
Field of the Dead
Glacial Chasm
Helm of Possession
Karma
Karn's Bastion
Kiora Bests the Sea God
Lifetap
Lotus Field
Magus of the Disk
Maze of Ith
Mirrex
Monument to Perfection
Moritte of the Frost
Myojin of Cleansing Fire
Myojin of Towering Might
Nesting Grounds
Nevinyrral's Disk
Riptide Laboratory
Rootpath Purifier
Roots of Life
Spara's Headquarters
Sun Titan
Thaumatic Compass // Spires of Orazca
Thawing Glaciers
The Hunter Maze
The Mycosynth Gardens
The World Spell
Thespian's Stage
Tyrite Sanctum
Urborg, Tomb of Yawgmoth
Urza's Saga
Yavimaya, Cradle of Growth
Selesnya Sanctuary
Vesuva
Aura Shards
Knight of the Reliquary
Weathered Wayfarer
Scholar of New Horizons
Arwen, Mortal Queen
Flagstones of Trokair
Mondrak, Glory Dominus
Sensei's Divining Top
Grove of the Guardian
Myojin of Blooming Dawn
Minamo, School at Water's Edge
Captain Sisay
Blossoming Tortoise
Dust Bowl
Battle at the Helvault
Scaretiller
Dark Depths
Hidden Nursery
Pit of Offerings

Shorikai, Genesis Engine
Prime Speaker Zegana
Chromatic Orrery
Evolutionary Leap
Woodfall Primus
Rubinia Soulsinger
The Night of the Doctor
Doubling Season
Echoing Deeps
Mangara of Corondor
High Market
Tomb of the Spirit Dragon
Summoning Station
Illustrious Wanderglyph
Lunar Hatchling
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
Thelonite Druid
`);

const rejected = parseList(`
Darksteel Splicer
Terrain Generator
Phyrexia's Core
Unstable Glyphbridge // Sandswirl Wanderglyph
Golden Guardian // Gold-Forge Garrison
Spine of Ish Sah
Magus of the Unseen
Apex Altisaur
Court of Bounty
World Breaker
Desert
Behold the Unspeakable // Vision of the Unspeakable
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
Castle Ardenvale
Hall of the Bandit Lord
Solemnity
Zopandrel, Hunger Dominus
Riftstone Portal
Gavony Township
Animation Module
Song of Eärendil
The Caves of Androzani
Phyrexian Swarmlord
Proteus Staff
Twilight Shepherd
Demolition Field
Hordewing Skaab
Tolaria West
Academy Ruins
Restless Vinestalk
Tekuthal, Inquiry Dominus
Myojin of Cryptic Dreams
Kjeldoran Outpost
Sundial of the Infinite
Tameshi, Reality Architect
Mistveil Plains
Oboro Breezecaller
Luminous Broodmoth
Tale of Tinúviel
Elspeth Conquers Death
The Mending of Dominaria
Kor Haven
Krosan Verge
Vitu-Ghazi, the City-Tree
The Fall of Lord Konda // Fragment of Konda
The Bath Song
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
Forbidden Orchard
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
Lithoform Engine
Littjara Mirrorlake
Manascape Refractor
Mirage Mirror
Moorland Haunt
Mutavault
Myojin of Life's Web
Myojin of Roaring Blades
Myojin of Seeing Winds
Nacatl War-Pride
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
Shapesharer
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
