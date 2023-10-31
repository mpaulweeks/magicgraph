import {
  CardDraft,
  CardListStatus,
  CardType,
  DeckData
} from '../../types';
import { unique } from '../../util/list';
import { Lands } from './land';
import { MonMatchers } from './matcher';
import { NonLands } from './nonland';
import { MonumentCategory, MonumentEdges, MonumentInverseEdge } from './types';

function parseList(list: string): Set<string> {
  return new Set(list.split('\n').map(s => s.trim()).filter(s => s));
}


const current = parseList(`
  Spara's Headquarters
  Tolaria West
  Deserted Temple
  Restless Vinestalk
  Animation Module
  Barrin, Master Wizard
  Boompile
  Cauldron of Souls
  Dismiss into Dream
  Drownyard Temple
  Elvish Reclaimer
  Expedition Map
  Field of the Dead
  Glacial Chasm
  Helm of Possession
  Hordewing Skaab
  Jalira, Master Polymorphist
  Karn's Bastion
  Kindred Discovery
  Kiora Bests the Sea God
  Lifetap
  Lotus Field
  Maskwood Nexus
  Maze of Ith
  Mirrex
  Monument to Perfection
  Moritte of the Frost
  Myojin of Cryptic Dreams
  Myojin of Towering Might
  Nesting Grounds
  Nevinyrral's Disk
  Perilous Forays
  Proteus Staff
  Rootpath Purifier
  Runed Stalactite
  Sundial of the Infinite
  Swarmyard
  Thaumatic Compass // Spires of Orazca
  Thawing Glaciers
  The Bath Song
  The Hunter Maze
  The Mycosynth Gardens
  The World Spell
  Thespian's Stage
  Tyrite Sanctum
  Urza's Saga
  Willbreaker
  Yavimaya, Cradle of Growth
  Canopy Vista
  Vitu-Ghazi, the City-Tree
  Cyclone Summoner
  Gavony Township
  High Market
  Karma
  Krosan Verge
  Magus of the Disk
  Mirror Entity
  Myojin of Cleansing Fire
  Prairie Stream
  Riftstone Portal
  Riptide Laboratory
  Roots of Life
  Sower of Temptation
  Sun Titan
  Tale of Tinúviel
  Hall of the Bandit Lord
  Twilight Shepherd
  Urborg, Tomb of Yawgmoth
  Wargate
  Rubinia Soulsinger
  The Fall of Lord Konda
  Staff of Titania
  Eldrazi Monument
`);

const cuts = parseList(`
`);

const pending = parseList(`
  Hall of Heliod's Generosity
  Academy Ruins
  Arwen, Mortal Queen
  Castle Ardenvale
  Flagstones of Trokair
  Kor Haven
  Luminous Broodmoth
  Mondrak, Glory Dominus
  Myojin of Blooming Dawn
  Weathered Wayfarer
`);

const rejected = parseList(`
  Battle of Frost and Fire
  Moorland Haunt
  Okina, Temple to the Grandfathers
  Tolaria
  Contested Cliffs
  Emeria Shepherd
  Dragonlair Spider
  Flamekin Village
  Hammerheim
  Kessig Wolf Run
  Kher Keep
  Myojin of Roaring Blades
  Omnath, Locus of Rage
  Reality Scramble
  Solphim, Mayhem Dominus
  Tatyova, Benthic Druid
  Taurean Mauler
  Waking the Trolls
  Scute Swarm
  Simic Growth Chamber
  Transmogrifying Wand
  Aven Courier
  Djinn of Infinite Deceits
  Mirage Mirror
  Nissa, Ascended Animist
  Alchemist's Refuge
  Apex Altisaur
  Awakening of Vitu-Ghazi
  Callous Oppressor
  Cascading Cataracts
  Celestial Colonnade
  Constant Mists
  Cowardice
  Desert
  Desolate Lighthouse
  Dreamscape Artist
  Druid Class
  Dualcaster Mage
  Fatestitcher
  Forbidden Orchard
  Fortitude
  Fractured Loyalty
  Heartless Hidetsugu
  Homeward Path
  Humble Defector
  Khârn the Betrayer
  Kiora's Follower
  Kjeldoran Outpost
  Krenko, Tin Street Kingpin
  Lithoform Engine
  Littjara Mirrorlake
  Manascape Refractor
  Minamo, School at Water's Edge
  Mutavault
  Myojin of Life's Web
  Myojin of Seeing Winds
  Nacatl War-Pride
  Nightmare Lash
  Novablast Wurm
  Oath of Lieges
  Oran-Rief, the Vastwood
  Overtaker
  Pendant of Prosperity
  Perplexing Chimera
  Polyraptor
  Primeval Herald
  Puca's Mischief
  Radiant Performer
  Ranging Raptors
  Realmbreaker, the Invasion Tree
  Rishadan Port
  Scavenged Brawler
  Seedborn Muse
  Selvala, Explorer Returned
  Shapesharer
  Shinka, the Bloodsoaked Keep
  Skullclamp
  Slippery Bogbonder
  Sorrow's Path
  Spawning Grounds
  Spike Weaver
  Spreading Algae
  Starke of Rath
  Stone-Seeder Hierophant
  Sword of the Animist
  The Akroan War
  The Phasing of Zhalfir
  Utvara Hellkite
  Vigor
  Vizier of Tumbling Sands
  Ward of Bones
  Wilderness Reclamation
  Wirewood Lodge
  World Breaker
  Yavimaya Hollow
`);

const allCards: CardDraft[] = [
  ...Lands.map(c => ({
    ...c,
    types: [CardType.Land],
    category: c.overrideCategory ?? MonumentCategory.Land,
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
  [MonumentCategory.Land]: 'lightgrey',
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
  url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  cardDrafts: sorted,
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
