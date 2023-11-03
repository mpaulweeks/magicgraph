import {
  CardDraft,
  CardListStatus,
  CardType,
  DeckData
} from '../../types';
import { unique } from '../../util/list';
import { NonLands } from './momunmentNonLand';
import { Lands } from './monumentLand';
import { MonMatchers } from './monumentMatcher';
import { MonumentCategory, MonumentEdges, MonumentInverseEdge } from './monumentTypes';

function parseList(list: string): Set<string> {
  return new Set(list.split('\n').map(s => s.trim()).filter(s => s));
}


const current = parseList(`
  Animation Module
  Barrin, Master Wizard
  Boompile
  Cauldron of Souls
  Cyclone Summoner
  Deserted Temple
  Drownyard Temple
  Eldrazi Monument
  Elvish Reclaimer
  Expedition Map
  Field of the Dead
  Gavony Township
  Glacial Chasm
  Helm of Possession
  Karma
  Karn's Bastion
  Kindred Discovery
  Kiora Bests the Sea God
  Lifetap
  Lotus Field
  Magus of the Disk
  Maskwood Nexus
  Maze of Ith
  Mirrex
  Mirror Entity
  Monument to Perfection
  Moritte of the Frost
  Myojin of Cleansing Fire
  Myojin of Towering Might
  Nesting Grounds
  Nevinyrral's Disk
  Perilous Forays
  Proteus Staff
  Restless Vinestalk
  Riftstone Portal
  Riptide Laboratory
  Rootpath Purifier
  Roots of Life
  Runed Stalactite
  Spara's Headquarters
  Sun Titan
  Swarmyard
  Thaumatic Compass // Spires of Orazca
  Thawing Glaciers
  The Hunter Maze
  The Mycosynth Gardens
  The World Spell
  Thespian's Stage
  Tolaria West
  Twilight Shepherd
  Tyrite Sanctum
  Urborg, Tomb of Yawgmoth
  Urza's Saga
  Yavimaya, Cradle of Growth
  Selesnya Sanctuary
  Vesuva
  Aura Shards
  Knight of the Reliquary
  Zopandrel, Hunger Dominus
  Weathered Wayfarer
  Scholar of New Horizons
  Hall of Heliod's Generosity
  Academy Ruins
  Arwen, Mortal Queen
  Flagstones of Trokair
  Mondrak, Glory Dominus
  Retrofitter Foundry
  Sensei's Divining Top
  Martyr's Cause
  Phyrexian Swarmlord
  Grove of the Guardian
  Castle Ardenvale
`);

const cuts = parseList(`
  Demolition Field
  Hordewing Skaab
  Myojin of Cryptic Dreams
`);

const pending = parseList(`
  Scaretiller
  Dust Bowl
  Myojin of Blooming Dawn
  Battle at the Helvault
  The Night of the Doctor
  Song of Eärendil
  Behold the Unspeakable // Vision of the Unspeakable
  The Caves of Androzani
  Evolutionary Leap
  Glen Elendra Archmage
  Blossoming Tortoise
  Woodfall Primus
`);

const rejected = parseList(`
  Kjeldoran Outpost
  Sundial of the Infinite
  Tameshi, Reality Architect
  Mistveil Plains
  Oboro Breezecaller
  Luminous Broodmoth
  Hall of the Bandit Lord
  Tale of Tinúviel
  Avarice Totem
  Elspeth Conquers Death
  The Mending of Dominaria
  Kor Haven
  Krosan Verge
  Vitu-Ghazi, the City-Tree
  The Fall of Lord Konda // Fragment of Konda
  The Bath Song
  Jalira, Master Polymorphist
  Staff of Titania
  Rubinia Soulsinger
  Canopy Vista
  Dismiss into Dream
  High Market
  Prairie Stream
  Sower of Temptation
  Willbreaker
  Alchemist's Refuge
  Apex Altisaur
  Aven Courier
  Awakening of Vitu-Ghazi
  Battle of Frost and Fire
  Callous Oppressor
  Cascading Cataracts
  Celestial Colonnade
  Constant Mists
  Contested Cliffs
  Cowardice
  Desert
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
  Minamo, School at Water's Edge
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
  World Breaker
  Yavimaya Hollow
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

const sorted = [
  ...allCards.filter(c => current.has(c.name)).map(c => ({
    ...c,
    status: CardListStatus.Current,
  })),
  ...allCards.filter(c => pending.has(c.name)).map(c => ({
    ...c,
    status: CardListStatus.Pending,
  })),
  ...allCards.filter(c => rejected.has(c.name)).map(c => ({
    ...c,
    status: CardListStatus.Rejected,
  })),
  ...allCards.filter(c => cuts.has(c.name)).map(c => ({
    ...c,
    status: CardListStatus.Cuts,
  })),
];


const allDefined = new Set(allCards.map(c => c.name));
const missing = unique([
  ...Array.from(current),
  ...Array.from(pending),
  ...Array.from(rejected),
  ...Array.from(cuts),
]).filter(name => !allDefined.has(name));
console.log('missing:', missing);

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
  links: [{
    name: 'Monument to Hubris (retired)',
    url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  }, {
    name: 'Monument to Bant',
    url: 'https://tappedout.net/mtg-decks/monument-to-bant/',
  }],
  cardDrafts: sorted,
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
