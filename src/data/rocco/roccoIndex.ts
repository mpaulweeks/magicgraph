import { collate } from '../../lib/collate';
import { CardDraft, CardType, DeckData } from '../../types';
import { parseList } from '../../util/list';
import { Creatures } from './roccoCreature';
import { RocMatchers } from './roccoMatcher';
import { NonCreatures } from './roccoNonCreature';
import {
  RocEdges,
  RocInverseEdge,
  RoccoCategory,
  RoccoCategoryColorMap,
} from './roccoTypes';

const current = parseList(`
Rocco, Cabaretti Caterer

Fauna Shaman
Temur Sabertooth
Wirewood Symbiote

Arwen, Mortal Queen
Atla Palani, Nest Tender
Forgotten Ancient
Heartless Hidetsugu
Immaculate Magistrate
Krenko, Tin Street Kingpin
Mirror Entity
Nearheath Pilgrim
Nightshade Peddler
Norin the Wary
Odric, Lunarch Marshal
Purphoros, Bronze-Blooded
Ronin Cliffrider
Saltskitter
Saryth, the Viper's Fang
Scalding Salamander
Squee, Goblin Nabob
Stonehewer Giant
Swathcutter Giant
Thundering Mightmare
Wolverine Riders

Jaya Ballard, Task Mage
Peacekeeper
Spikeshot Elder
Squallmonger
Stonecloaker

Farhaven Elf
Gala Greeters
Heronblade Elite
Kami of Whispered Hopes
Scholar of New Horizons
Shigeki, Jukai Visionary
Wood Elves

Mentor of the Meek
Ohran Frostfang
Soul of the Harvest
Toski, Bearer of Secrets

Anger
Genesis
Glory

Norin the Wary
Saltskitter
Stonecloaker
Squee, Goblin Nabob

Sword of Kaldra
Shield of Kaldra
Helm of Kaldra
Basilisk Collar
Guardian Project
Bow of Nylea
Aura Shards
Confusion in the Ranks
Maskwood Nexus

Oketra the True
Thorn Mammoth
Magus of the Disk
Primeval Herald
Bane of Progress
Nullmage Advocate

Okina, Temple to the Grandfathers
Eiganjo Castle
Shinka, the Bloodsoaked Keep
Trostani, Three Whispers
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
Angelic Skirmisher
Rhonas the Indomitable
Captain Sisay
Weathered Wayfarer
Sokenzan, Crucible of Defiance
Minas Tirith
Nacatl War-Pride
`);

const rejected = parseList(`
Crested Sunmare
Cartographer's Hawk
Khârn the Betrayer
Etali, Primal Storm
Whitemane Lion
Sun Titan
Soltari Foot Soldier
Spore Frog
Kami of False Hope
Selfless Spirit
Saffi Eriksdotter
Guardian Scalelord
Sword of the Animist
Sword of Feast and Famine
Solitary Confinement
Call for Unity
Abiding Grace
`);

const allCards: CardDraft[] = [
  ...Creatures.map(c => ({
    ...c,
    types: [CardType.Creature, ...(c.additionalTypes ?? [])],
    category: RoccoCategory.Creature,
    emphasize: true,
  })),
  ...NonCreatures.map(nc => ({
    ...nc,
    category: RoccoCategory.NonCreature,
  })),
];

const collated = collate({
  current,
  choppingBlock,
  pending,
  rejected,
  cards: allCards,
});

export const RoccoData: DeckData = {
  name: 'Rocco.dec',
  description:
    'Naya deck that tutors creatures to form multiple small A/B combos',
  links: [
    {
      name: 'Tapped out',
      url: 'https://tappedout.net/mtg-decks/heartless-rocco/',
    },
  ],
  cardDrafts: collated.cardDrafts,
  missingDefinition: collated.missingDefinition,
  unused: collated.unused,
  matchers: RocMatchers,
  categoryColorMap: RoccoCategoryColorMap,
  relationshipInverse: RocInverseEdge,
  relationshipOrder: RocEdges,
};
