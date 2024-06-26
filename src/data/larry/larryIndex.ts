import { collate } from '../../lib/collate';
import { DeckData } from '../../types';
import { parseList } from '../../util/list';
import { LarryDraft } from './larryCards';
import { LarryMatchers } from './larryMatcher';
import { CategoryColorMap, LarryInverseEdge, OrderedEdges } from './larryTypes';

const current = parseList(`
Academy Ruins
Athreos, Shroud-Veiled
Darksteel Plate
Emry, Lurker of the Loch
Gift of Immortality
Hall of Heliod's Generosity
Heidar, Rimewind Master
Kaldra Compleat
Lurrus of the Dream-Den
Magus of the Disk
Nesting Grounds
Nevinyrral's Disk
Phyrexian Scriptures
Planar Collapse
Riptide Laboratory
Robe of Stars
Serenity
Sun Titan
Treasury Thrull
Vedalken Mastermind

Induced Amnesia
Shrine of Piercing Vision
Baleful Strix
The One Ring
Stone of Erech
The Night of the Doctor

Guardian Scalelord
Mithril Coat
Nihil Spellbomb

Navigation Orb
Expedition Map
Burnished Hart
Scholar of New Horizons
Weathered Wayfarer
Skyclave Relic
Solemn Simulacrum
Thaumatic Compass // Spires of Orazca

Marit Lage's Slumber
Mnemonic Sphere
Omen of the Sea
Mystic Remora
One Ring to Rule Them All

The Phasing of Zhalfir
Angel of the Dire Hour
Myojin of Blooming Dawn
The Everflowing Well // The Myriad Pools

Nevinyrral, Urborg Tyrant
Dark Depths
Glacial Chasm
Hall of the Bandit Lord
High Market
Phyrexian Tower

Protector of the Crown
Eagle of Deliverance
Myojin of Grim Betrayal

Scampering Surveyor
Meticulous Excavation

Vengeful Pharaoh
Unstable Glyphbridge // Sandswirl Wanderglyph
Sawtooth Loon
Treacherous Blessing
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
Volrath's Stronghold
Oath of Jace
Demonic Lore
Liliana's Contract
Love Song of Night and Day
Court Hussar
Chrome Courier
Orazca Puzzle-Door
Staff of the Storyteller
Mazemind Tome
`);

const rejected = parseList(`
Kefnet the Mindful
Dread Cacodemon
The Moment
Vanishing
Soul-Guide Lantern
Courier's Capsule
Font of Fortunes
Cyclone Summoner
Fool's Demise
Ironsoul Enforcer
Invasion of Fiora // Marchesa, Resolute Monarch
Myojin of Cleansing Fire
Boompile
Scourglass
Coercive Portal
Oblivion Stone
Temporal Adept
Silent Sentinel
Capsize
Emeria Shepherd
Enchanted Evening
Mycosynth Lattice
Norika Yamazaki, the Poet
Shield of Kaldra
Twilight Shepherd
Hanna, Ship's Navigator
`);

const collated = collate({
  current,
  choppingBlock,
  pending,
  rejected,
  cards: LarryDraft,
});

export const LarryData: DeckData = {
  name: 'Larry Loops',
  description:
    'Esper deck that builds a repeatable wrath engine and winning with indestructible creatures',
  notes: [
    '2023/11/09: Moving further away from graveyard recursion, more towards bounce. Being more picky with discs that can do both.',
  ],
  links: [
    {
      name: 'Tapped out',
      url: 'https://tappedout.net/mtg-decks/tutorless-larry/',
    },
  ],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: LarryMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: LarryInverseEdge,
  relationshipOrder: OrderedEdges,
};
