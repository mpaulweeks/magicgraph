import { collate } from '../../lib/collate';
import {
  CardDraft,
  DeckData
} from '../../types';
import { parseList } from '../../util/list';
import { BrokkosCards } from './brokkosCards';
import { BrokkosMatchers } from './brokkosMatcher';
import { BrokkosCategoryColorMap, BrokkosEdges, BrokkosInverseEdge, BrokkosTagLinks } from './brokkosTypes';

const current = parseList(`
Brokkos, Apex of Forever

Basilisk Collar
Forgotten Ancient
Master Biomancer
Thundering Mightmare

Cold-Eyed Selkie
Cradle Clearcutter
Crypt Rats
Diviner Spirit
Doom Weaver
Emergent Woodwurm
Kami of Whispered Hopes
Marwyn, the Nurturer
Rampant Rejuvenator
Tanuki Transplanter
Thought Sponge
Thrashing Wumpus
Viridian Joiner

Arixmethes, Slumbering Isle
Farseek
Into the North
Nature's Lore
Shigeki, Jukai Visionary
Three Visits
Traverse the Outlands

Colossal Skyturtle
Dollhouse of Horrors
God-Pharaoh's Gift
The Mimeoplasm
The Scarab God

Blessing of Leeches
Cauldron of Souls
Soul Channeling

Assassin's Trophy
Bane of Progress
Dead of Winter
Druid of Purification
Gaze of Granite
Pernicious Deed
Tear Asunder
The Phasing of Zhalfir
Toxic Deluge

Greater Good
Mask of Griselbrand
Prime Speaker Zegana
Return of the Wildspeaker
Rishkar's Expertise
Shadowheart, Dark Justiciar

Kalonian Hydra
Polukranos, Unchained

Mindleecher
Sawtusk Demolisher

Phyrexian Tower
Broken Fall
Souvenir Snatcher
Threefold Thunderhulk
Genesis
Mythos of Brokkos
Wonder
Giant Inheritance
Zopandrel, Hunger Dominus
Conclave Sledge-Captain
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
`);

const rejected = parseList(`
Doomskar Warrior
`);

const allCards: CardDraft[] = [
  ...BrokkosCards,
];

const collated = collate({
  current,
  choppingBlock,
  pending,
  rejected,
  cards: allCards,
  tagLinks: BrokkosTagLinks,
});

export const BrokkosData: DeckData = {
  name: 'Brokkos, Apex of Power',
  description: 'Sultai deck that makes creatures big',
  links: [{
    name: 'Tapped out',
    url: 'https://tappedout.net/mtg-decks/17-03-22-apex-of-power/',
  }],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: BrokkosMatchers,
  categoryColorMap: BrokkosCategoryColorMap,
  relationshipInverse: BrokkosInverseEdge,
  relationshipOrder: BrokkosEdges,
};
