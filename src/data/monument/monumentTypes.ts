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
  SacrificesSelf = 'Sacrifices Self',
  SacrificeOutletArtifact = 'Sacrifice Outlet for Artifact',
  SacrificeOutletCreature = 'Sacrifice Outlet for Creature',
  SacrificeOutletLand = 'Sacrifice Outlet for Land',
  WantsToBeSacrificed = 'Wants to be Sacrificed',
  WantsSacrificeOutletArtifact = 'Wants Sacrifice Outlet for Artifact',
  WantsSacrificeOutletCreature = 'Wants Sacrifice Outlet for Creature',
  WantsSacrificeOutletLand = 'Wants Sacrifice Outlet for Land',

  HasPlusCounters = '+1/+1 Counters',
  HasMinusCounters = '-1/-1 Counters',
  HasAgeCounters = 'Age Counters',
  HasAbilityCounters = 'Ability Counters',
  HasLimitedUseCounters = 'Divinity Counters',
  HasIndestructible = 'Has Indestructible',
  Proliferates = 'Proliferates',
  ProliferatesNonSaga = 'ProliferatesNonSaga',
  TransfersCounters = 'Transfers Counters',
  RemovesCounters = 'Removes Counters',
  PoisonCounters = 'Poison Counters',
  TutorsLegendary = 'Tutors Legendary',

  HasChangeling = 'Has Changeling',
  GivesChangeling = 'Gives Changeling',
  TutorsChangeling = 'Tutors Changeling',

  GrantsLandTypes = 'Grants Land Types',
  CannotTapForMana = 'Cannot Tap For Mana',

  CaresAboutForests = 'Cares About Forests',
  CaresAboutSwamps = 'Cares About Swamps',
  CaresAboutPlains = 'Cares About Plains',
  TutorsBasicsToBattlefield = 'Tutors Basics to Battlefield',
  TutorsBasicsToHand = 'Tutors Basics to Hand',
  TutorsForest = 'Tutors Forest',
  TutorsPlains = 'Tutors Plains',
  TutorsLand = 'Tutors Land',
  WantsLessLands = 'WantsLessLands',

  Flashback = 'Flashback',

  DonatesSelf = 'Donates Self',
  ExchangesForCreature = 'Exchanges For Creature',

  CopiesCreatures = 'CopiesCreatures',
  CopiesArtifacts = 'CopiesArtifacts',
  CopiesLands = 'CopiesLands',
  CopiesWithCast = 'CopiesWithCast',
  CopiesWithETB = 'CopiesWithETB',
  CopiesWithMirror = 'CopiesWithMirror',
  MakesDevotion = 'MakesDevotion',
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
  UntapsLegends = 'Untaps Legends',
  HasTapAbility = 'Has Tap Ability',
  UntapsAllLands = 'Untaps Lands',
  ManaSink = 'Mana Sink',
  WantsHaste = 'Wants Haste',
  GivesHaste = 'Gives Haste',

  VulnerableAttacker = 'Vulnerable Attacker',

  SundialFriendly = 'Sundial Friendly',

  CaresAboutOpponentCreatures = 'Cares About Opponent Creatures',

  DoublesTokens = 'Doubles Tokens',
  Populates = 'Populates',
  MakesBigToken = 'Makes Big Token',
  MakesArtifactTokens = 'Makes Artifact Token',
  MakesMultipleTokens = 'Makes Multiple Tokens',
  MakesColorlessCreatures = 'Makes Colorless Creatures',
  UsesZombies = 'Uses Zombies',

  ManipulatesTopDeck = 'ManipulatesTopDeck',
  CaresAboutTopdeck = 'CaresAboutTopdeck',
  CaresAboutTrinkets = 'Trinkets',
  UsesTokens = 'Uses Tokens',
  DestroysAll = 'Destroys All',
  HasLandfall = 'Has Landfall',
  TriggersLandfall = 'Triggers Landfall',

  WantsToBeTapped = 'Wants To Be Tapped',
  TapsCreatures = 'Taps Creatures',

  WantsLifegain = 'WantsLifegain',
  GainsLife = 'GainsLife',

  TriggersOnLandTap = 'TriggersOnLandTap',
  ProtectsLand = 'ProtectsLand',
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

  ForcesTap = 'Forces Tap',
  TappedBy = 'Tapped By',

  Nonbo = 'Nonbo',
}

export const MonumentInverseEdge = {
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
  [MonumentEdge.ForcesTap]: MonumentEdge.TappedBy,
};

export const MonumentEdges: string[] = [
  // dont care about ordering
];
