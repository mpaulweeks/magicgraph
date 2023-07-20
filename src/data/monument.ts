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
  HasPlusCounters = '+1/+1 Counters',
  HasMinusCounters = '-1/-1 Counters',
  HasAgeCounters = 'Age Counters',
  HasAbilityCounters = 'Ability Counters',
  HasLimitedUseCounters = 'Divinity Counters',

  GrantsLandTypes = 'Grants Land Types',
  CannotTapForMana = 'Cannot Tap For Mana',

  CaresAboutForests = 'Cares About Forests',
  CaresAboutSwamps = 'Cares About Swamps',

  SacrificesLands = 'Sacrifices Lands',

  Flashback = 'Flashback',

  DonatesSelf = 'Donates Self',
  ExchangesForCreature = 'Exchanges For Creature',

  CopiesCreatures = 'CopiesCreatures',
  CopiesArtifacts = 'CopiesArtifacts',
  CopiesLands = 'CopiesLands',
  CopiesWithCast = 'CopiesWithCast',
  CopiesWithETB = 'CopiesWithETB',
  CopiesWithMirror = 'CopiesWithMirror',
  LikesBeingCopiedWithCast = 'LikesBeingCopiedWithCast',
  LikesBeingCopiedWithETB = 'LikesBeingCopiedWithETB',
  LikesBeingCopiedWithMirror = 'LikesBeingCopiedWithMirror',

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

  UntapsCreature = 'Untaps Creature',
  UntapsLand = 'Untaps Land',
  CaresAboutGettingUntapped = 'Cares About Getting Untapped',
  UntapsAllLands = 'Untaps Lands',

  VulnerableAttacker = 'Vulnerable Attacker',

  SundialFriendly = 'Sundial Friendly',

  CaresAboutOpponentCreatures = 'Cares Abou tOpponent Creatures',

  ThreatensCreatures = 'Threatens Creatures',
  MakesTokens = 'Makes Tokens',
}

enum MonumentEdge {
  CombosWith = 'Combos With',
  TribalSynergy = 'Tribal Synergy',
  LandTypeMatters = 'Land Type Matters',

  ManipulatesCounters = 'Manipulates Counters',

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
  ProtectsAttacker = 'Protects Attacker',

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
  [MonumentEdge.ManipulatesCounters]: MonumentEdge.ManipulatesCounters,

  [MonumentEdge.EnablesMana]: MonumentEdge.EnabledBy,
  [MonumentEdge.Damages]: MonumentEdge.DamagedBy,
  [MonumentEdge.Targets]: MonumentEdge.TargetedBy,
  [MonumentEdge.Fuels]: MonumentEdge.FueledBy,
  [MonumentEdge.FueledBy]: MonumentEdge.Fuels,
  [MonumentEdge.Untaps]: MonumentEdge.UntappedBy,
  [MonumentEdge.Protects]: MonumentEdge.ProtectedBy,
  [MonumentEdge.ProtectsAttacker]: MonumentEdge.ProtectedBy,
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
        relationship: MonumentEdge.ManipulatesCounters,
        isMatch: other =>
          other.tags.has(MonTag.HasPlusCounters) ||
          other.tags.has(MonTag.HasMinusCounters) ||
          other.tags.has(MonTag.HasAbilityCounters) ||
          other.tags.has(MonTag.HasAgeCounters) ||
          other.subtypes.has('Saga'),
      },
    ],
  },
  {
    name: `Karn's Bastion`,
    combos: [
      {
        relationship: MonumentEdge.ManipulatesCounters,
        isMatch: other =>
          other.tags.has(MonTag.HasAbilityCounters) ||
          other.tags.has(MonTag.HasLimitedUseCounters) ||
          other.subtypes.has('Saga'),
      },
    ],
  },
  {
    name: `Homeward Path`,
    combos: [
      {
        relationship: MonumentEdge.Retrieves,
        isMatch: other =>
          other.tags.has(MonTag.ExchangesForCreature) ||
          (other.types.has(CardType.Creature) &&
            other.tags.has(MonTag.DonatesSelf)),
      },
    ],
  },
  {
    name: `Yavimaya, Cradle of Growth`,
    tags: [MonTag.GrantsLandTypes],
    combos: [
      {
        relationship: MonumentEdge.LandTypeMatters,
        isMatch: other => other.tags.has(MonTag.CaresAboutForests),
      },
    ],
  },
  {
    name: `Tyrite Sanctum`,
    tags: [
      MonTag.HasPlusCounters,
      MonTag.HasAbilityCounters,
      MonTag.TargetsCreatures,
      MonTag.TargetsTribal,
    ],
  },
  {
    name: `Glacial Chasm`,
    tags: [
      MonTag.HasAgeCounters,
      MonTag.CannotTapForMana,
      MonTag.LikesBeingCopiedWithCast,
      MonTag.LikesBeingCopiedWithETB,
      MonTag.LikesBeingCopiedWithMirror,
    ],
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.tags.has(MonTag.DealsDamageToPlayers),
      },
    ],
  },
  {
    name: `Flamekin Village`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Hammerheim`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Oran-Rief, the Vastwood`,
    tags: [MonTag.HasPlusCounters],
  },
  {
    name: `Swarmyard`,
    combos: [
      {
        relationship: MonumentEdge.TribalSynergy,
        isMatch: other => other.subtypes.has('Changeling', 'Insect', 'Rat', 'Spider', 'Squirrel'),
      },
    ],
  },
  {
    name: `Riptide Laboratory`,
    tags: [MonTag.TargetsTribal],
    combos: [
      {
        relationship: MonumentEdge.TribalSynergy,
        isMatch: b => b.subtypes.has('Wizard'),
      },
    ],
  },
  {
    name: `Kessig Wolf Run`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Drownyard Temple`,
    combos: [
      {
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.SacrificesLands),
      },
    ],
  },
  {
    name: `Thespian's Stage`,
    tags: [
      MonTag.CopiesLands,
      MonTag.CopiesWithMirror,
    ],
  },
  {
    name: `Lotus Field`,
    tags: [
      MonTag.CaresAboutGettingUntapped,
      MonTag.LikesBeingCopiedWithMirror,
      MonTag.LandWithProtection,
      MonTag.SundialFriendly,
    ],
  },
  {
    name: `Maze of Ith`,
    tags: [MonTag.CannotTapForMana, MonTag.TargetsCreatures],
    combos: [
      {
        relationship: MonumentEdge.ProtectsAttacker,
        isMatch: other => other.tags.has(MonTag.VulnerableAttacker),
      },
    ],
  },
  {
    name: `Thawing Glaciers`,
    tags: [
      MonTag.CannotTapForMana,
      MonTag.CaresAboutGettingUntapped,
      MonTag.SundialFriendly,
    ],
  },
  {
    name: `Alchemist's Refuge`,
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.tags.has(MonTag.UntapsAllLands),
      },
    ],
  },
  {
    name: `Forbidden Orchard`,
    combos: [
      {
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.CaresAboutOpponentCreatures),
      },
    ],
  },
  {
    name: `Mirrex`,
    subtypes: ['Sphere'],
    tags: [MonTag.MakesTokens],
  },
  {
    name: `The Mycosynth Gardens`,
    subtypes: ['Sphere'],
    tags: [
      MonTag.CopiesArtifacts,
      MonTag.CopiesWithMirror,
    ],
  },
  {
    name: `Littjara Mirrorlake`,
    tags: [
      MonTag.CopiesCreatures,
      MonTag.CopiesWithETB,
    ],
  },
  {
    status: CardListStatus.Pending,
    name: `High Market`,
    combos: [
      {
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.ThreatensCreatures),
      },
    ],
  },
  {
    status: CardListStatus.Pending,
    name: `Kher Keep`,
    tags: [MonTag.MakesTokens],
  },
  {
    status: CardListStatus.Pending,
    name: `Mutavault`,
    subtypes: ['Changeling'],
  },
];
const NonLands: CardDraft[] = [
  {
    name: `Monument to Perfection`,
    types: [CardType.Artifact],
    category: MonCat.Draw,
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.subtypes.has('Sphere'),
      },
    ],
  },
  {
    name: `Pendant of Prosperity`,
    types: [CardType.Artifact],
    category: MonCat.Draw,
    tags: [MonTag.LikesBeingCopiedWithMirror],
  },
  {
    name: `Mirage Mirror`,
    types: [CardType.Artifact],
    category: MonCat.Interaction,
    tags: [
      MonTag.CopiesCreatures,
      MonTag.CopiesArtifacts,
      MonTag.CopiesLands,
      MonTag.CopiesWithMirror,
    ],
  },
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
    name: `The Phasing of Zhalfir`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Interaction,
  },
  {
    name: `Myojin of Towering Might`,
    types: [CardType.Creature],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.HasAbilityCounters,
      MonTag.HasPlusCounters,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Myojin of Cryptic Dreams`,
    types: [CardType.Creature],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.HasAbilityCounters,
    ],
    category: MonCat.Draw,
  },
  {
    name: `Myojin of Roaring Blades`,
    types: [CardType.Creature],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.HasAbilityCounters,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Solphim, Mayhem Dominus`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Threat,
  },
  {
    name: `Humble Defector`,
    types: [CardType.Creature],
    tags: [MonTag.DonatesSelf, MonTag.CaresAboutGettingUntapped],
    category: MonCat.Draw,
  },
  {
    name: `Khârn the Betrayer`,
    types: [CardType.Creature],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Draw,
  },
  {
    name: `Perplexing Chimera`,
    types: [CardType.Creature, CardType.Enchantment],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Interaction,
  },
  {
    name: `Lifetap`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutForests],
    category: MonCat.Lifegain,
  },
  {
    name: `Cyclone Summoner`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    category: MonCat.Interaction,
    tags: [MonTag.LikesBeingCopiedWithCast],
  },
  {
    name: `Sower of Temptation`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    category: MonCat.Interaction,
  },
  {
    name: `Taurean Mauler`,
    types: [CardType.Creature],
    subtypes: ['Changeling'],
    category: MonCat.Threat,
  },
  {
    name: `Moritte of the Frost`,
    types: [CardType.Creature],
    subtypes: ['Changeling'],
    tags: [
      MonTag.CopiesCreatures,
      MonTag.CopiesArtifacts,
      MonTag.CopiesLands,
      MonTag.CopiesWithCast,
      MonTag.HasPlusCounters,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Maskwood Nexus`,
    types: [CardType.Artifact],
    subtypes: ['Changeling'],
    category: MonCat.NonLand,
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
    subtypes: ['Wizard'],
    tags: [MonTag.CaresAboutTargeting, MonTag.ThreatensCreatures],
    category: MonCat.Interaction,
  },
  {
    name: `Cowardice`,
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
    name: `World Breaker`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands],
    category: MonCat.Interaction,
  },
  {
    name: `Vizier of Tumbling Sands`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand, MonTag.UntapsCreature],
    category: MonCat.Ramp,
  },
  {
    name: `Seedborn Muse`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsAllLands],
    category: MonCat.Ramp,
  },
  {
    name: `Scute Swarm`,
    types: [CardType.Creature],
    subtypes: ['Insect'],
    tags: [MonTag.MakesTokens],
    category: MonCat.Threat,
  },
  {
    name: `Dragonlair Spider`,
    types: [CardType.Creature],
    subtypes: ['Spider'],
    tags: [MonTag.MakesTokens],
    category: MonCat.Threat,
  },
  {
    name: `Nacatl War-Pride`,
    types: [CardType.Creature],
    tags: [
      MonTag.VulnerableAttacker,
      MonTag.SundialFriendly,
      MonTag.CaresAboutOpponentCreatures,
      MonTag.LikesBeingCopiedWithCast,
      MonTag.LikesBeingCopiedWithETB,
      MonTag.LikesBeingCopiedWithMirror,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Primeval Herald`,
    types: [CardType.Creature],
    tags: [MonTag.VulnerableAttacker, MonTag.SundialFriendly],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Pending,
    name: `Sword of the Animist`,
    types: [CardType.Equipment],
    tags: [MonTag.VulnerableAttacker, MonTag.SundialFriendly],
    category: MonCat.Ramp,
  },
  {
    name: `Sundial of the Infinite`,
    types: [CardType.Artifact],
    category: MonCat.NonLand,
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.tags.has(MonTag.SundialFriendly),
      },
    ],
  },
  {
    name: `Ward of Bones`,
    types: [CardType.Artifact],
    tags: [MonTag.CaresAboutOpponentCreatures],
    category: MonCat.Interaction,
  },
  {
    name: `Cauldron of Souls`,
    types: [CardType.Artifact],
    category: MonCat.Buff,
    tags: [
      MonTag.HasMinusCounters,
      MonTag.TargetsCreatures,
    ],
  },
  {
    name: `Skullclamp`,
    types: [CardType.Equipment],
    category: MonCat.Draw,
    combos: [
      {
        relationship: MonumentEdge.FueledBy,
        isMatch: other => other.tags.has(MonTag.MakesTokens),
      },
    ],
  },
  {
    status: CardListStatus.Pending,
    name: `Realmbreaker, the Invasion Tree`,
    types: [CardType.Artifact, CardType.Legendary],
    category: MonCat.Ramp,
    combos: [{
      relationship: MonumentEdge.TribalSynergy,
      isMatch: other => (
        other.types.has('Creature') &&
        other.subtypes.has('Changeling')
      ),
    }],
  },
  {
    status: CardListStatus.Pending,
    name: `Overtaker`,
    types: [CardType.Creature],
    tags: [MonTag.ThreatensCreatures],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Pending,
    name: `Callous Oppressor`,
    types: [CardType.Creature],
    tags: [MonTag.ThreatensCreatures],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Pending,
    name: `Utvara Hellkite`,
    types: [CardType.Creature],
    tags: [
      MonTag.TargetsTribal,
      MonTag.LikesBeingCopiedWithCast,
      MonTag.LikesBeingCopiedWithETB,
      MonTag.LikesBeingCopiedWithMirror,
    ],
    category: MonCat.Threat,
  },
];

// rejected
const LandsRejected: Omit<CardDraft, 'types' | 'category'>[] = [
  {
    status: CardListStatus.Rejected,
    name: `Desolate Lighthouse`,
    combos: [
      {
        relationship: MonumentEdge.Bins,
        isMatch: other => other.tags.has(MonTag.Flashback),
      },
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Urborg, Tomb of Yawgmoth`,
    tags: [MonTag.GrantsLandTypes],
    combos: [
      {
        relationship: MonumentEdge.LandTypeMatters,
        isMatch: other => other.tags.has(MonTag.CaresAboutSwamps),
      },
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Desert`,
    tags: [
      MonTag.DealsDamageToCreatures,
      MonTag.TargetsCreatures,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    status: CardListStatus.Rejected,
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
    status: CardListStatus.Rejected,
    name: `Tolaria`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Yavimaya Hollow`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Okina, Temple to the Grandfathers`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Minamo, School at Water's Edge`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Shinka, the Bloodsoaked Keep`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    status: CardListStatus.Rejected,
    name: `Cascading Cataracts`,
    tags: [MonTag.LandWithProtection],
  },
  {
    status: CardListStatus.Rejected,
    name: `Silverbluff Bridge`,
    nick: 'Bridge Lands',
    tags: [MonTag.LandWithProtection],
  },
  {
    status: CardListStatus.Rejected,
    name: `Izzet Boilerworks`,
    nick: `Bouncelands`,
    tags: [
      MonTag.LikesBeingCopiedWithMirror,
      MonTag.CaresAboutGettingUntapped,
    ],
  },
  {
    status: CardListStatus.Rejected,
    name: `Rishadan Port`,
    tags: [MonTag.TapsTargetLand],
  },
];
const NonLandRejected: CardDraft[] = [
  {
    status: CardListStatus.Rejected,
    name: `The Akroan War`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Battle of Frost and Fire`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Draw,
  },
  {
    status: CardListStatus.Rejected,
    name: `Spike Weaver`,
    types: [CardType.Creature],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Lifegain,
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
    status: CardListStatus.Rejected,
    name: `Scavenged Brawler`,
    types: [CardType.Creature, CardType.Artifact],
    tags: [MonTag.HasAbilityCounters, MonTag.Flashback],
    category: MonCat.Buff,
  },
  {
    status: CardListStatus.Rejected,
    name: `Slippery Bogbonder`,
    types: [CardType.Creature],
    tags: [MonTag.HasAbilityCounters],
    category: MonCat.Buff,
  },
  {
    status: CardListStatus.Rejected,
    name: `Shapesharer`,
    types: [CardType.Creature],
    subtypes: ['Changeling'],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
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
    name: `Puca's Mischief`,
    types: [CardType.Enchantment],
    tags: [MonTag.ExchangesForCreature],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Fortitude`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutForests, MonTag.SacrificesLands],
    category: MonCat.Buff,
  },
  {
    status: CardListStatus.Rejected,
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
    status: CardListStatus.Rejected,
    name: `Dualcaster Mage`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    category: MonCat.Draw,
  },
  {
    status: CardListStatus.Rejected,
    name: `Radiant Performer`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Heartless Hidetsugu`,
    types: [CardType.Creature],
    tags: [MonTag.DealsDamageToPlayers],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
    name: `Apex Altisaur`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Polyraptor`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
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
    status: CardListStatus.Rejected,
    name: `Fractured Loyalty`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutTargeting],
    category: MonCat.Interaction,
  },
  {
    status: CardListStatus.Rejected,
    name: `Dreamscape Artist`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands, MonTag.CaresAboutGettingUntapped],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Dowsing Dagger // Lost Vale`,
    nick: `Dowsing Dagger`,
    types: [CardType.Artifact],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.LikesBeingCopiedWithETB,
      MonTag.LikesBeingCopiedWithMirror,
    ],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Conqueror's Galleon // Conqueror's Foothold`,
    nick: `Conqueror's Galleon`,
    types: [CardType.Artifact],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.LikesBeingCopiedWithETB,
      MonTag.LikesBeingCopiedWithMirror,
    ],
    category: MonCat.Draw,
  },
  {
    status: CardListStatus.Rejected,
    name: `Awakening of Vitu-Ghazi`,
    types: [CardType.Instant],
    tags: [MonTag.AnimatesLand],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
    name: `Spawning Grounds`,
    types: [CardType.Enchantment],
    tags: [MonTag.AnimatesLand, MonTag.CaresAboutGettingUntapped],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
    name: `Druid Class`,
    types: [CardType.Enchantment],
    tags: [MonTag.AnimatesLand],
    category: MonCat.Threat,
  },
  {
    status: CardListStatus.Rejected,
    name: `Stone-Seeder Hierophant`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Wilderness Reclamation`,
    types: [CardType.Enchantment],
    tags: [MonTag.UntapsAllLands],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Fatestitcher`,
    types: [CardType.Creature],
    tags: [MonTag.UntapsLand],
    category: MonCat.Ramp,
  },
  {
    status: CardListStatus.Rejected,
    name: `Kiora's Follower`,
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
      b.types.has(CardType.Land) &&
      b.tags.has(MonTag.CaresAboutGettingUntapped),
  },
  {
    relationship: MonumentEdge.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MonTag.UntapsCreature) &&
      b.types.has(CardType.Creature) &&
      b.tags.has(MonTag.CaresAboutGettingUntapped),
  },
  {
    relationship: MonumentEdge.Clones,
    isMatch: (a, b) => {
      const canTarget = [
        a.tags.has(MonTag.CopiesCreatures) && b.types.has(CardType.Creature),
        a.tags.has(MonTag.CopiesArtifacts) && b.types.has(CardType.Artifact),
        a.tags.has(MonTag.CopiesLands) && b.types.has(CardType.Land),
      ].some(b => b);
      const copyType = [
        a.tags.has(MonTag.CopiesWithCast) && b.tags.has(MonTag.LikesBeingCopiedWithCast),
        a.tags.has(MonTag.CopiesWithETB) && b.tags.has(MonTag.LikesBeingCopiedWithETB),
        a.tags.has(MonTag.CopiesWithMirror) && b.tags.has(MonTag.LikesBeingCopiedWithMirror),
      ].some(b => b);
      return canTarget && copyType;
    },
  },
  {
    relationship: MonumentEdge.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.has(MonTag.HasMinusCounters) && b.tags.has(MonTag.HasPlusCounters),
  },
];

export const MonumentData: DeckData = {
  name: 'Monument.dec',
  url: 'https://tappedout.net/mtg-decks/monument-to-hubris/',
  cardDrafts: [
    ...[...Lands, ...LandsRejected].map(c => ({
      ...c,
      types: [CardType.Land],
      category: MonCat.Land,
      tags: (c.tags ?? []).concat('Is Land'),
      emphasize: true,
    })),
    ...[...NonLands, ...NonLandRejected].map(c => ({
      ...c,
      tags: (c.tags ?? []).concat('Is Not Land'),
    })),
  ],
  matchers: MonMatchers,
  categoryColorMap: CategoryColorMap,
  relationshipInverse: MonumentInverseEdge,
  relationshipOrder: MonumentEdges,
};
