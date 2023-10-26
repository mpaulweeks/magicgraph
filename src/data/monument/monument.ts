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
  Sundial of the Infinite
  Swarmyard
  Thaumatic Compass // Spires of Orazca
  Thawing Glaciers
  The Bath Song
  The Mycosynth Gardens
  The World Spell
  Thespian's Stage
  Transmogrifying Wand
  Tyrite Sanctum
  Urza's Saga
  Willbreaker
  Yavimaya, Cradle of Growth
  Tap Spheres
`);

const cuts = parseList(`
  Tatyova, Benthic Druid
  Simic Growth Chamber

  Battle of Frost and Fire
  Contested Cliffs
  Dragonlair Spider
  Flamekin Village
  Kessig Wolf Run
  Hammerheim
  Kher Keep
  Myojin of Roaring Blades
  Omnath, Locus of Rage
  Reality Scramble
  Solphim, Mayhem Dominus
  Taurean Mauler
  Waking the Trolls
`);

const pending = parseList(`
  Flagstones of Trokair
  Hall of Heliod's Generosity
  Kjeldoran Outpost
  Kor Haven
  Moorland Haunt
  Urborg, Tomb of Yawgmoth
  Riftstone Portal
  Gavony Township
  Hall of the Band Lord
  Krosan Verge
  Canopy Vista
  Prairie Stream
  Riptide Laboratory
  High Market
  Okina, Temple to the Grandfathers
  Tolaria
  The Fair Basilica
  Castle Ardenveil

  Sun Titan
  Arwen, Mortal Queen
  Luminous Broodmoth
  Mondrak, Glory Dominus
  Myojin of Blooming Dawn
  Weathered Wayfarer
  Karma
  Wargate
  Magus of the Disk
  War of the Last Alliance
  Tale of Tinuviel
  Emeria Shepherd
  Twilight Shepherd
  Mirror Entity
  Myojin of Cleansing Fire
  Cyclone Summoner
  Sower of Temptation
  Roots of Life
`);

const rejected = parseList(`
  Celestial Colonnade
  Minamo, School at Water's Edge
  Rubinia Soulsinger
  Oath of Lieges
  Novablast Wurm
  Wirewood Lodge
  Selvala, Explorer Returned
  Alchemist's Refuge
  Apex Altisaur
  Awakening of Vitu-Ghazi
  Bridge Lands
  Callous Oppressor
  Cascading Cataracts
  Conqueror's Galleon
  Constant Mists
  Cowardice
  Desert
  Desolate Lighthouse
  Dowsing Dagger
  Dreamscape Artist
  Druid Class
  Dualcaster Mage
  Fatestitcher
  Forbidden Orchard
  Fortitude
  Fractured Loyalty
  Hanweir Battlements
  Heartless Hidetsugu
  Homeward Path
  Humble Defector
  Khârn the Betrayer
  Kiora's Follower
  Krenko, Tin Street Kingpin
  Lithoform Engine
  Littjara Mirrorlake
  Manascape Refractor
  Mutavault
  Myojin of Life's Web
  Myojin of Seeing Winds
  Nacatl War-Pride
  Nightmare Lash
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

const CategoryColorMap = {
  [MonumentCategory.Land]: 'lightgrey',
  [MonumentCategory.Tutor]: '#6ff',
  [MonumentCategory.Misc]: 'grey',
  [MonumentCategory.Threat]: 'salmon',
  [MonumentCategory.Lifegain]: 'lightyellow',
  [MonumentCategory.Buff]: 'Orchid',
  [MonumentCategory.Interaction]: '#FFB010',
  [MonumentCategory.Draw]: 'lightblue',
  [MonumentCategory.Ramp]: 'lightgreen',
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
