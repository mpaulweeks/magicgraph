import { CardType as CT, Matcher } from '../../types';
import { MonumentEdge as ME, MonumentTag as MT } from './monumentTypes';

export const MonMatchers: Matcher[] = [
  {
    relationship: ME.Nonbo,
    isMatch: (a, b) =>
      a.types.all(CT.Land, CT.Legendary) &&
      !a.tags.any(MT.WantsToBeSacrificed) &&
      b.tags.any(MT.CopiesLands),
  },
  {
    relationship: ME.Nonbo,
    isMatch: (a, b) =>
      a.tags.any(MT.ImprintsFromHand) && b.tags.any(MT.CopiesWithMirror),
  },
  {
    relationship: ME.LandTypeMatters,
    isMatch: (a, b) =>
      [
        a.tags.any(MT.CaresAboutPlains) && b.tags.any(MT.GrantsPlainsType),
        a.tags.any(MT.CaresAboutSwamps) && b.tags.any(MT.GrantsSwampType),
        a.tags.any(MT.CaresAboutForests) && b.tags.any(MT.GrantsForestType),
      ].some(b => b),
  },
  {
    relationship: ME.EnablesMana,
    isMatch: (a, b) =>
      a.tags.any(MT.AddsManaAbility) && b.tags.any(MT.CannotTapForMana),
  },
  {
    relationship: ME.Damages,
    isMatch: (a, b) =>
      a.tags.any(MT.DealsDamageToCreatures) && b.tags.any(MT.Enrage),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.GivesLure) &&
      b.tags.any(MT.HasDeathtouch, MT.GivesDeathtouch),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) => a.tags.any(MT.HasLure) && b.tags.any(MT.GivesDeathtouch),
  },
  {
    relationship: ME.Targets,
    isMatch: (a, b) =>
      a.tags.any(MT.TargetsCreatures) && b.tags.any(MT.CaresAboutTargeting),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) =>
      a.tags.any(MT.TargetsTribal) &&
      b.tags.any(MT.HasChangeling, MT.GainsChangeling, MT.GivesChangeling),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) => a.tags.any(MT.UsesZombies) && b.subtypes.any('Zombie'),
  },
  {
    relationship: ME.Protects,
    isMatch: (a, b) =>
      a.tags.any(MT.LandWithProtection) && b.tags.any(MT.AnimatesLand),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.any(MT.UntapsLand) &&
      b.types.any(CT.Land) &&
      b.tags.any(MT.HasTapAbility),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.any(MT.UntapsCreature) &&
      b.types.any(CT.Creature) &&
      b.tags.any(MT.HasTapAbility),
  },
  {
    relationship: ME.Untaps,
    isMatch: (a, b) =>
      a.tags.any(MT.UntapsLegends) &&
      b.types.any(CT.Legendary) &&
      b.tags.any(MT.HasTapAbility),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.HasLifelinkCounter) && b.tags.any(MT.WantsLifelinkCounter),
  },
  {
    relationship: ME.Clones,
    isMatch: (a, b) => {
      const canTarget = [
        a.tags.any(MT.CopiesPermanent, MT.CopiesCreatures) &&
          b.types.any(CT.Creature),
        a.tags.any(MT.CopiesPermanent, MT.CopiesArtifacts) &&
          b.types.any(CT.Artifact),
        a.tags.any(MT.CopiesPermanent, MT.CopiesLands) && b.types.any(CT.Land),
      ].some(b => b);
      const copyType = [
        a.tags.any(MT.CopiesWithCast) &&
          b.tags.any(MT.LikesBeingCopiedWithCast, MT.HasETB),
        a.tags.any(MT.CopiesWithCast, MT.CopiesWithETB) &&
          b.tags.any(MT.LikesBeingCopiedWithETB, MT.HasETB),
        a.tags.any(MT.CopiesWithMirror) &&
          b.tags.any(MT.LikesBeingCopiedWithMirror, MT.DrawbackETB),
        a.tags.any(MT.CopiesWithToken) &&
          b.tags.any(MT.LikesBeingCopiedWithToken),
      ].some(b => b);
      const variable = [
        a.tags.any(MT.CopiesArtifacts) &&
          b.tags.any(MT.TurnsIntoArtifact) &&
          !a.tags.any(MT.ImprintsFromHand),
        a.tags.all(MT.CopiesArtifacts) && b.types.all(CT.Land, CT.Artifact),
        a.tags.any(MT.CopiesLands) && b.tags.any(MT.TurnsIntoLand),
        a.tags.all(MT.CopiesManLands) && b.tags.any(MT.ManLand),
      ].some(b => b);
      return (canTarget && copyType) || variable;
    },
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.any(MT.HasMinusCounters) && b.tags.any(MT.HasPlusCounters),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.UntapsAllLands) &&
      b.types.any(CT.Land) &&
      b.tags.any(MT.ManaSink),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) =>
      a.tags.any(MT.CaresAboutTrinkets) &&
      b.types.any(CT.Artifact) &&
      ['0', '1'].includes(b.mc),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a, b) =>
      a.tags.any(MT.UsesDisposableCreatureTokens) &&
      b.tags.all(MT.MakesCreatureTokens, MT.MakesDisposableTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a, b) =>
      a.tags.any(MT.UsesDisposableArtifactTokens) &&
      b.tags.all(MT.MakesArtifactTokens, MT.MakesDisposableTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a, b) =>
      a.tags.any(MT.UsesDisposableArtifactCreatureTokens) &&
      b.tags.all(
        MT.MakesArtifactTokens,
        MT.MakesCreatureTokens,
        MT.MakesDisposableTokens,
      ),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a, b) =>
      a.tags.any(MT.UsesValuableCreatureTokens) &&
      b.tags.all(MT.MakesCreatureTokens, MT.MakesValuableTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a, b) =>
      a.tags.any(MT.UsesPermanentETBs) &&
      b.tags.any(MT.MakesGradualTokens, MT.MakesMassTokens),
  },
  {
    relationship: ME.FueledBy,
    isMatch: (a, b) =>
      a.tags.any(MT.UsesCreatureETBs) &&
      b.tags.any(MT.MakesGradualTokens, MT.MakesMassTokens) &&
      b.tags.any(MT.MakesCreatureTokens),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.DestroysAll) && b.tags.any(MT.HasIndestructible),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a, b) =>
      a.tags.any(MT.TriggersLandfall) && b.tags.any(MT.HasLandfall),
  },
  {
    relationship: ME.Fuels,
    isMatch: (a, b) =>
      a.types.any(CT.Land) &&
      a.tags.any(MT.LikesBeingBounced, MT.HasETB) &&
      b.tags.any(MT.BouncesLand),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.any(MT.Proliferates) &&
      (b.tags.any(
        MT.HasAbilityCounters,
        MT.HasLimitedUseCounters,
        MT.PoisonCounters,
      ) ||
        b.types.any(CT.Saga, CT.Planeswalker)),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.any(MT.ProliferatesNonSaga) &&
      !b.types.any(CT.Saga) &&
      [
        b.tags.any(MT.HasAbilityCounters),
        b.tags.any(MT.HasLimitedUseCounters),
      ].some(b => b),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.any(MT.TransfersCounters) && b.tags.any(MT.HasAbilityCounters),
  },
  {
    relationship: ME.ManipulatesCounters,
    isMatch: (a, b) =>
      a.tags.any(MT.RemovesCounters) &&
      [
        b.tags.any(MT.HasMinusCounters),
        b.tags.any(MT.HasAgeCounters),
        b.types.any(CT.Saga),
      ].some(b => b),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      [
        a.tags.any(MT.SacrificeOutletArtifact) &&
          [
            b.types.any(CT.Artifact) && b.tags.any(MT.WantsToBeSacrificed),
            b.tags.any(MT.WantsSacrificeOutletArtifact),
          ].some(b => b),
        a.tags.any(MT.SacrificeOutletCreature) &&
          [
            b.types.any(CT.Creature) && b.tags.any(MT.WantsToBeSacrificed),
            b.tags.any(MT.WantsSacrificeOutletCreature),
          ].some(b => b),
        a.tags.any(MT.SacrificeOutletLand) &&
          [
            b.types.any(CT.Land) && b.tags.any(MT.WantsToBeSacrificed),
            b.tags.any(MT.ReanimatesLand),
          ].some(b => b),
        a.tags.any(MT.CopiesArtifacts, MT.CopiesPermanent) &&
          [
            b.types.all(CT.Artifact, CT.Legendary) &&
              b.tags.any(MT.WantsToBeSacrificed),
          ].some(b => b),
        a.tags.any(MT.CopiesCreatures, MT.CopiesPermanent) &&
          [
            b.types.all(CT.Creature, CT.Legendary) &&
              b.tags.any(MT.WantsToBeSacrificed),
          ].some(b => b),
        a.tags.any(MT.CopiesLands, MT.CopiesPermanent) &&
          [
            b.types.all(CT.Land, CT.Legendary) &&
              b.tags.any(MT.WantsToBeSacrificed),
          ].some(b => b),
      ].some(b => b),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) =>
      a.types.any(CT.Artifact) && b.tags.any(MT.TutorsArtifact),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) =>
      a.types.any(CT.Legendary) && b.tags.any(MT.TutorsLegendary),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) => a.types.any(CT.Snow) && b.tags.any(MT.TutorsSnow),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) =>
      a.types.all(CT.Snow, CT.Land) && b.tags.all(MT.TutorsSnowLand),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) => a.types.any(CT.Saga) && b.tags.any(MT.TutorsSaga),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) =>
      a.tags.any(MT.HasChangeling) && b.tags.any(MT.TutorsCreatureType),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) => a.subtypes.any('Forest') && b.tags.any(MT.TutorsForest),
  },
  {
    relationship: ME.Tutors,
    isMatch: (a, b) => a.subtypes.any('Plains') && b.tags.any(MT.TutorsPlains),
  },
  {
    relationship: ME.TribalSynergy,
    isMatch: (a, b) => a.types.any(CT.Snow) && b.tags.any(MT.CaresAboutSnow),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.ManipulatesTopDeck) &&
      b.tags.any(
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
    isMatch: (a, b) =>
      a.tags.any(MT.GivesHaste) &&
      [
        b.tags.any(MT.WantsHaste),
        b.tags.any(MT.HasTapAbility) && b.types.any(CT.Creature),
      ].some(b => b),
  },
  {
    relationship: ME.Tapping,
    isMatch: (a, b) =>
      (a.tags.any(MT.CaresAboutGettingLandTapped) ||
        (a.tags.any(MT.WantsToBeTapped) && a.types.any(CT.Land))) &&
      b.tags.any(MT.TapsTargetLand),
  },
  {
    relationship: ME.Tapping,
    isMatch: (a, b) =>
      a.tags.any(MT.WantsToBeTapped) &&
      a.types.any(CT.Creature) &&
      b.tags.any(MT.TapsCreatures),
  },
  {
    relationship: ME.Tapping,
    isMatch: (a, b) =>
      a.tags.any(MT.WantsToBeTapped) &&
      a.types.any(CT.Artifact) &&
      !a.types.any(CT.Creature) &&
      b.tags.any(MT.TapsNonCreatureArtifacts),
  },
  {
    relationship: ME.Lifegain,
    isMatch: (a, b) => a.tags.any(MT.WantsLifegain) && b.tags.any(MT.GainsLife),
  },
  {
    relationship: ME.Doubling,
    isMatch: (a, b) =>
      a.tags.any(MT.Populates) && b.tags.any(MT.MakesValuableTokens),
  },
  {
    relationship: ME.Doubling,
    isMatch: (a, b) =>
      a.tags.any(MT.DoublesTokens) &&
      b.tags.any(
        MT.MakesArtifactTokens,
        MT.MakesDisposableTokens,
        MT.MakesValuableTokens,
      ),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.WantsLessLands) &&
      b.tags.any(MT.BouncesLand, MT.SacrificeOutletLand),
  },
  {
    relationship: ME.Protects,
    isMatch: (a, b) => a.tags.any(MT.ProtectsLand) && b.tags.any(MT.ManLand),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.LikesManLands, MT.HasCipher) && b.tags.any(MT.ManLand),
  },
  {
    relationship: ME.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(MT.MassDraw) && b.tags.any(MT.UnlocksHandsize),
  },
  {
    relationship: ME.Reanimation,
    isMatch: (a, b) =>
      a.tags.any(MT.ReanimatesLand) &&
      [
        b.types.any(CT.Land) && b.tags.any(MT.SacrificesSelf),
        b.types.all(CT.Land, CT.Saga),
        b.tags.any(MT.DiscardOutlet, MT.SelfMill, MT.SacrificeOutletLand),
      ].some(b => b),
  },
];
