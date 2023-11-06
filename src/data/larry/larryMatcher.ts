import { CardType, Cardlike, Matcher } from "../../types";
import { LarryCategory, LarryEdge, LarryTag } from "./larryTypes";

// matcher helpers
const bounceLoop = (a: Cardlike, b: Cardlike) =>
  (a.tags.has(LarryTag.Bounces) && b.tags.has(LarryTag.IsBouncable)) ||
  (a.tags.has(LarryTag.BouncesWizards) &&
    b.tags.has(LarryTag.IsBouncable) &&
    b.subtypes.has('Wizard'));
const matchRecursion = (a: Cardlike, b: Cardlike) =>
  (a.tags.has(LarryTag.ReanimatesArtifacts) &&
    b.types.has(CardType.Artifact)) ||
  (a.tags.has(LarryTag.ReanimatesEnchantments) &&
    b.types.has(CardType.Enchantment)) ||
  (a.tags.has(LarryTag.ReanimatesCreatures) &&
    b.types.has(CardType.Creature)) ||
  (a.tags.has(LarryTag.Reanimates2orLess) &&
    b.mv <= 2 &&
    !b.types.has(CardType.Land)) ||
  (a.tags.has(LarryTag.Reanimates3orLess) && b.mv <= 3);
const survivesDisk = (a: Cardlike, b: Cardlike) =>
  a.types.equals(CardType.Land) ||
  a.types.equals(CardType.Instant) ||
  (a.types.has(CardType.Artifact) &&
    b.tags.has(LarryTag.DestroysNonArtifacts)) ||
  (a.types.has(CardType.Creature) &&
    b.tags.has(LarryTag.DestroysNonCreatures)) ||
  (!a.types.has(CardType.Artifact, CardType.Enchantment) &&
    b.tags.has(LarryTag.DestroysOnlyArtifactEnchantment));
const protects = (a: Cardlike, b: Cardlike) =>
  a.tags.has(
    LarryTag.GivesFalseDeath,
    LarryTag.GivesIndestructible,
    LarryTag.GivesPhasing,
  ) && b.types.has(CardType.Creature);

// ordering matters, only looks for first match
export const LarryMatchers: Matcher[] = [
  {
    relationship: LarryEdge.TwoCardCombo,
    isMatch: (a, b) => protects(a, b) && b.category === LarryCategory.Disk,
  },
  {
    relationship: LarryEdge.TwoCardCombo,
    isMatch: (a, b) =>
      bounceLoop(a, b) &&
      a.category === LarryCategory.Bouncer &&
      b.category === LarryCategory.Disk &&
      survivesDisk(a, b),
  },
  {
    relationship: LarryEdge.TwoCardCombo,
    isMatch: (a, b) =>
      matchRecursion(a, b) &&
      a.category === LarryCategory.Recursion &&
      b.category === LarryCategory.Disk &&
      survivesDisk(a, b),
  },
  {
    relationship: LarryEdge.Protects,
    isMatch: (a, b) => protects(a, b),
  },
  {
    relationship: LarryEdge.BounceLoops,
    isMatch: (a, b) => bounceLoop(a, b),
  },
  {
    relationship: LarryEdge.Reanimates,
    isMatch: (a, b) => matchRecursion(a, b),
  },
];
