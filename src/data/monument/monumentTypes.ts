export enum MonumentCategory {
  ComboLand = 'Combo Land',
  MulticolorLand = 'Multicolor Land',
  PillowLand = 'Pillowfort Land',
  Misc = 'Misc',
  Threat = 'Threat',
  Lifegain = 'Lifegain',
  Buff = 'Buff',
  Interaction = 'Interaction',
  Draw = 'Draw',
  Ramp = 'Ramp',
  Tutor = 'Tutor',
  Recursion = 'Recursion',
}

export enum MonumentTag {
  SacrificeOutlet = 'Sacrifice Outlet',
  WantsSacrificeOutlet = 'Wants Sacrifice Outlet',

  HasPlusCounters = '+1/+1 Counters',
  HasMinusCounters = '-1/-1 Counters',
  HasAgeCounters = 'Age Counters',
  HasAbilityCounters = 'Ability Counters',
  HasLimitedUseCounters = 'Divinity Counters',
  HasIndestructible = 'Has Indestructible',
  Proliferates = 'Proliferates',
  TransfersCounters = 'Transfers Counters',
  RemovesCounters = 'Removes Counters',
  PoisonCounters = 'Poison Counters',
  TutorsLegendary = 'Tutors Legendary',

  GrantsLandTypes = 'Grants Land Types',
  CannotTapForMana = 'Cannot Tap For Mana',

  CaresAboutForests = 'Cares About Forests',
  CaresAboutSwamps = 'Cares About Swamps',
  CaresAboutPlains = 'Cares About Plains',
  TutorsForest = 'Tutors Forest',
  TutorsPlains = 'Tutors Plains',
  TutorsLand = 'Tutors Land',

  SacrificesSelf = 'Sacrifices Self',
  SacrificesLands = 'Sacrifices Lands',
  WantsToBeSacrificed = 'Wants to be Sacrificed',

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
  LikesBeingBounced = 'Likes Being Bounced',
  BouncesLand = 'Bounces Land',

  DealsDamageToPlayers = 'Damages Players',
  DealsDamageToCreatures = 'Damages Creatures',
  Enrage = 'Enrage',

  TargetsCreatures = 'Targets Creatures',
  TargetsTribal = 'Targets Tribal',
  CaresAboutTargeting = 'Cares About Targeting',
  ManLand = 'Man Land',

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

  MakesTokens = 'Makes Tokens',
  UsesZombies = 'Uses Zombies',

  CaresAboutTopdeck = 'CaresAboutTopdeck',
  CaresAboutTrinkets = 'Trinkets',
  UsesTokens = 'Uses Tokens',
  TutorsBasic = 'Cares About Basics',
  DestroysAll = 'Destroys All',
  HasLandfall = 'Has Landfall',
  TriggersLandfall = 'Triggers Landfall',
}

export enum MonumentEdge {
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

  Reanimates = 'Reanimates',
  ReanimatedBy = 'Reanimated By',

  Tutors = 'Tutors',
  TutoredBy = 'Tutored By',

  ForcesTap = 'Forces Tap',
  TappedBy = 'Tapped By',

  Nonbo = 'Nonbo',
}

export const MonumentInverseEdge = {
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
  [MonumentEdge.Reanimates]: MonumentEdge.ReanimatedBy,
  [MonumentEdge.Tutors]: MonumentEdge.TutoredBy,
  [MonumentEdge.ForcesTap]: MonumentEdge.TappedBy,
};

export const MonumentEdges: string[] = [
  // dont care
];