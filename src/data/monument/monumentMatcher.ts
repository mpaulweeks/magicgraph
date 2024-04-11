import { CardType as CT, Matcher } from "../../types";
import { MonumentEdge as ME, MonumentTag as MT } from "./monumentTypes";

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
      a.tags.has(MT.TargetsTribal) &&
      b.tags.has(MT.HasChangeling, MT.GivesChangeling),
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
      b.types.has(CT.Land) &&
      b.tags.has(MT.HasTapAbility),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MT.UntapsCreature) &&
      b.types.has(CT.Creature) &&
      b.tags.has(MT.HasTapAbility),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.has(MT.UntapsLegends) &&
      b.types.has(CT.Legendary) &&
      b.tags.has(MT.HasTapAbility),
  },
  {
    relationship: ME.Clones,
    isMatch: (a, b) => {
      const canTarget = [
        a.tags.has(MT.CopiesCreatures) && b.types.has(CT.Creature),
        a.tags.has(MT.CopiesArtifacts) && b.types.has(CT.Artifact),
        a.tags.has(MT.CopiesLands) && b.types.has(CT.Land),
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
      (b.types.has(CT.Land) && b.tags.has(MT.ManaSink)),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a,b) =>
      a.tags.has(MT.CaresAboutTrinkets) &&
      (b.types.has(CT.Artifact) && ['0', '1'].includes(b.mc)),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MT.UsesTokens) &&
      b.tags.has(MT.MakesMultipleTokens),
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
      a.types.has(CT.Land) &&
      a.tags.has(MT.LikesBeingBounced) &&
      b.tags.has(MT.BouncesLand),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MT.Proliferates) && [
        b.tags.has(MT.HasAbilityCounters),
        b.tags.has(MT.HasLimitedUseCounters),
        b.tags.has(MT.PoisonCounters),
        b.types.has(CT.Saga),
      ].some(b => b),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MT.ProliferatesNonSaga) &&
      !b.types.has(CT.Saga) && [
        b.tags.has(MT.HasAbilityCounters),
        b.tags.has(MT.HasLimitedUseCounters),
      ].some(b => b),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MT.TransfersCounters) && (
        b.tags.has(MT.HasAbilityCounters)
      ),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a,b) =>
      a.tags.has(MT.RemovesCounters) && [
        b.tags.has(MT.HasMinusCounters),
        b.tags.has(MT.HasAgeCounters),
        b.types.has(CT.Saga),
      ].some(b => b),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) => [
      a.tags.has(MT.SacrificeOutletArtifact) && [
        b.types.has(CT.Artifact) && b.tags.has(MT.WantsToBeSacrificed),
        b.tags.has(MT.WantsSacrificeOutletArtifact),
      ].some(b => b),
      a.tags.has(MT.SacrificeOutletCreature) && [
        b.types.has(CT.Creature) && b.tags.has(MT.WantsToBeSacrificed),
        b.tags.has(MT.WantsSacrificeOutletCreature),
      ].some(b => b),
      a.tags.has(MT.SacrificeOutletLand) && [
        b.types.has(CT.Land) && b.tags.has(MT.WantsToBeSacrificed),
        b.tags.has(MT.WantsSacrificeOutletLand),
      ].some(b => b),
    ].some(b => b),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a,b) =>
      a.types.has(CT.Legendary) &&
      b.tags.has(MT.TutorsLegendary),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a,b) =>
      a.tags.has(MT.HasChangeling) &&
      b.tags.has(MT.TutorsChangeling),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a,b) =>
      a.subtypes.has('Forest') &&
      b.tags.has(MT.TutorsForest),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a,b) =>
      a.subtypes.has('Plains') &&
      b.tags.has(MT.TutorsPlains),
  },
  {
    relationship: ME.Nonbo,
    isMatch: (a,b) =>
      a.types.all(CT.Land, CT.Legendary) &&
      b.tags.has(MT.CopiesLands),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.ManipulatesTopDeck) &&
      b.tags.has(
        MT.CaresAboutTopdeck,
        MT.TutorsBasicsToBattlefield,
        MT.TutorsBasicsToHand,
        MT.TutorsForest,
        MT.TutorsPlains,
        MT.TutorsLand,
      ),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.GivesHaste) && [
        b.tags.has(MT.WantsHaste),
        b.tags.has(MT.HasTapAbility) && b.types.has(CT.Creature),
      ].some(b => b),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsToBeTapped) &&
      b.tags.has(MT.TapsCreatures),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsLifegain) &&
      b.tags.has(MT.GainsLife),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.Populates) &&
      b.tags.has(MT.MakesBigToken),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.DoublesTokens) &&
      b.tags.has(
        MT.MakesBigToken,
        MT.MakesArtifactTokens,
        MT.MakesMultipleTokens,
      ),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsLessLands) &&
      b.tags.has(MT.BouncesLand, MT.SacrificeOutletLand),
  },
  {
    relationship: ME.Protects,
    isMatch: (a,b) =>
      a.tags.has(MT.ProtectsLand) &&
      b.tags.has(MT.ManLand),
  },
];
