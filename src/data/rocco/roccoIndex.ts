import {
  CardType,
  DeckData
} from '../../types';
import { Creatures } from './roccoCreature';
import { RocMatchers } from './roccoMatcher';
import { NonCreatures } from './roccoNonCreature';
import { CategoryColorMap, RocCat, RocEdges, RocInverseEdge } from './roccoTypes';

export const RoccoData: DeckData = {
  name: 'Rocco.dec',
  links: [{
    name: 'Tapped out',
    url: 'https://tappedout.net/mtg-decks/heartless-rocco/',
  }],
  cardDrafts: [
    ...Creatures.map(c => ({
      ...c,
      types: [CardType.Creature],
      category: RocCat.Creature,
      emphasize: true,
    })),
    ...NonCreatures.map(nc => ({
      ...nc,
      category: RocCat.NonCreature,
    }))
  ],
  matchers: RocMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: RocInverseEdge,
  relationshipOrder: RocEdges,
};
