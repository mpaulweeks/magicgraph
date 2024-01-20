import { collate } from '../../lib/collate';
import {
  DeckData
} from '../../types';
import { parseList } from '../../util/list';
import { RefCards } from './refCards';
import { RefCategoryColorMap, RefEdges, RefInverseEdge } from './refTypes';

const current = parseList(`
Alabaster Host Intercessor
Angel of the Ruins
Eagles of the North
Timeless Dragon

Lórien Revealed
Monstrosity of the Lake
Tidal Terror

Rampaging Spiketail
Troll of Khazad-dûm
Twisted Abomination

Oliphaunt
Ruin Grinder
Seismic Monstrosaur

Elvish Aberration
Generous Ent
Nurturing Bristleback
Timberland Ancient

Chronomantic Escape
Inspiring Refrain
Rousing Refrain

Guardian Naga // Banishing Coils
Sword Coast Serpent // Capsizing Wave
Beanstalk Giant // Fertile Footsteps
Stormkeld Vanguard // Bear Down
`);

const collated = collate({
  current,
  pending: [],
  choppingBlock: [],
  rejected: [],
  cards: RefCards,
});

export const RefData: DeckData = {
  name: 'Reference',
  description: 'Card Reference',
  notes: [],
  links: [],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: [],
  categoryColorMap: RefCategoryColorMap,
  relationshipInverse: RefInverseEdge,
  relationshipOrder: RefEdges,
};
