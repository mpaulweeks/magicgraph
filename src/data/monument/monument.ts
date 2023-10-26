import {
  CardDraft,
  CardListStatus,
  CardType,
  DeckData
} from '../../types';
import { Lands } from './land';
import { MonMatchers } from './matcher';
import { NonLands } from './nonland';
import { MonumentCategory, MonumentEdges, MonumentInverseEdge } from './types';

function parseList(list: string): Set<string> {
  return new Set(list.split('\n').map(s => s.trim()).filter(s => s));
}

const current = parseList(`
  Animation Module
  Aven Courier
  Barrin, Master Wizard
  Boompile
  Cauldron of Souls
  Dismiss into Dream
  Djinn of Infinite Deceits
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
  Mirage Mirror
  Mirrex
  Monument to Perfection
  Moritte of the Frost
  Myojin of Cryptic Dreams
  Myojin of Towering Might
  Nesting Grounds
  Nevinyrral's Disk
  Nissa, Ascended Animist
  Perilous Forays
  Proteus Staff
  Rootpath Purifier
  Runed Stalactite
  Scute Swarm
  Simic Growth Chamber
  Sundial of the Infinite
  Swarmyard
  Thaumatic Compass // Spires of Orazca
  Thawing Glaciers
  The Bath Song
  The Hunter's Maze
  The Mycosynth Gardens
  The World Spell
  Thespian's Stage
  Transmogrifying Wand
  Tyrite Sanctum
  Urza's Saga
  Willbreaker
  Yavimaya, Cradle of Growth
`);

const cuts = parseList(`
  Battle of Frost and Fire
  Contested Cliffs
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
`);

const pending = parseList(`
  Academy Ruins
  Arwen, Mortal Queen
  Canopy Vista
  Castle Ardenveil
  Cyclone Summoner
  Emeria Shepherd
  Flagstones of Trokair
  Gavony Township
  Hall of Heliod's Generosity
  High Market
  Karma
  Kor Haven
  Krosan Verge
  Luminous Broodmoth
  Magus of the Disk
  Mirror Entity
  Mondrak, Glory Dominus
  Moorland Haunt
  Myojin of Blooming Dawn
  Myojin of Cleansing Fire
  Okina, Temple to the Grandfathers
  Prairie Stream
  Riftstone Portal
  Riptide Laboratory
  Roots of Life
  Sower of Temptation
  Sun Titan
  Tale of Tinuviel
  Tap Spheres
  Tolaria
  Twilight Shepherd
  Urborg, Tomb of Yawgmoth
  Wargate
  Weathered Wayfarer
`);

const rejected = parseList(`
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
  Rubinia Soulsinger
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
