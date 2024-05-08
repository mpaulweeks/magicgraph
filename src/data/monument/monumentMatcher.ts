import { CardType as CT, Matcher } from "../../types";
import { MonumentEdge as ME, MonumentTag as MT } from "./monumentTypes";

export const MonMatchers: Matcher[] = [
  {
    relationship: ME.Nonbo,
    isMatch: (a,b) =>
      a.types.all(CT.Land, CT.Legendary) &&
      !a.tags.has(MT.WantsToBeSacrificed) &&
      b.tags.has(MT.CopiesLands),
  },
  {
    relationship: ME.Nonbo,
    isMatch: (a,b) =>
      a.tags.has(MT.ImprintsFromHand) &&
      b.tags.has(MT.CopiesWithMirror),
  },
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
      b.tags.has(MT.HasChangeling, MT.GainsChangeling, MT.GivesChangeling),
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
        a.tags.has(MT.CopiesPermanent, MT.CopiesCreatures) && b.types.has(CT.Creature),
        a.tags.has(MT.CopiesPermanent, MT.CopiesArtifacts) && b.types.has(CT.Artifact),
        a.tags.has(MT.CopiesPermanent, MT.CopiesLands) && b.types.has(CT.Land),
      ].some(b => b);
      const copyType = [
        a.tags.has(MT.CopiesWithCast) && b.tags.has(MT.LikesBeingCopiedWithCast, MT.HasETB),
        a.tags.has(MT.CopiesWithCast, MT.CopiesWithETB) && b.tags.has(MT.LikesBeingCopiedWithETB, MT.HasETB),
        a.tags.has(MT.CopiesWithMirror) && b.tags.has(MT.LikesBeingCopiedWithMirror, MT.DrawbackETB),
      ].some(b => b);
      const variable = [
        a.tags.has(MT.CopiesArtifacts) && b.tags.has(MT.TurnsIntoArtifact) && !a.tags.has(MT.ImprintsFromHand),
        a.tags.all(MT.CopiesArtifacts) && b.types.all(CT.Land, CT.Artifact),
        a.tags.has(MT.CopiesLands) && b.tags.has(MT.TurnsIntoLand),
        a.tags.all(MT.CopiesManLands) && b.tags.has(MT.ManLand),
      ].some(b => b);
      return (canTarget && copyType) || variable;
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
      a.tags.has(MT.UsesDisposableCreatureTokens) &&
      b.tags.has(MT.MakesCreatureTokens, MT.MakesDisposableTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MT.UsesValuableCreatureTokens) &&
      b.tags.all(MT.MakesCreatureTokens, MT.MakesValuableTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MT.UsesPermanentETBs) &&
      b.tags.has(MT.MakesGradualTokens, MT.MakesMassTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a,b) =>
      a.tags.has(MT.UsesCreatureETBs) &&
      b.tags.has(MT.MakesGradualTokens, MT.MakesMassTokens) &&
      b.tags.has(MT.MakesCreatureTokens),
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
      a.tags.has(MT.LikesBeingBounced, MT.HasETB) &&
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
        b.tags.has(MT.ReanimatesLand),
      ].some(b => b),
      a.tags.has(MT.CopiesArtifacts, MT.CopiesPermanent) && [
        b.types.all(CT.Artifact, CT.Legendary) && b.tags.has(MT.WantsToBeSacrificed),
      ].some(b => b),
      a.tags.has(MT.CopiesCreatures, MT.CopiesPermanent) && [
        b.types.all(CT.Creature, CT.Legendary) && b.tags.has(MT.WantsToBeSacrificed),
      ].some(b => b),
      a.tags.has(MT.CopiesLands, MT.CopiesPermanent) && [
        b.types.all(CT.Land, CT.Legendary) && b.tags.has(MT.WantsToBeSacrificed),
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
      b.tags.has(MT.TutorsCreatureType),
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
    relationship: ME.TribalSynergy,
    isMatch: (a,b) =>
      a.types.has(CT.Snow) &&
      b.tags.has(MT.CaresAboutSnow),
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
    relationship: ME.Tapping,
    isMatch: (a, b) =>
      (a.tags.has(MT.CaresAboutGettingLandTapped) || (
        a.tags.has(MT.WantsToBeTapped) &&
        a.types.has(CT.Land)
      )) &&
      b.tags.has(MT.TapsTargetLand),
  },
  {
    relationship: ME.Tapping,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsToBeTapped) &&
      a.types.has(CT.Creature) &&
      b.tags.has(MT.TapsCreatures),
  },
  {
    relationship: ME.Tapping,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsToBeTapped) &&
      a.types.has(CT.Artifact) &&
      !a.types.has(CT.Creature) &&
      b.tags.has(MT.TapsNonCreatureArtifacts),
  },
  {
    relationship: ME.Lifegain,
    isMatch: (a,b) =>
      a.tags.has(MT.WantsLifegain) &&
      b.tags.has(MT.GainsLife),
  },
  {
    relationship: ME.Doubling,
    isMatch: (a,b) =>
      a.tags.has(MT.Populates) &&
      b.tags.has(MT.MakesValuableTokens),
  },
  {
    relationship: ME.Doubling,
    isMatch: (a,b) =>
      a.tags.has(MT.DoublesTokens) &&
      b.tags.has(
        MT.MakesArtifactTokens,
        MT.MakesDisposableTokens,
        MT.MakesValuableTokens,
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
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.LikesManLands, MT.HasCipher) &&
      b.tags.has(MT.ManLand),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(MT.MassDraw) &&
      b.tags.has(MT.UnlocksHandsize),
  },
  {
    relationship: ME.Reanimation,
    isMatch: (a,b) =>
      a.tags.has(MT.ReanimatesLand) && [
        b.types.has(CT.Land) && b.tags.has(MT.SacrificesSelf),
        b.types.all(CT.Land, CT.Saga),
        b.tags.has(MT.DiscardOutlet, MT.SelfMill, MT.SacrificeOutletLand),
      ].some(b => b),
  },
];
