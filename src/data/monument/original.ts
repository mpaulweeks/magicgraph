import {
  CardListStatus,
  CardType,
  DeckData
} from '../../types';
import { Lands, LandsRejected } from './land';
import { MonMatchers } from './matcher';
import { NonLandRejected, NonLands } from './nonland';
import { MonumentCategory, MonumentEdges, MonumentInverseEdge } from './types';

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
      category: MonumentCategory.Land,
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
