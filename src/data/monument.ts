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
  HasIndestructible = 'Has Indestructible',
  Proliferates = 'Proliferates',

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
  ManaSink = 'Mana Sink',

  VulnerableAttacker = 'Vulnerable Attacker',

  SundialFriendly = 'Sundial Friendly',

  CaresAboutOpponentCreatures = 'Cares Abou tOpponent Creatures',

  ThreatensCreatures = 'Threatens Creatures',
  MakesTokens = 'Makes Tokens',
  UsesZombies = 'Uses Zombies',

  CaresAboutTrinkets = 'Trinkets',
  UsesTokens = 'Uses Tokens',
  CaresAboutBasics = 'Cares About Basics',
  DestroysAll = 'Destroys All',
  HasLandfall = 'Has Landfall',
  TriggersLandfall = 'Triggers Landfall',
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
    tags: [MonTag.Proliferates],
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
      MonTag.HasIndestructible,
    ],
  },
  {
    name: `Contested Cliffs`,
    tags: [
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
      MonTag.SacrificesLands,
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
    name: `Swarmyard`,
    combos: [
      {
        relationship: MonumentEdge.TribalSynergy,
        isMatch: other => other.subtypes.has('Changeling', 'Insect', 'Rat', 'Spider', 'Squirrel'),
      },
    ],
  },
  {
    name: `Kessig Wolf Run`,
    tags: [MonTag.TargetsCreatures, MonTag.ManaSink],
  },
  {
    name: `Drownyard Temple`,
    tags: [MonTag.ManaSink],
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
    name: `Izzet Boilerworks`,
    nick: `Bouncelands`,
    tags: [
      MonTag.CaresAboutGettingUntapped,
      MonTag.LikesBeingCopiedWithMirror,
      MonTag.SundialFriendly,
      MonTag.TriggersLandfall,
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
      MonTag.CaresAboutBasics,
      MonTag.TriggersLandfall,
    ],
  },
  {
    name: `Mirrex`,
    subtypes: ['Sphere'],
    tags: [MonTag.MakesTokens, MonTag.ManaSink],
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
    name: `Kher Keep`,
    tags: [MonTag.MakesTokens],
  },
  {
    name: `Field of the Dead`,
    tags: [MonTag.MakesTokens],
    subtypes: ['Zombie'],
  },
  {
    name: `Urza's Saga`,
    tags: [MonTag.CaresAboutTrinkets],
  },
];
const NonLands: CardDraft[] = [
  {
    name: `Monument to Perfection`,
    types: [CardType.Artifact],
    category: MonCat.Draw,
    tags: [MonTag.CaresAboutBasics],
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.subtypes.has('Sphere'),
      },
    ],
  },
  {
    name: `Thaumatic Compass // Spires of Orazca`,
    types: [CardType.Artifact],
    category: MonCat.Draw,
    tags: [MonTag.CaresAboutBasics],
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
    name: `Waking the Trolls`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Threat,
  },
  {
    name: `The Bath Song`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Draw,
  },
  {
    name: `Myojin of Towering Might`,
    types: [CardType.Creature],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.HasAbilityCounters,
      MonTag.HasPlusCounters,
      MonTag.HasIndestructible,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Myojin of Cryptic Dreams`,
    types: [CardType.Creature],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.HasAbilityCounters,
      MonTag.HasIndestructible,
    ],
    category: MonCat.Draw,
  },
  {
    name: `Myojin of Roaring Blades`,
    types: [CardType.Creature],
    tags: [
      MonTag.LikesBeingCopiedWithCast,
      MonTag.HasAbilityCounters,
      MonTag.HasIndestructible,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Solphim, Mayhem Dominus`,
    types: [CardType.Creature],
    tags: [
      MonTag.HasAbilityCounters,
      MonTag.HasIndestructible,
    ],
    category: MonCat.Threat,
  },
  {
    name: `Omnath, Locus of Rage`,
    types: [CardType.Creature],
    tags: [MonTag.HasLandfall, MonTag.MakesTokens],
    category: MonCat.Threat,
  },
  {
    name: `Tatyova, Benthic Druid`,
    types: [CardType.Creature],
    tags: [MonTag.HasLandfall],
    category: MonCat.Draw,
  },
  {
    name: `Lifetap`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutForests],
    category: MonCat.Lifegain,
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
    tags: [MonTag.MakesTokens],
    category: MonCat.Buff,
  },
  {
    name: `Runed Stalactite`,
    mc: '1',
    types: [CardType.Artifact, CardType.Equipment],
    subtypes: ['Changeling'],
    category: MonCat.Buff,
  },
  {
    name: `Animation Module`,
    mc: '1',
    types: [CardType.Artifact],
    tags: [MonTag.Proliferates, MonTag.MakesTokens],
    category: MonCat.Buff,
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
    name: `Elvish Reclaimer`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands],
    category: MonCat.Draw,
  },
  {
    name: `Expedition Map`,
    types: [CardType.Artifact],
    mc: '1',
    category: MonCat.Draw,
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
    name: `Cauldron of Souls`,
    types: [CardType.Artifact],
    category: MonCat.Buff,
    tags: [
      MonTag.HasMinusCounters,
      MonTag.TargetsCreatures,
    ],
  },
  {
    name: `Battle of Frost and Fire`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Interaction,
    tags: [MonTag.TargetsTribal],
  },
  {
    name: `Transmogrifying Wand`,
    types: [CardType.Artifact],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Interaction,
  },
  {
    name: `Nissa, Ascended Animist`,
    types: [CardType.Planeswalker],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Interaction,
  },
  {
    name: `Nevinyrral's Disk`,
    types: [CardType.Artifact],
    tags: [MonTag.DestroysAll],
    category: MonCat.Interaction,
  },
  {
    name: `Boompile`,
    types: [CardType.Artifact],
    tags: [MonTag.DestroysAll],
    category: MonCat.Interaction,
  },
  {
    name: `Proteus Staff`,
    types: [CardType.Artifact],
    tags: [MonTag.UsesTokens],
    category: MonCat.Interaction,
  },
  {
    name: `Jalira, Master Polymorphist`,
    types: [CardType.Creature],
    tags: [MonTag.UsesTokens],
    category: MonCat.Draw,
  },
  {
    name: `Reality Scramble`,
    types: [CardType.Sorcery],
    tags: [MonTag.UsesTokens],
    category: MonCat.Draw,
  },
  {
    name: `Kindred Discovery`,
    types: [CardType.Enchantment],
    category: MonCat.Draw,
    tags: [MonTag.TargetsTribal, MonTag.UsesTokens],
  },
  {
    name: `Hordewing Skaab`,
    types: [CardType.Creature],
    category: MonCat.Draw,
    tags: [MonTag.TargetsTribal, MonTag.UsesZombies],
  },
  {
    name: `Djinn of Infinite Deceits`,
    types: [CardType.Creature],
    tags: [MonTag.UsesTokens],
    category: MonCat.Interaction,
  },
  {
    name: `Helm of Possession`,
    types: [CardType.Artifact],
    tags: [MonTag.UsesTokens],
    category: MonCat.Interaction,
  },
  {
    name: `Barrin, Master Wizard`,
    types: [CardType.Creature],
    tags: [MonTag.UsesTokens],
    category: MonCat.Interaction,
  },
  {
    name: `Perilous Forays`,
    types: [CardType.Enchantment],
    tags: [MonTag.UsesTokens, MonTag.CaresAboutBasics],
    category: MonCat.Ramp,
  },
  {
    name: `Rootpath Purifier`,
    types: [CardType.Creature],
    category: MonCat.Draw,
    combos: [
      {
        relationship: MonumentEdge.CombosWith,
        isMatch: other => other.tags.has(MonTag.CaresAboutBasics),
      },
    ],
  },
  {
    name: `Aven Courier`,
    types: [CardType.Creature],
    category: MonCat.NonLand,
    combos: [
      {
        relationship: MonumentEdge.ManipulatesCounters,
        isMatch: other =>
          other.tags.has(MonTag.HasAbilityCounters),
      },
    ],
  },
];

// rejected
const LandsRejected: Omit<CardDraft,
  'status' | 'types' | 'category'
>[] = [
  {
    name: `Alchemist's Refuge`,
    tags: [MonTag.ManaSink],
  },
  {
    name: `Oran-Rief, the Vastwood`,
    tags: [MonTag.HasPlusCounters],
  },
  {
    name: `High Market`,
    combos: [
      {
        relationship: MonumentEdge.Fuels,
        isMatch: other => other.tags.has(MonTag.ThreatensCreatures),
      },
    ],
  },
  {
    name: `Mutavault`,
    subtypes: ['Changeling'],
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
    name: `Desolate Lighthouse`,
    combos: [
      {
        relationship: MonumentEdge.Bins,
        isMatch: other => other.tags.has(MonTag.Flashback),
      },
    ],
  },
  {
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
    name: `Littjara Mirrorlake`,
    tags: [
      MonTag.CopiesCreatures,
      MonTag.CopiesWithETB,
    ],
  },
  {
    name: `Hanweir Battlements // Hanweir, the Writhing Township`,
    nick: `Hanweir Battlements`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Tolaria`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Yavimaya Hollow`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Okina, Temple to the Grandfathers`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Minamo, School at Water's Edge`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Shinka, the Bloodsoaked Keep`,
    tags: [MonTag.TargetsCreatures],
  },
  {
    name: `Cascading Cataracts`,
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Silverbluff Bridge`,
    nick: 'Bridge Lands',
    tags: [MonTag.LandWithProtection],
  },
  {
    name: `Rishadan Port`,
    tags: [MonTag.TapsTargetLand],
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
];
const NonLandRejected: CardDraft[] = [
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
    name: `Ward of Bones`,
    types: [CardType.Artifact],
    tags: [MonTag.CaresAboutOpponentCreatures],
    category: MonCat.Interaction,
  },
  {
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
    name: `Overtaker`,
    types: [CardType.Creature],
    tags: [MonTag.ThreatensCreatures],
    category: MonCat.Interaction,
  },
  {
    name: `Callous Oppressor`,
    types: [CardType.Creature],
    tags: [MonTag.ThreatensCreatures],
    category: MonCat.Interaction,
  },
  {
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
    name: `Manascape Refractor`,
    types: [CardType.Artifact],
    category: MonCat.Ramp,
    tags: [MonTag.CopiesLands, MonTag.CopiesWithMirror],
  },
  {
    name: `Wilderness Reclamation`,
    types: [CardType.Enchantment],
    tags: [MonTag.UntapsAllLands],
    category: MonCat.Ramp,
  },
  {
    name: `Krenko, Tin Street Kingpin`,
    types: [CardType.Creature],
    tags: [MonTag.MakesTokens, MonTag.VulnerableAttacker],
    category: MonCat.Threat,
  },
  {
    name: `The Akroan War`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Interaction,
  },
  {
    name: `Spike Weaver`,
    types: [CardType.Creature],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Lifegain,
  },
  {
    name: `Myojin of Life's Web`,
    types: [CardType.Creature],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Threat,
  },
  {
    name: `Myojin of Seeing Winds`,
    types: [CardType.Creature],
    tags: [MonTag.HasLimitedUseCounters],
    category: MonCat.Draw,
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
    name: `Shapesharer`,
    types: [CardType.Creature],
    subtypes: ['Changeling'],
    category: MonCat.Threat,
  },
  {
    name: `Starke of Rath`,
    types: [CardType.Creature],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Interaction,
  },
  {
    name: `Puca's Mischief`,
    types: [CardType.Enchantment],
    tags: [MonTag.ExchangesForCreature],
    category: MonCat.Interaction,
  },
  {
    name: `Perplexing Chimera`,
    types: [CardType.Creature, CardType.Enchantment],
    tags: [MonTag.DonatesSelf],
    category: MonCat.Interaction,
  },
  {
    name: `Lithoform Engine`,
    types: [CardType.Artifact],
    category: MonCat.NonLand,
  },
  {
    name: `Fortitude`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutForests, MonTag.SacrificesLands],
    category: MonCat.Buff,
  },
  {
    name: `Roots of Life`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutSwamps],
    category: MonCat.Lifegain,
  },
  {
    name: `Spreading Algae`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutSwamps, MonTag.CaresAboutGettingLandTapped],
    category: MonCat.Interaction,
  },
  {
    name: `Nightmare Lash`,
    types: [CardType.Artifact],
    tags: [MonTag.CaresAboutSwamps],
    category: MonCat.Buff,
  },
  {
    name: `Dualcaster Mage`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    category: MonCat.Draw,
  },
  {
    name: `Radiant Performer`,
    types: [CardType.Creature],
    subtypes: ['Wizard'],
    category: MonCat.Interaction,
  },
  {
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
    name: `Vigor`,
    types: [CardType.Creature],
    tags: [MonTag.Enrage],
    category: MonCat.Threat,
  },
  {
    name: `Fractured Loyalty`,
    types: [CardType.Enchantment],
    tags: [MonTag.CaresAboutTargeting],
    category: MonCat.Interaction,
  },
  {
    name: `Dreamscape Artist`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands, MonTag.CaresAboutGettingUntapped],
    category: MonCat.Ramp,
  },
  {
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
    name: `Stone-Seeder Hierophant`,
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
    name: `The Phasing of Zhalfir`,
    types: [CardType.Enchantment],
    subtypes: ['Saga'],
    category: MonCat.Interaction,
  },
  {
    name: `World Breaker`,
    types: [CardType.Creature],
    tags: [MonTag.SacrificesLands],
    category: MonCat.Interaction,
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
    name: `Pendant of Prosperity`,
    types: [CardType.Artifact],
    category: MonCat.Draw,
    tags: [MonTag.LikesBeingCopiedWithMirror],
  },
  {
    name: `Skullclamp`,
    types: [CardType.Artifact, CardType.Equipment],
    category: MonCat.Draw,
    mc: '1',
    combos: [
      {
        relationship: MonumentEdge.FueledBy,
        isMatch: other => other.tags.has(MonTag.MakesTokens),
      },
    ],
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
    relationship: MonumentEdge.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.has(MonTag.UsesZombies) && b.subtypes.has('Zombie'),
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
  {
    relationship: MonumentEdge.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MonTag.UntapsAllLands) &&
      (b.types.has(CardType.Land) && b.tags.has(MonTag.ManaSink)),
  },
  {
    relationship: MonumentEdge.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MonTag.CaresAboutTrinkets) &&
      (b.types.has(CardType.Artifact) && b.mc === '1'),
  },
  {
    relationship: MonumentEdge.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MonTag.UsesTokens) &&
      b.tags.has(MonTag.MakesTokens),
  },
  {
    relationship: MonumentEdge.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MonTag.DestroysAll) &&
      b.tags.has(MonTag.HasIndestructible),
  },
  {
    relationship: MonumentEdge.Fuels,
    isMatch: (a,b) =>
      a.tags.has(MonTag.TriggersLandfall) &&
      b.tags.has(MonTag.HasLandfall),
  },
  {
    relationship: MonumentEdge.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MonTag.Proliferates) && (
        b.tags.has(MonTag.HasAbilityCounters) ||
        b.tags.has(MonTag.HasLimitedUseCounters) ||
        b.subtypes.has('Saga')
      ),
  },
];

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
      category: MonCat.Land,
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
