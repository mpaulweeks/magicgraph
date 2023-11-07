import { CardType as CT, CardCombo, Cardlike, MatchFunction, Matcher } from "../../types";
import { LarryEdge as LE, LarryTag as LT, LarryCategory } from "./larryTypes";

export function TwoCardCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: LE.TwoCardLock,
    isMatch: cb,
  }
}

// matcher helpers
const bounceLoop: MatchFunction = (a,b) => [
  a.tags.has(LT.Bounces) && b.tags.has(LT.WantsBounce),
  a.tags.has(LT.BouncesWizards) &&
    b.tags.has(LT.WantsBounce) &&
    b.subtypes.has('Wizard'),
].some(b => b);

const matchRecursion: MatchFunction = (recursion, target) => [
  target.category === LarryCategory.Disk,
  target.subtypes.has('Saga'),
  target.tags.has(LT.SacrificesSelf),
].some(b => b) && [
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

const protects: MatchFunction = (a,b) => b.types.has(CT.Creature) && [
  a.tags.has(LT.GivesPhasing) && b.tags.has(LT.WantsPhasing),
  a.tags.has(LT.GivesIndestructible) && b.tags.has(LT.WantsIndestructible),
  a.tags.has(LT.GivesFalseDeath) && b.tags.has(LT.WantsFalseDeath),
].some(b => b);

// ordering matters, only looks for first match
export const LarryMatchers: Matcher[] = [
  {
    relationship: LE.TwoCardLock,
    isMatch: (a, b) => protects(a, b) && b.category === LarryCategory.Disk,
  },
  {
    relationship: LE.TwoCardLock,
    isMatch: (a, b) =>
      bounceLoop(a, b) &&
      a.category === LarryCategory.Bouncer &&
      b.category === LarryCategory.Disk &&
      survivesDisk(a, b),
  },
  {
    relationship: LE.TwoCardLock,
    isMatch: (a, b) =>
      matchRecursion(a, b) &&
      a.category === LarryCategory.Recursion &&
      b.category === LarryCategory.Disk &&
      survivesDisk(a, b),
  },
  {
    relationship: LE.Protects,
    isMatch: (a, b) => protects(a, b),
  },
  {
    relationship: LE.BounceLoops,
    isMatch: (a, b) => bounceLoop(a, b),
  },
  {
    relationship: LE.Reanimates,
    isMatch: (a, b) => matchRecursion(a, b),
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
];
