import { CardType, Matcher } from "../../types";
import { MonumentEdge as ME, MonumentTag as MTG } from "./types";

export const MonMatchers: Matcher[] = [
  {
    relationship: ME.EnablesMana,
    isMatch: (a, b) =>
      a.tags.has(MTG.GrantsLandTypes) && b.tags.has(MTG.CannotTapForMana),
  },
  {
    relationship: ME.Damages,
    isMatch: (a, b) =>
      a.tags.has(MTG.DealsDamageToCreatures) && b.tags.has(MTG.Enrage),
  },
  {
    relationship: ME.Targets,
    isMatch: (a, b) =>
      a.tags.has(MTG.TargetsCreatures) &&
      b.tags.has(MTG.CaresAboutTargeting),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.has(MTG.TargetsTribal) && b.subtypes.has('Changeling'),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.has(MTG.UsesZombies) && b.subtypes.has('Zombie'),
  },
  {
    relationship: ME.Protects,
    isMatch: (a, b) =>
      a.tags.has(MTG.LandWithProtection) && b.tags.has(MTG.AnimatesLand),
  },
  {
    relationship: ME.ForcesTap,
    isMatch: (a, b) =>
      a.tags.has(MTG.TapsTargetLand) &&
      b.tags.has(MTG.CaresAboutGettingLandTapped),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MTG.UntapsLand) &&
      b.types.has(CardType.Land) &&
      b.tags.has(MTG.CaresAboutGettingUntapped),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MTG.UntapsCreature) &&
      b.types.has(CardType.Creature) &&
      b.tags.has(MTG.CaresAboutGettingUntapped),
  },
  {
    relationship: ME.Clones,
    isMatch: (a, b) => {
      const canTarget = [
        a.tags.has(MTG.CopiesCreatures) && b.types.has(CardType.Creature),
        a.tags.has(MTG.CopiesArtifacts) && b.types.has(CardType.Artifact),
        a.tags.has(MTG.CopiesLands) && b.types.has(CardType.Land),
      ].some(b => b);
      const copyType = [
        a.tags.has(MTG.CopiesWithCast) && b.tags.has(MTG.LikesBeingCopiedWithCast),
        a.tags.has(MTG.CopiesWithETB) && b.tags.has(MTG.LikesBeingCopiedWithETB),
        a.tags.has(MTG.CopiesWithMirror) && b.tags.has(MTG.LikesBeingCopiedWithMirror),
      ].some(b => b);
      return canTarget && copyType;
    },
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.has(MTG.HasMinusCounters) && b.tags.has(MTG.HasPlusCounters),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MTG.UntapsAllLands) &&
      (b.types.has(CardType.Land) && b.tags.has(MTG.ManaSink)),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MTG.CaresAboutTrinkets) &&
      (b.types.has(CardType.Artifact) && b.mc === '1'),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MTG.UsesTokens) &&
      b.tags.has(MTG.MakesTokens),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MTG.DestroysAll) &&
      b.tags.has(MTG.HasIndestructible),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a,b) =>
      a.tags.has(MTG.TriggersLandfall) &&
      b.tags.has(MTG.HasLandfall),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MTG.Proliferates) && (
        b.tags.has(MTG.HasAbilityCounters) ||
        b.tags.has(MTG.HasLimitedUseCounters) ||
        b.subtypes.has('Saga')
      ),
  },
];
