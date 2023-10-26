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
  Battle of Frost and Fire
  Boompile
  Bouncelands
  Cauldron of Souls
  Contested Cliffs
  Dismiss into Dream
  Djinn of Infinite Deceits
  Dragonlair Spider
  Drownyard Temple
  Elvish Reclaimer
  Expedition Map
  Field of the Dead
  Flamekin Village
  Glacial Chasm
  Hammerheim
  Helm of Possession
  Hordewing Skaab
  Jalira, Master Polymorphist
  Karn's Bastion
  Kessig Wolf Run
  Kher Keep
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
  Myojin of Roaring Blades
  Myojin of Towering Might
  Nesting Grounds
  Nevinyrral's Disk
  Nissa, Ascended Animist
  Omnath, Locus of Rage
  Perilous Forays
  Proteus Staff
  Reality Scramble
  Rootpath Purifier
  Runed Stalactite
  Scute Swarm
  Solphim, Mayhem Dominus
  Sundial of the Infinite
  Swarmyard
  Tatyova, Benthic Druid
  Taurean Mauler
  Thaumatic Compass // Spires of Orazca
  Thawing Glaciers
  The Bath Song
  The Mycosynth Gardens
  The World Spell
  Thespian's Stage
  Transmogrifying Wand
  Tyrite Sanctum
  Urza's Saga
  Waking the Trolls
  Willbreaker
  Yavimaya, Cradle of Growth
`);

const rejected = parseList(`
  Alchemist's Refuge
  Apex Altisaur
  Awakening of Vitu-Ghazi
  Bridge Lands
  Callous Oppressor
  Cascading Cataracts
  Conqueror's Galleon
  Constant Mists
  Cowardice
  Cyclone Summoner
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
  High Market
  Homeward Path
  Humble Defector
  Khârn the Betrayer
  Kiora's Follower
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
  Okina, Temple to the Grandfathers
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
  Riptide Laboratory
  Rishadan Port
  Roots of Life
  Scavenged Brawler
  Seedborn Muse
  Shapesharer
  Shinka, the Bloodsoaked Keep
  Skullclamp
  Slippery Bogbonder
  Sorrow's Path
  Sower of Temptation
  Spawning Grounds
  Spike Weaver
  Spreading Algae
  Starke of Rath
  Stone-Seeder Hierophant
  Sword of the Animist
  The Akroan War
  The Phasing of Zhalfir
  Tolaria
  Urborg, Tomb of Yawgmoth
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
    category: MonumentCategory.Land,
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
    status: CardListStatus.Default,
  })),
  ...allCards.filter(c => rejected.has(c.name)).map(c => ({
    ...c,
    status: CardListStatus.Rejected,
  })),
];

const CategoryColorMap = {
  [MonumentCategory.Land]: 'lightgrey',
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
