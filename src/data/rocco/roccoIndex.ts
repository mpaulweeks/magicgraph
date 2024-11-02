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

Selesnya Sanctuary

Ohran Frostfang
Soul of the Harvest
Toski, Bearer of Secrets

Aura Shards
Birthing Pod
Fighter Class

Bane of Progress
Cataclysmic Gearhulk
Devout Witness
Intrepid Hero
Jaya Ballard, Task Mage
Loran of the Third Path
Magus of the Disk
Nullmage Advocate
Squallmonger
Stun Sniper
Tempting Licid
Thorn Mammoth
Ulvenwald Tracker
Viashino Heretic

Gala Greeters
Heronblade Elite
Hope Tender
Joraga Treespeaker
Scholar of New Horizons
Scuttlemutt
Weathered Wayfarer
White Plume Adventurer

God-Eternal Oketra
Heartless Hidetsugu
Illustrious Wanderglyph
Tendershoot Dryad
Wolverine Riders

Dust Elemental
Whitemane Lion
Wirewood Symbiote

Fauna Shaman
Rohirrim Chargers
Stonehewer Giant

Angel of Condemnation
Crashing Drawbridge
Nearheath Pilgrim
Nightshade Peddler
Norin the Wary
Odric, Lunarch Marshal
Rhonas the Indomitable
Ronin Cliffrider
Samut, Voice of Dissent
Saryth, the Viper's Fang
Scalding Salamander
Squee, Goblin Nabob
Trostani, Three Whispers

Basilisk Collar
Helm of Kaldra
Helm of the Host
Shield of Kaldra
Sword of Kaldra
`);

const choppingBlock = parseList(`
`);

const pending = parseList(`
Nacatl War-Pride
Elven Warhounds
Endbringer
Enduring Innocence
Harmonic Sliver
Hofri Ghostforge
Nemesis Mask
Rabbit Battery
Tocasia's Welcome
Stoneforge Mystic
Trostani, Selesnya's Voice
Welcoming Vampire
Sylvan Basilisk
`);

const rejected = parseList(`
Angelic Skirmisher

Arwen, Mortal Queen
Temur Sabertooth
Captain Sisay
Atla Palani, Nest Tender
Forgotten Ancient
Immaculate Magistrate
Krenko, Tin Street Kingpin
Mirror Entity
Purphoros, Bronze-Blooded
Saltskitter
Swathcutter Giant
Thundering Mightmare
Peacekeeper
Spikeshot Elder
Stonecloaker
Farhaven Elf
Kami of Whispered Hopes
Shigeki, Jukai Visionary
Wood Elves
Mentor of the Meek
Anger
Genesis
Glory
Guardian Project
Bow of Nylea
Confusion in the Ranks
Maskwood Nexus
Oketra the True
Primeval Herald
Okina, Temple to the Grandfathers
Eiganjo Castle
Shinka, the Bloodsoaked Keep

Crested Sunmare
Cartographer's Hawk
Khârn the Betrayer
Etali, Primal Storm
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
