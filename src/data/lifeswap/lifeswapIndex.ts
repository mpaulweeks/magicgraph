import { collate } from '../../lib/collate';
import {
  CardDraft,
  DeckData
} from '../../types';
import { parseList } from '../../util/list';
import { LifeswapDraft } from './lifeswapCards';
import { LifeswapMatchers } from './lifeswapMatcher';
import { CategoryColorMap, LifeswapInverseEdge, LifeswapTagLinks, OrderedEdges } from './lifeswapTypes';

const current = parseList(`
Athreos, Shroud-Veiled
Arvinox, the Mind Flail
Brainstealer Dragon
Elder Brain
Gonti, Lord of Luxury
Greed
Loran of the Third Path
Love Song of Night and Day
Necrologia
Necropotence
Phyrexian Arena
Protection Racket
The War in Heaven
Burnished Hart
Expedition Map
Kor Cartographer
Monument to Perfection
Scholar of New Horizons
Solemn Simulacrum
The Birth of Meletis
Weathered Wayfarer
Blind Obedience
Heliod, God of the Sun
Heliod, Sun-Crowned
Lithoform Engine
Mirage Mirror
Mischievous Poltergeist
Children of Korlis
Eternity Vessel
Exquisite Archangel
Resolute Archangel
Tainted Sigil
Ferropede
Hex Parasite
Power Conduit
Thrull Parasite
Elspeth Conquers Death
Firja's Retribution
Magus of the Balance
Magus of the Disk
Mangara of Corondor
One Ring to Rule Them All
Phyrexian Scriptures
Toxic Deluge
Vona, Butcher of Magan
Cauldron of Souls
From the Catacombs
Luminous Broodmoth
Mikaeus, the Unhallowed
Priest of Fell Rites
Puppeteer Clique
Twilight Shepherd
Axis of Mortality
Profane Transfusion
Repay in Kind
Reverse the Sands
Soul Conduit

Thaumatic Compass
The Restoration of Eiganjo
Invasion of Fiora
The Fall of Lord Konda

Karn's Bastion
Nesting Grounds
Orzhova, the Church of Deals
Vault of the Archangel
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
`);

const rejected = parseList(`
`);

const allCards: CardDraft[] = [
  ...LifeswapDraft,
];

const collated = collate({
  current,
  choppingBlock,
  pending,
  rejected,
  cards: allCards,
  tagLinks: LifeswapTagLinks,
});

export const LifeswapData: DeckData = {
  name: 'Life Swap',
  description: 'Swap life and remove counters',
  notes: [
  ],
  links: [{
    name: 'Tapped out',
    url: 'https://tappedout.net/mtg-decks/athreos-life-swap/',
  }],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: LifeswapMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: LifeswapInverseEdge,
  relationshipOrder: OrderedEdges,
};
