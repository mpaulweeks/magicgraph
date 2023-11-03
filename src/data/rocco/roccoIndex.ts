import { collate } from '../../lib/collate';
import {
  CardDraft,
  CardType,
  DeckData
} from '../../types';
import { parseList } from '../../util/list';
import { Creatures } from './roccoCreature';
import { RocMatchers } from './roccoMatcher';
import { NonCreatures } from './roccoNonCreature';
import { CategoryColorMap, RocCat, RocEdges, RocInverseEdge } from './roccoTypes';

const current = parseList(`
Norin the Wary
Saltskitter
Ardenn, Intrepid Archaeologist
Soltari Foot Soldier
Spore Frog
Kami of False Hope
Selfless Spirit
Saffi Eriksdotter
Whitemane Lion
Stonecloaker
Squee, Goblin Nabob
Guardian Scalelord
Sun Titan
Sword of the Animist
Sword of Feast and Famine
Solitary Confinement
Aura Shards
Call for Unity
Confusion in the Ranks
Abiding Grace
`);

const allCards: CardDraft[] = [
  ...Creatures.map(c => ({
    ...c,
    types: [CardType.Creature],
    category: RocCat.Creature,
    emphasize: true,
  })),
  ...NonCreatures.map(nc => ({
    ...nc,
    category: RocCat.NonCreature,
  })),
];

const { cardDrafts, undefined } = collate({
  current,
  pending: [],
  cuts: [],
  rejected: [],
  cards: allCards,
});

export const RoccoData: DeckData = {
  name: 'Rocco.dec',
  links: [{
    name: 'Tapped out',
    url: 'https://tappedout.net/mtg-decks/heartless-rocco/',
  }],
  cardDrafts,
  undefined,
  matchers: RocMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: RocInverseEdge,
  relationshipOrder: RocEdges,
};
