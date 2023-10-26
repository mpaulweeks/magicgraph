import {
  CardListStatus,
  CardType,
  DeckData
} from '../../types';
import { Lands, LandsRejected } from './land';
import { MonMatchers } from './matcher';
import { NonLandRejected, NonLands } from './nonland';
import { CategoryColorMap, MonCat, MonumentEdges, MonumentInverseEdge } from './types';

export const MonumentData: DeckData = {
  name: 'Monument.dec',
  url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  cardDrafts: [
    ...[
      ...Lands,
      ...LandsRejected.map(c => ({
        ...c,
        status: CardListStatus.Rejected,
      })),
    ].map(c => ({
      ...c,
      types: [CardType.Land],
      category: MonCat.Land,
      tags: (c.tags ?? []).concat('Is Land'),
      emphasize: true,
    })),
    ...[
      ...NonLands,
      ...NonLandRejected.map(c => ({
        ...c,
        status: CardListStatus.Rejected,
      })),
    ].map(c => ({
      ...c,
      tags: (c.tags ?? []).concat('Is Not Land'),
    })),
  ],
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
