import { CardType as CT, CardCombo, Cardlike, Matcher } from "../../types";
import { RoccoEdge as RE, RoccoTag as RT } from "./roccoTypes";

export function ReanimatesCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: RE.Reanimates,
    isMatch: cb,
  }
}

export const RocMatchers: Matcher[] = [{
  relationship: RE.Equipment,
  isMatch: (a,b) =>
    a.types.has(CT.Creature) &&
    a.tags.has(RT.Unblockable) &&
    b.subtypes.has(CT.Equipment) &&
    b.tags.has(RT.WantsEvasion),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.WantsMassTribal) &&
    b.tags.has(RT.GivesMassTribal, RT.GivesConspiracy),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.WantsConspiracy) &&
    b.tags.has(RT.GivesConspiracy),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.NeedsDiscard) &&
    b.tags.has(RT.FuelsDiscard),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    (a.tags.has(RT.WantsCreatureETBs)) &&
    (b.tags.has(RT.MakesTokens, RT.BlinksSelf, RT.BouncesSelf)),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    (a.tags.has(RT.WantsNonTokenETBs, RT.WantsLTBs)) &&
    (b.tags.has(RT.BlinksSelf, RT.BouncesSelf)),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.UntapsCreature) &&
    b.tags.has(RT.HasTapAbility),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.MakesTokens) &&
    b.tags.has(RT.WantsGoWide, RT.WantsTokens),
}, {
  relationship: RE.Tutors,
  isMatch: (a,b) =>
    a.tags.has(RT.TutorsEquipment) &&
    b.types.has(CT.Equipment),
}, {
  relationship: RE.Tutors,
  isMatch: (a,b) =>
    a.tags.has(RT.TutorsLand) &&
    b.types.has(CT.Land),
}, {
  relationship: RE.Tutors,
  isMatch: (a,b) =>
    a.tags.has(RT.TutorsLegends) &&
    b.types.has(CT.Legendary),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.HasETB, RT.WantsBounce) && (
      b.tags.has(RT.BouncesCreature) || (
        a.subtypes.has('Changeling', 'Elf') &&
        b.tags.has(RT.BouncesElf)
      )
    ),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesHaste) &&
    b.tags.has(RT.AttackTrigger, RT.HasTapAbility),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesDeathtouchWhileAttacking) &&
    b.tags.has(
      RT.WantsDeathtouchWhileAttacking,
      RT.WantsDeathtouchFlexible,
    ),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesDeathtouchWhileTapped) &&
    b.tags.has(
      RT.WantsDeathtouchWhileTapped,
      RT.WantsDeathtouchFlexible,
    ),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesDeathtouchAlways) &&
    b.tags.has(
      RT.WantsDeathtouchWhileAttacking,
      RT.WantsDeathtouchWhileTapped,
      RT.WantsDeathtouchAlways,
      RT.WantsDeathtouchFlexible,
    ),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesLifelink) &&
    b.tags.has(RT.WantsLifelink),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesIndestructible) &&
    b.tags.has(RT.WantsIndestructible),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesPower) &&
    b.tags.has(RT.WantsPower),
}, {
  relationship: RE.Buffs,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesPlusCounters) &&
    b.tags.has(RT.WantsPlusCounters, RT.WantsPower),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesLifelink, RT.GainsLife) &&
    b.tags.has(RT.LifegainTrigger),
}];
