import {
  CardDraft,
  CardListStatus,
  CardType,
  DeckData,
  Matcher,
} from '../types';

enum MonCat {
  Land = 'Tutorable Land',
  NonLand = 'Non Land',
  Threat = 'Threat',
  Lifegain = 'Lifegain',
  Buff = 'Buff',
  Interaction = 'Interaction',
  Draw = 'Draw',
  Ramp = 'Ramp',
}
const CategoryColorMap = {
  [MonCat.Land]: 'lightgrey',
  [MonCat.NonLand]: 'grey',
  [MonCat.Threat]: 'salmon',
  [MonCat.Lifegain]: 'lightyellow',
  [MonCat.Buff]: 'Orchid',
  [MonCat.Interaction]: '#FFB010',
  [MonCat.Draw]: 'lightblue',
  [MonCat.Ramp]: 'lightgreen',
};

enum MonTag {
  HasCumulativeUpkeep = 'Cumulative Upkeep',
  HasAbilityCounters = 'Ability Counters',
  HasLimitedUseCounters = 'Divinity Counters',

  GrantsLandTypes = 'Grants Land Types',
  CannotTapForMana = 'Cannot Tap For Mana',

  CaresAboutForests = 'Cares About Forests',
  CaresAboutSwamps = 'Cares About Swamps',

  SacrificesLands = 'Sacrifices Lands',

  Flashback = 'Flashback',

  DonatesSelf = 'Donates Self',

  CloneableLand = 'Cloneable Land',

  DealsDamageToPlayers = 'Damages Players',
  DealsDamageToCreatures = 'Damages Creatures',
  Enrage = 'Enrage',

  TargetsCreatures = 'Targets Creatures',
  TargetsTribal = 'Targets Tribal',
  CaresAboutTargeting = 'Cares About Targeting',

  AnimatesLand = 'Animates Land',
  LandWithProtection = 'Land With Protection',

  CaresAboutGettingLandTapped = 'Cares About Getting Land Tapped',
  TapsTargetLand = 'Taps Target Land',

  UntapsLand = 'Untaps Land',
  CaresAboutGettingUntapped = 'Cares About Getting Untapped',
}

enum MonumentEdge {
  CombosWith = 'Combos With',
  TribalSynergy = 'Tribal Synergy',
  LandTypeMatters = 'Land Type Matters',

  ManipulatesCounters = 'Manipulates Counters',
  CountersManipulatedBy = 'Counters Used By',

  EnablesMana = 'Enables Mana',
  EnabledBy = 'Mana Ability',

  Damages = 'Damages',
  DamagedBy = 'Damaged By',

  Targets = 'Targets',
  TargetedBy = 'Targeted By',

  Fuels = 'Fuels',
  FueledBy = 'Fueled By',

  Untaps = 'Untaps',
  UntappedBy = 'Untapper',

  Protects = 'Protects',
  ProtectedBy = 'Protection',

  Clones = 'Clones',
  ClonedBy = 'Cloned By',

  Bins = 'Bins',
  BinnedBy = 'Binned By',

  Retrieves = 'Retrieves',
  RetrievedBy = 'Retrieved By',

  ForcesTap = 'Forces Tap',
  TappedBy = 'Tapped By',
}
const MonumentInverseEdge = {
  [MonumentEdge.CombosWith]: MonumentEdge.CombosWith,
  [MonumentEdge.TribalSynergy]: MonumentEdge.TribalSynergy,
  [MonumentEdge.LandTypeMatters]: MonumentEdge.LandTypeMatters,

  [MonumentEdge.ManipulatesCounters]: MonumentEdge.CountersManipulatedBy,
  [MonumentEdge.EnablesMana]: MonumentEdge.EnabledBy,
  [MonumentEdge.Damages]: MonumentEdge.DamagedBy,
  [MonumentEdge.Targets]: MonumentEdge.TargetedBy,
  [MonumentEdge.Fuels]: MonumentEdge.FueledBy,
  [MonumentEdge.Untaps]: MonumentEdge.UntappedBy,
  [MonumentEdge.Protects]: MonumentEdge.ProtectedBy,
  [MonumentEdge.Clones]: MonumentEdge.ClonedBy,
  [MonumentEdge.Bins]: MonumentEdge.BinnedBy,
  [MonumentEdge.Retrieves]: MonumentEdge.RetrievedBy,
  [MonumentEdge.ForcesTap]: MonumentEdge.TappedBy,
};
const MonumentEdges: string[] = [
  // dont care
];

const Lands: Omit<CardDraft, 'types' | 'category'>[] = [
  {
    name: `Nesting Grounds`,
    tags: [MonTag.TargetsCreatures],
    combos: [
      {
        edgeType: MonumentEdge.ManipulatesCounters,
        match: other =>
          other.tags.has(MonTag.HasAbilityCounters) ||
          other.tags.has(MonTag.HasCumulativeUpkeep) ||
          other.subtypes.has('Saga'),
      },
    ],
  },
  {
    name: `Karn's Bastion`,
    combos: [
      {
        edgeType: MonumentEdge.ManipulatesCounters,
        match: other =>
          other.tags.has(MonTag.HasAbilityCounters) ||
          other.tags.has(MonTag.HasLimitedUseCounters) ||
          other.subtypes.has('Saga'),
      },
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Homeward Path`,
    combos: [
      {
        edgeType: MonumentEdge.Retrieves,
        match: other =>
          other.types.has(CardType.Creature) &&
          other.tags.has(MonTag.DonatesSelf),
      },
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Desolate Lighthouse`,
    combos: [
      {
        edgeType: MonumentEdge.Bins,
        match: other => other.tags.has(MonTag.Flashback),
      },
    ],
  },
  {
    name: `Yavimaya, Cradle of Growth`,
    tags: [MonTag.GrantsLandTypes],
    combos: [
      {
        edgeType: MonumentEdge.LandTypeMatters,
        match: other => other.tags.has(MonTag.CaresAboutForests),
      },
    ],
  },
  {
    name: `Urborg, Tomb of Yawgmoth`,
    tags: [MonTag.GrantsLandTypes],
    combos: [
      {
        edgeType: MonumentEdge.LandTypeMatters,
        match: other => other.tags.has(MonTag.CaresAboutSwamps),
      },
    ],
  },
  {
    name: `Tyrite Sanctum`,
    tags: [
      MonTag.HasAbilityCounters,
      MonTag.TargetsCreatures,
      MonTag.TargetsTribal,
    ],
  },
  {
    name: `Glacial Chasm`,
    tags: [
      MonTag.HasCumulativeUpkeep,
      MonTag.CannotTapForMana,
      MonTag.CloneableLand,
    ],
    combos: [
      {
        edgeType: MonumentEdge.CombosWith,
        match: other => other.tags.has(MonTag.DealsDamageToPlayers),
      },
    ],
  },
  {
    name: `Desert`,
    tags: [
      MonTag.DealsDamageToCreatures,
      MonTag.TargetsCreatures,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    name: `Sorrow's Path`,
    tags: [
      MonTag.DealsDamageToCreatures,
      MonTag.CannotTapForMana,
      MonTag.CaresAboutGettingLandTapped,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Hanweir Battlements // Hanweir, the Writhing Township`,
    nick: `Hanweir Battlements`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Flamekin Village`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Pending,
    name: `Hammerheim`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Pending,
    name: `Tolaria`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Yavimaya Hollow`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Pending,
    name: `Swarmyard`,
    tags: [MonTag.TargetsTribal],
  },
  {
    status: CardListStatus.Pending,
    name: `Okina, Temple to the Grandfathers`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Minamo, School at Water's Edge`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Shinka, the Bloodsoaked Keep`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Kessig Wolf Run`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Drownyard Temple`,
    combos: [
      {
        edgeType: MonumentEdge.Fuels,
        match: other => other.tags.has(MonTag.SacrificesLands),
      },
    ],
  },
  {
    name: `Thespian's Stage`,
    combos: [
      {
        edgeType: MonumentEdge.Clones,
        match: b => b.tags.has(MonTag.CloneableLand),
      },
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Cascading Cataracts`,
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Tanglepool Bridge`,
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Slagwoods Bridge`,
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Silverbluff Bridge`,
    tags: [MonTag.LandWithProtection],
  },
  {
    status: CardListStatus.Pending,
    name: `Lotus Field`,
    tags: [
      MonTag.LandWithProtection,
      MonTag.CloneableLand,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    name: `Izzet Boilerworks`,
    nick: `Bouncelands`,
    tags: [MonTag.CloneableLand, MonTag.CaresAboutGettingUntapped],
  },
  {
    name: `Maze of Ith`,
    tags: [MonTag.CannotTapForMana, MonTag.TargetsCreatures],
  },
  {
    name: `Thawing Glaciers`,
    tags: [MonTag.CannotTapForMana, MonTag.CaresAboutGettingUntapped],
  },
  {
    status: CardListStatus.Rejected,
    name: `Rishadan Port`,
    tags: [MonTag.TapsTargetLand],
  },
];
const NonLands: CardDraft[] = [
  {
    name: `Kiora Bests the Sea God`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Threat,
  },
  {
    name: `The World Spell`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Draw,
  },
  {
    name: `The Akroan War`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Interaction,
  },
  {
    name: `Battle of Frost and Fire`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Draw,
  },
  {
    status: CardListStatus.Rejected,
    name: `Myojin of Life's Web`,
    types: [CardType.Creature],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
    name: `Myojin of Seeing Winds`,
    types: [CardType.Creature],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Draw,
  },
  {
    name: `Myojin of Towering Might`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Threat,
  },
  {
    name: `Myojin of Cryptic Dreams`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Draw,
  },
  {
    name: `Myojin of Roaring Blades`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Pending,
    name: `Solphim, Mayhem Dominus`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Threat,
  },
  {
    name: `Scavenged Brawler`,
    types: [CardType.Creature, CardType.Artifact],
    tags: [MonTag.HasAbilityCounters, MonTag.Flashback],
    category: MonCat.Buff,
  },
  {
    name: `Slippery Bogbonder`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Buff,
  },
  {
    name: `Transmogrifying Wand`,
    types: [CardType.Artifact],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Starke of Rath`,
    types: [CardType.Creature],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Humble Defector`,
    types: [CardType.Creature],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Draw,
  },
  {
    status: CardListStatus.Rejected,
    name: `Khârn the Betrayer`,
    types: [CardType.Creature],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Draw,
  },
  {
    status: CardListStatus.Rejected,
    name: `Fortitude`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutForests, MonTag.SacrificesLands],
    category: MonCat.Buff,
  },
  {
    name: `Lifetap`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutForests],
    category: MonCat.Lifegain,
  },
  {
    name: `Roots of Life`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutSwamps],
    category: MonCat.Lifegain,
  },
  {
    status: CardListStatus.Rejected,
    name: `Spreading Algae`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutSwamps, MonTag.CaresAboutGettingLandTapped],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Nightmare Lash`,
    types: [CardType.Artifact],
    tags: [MonTag.CaresAboutSwamps],
    category: MonCat.Buff,
  },
  {
    name: `Shapesharer`,
    types: [CardType.Creature],
    subtypes: ['Changeling'],
    category: MonCat.Threat,
  },
  {
    name: `Taurean Mauler`,
    types: [CardType.Creature],
    subtypes: ['Changeling'],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
    name: `Heartless Hidetsugu`,
    types: [CardType.Creature],
    tags: [MonTag.DealsDamageToPlayers],
    category: MonCat.Threat,
  },
  {
    name: `Apex Altisaur`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Interaction,
  },
  {
    name: `Polyraptor`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Threat,
  },
  {
    name: `Ranging Raptors`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Vigor`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Threat,
  },
  {
    name: `Dismiss into Dream`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutTargeting],
    category: MonCat.Interaction,
  },
  {
    name: `Willbreaker`,
    types: [CardType.Creature],
    tags: [MonTag.CaresAboutTargeting],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Pending,
    name: `Cowardice`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutTargeting],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Fractured Loyalty`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutTargeting],
    category: MonCat.Interaction,
  },
  {
    name: `Constant Mists`,
    types: [CardType.Instant],
    tags: [MonTag.SacrificesLands],
    category: MonCat.Lifegain,
  },
  {
    name: `Elvish Reclaimer`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands],
    category: MonCat.Draw,
  },
  {
    name: `Dreamscape Artist`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands, MonTag.CaresAboutGettingUntapped],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Pending,
    name: `World Breaker`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Dowsing Dagger // Lost Vale`,
    nick: `Dowsing Dagger`,
    types: [CardType.Artifact],
    tags: [MonTag.CloneableLand],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Conqueror's Galleon // Conqueror's Foothold`,
    nick: `Conqueror's Galleon`,
    types: [CardType.Artifact],
    tags: [MonTag.CloneableLand],
    category: MonCat.Draw,
  },
  {
    name: `Awakening of Vitu-Ghazi`,
    types: [CardType.Instant],
    tags: [MonTag.AnimatesLand],
    category: MonCat.Threat,
  },
  {
    name: `Spawning Grounds`,
    types: [CardType.Enchantment],
    tags: [MonTag.AnimatesLand, MonTag.CaresAboutGettingUntapped],
    category: MonCat.Threat,
  },
  {
    name: `Druid Class`,
    types: [CardType.Enchantment],
    tags: [MonTag.AnimatesLand],
    category: MonCat.Threat,
  },
  {
    name: `Vizier of Tumbling Sands`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
  {
    name: `Fatestitcher`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
  {
    name: `Kiora's Follower`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Pending,
    name: `Clever Conjurer`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Pending,
    name: `Nimbleclaw Adept`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
];

const MonMatchers: Matcher[] = [
  {
    relationship: MonumentEdge.EnablesMana,
    isMatch: (a, b) =>
      a.tags.has(MonTag.GrantsLandTypes) && b.tags.has(MonTag.CannotTapForMana),
  },
  {
    relationship: MonumentEdge.Damages,
    isMatch: (a, b) =>
      a.tags.has(MonTag.DealsDamageToCreatures) && b.tags.has(MonTag.Enrage),
  },
  {
    relationship: MonumentEdge.Targets,
    isMatch: (a, b) =>
      a.tags.has(MonTag.TargetsCreatures) &&
      b.tags.has(MonTag.CaresAboutTargeting),
  },
  {
    relationship: MonumentEdge.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.has(MonTag.TargetsTribal) && b.subtypes.has('Changeling'),
  },
  {
    relationship: MonumentEdge.Protects,
    isMatch: (a, b) =>
      a.tags.has(MonTag.LandWithProtection) && b.tags.has(MonTag.AnimatesLand),
  },
  {
    relationship: MonumentEdge.ForcesTap,
    isMatch: (a, b) =>
      a.tags.has(MonTag.TapsTargetLand) &&
      b.tags.has(MonTag.CaresAboutGettingLandTapped),
  },
  {
    relationship: MonumentEdge.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MonTag.UntapsLand) &&
      b.tags.has(MonTag.CaresAboutGettingUntapped),
  },
];

export const MonumentData: DeckData = {
  name: 'Monument.dec',
  url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  cardDrafts: [
    ...Lands.map(c => ({
      ...c,
      types: [CardType.Land],
      category: MonCat.Land,
      tags: (c.tags ?? []).concat('Is Land'),
    })),
    ...NonLands.map(c => ({
      ...c,
      tags: (c.tags ?? []).concat('Is Not Land'),
    })),
  ],
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
