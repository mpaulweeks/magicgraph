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
    a.tags.has(RT.NeedsDiscard) &&
    b.tags.has(RT.FuelsDiscard),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    (a.tags.has(RT.WantsETBs) || a.tags.has(RT.WantsLTBs)) &&
    (b.tags.has(RT.BlinksSelf) || b.tags.has(RT.BouncesSelf)),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesHaste) &&
    b.tags.has(RT.AttackTrigger, RT.HasTapAbility),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesDeathtouch) &&
    b.tags.has(RT.WantsDeathtouch),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesLifelink) &&
    b.tags.has(RT.WantsLifelink),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesIndestructible) &&
    b.tags.has(RT.WantsIndestructible),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesPower) &&
    b.tags.has(RT.WantsPower),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.GivesPlusCounters) &&
    b.tags.has(RT.WantsPlusCounters, RT.WantsPower),
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
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.TutorsEquipment) &&
    b.types.has(CT.Equipment),
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
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.CaresAboutTribal) &&
    b.subtypes.has('Changeling'),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.CaresAboutElf) &&
    b.subtypes.has('Changeling', 'Elf'),
}, {
  relationship: RE.CombosWith,
  isMatch: (a,b) =>
    a.tags.has(RT.CaresAboutHuman) &&
    b.subtypes.has('Changeling', 'Human'),
}];
