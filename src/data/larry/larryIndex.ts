import {
  DeckData
} from '../../types';
import { LarryDraft } from './larryCards';
import { LarryMatchers } from './larryMatcher';
import { CategoryColorMap, LarryInverseEdge, OrderedEdges } from './larryTypes';

export const LarryData: DeckData = {
  name: 'Larry Loops',
  description: 'Esper deck that builds a repeatable wrath engine and winning with indestructible creatures',
  links: [{
    name: 'Tapped out',
    url: 'https://tappedout.net/mtg-decks/tutorless-larry/',
  }],
  cardDrafts: LarryDraft,
  undefined: [],
  unused: [],
  matchers: LarryMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: LarryInverseEdge,
  relationshipOrder: OrderedEdges,
};
