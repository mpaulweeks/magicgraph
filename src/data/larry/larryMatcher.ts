import { CardType as CT, CardCombo, Cardlike, MatchFunction, Matcher } from "../../types";
import { LarryCategory as LC, LarryEdge as LE, LarryTag as LT } from "./larryTypes";

export function TwoCardCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: LE.TwoCardLock,
    isMatch: cb,
  }
}

const binsSelf = (card: Cardlike) => [
  card.subtypes.has('Saga'),
  card.tags.has(LT.SacrificesSelf),
].some(b => b);

// matcher helpers
const bounces: MatchFunction = (bouncer, target) => target.tags.has(LT.WantsBounce, LT.HasCastTrigger) && [
  bouncer.tags.has(LT.Bounces),
  bouncer.tags.has(LT.BouncesWizards) && target.subtypes.has('Wizard'),
  bouncer.tags.has(LT.BouncesLand) && target.types.has(CT.Land),
].some(b => b);

const reanimates: MatchFunction = (recursion, target) => [
  recursion.tags.has(LT.ReanimatesArtifacts) && target.types.has(CT.Artifact),
  recursion.tags.has(LT.ReanimatesEnchantments) && target.types.has(CT.Enchantment),
  recursion.tags.has(LT.ReanimatesCreatures) && target.types.has(CT.Creature),
  recursion.tags.has(LT.ReanimatesNonland2orLess) && target.mv <= 2 && !target.types.has(CT.Land),
  recursion.tags.has(LT.ReanimatesNonland4orLess) && target.mv <= 4 && !target.types.has(CT.Land),
  recursion.tags.has(LT.Reanimates3orLess) && target.mv <= 3,
].some(b => b);

const hitByDisk: MatchFunction = (perm, disk) => [
  perm.types.has(CT.Artifact) && disk.tags.has(LT.DestroysArtifacts),
  perm.types.has(CT.Enchantment) && disk.tags.has(LT.DestroysEnchantments),
  perm.types.has(CT.Creature) && disk.tags.has(LT.DestroysCreatures),
  !perm.types.has(CT.Artifact, CT.Land) && disk.tags.has(LT.DestroysNonArtifactNonLand),
  !perm.types.has(CT.Land) && disk.tags.has(LT.DestroysNonLand),
].some(b => b);
const survivesDisk: MatchFunction = (recursion, disk) => !hitByDisk(recursion, disk);

const protects: MatchFunction = (protector, target) => target.types.has(CT.Creature) && [
  protector.tags.has(LT.GivesFalseDeath, LT.GivesIndestructible, LT.GivesPhasing) && target.tags.has(LT.WantsProtection),
  protector.tags.has(LT.GivesPhasing) && target.tags.has(LT.WantsPhasing),
  protector.tags.has(LT.GivesIndestructible) && target.tags.has(LT.WantsIndestructible),
  protector.tags.has(LT.GivesFalseDeath) && target.tags.has(LT.WantsFalseDeath),
  protector.tags.has(LT.BouncesWizards) && target.subtypes.has('Wizard'),
].some(b => b);

// ordering matters, only looks for first match
export const LarryMatchers: Matcher[] = [
  {
    relationship: LE.TwoCardLock,
    isMatch: (shield, disk) =>
      protects(shield, disk) &&
      disk.category === LC.Disk,
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
    isMatch: (reanimator, disk) => [
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
      disk.category === LC.Disk &&
      bounces(bouncer, disk),
  },
  {
    relationship: LE.LoopsETB,
    isMatch: (bouncer, target) =>
      bounces(bouncer, target),
  },
  {
    relationship: LE.LoopsETB,
    isMatch: (protector, target) =>
      target.tags.has(LT.HasETB) && [
        target.types.has(CT.Creature) && protector.tags.has(LT.GivesFalseDeath),
        protector.tags.has(LT.Bounces),
      ].some(b => b),
  },
  {
    relationship: LE.LoopsETB,
    isMatch: (reanimator, target) => [
      reanimator.tags.has(LT.ReanimatesToHand),
      target.tags.has(LT.HasCastTrigger),
      binsSelf(target) || target.category === LC.Disk,
      reanimates(reanimator, target),
    ].every(b => b),
  },
  {
    relationship: LE.Reanimates,
    isMatch: (reanimator, target) =>
      binsSelf(target) &&
      reanimates(reanimator, target),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(LT.WantsCountersRemoved) &&
      b.tags.has(LT.RemovesCountersInstant, LT.RemovesCountersSorcery),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(LT.WantsCountersRemovedInstant) &&
      b.tags.has(LT.RemovesCountersInstant),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(LT.WantsSacrificeOutlet) &&
      b.tags.has(LT.SacrificeOutlet),
  },
  {
    relationship: LE.CombosWith,
    isMatch: (a,b) =>
      a.tags.has(LT.WantsHaste) &&
      b.tags.has(LT.GivesHaste),
  },
  {
    relationship: LE.Protects,
    isMatch: (a,b) =>
      a.tags.has(LT.BouncesWizards) &&
      b.subtypes.has('Wizard'),
  },
  {
    relationship: LE.Tutors,
    isMatch: (a,b) =>
      a.tags.has(LT.TutorsLand) &&
      b.types.has(CT.Land),
  },
];
