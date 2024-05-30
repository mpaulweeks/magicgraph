import {
  CardType as CT,
  CardCombo,
  Cardlike,
  MatchFunction,
  Matcher,
} from '../../types';
import {
  LarryCategory as LC,
  LarryEdge as LE,
  LarryTag as LT,
} from './larryTypes';

export function TwoCardCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: LE.TwoCardLock,
    isMatch: cb,
  };
}

const binsSelf = (card: Cardlike) =>
  [card.types.any(CT.Saga), card.tags.any(LT.SacrificesSelf)].some(b => b);

// matcher helpers
const bounces: MatchFunction = (bouncer, target) =>
  target.tags.any(LT.WantsBounce, LT.HasCastTrigger) &&
  [
    bouncer.tags.any(LT.Bounces),
    bouncer.tags.any(LT.BouncesWizards) && target.subtypes.any('Wizard'),
    bouncer.tags.any(LT.BouncesLand) && target.types.any(CT.Land),
  ].some(b => b);

const reanimates: MatchFunction = (recursion, target) =>
  [
    recursion.tags.any(LT.ReanimatesArtifacts) && target.types.any(CT.Artifact),
    recursion.tags.any(LT.ReanimatesEnchantments) &&
      target.types.any(CT.Enchantment),
    recursion.tags.any(LT.ReanimatesCreatures) && target.types.any(CT.Creature),
    recursion.tags.any(LT.ReanimatesNonland2orLess) &&
      target.mv <= 2 &&
      !target.types.any(CT.Land),
    recursion.tags.any(LT.ReanimatesNonland4orLess) &&
      target.mv <= 4 &&
      !target.types.any(CT.Land),
    recursion.tags.any(LT.Reanimates3orLess) && target.mv <= 3,
  ].some(b => b);

const hitByDisk: MatchFunction = (perm, disk) =>
  [
    perm.types.any(CT.Artifact) && disk.tags.any(LT.DestroysArtifacts),
    perm.types.any(CT.Enchantment) && disk.tags.any(LT.DestroysEnchantments),
    perm.types.any(CT.Creature) && disk.tags.any(LT.DestroysCreatures),
    !perm.types.any(CT.Artifact, CT.Land) &&
      disk.tags.any(LT.DestroysNonArtifactNonLand),
    !perm.types.any(CT.Land) && disk.tags.any(LT.DestroysNonLand),
  ].some(b => b);
const survivesDisk: MatchFunction = (recursion, disk) =>
  !hitByDisk(recursion, disk);

const protects: MatchFunction = (protector, target) =>
  target.types.any(CT.Creature) &&
  [
    protector.tags.any(
      LT.GivesFalseDeath,
      LT.GivesIndestructible,
      LT.GivesPhasing,
    ) && target.tags.any(LT.WantsProtection),
    protector.tags.any(LT.GivesPhasing) && target.tags.any(LT.WantsPhasing),
    protector.tags.any(LT.GivesIndestructible) &&
      target.tags.any(LT.WantsIndestructible),
    protector.tags.any(LT.GivesFalseDeath) &&
      target.tags.any(LT.WantsFalseDeath),
    protector.tags.any(LT.BouncesWizards) && target.subtypes.any('Wizard'),
  ].some(b => b);

// ordering matters, only looks for first match
export const LarryMatchers: Matcher[] = [
  {
    relationship: LE.TwoCardLock,
    isMatch: (shield, disk) =>
      protects(shield, disk) && disk.category === LC.Disk,
  },
  {
    relationship: LE.TwoCardLock,
    isMatch: (bouncer, disk) =>
      disk.category === LC.Disk &&
      bounces(bouncer, disk) &&
      survivesDisk(bouncer, disk),
  },
  {
    relationship: LE.TwoCardLock,
    isMatch: (reanimator, disk) =>
      [
        disk.category === LC.Disk,
        binsSelf(disk),
        reanimates(reanimator, disk),
        survivesDisk(reanimator, disk),
      ].every(b => b),
  },
  {
    relationship: LE.Protects,
    isMatch: (shield, target) => protects(shield, target),
  },
  {
    relationship: LE.BounceLoops,
    isMatch: (bouncer, disk) =>
      disk.category === LC.Disk && bounces(bouncer, disk),
  },
  {
    relationship: LE.LoopsETB,
    isMatch: (bouncer, target) => bounces(bouncer, target),
  },
  {
    relationship: LE.LoopsETB,
    isMatch: (protector, target) =>
      target.tags.any(LT.HasETB) &&
      [
        target.types.any(CT.Creature) && protector.tags.any(LT.GivesFalseDeath),
        protector.tags.any(LT.Bounces),
      ].some(b => b),
  },
  {
    relationship: LE.LoopsETB,
    isMatch: (reanimator, target) =>
      [
        reanimator.tags.any(LT.ReanimatesToHand),
        target.tags.any(LT.HasCastTrigger),
        binsSelf(target) || target.category === LC.Disk,
        reanimates(reanimator, target),
      ].every(b => b),
  },
  {
    relationship: LE.Reanimates,
    isMatch: (reanimator, target) =>
      binsSelf(target) && reanimates(reanimator, target),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.WantsCountersRemoved) &&
      b.tags.any(LT.RemovesCountersInstant, LT.RemovesCountersSorcery),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.WantsCountersRemovedInstant) &&
      b.tags.any(LT.RemovesCountersInstant),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(LT.WantsSacrificeOutlet) && b.tags.any(LT.SacrificeOutlet),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a, b) => a.tags.any(LT.WantsHaste) && b.tags.any(LT.GivesHaste),
  },
  {
    relationship: LE.Protects,
    isMatch: (a, b) =>
      a.tags.any(LT.BouncesWizards) && b.subtypes.any('Wizard'),
  },
  {
    relationship: LE.Tutors,
    isMatch: (a, b) => a.tags.any(LT.TutorsLand) && b.types.any(CT.Land),
  },
];
