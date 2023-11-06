import { collate } from '../../lib/collate';
import {
  DeckData
} from '../../types';
import { parseList } from '../../util/list';
import { LarryDraft } from './larryCards';
import { LarryMatchers } from './larryMatcher';
import { CategoryColorMap, LarryInverseEdge, OrderedEdges } from './larryTypes';

const current = parseList(`
Academy Ruins
Athreos, Shroud-Veiled
Boompile
Coercive Portal
Darksteel Plate
Emry, Lurker of the Loch
Fool's Demise
Gift of Immortality
Hall of Heliod's Generosity
Heidar, Rimewind Master
Ironsoul Enforcer
Kaldra Compleat
Lurrus of the Dream-Den
Magus of the Disk
Nesting Grounds
Nevinyrral's Disk
Oblivion Stone
Phyrexian Scriptures
Planar Collapse
Riptide Laboratory
Robe of Stars
Scourglass
Serenity
Silent Sentinel
Sun Titan
Treasury Thrull
Vanishing
Vedalken Mastermind

Induced Amnesia
Shrine of Piercing Vision
Baleful Strix
The One Ring
Stone of Erech
The Night of the Doctor

Guardian Scalelord
Mithril Coat
Scholar of New Horizons
Nihil Spellbomb
Soul-Guide Lantern

Marit Lage's Slumber
Navigation Orb
Expedition Map
Burnished Hart
Courier's Capsule
Mnemonic Sphere
Font of Fortunes
Omen of the Sea
Mystic Remora
`);

const pending = parseList(`
Volrath's Stronghold
`);

const rejected = parseList(`
Capsize
Emeria Shepherd
Enchanted Evening
Mycosynth Lattice
Norika Yamazaki, the Poet
Shield of Kaldra
Twilight Shepherd
Hanna, Ship's Navigator
The Phasing of Zhalfir
`);

const collated = collate({
  current,
  cuts: [],
  pending,
  rejected,
  cards: LarryDraft,
});

export const LarryData: DeckData = {
  name: 'Larry Loops',
  description: 'Esper deck that builds a repeatable wrath engine and winning with indestructible creatures',
  links: [{
    name: 'Tapped out',
    url: 'https://tappedout.net/mtg-decks/tutorless-larry/',
  }],
  cardDrafts: collated.cardDrafts,
  undefined: collated.undefined,
  unused: collated.unused,
  matchers: LarryMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: LarryInverseEdge,
  relationshipOrder: OrderedEdges,
};
