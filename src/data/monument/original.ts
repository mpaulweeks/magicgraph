import {
  CardListStatus,
  CardType,
  DeckData,
  Matcher
} from '../../types';
import { Lands, LandsRejected } from './land';
import { NonLandRejected, NonLands } from './nonland';
import { CategoryColorMap, MonCat, MonTag, MonumentEdge, MonumentEdges, MonumentInverseEdge } from './types';

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
