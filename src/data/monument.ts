import { CardDraft, CardType, DeckData, Matcher } from '../types';

export enum MonCat {
  Land = 'Tutorable Land',
  NonLand = 'Non Land',
}

export enum MonTag {
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

  DealsDamageToPlayers = 'Damages Players',
  DealsDamageToCreatures = 'Damages Creatures',
  Enrage = 'Enrage',

  TargetsCreatures = 'Targets Creatures',
  TargetsTribal = 'Targets Tribal',
  CaresAboutTargeting = 'Cares About Targeting',
  AnimatesLand = 'Animates Land',
}

enum MonumentEdge {
  CombosWith = 'Combos With',

  ManipulatesCounters = 'Manipulates Counters',
  CountersManipulatedBy = 'Counters Manipulated By',

  EnablesMana = 'Enables Mana',
  EnabledBy = 'Enabled By',

  Damages = 'Damages',
  DamagedBy = 'Damaged By',

  Targets = 'Targets',
  TargetedBy = 'Targeted By',

  Fuels = 'Fuels',
  FueledBy = 'Fueled By',
}
export const MonumentInverseEdge = (edge: string) =>
  ({
    [MonumentEdge.CombosWith]: MonumentEdge.CombosWith,
    [MonumentEdge.ManipulatesCounters]: MonumentEdge.CountersManipulatedBy,
    [MonumentEdge.EnablesMana]: MonumentEdge.EnabledBy,
    [MonumentEdge.Damages]: MonumentEdge.DamagedBy,
    [MonumentEdge.Targets]: MonumentEdge.TargetedBy,
    [MonumentEdge.Fuels]: MonumentEdge.FueledBy,
  }[edge]);
export const MonumentEdges: string[] = [
  // dont care
];

const MonumentDraft: CardDraft[] = (
  [
    {
      name: `Nesting Grounds`,
      types: [CardType.Land],
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
      types: [CardType.Land],
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
      name: `Kiora Bests the Sea God`,
      types: [CardType.Enchantment],
      subtypes: ['Saga'],
    },
    {
      name: `The World Spell`,
      types: [CardType.Enchantment],
      subtypes: ['Saga'],
    },
    {
      name: `Myojin of Life's Web`,
      types: [CardType.Creature],
      tags: [MonTag.HasLimitedUseCounters],
    },
    {
      name: `Myojin of Seeing Winds`,
      types: [CardType.Creature],
      tags: [MonTag.HasLimitedUseCounters],
    },
    {
      name: `Myojin of Towering Might`,
      types: [CardType.Creature],
      tags: [MonTag.HasAbilityCounters],
    },
    {
      pending: true,
      name: `Myojin of Cryptic Dreams`,
      types: [CardType.Creature],
      tags: [MonTag.HasAbilityCounters],
    },
    {
      pending: true,
      name: `Myojin of Roaring Blades`,
      types: [CardType.Creature],
      tags: [MonTag.HasAbilityCounters],
    },
    {
      pending: true,
      name: `Scavenged Brawler`,
      types: [CardType.Creature, CardType.Artifact],
      tags: [MonTag.HasAbilityCounters, MonTag.Flashback],
    },
    {
      pending: true,
      name: `Slippery Bogbonder`,
      types: [CardType.Creature],
      tags: [MonTag.HasAbilityCounters],
    },
    {
      pending: true,
      name: `Transmogrifying Wand`,
      types: [CardType.Artifact],
      tags: [MonTag.HasLimitedUseCounters],
    },
    {
      pending: true,
      name: `Starke of Rath`,
      types: [CardType.Creature],
      tags: [MonTag.DonatesSelf],
    },
    {
      pending: true,
      name: `Humble Defector`,
      types: [CardType.Creature],
      tags: [MonTag.DonatesSelf],
    },
    {
      pending: true,
      name: `Khârn the Betrayer`,
      types: [CardType.Creature],
      tags: [MonTag.DonatesSelf],
    },
    {
      pending: true,
      name: `Homeward Path`,
      types: [CardType.Land],
      combos: [
        {
          edgeType: MonumentEdge.CombosWith,
          match: other =>
            other.types.has(CardType.Creature) &&
            other.tags.has(MonTag.DonatesSelf),
        },
      ],
    },
    {
      pending: true,
      name: `Desolate Lighthouse`,
      types: [CardType.Land],
      combos: [
        {
          edgeType: MonumentEdge.CombosWith,
          match: other => other.tags.has(MonTag.Flashback),
        },
      ],
    },
    {
      name: `Yavimaya, Cradle of Growth`,
      types: [CardType.Land],
      tags: [MonTag.GrantsLandTypes],
      combos: [
        {
          edgeType: MonumentEdge.CombosWith,
          match: other => other.tags.has(MonTag.CaresAboutForests),
        },
      ],
    },
    {
      name: `Urborg, Tomb of Yawgmoth`,
      types: [CardType.Land],
      tags: [MonTag.GrantsLandTypes],
      combos: [
        {
          edgeType: MonumentEdge.CombosWith,
          match: other => other.tags.has(MonTag.CaresAboutSwamps),
        },
      ],
    },
    {
      pending: true,
      name: `Fortitude`,
      types: [CardType.Land],
      tags: [MonTag.CaresAboutForests, MonTag.SacrificesLands],
    },
    {
      name: `Lifetap`,
      types: [CardType.Enchantment],
      tags: [MonTag.CaresAboutForests],
    },
    {
      name: `Roots of Life`,
      types: [CardType.Land],
      tags: [MonTag.CaresAboutSwamps],
    },
    {
      name: `Tyrite Sanctum`,
      types: [CardType.Land],
      tags: [
        MonTag.HasAbilityCounters,
        MonTag.TargetsCreatures,
        MonTag.TargetsTribal,
      ],
    },
    {
      name: `Shapesharer`,
      types: [CardType.Creature],
      subtypes: ['Changeling'],
    },
    {
      name: `Taurean Mauler`,
      types: [CardType.Creature],
      subtypes: ['Changeling'],
    },
    {
      name: `Glacial Chasm`,
      types: [CardType.Land],
      tags: [MonTag.HasCumulativeUpkeep, MonTag.CannotTapForMana],
      combos: [
        {
          edgeType: MonumentEdge.CombosWith,
          match: other => other.tags.has(MonTag.DealsDamageToPlayers),
        },
      ],
    },
    {
      pending: true,
      name: `Heartless Hidetsugu`,
      types: [CardType.Creature],
      tags: [MonTag.DealsDamageToPlayers],
    },
    {
      pending: true,
      name: `Desert`,
      types: [CardType.Land],
      tags: [MonTag.DealsDamageToCreatures, MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Sorrow's Path`,
      types: [CardType.Land],
      tags: [MonTag.DealsDamageToCreatures, MonTag.CannotTapForMana],
    },
    {
      name: `Apex Altisaur`,
      types: [CardType.Creature],
      tags: [MonTag.Enrage],
    },
    {
      name: `Polyraptor`,
      types: [CardType.Creature],
      tags: [MonTag.Enrage],
    },
    {
      pending: true,
      name: `Ranging Raptors`,
      types: [CardType.Creature],
      tags: [MonTag.Enrage],
    },
    {
      name: `Vigor`,
      types: [CardType.Creature],
      tags: [MonTag.Enrage],
    },
    {
      name: `Hanweir Battlements // Hanweir, the Writhing Township`,
      nick: `Hanweir Battlements`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Flamekin Village`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Hammerheim`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Tolaria`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Yavimaya Hollow`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Swarmyard`,
      types: [CardType.Land],
      tags: [MonTag.TargetsTribal],
    },
    {
      pending: true,
      name: `Okina, Temple to the Grandfathers`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Minamo, School at Water's Edge`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      pending: true,
      name: `Shinka, the Bloodsoaked Keep`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      name: `Kessig Wolf Run`,
      types: [CardType.Land],
      tags: [MonTag.TargetsCreatures],
    },
    {
      name: `Dismiss into Dream`,
      types: [CardType.Enchantment],
      tags: [MonTag.CaresAboutTargeting],
    },
    {
      name: `Willbreaker`,
      types: [CardType.Creature],
      tags: [MonTag.CaresAboutTargeting],
    },
    {
      pending: true,
      name: `Cowardice`,
      types: [CardType.Enchantment],
      tags: [MonTag.CaresAboutTargeting],
    },
    {
      pending: true,
      name: `Fractured Loyalty`,
      types: [CardType.Enchantment],
      tags: [MonTag.CaresAboutTargeting],
    },
    {
      pending: true,
      name: `Drownyard Temple`,
      types: [CardType.Land],
      combos: [
        {
          edgeType: MonumentEdge.Fuels,
          match: other => other.tags.has(MonTag.SacrificesLands),
        },
      ],
    },
    {
      name: `Constant Mists`,
      types: [CardType.Instant],
      tags: [MonTag.SacrificesLands],
    },
    {
      name: `Elvish Reclaimer`,
      types: [CardType.Land],
      tags: [MonTag.SacrificesLands],
    },
    {
      pending: true,
      name: `World Breaker`,
      types: [CardType.Land],
      tags: [MonTag.SacrificesLands],
    },
    {
      name: `Silverbluff Bridge`,
      types: [CardType.Land],
      combos: [
        {
          edgeType: MonumentEdge.CombosWith,
          match: other => other.tags.has(MonTag.AnimatesLand),
        },
      ],
    },
    {
      name: `Awakening of Vitu-Ghazi`,
      types: [CardType.Instant],
      tags: [MonTag.AnimatesLand],
    },
    {
      name: `Druid Class`,
      types: [CardType.Enchantment],
      tags: [MonTag.AnimatesLand],
    },
    {
      name: `Maze of Ith`,
      types: [CardType.Land],
      tags: [MonTag.CannotTapForMana, MonTag.TargetsCreatures],
    },
    {
      name: `Thawing Glaciers`,
      types: [CardType.Land],
      tags: [MonTag.CannotTapForMana],
    },
  ] as Omit<CardDraft, 'category'>[]
).map(card => ({
  ...card,
  category: card.types.includes(CardType.Land) ? MonCat.Land : MonCat.NonLand,
}));

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
    relationship: MonumentEdge.CombosWith,
    isMatch: (a, b) =>
      a.tags.has(MonTag.TargetsTribal) && b.subtypes.has('Changeling'),
  },
];

export const MonumentData: DeckData = {
  name: 'Monument.dec',
  url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  cardDrafts: MonumentDraft,
  matchers: MonMatchers,
};
