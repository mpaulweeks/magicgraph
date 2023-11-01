import { CardType, Matcher } from "../../types";
import { MonumentEdge as ME, MonumentTag as MT } from "./types";

export const MonMatchers: Matcher[] = [
  {
    relationship: ME.EnablesMana,
    isMatch: (a, b) =>
      a.tags.has(MT.GrantsLandTypes) && b.tags.has(MT.CannotTapForMana),
  },
  {
    relationship: ME.Damages,
    isMatch: (a, b) =>
      a.tags.has(MT.DealsDamageToCreatures) && b.tags.has(MT.Enrage),
  },
  {
    relationship: ME.Targets,
    isMatch: (a, b) =>
      a.tags.has(MT.TargetsCreatures) &&
      b.tags.has(MT.CaresAboutTargeting),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.has(MT.TargetsTribal) && b.subtypes.has('Changeling'),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.has(MT.UsesZombies) && b.subtypes.has('Zombie'),
  },
  {
    relationship: ME.Protects,
    isMatch: (a, b) =>
      a.tags.has(MT.LandWithProtection) && b.tags.has(MT.AnimatesLand),
  },
  {
    relationship: ME.ForcesTap,
    isMatch: (a, b) =>
      a.tags.has(MT.TapsTargetLand) &&
      b.tags.has(MT.CaresAboutGettingLandTapped),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MT.UntapsLand) &&
      b.types.has(CardType.Land) &&
      b.tags.has(MT.CaresAboutGettingUntapped),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MT.UntapsCreature) &&
      b.types.has(CardType.Creature) &&
      b.tags.has(MT.CaresAboutGettingUntapped),
  },
  {
    relationship: ME.Clones,
    isMatch: (a, b) => {
      const canTarget = [
        a.tags.has(MT.CopiesCreatures) && b.types.has(CardType.Creature),
        a.tags.has(MT.CopiesArtifacts) && b.types.has(CardType.Artifact),
        a.tags.has(MT.CopiesLands) && b.types.has(CardType.Land),
      ].some(b => b);
      const copyType = [
        a.tags.has(MT.CopiesWithCast) && b.tags.has(MT.LikesBeingCopiedWithCast),
        a.tags.has(MT.CopiesWithETB) && b.tags.has(MT.LikesBeingCopiedWithETB),
        a.tags.has(MT.CopiesWithMirror) && b.tags.has(MT.LikesBeingCopiedWithMirror),
      ].some(b => b);
      return canTarget && copyType;
    },
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.has(MT.HasMinusCounters) && b.tags.has(MT.HasPlusCounters),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.UntapsAllLands) &&
      (b.types.has(CardType.Land) && b.tags.has(MT.ManaSink)),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.CaresAboutTrinkets) &&
      (b.types.has(CardType.Artifact) && b.mc === '1'),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MT.UsesTokens) &&
      b.tags.has(MT.MakesTokens),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsSacrificeOutlet) &&
      b.tags.has(MT.SacrificeOutlet),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.DestroysAll) &&
      b.tags.has(MT.HasIndestructible),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a,b) =>
      a.tags.has(MT.TriggersLandfall) &&
      b.tags.has(MT.HasLandfall),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a,b) =>
      a.tags.has(MT.LikesBeingBounced) &&
      b.tags.has(MT.BouncesLand),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MT.Proliferates) && (
        b.tags.has(MT.HasAbilityCounters) ||
        b.tags.has(MT.HasLimitedUseCounters) ||
        b.subtypes.has('Saga')
      ),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a,b) =>
      a.types.has('Land') &&
      a.tags.has(MT.WantsToBeSacrificed) &&
      b.tags.has(MT.SacrificesLands),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a,b) =>
      a.subtypes.has('Forest') &&
      b.tags.has(MT.TutorsForest),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a,b) =>
      a.subtypes.has('Plains') &&
      b.tags.has(MT.TutorsPlains),
  },
];
