import { CardType as CT, CardCombo, Cardlike, MatchFunction, Matcher } from "../../types";
import { LarryEdge as LE, LarryTag as LT, LarryCategory } from "./larryTypes";

export function TwoCardCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: LE.TwoCardLock,
    isMatch: cb,
  }
}

// matcher helpers
const bounceLoop: MatchFunction = (a,b) =>
  (a.tags.has(LT.Bounces) && b.tags.has(LT.WantsBounce)) ||
  (a.tags.has(LT.BouncesWizards) &&
    b.tags.has(LT.WantsBounce) &&
    b.subtypes.has('Wizard'));
const matchRecursion: MatchFunction = (a,b) =>
  (a.tags.has(LT.ReanimatesArtifacts) &&
    b.types.has(CT.Artifact)) ||
  (a.tags.has(LT.ReanimatesEnchantments) &&
    b.types.has(CT.Enchantment)) ||
  (a.tags.has(LT.ReanimatesCreatures) &&
    b.types.has(CT.Creature)) ||
  (a.tags.has(LT.ReanimatesNonland2orLess) &&
    b.mv <= 2 &&
    !b.types.has(CT.Land)) ||
  (a.tags.has(LT.ReanimatesNonland4orLess) &&
    b.mv <= 4 &&
    !b.types.has(CT.Land)) ||
  (a.tags.has(LT.Reanimates3orLess) && b.mv <= 3);
const survivesDisk: MatchFunction = (a,b) =>
  a.types.equals(CT.Land) ||
  a.types.equals(CT.Instant) ||
  (a.types.has(CT.Artifact) &&
    b.tags.has(LT.DestroysNonArtifacts)) ||
  (a.types.has(CT.Creature) &&
    b.tags.has(LT.DestroysNonCreatures)) ||
  (!a.types.has(CT.Artifact, CT.Enchantment) &&
    b.tags.has(LT.DestroysOnlyArtifactEnchantment));
const protects: MatchFunction = (a,b) =>
  a.tags.has(
    LT.GivesFalseDeath,
    LT.GivesIndestructible,
    LT.GivesPhasing,
  ) && b.types.has(CT.Creature);

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
