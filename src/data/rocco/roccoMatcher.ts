import { CardType as CT, CardCombo, Cardlike, Matcher } from '../../types';
import { RoccoEdge as RE, RoccoTag as RT } from './roccoTypes';

export function ReanimatesCombo(cb: (other: Cardlike) => boolean): CardCombo {
  return {
    relationship: RE.Reanimates,
    isMatch: cb,
  };
}

export const RocMatchers: Matcher[] = [
  {
    relationship: RE.Equipment,
    isMatch: (a, b) =>
      a.tags.any(RT.WantsEvasion) && b.tags.any(RT.GivesEvasion),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.WantsMassTribal) &&
      b.tags.any(RT.GivesMassTribal, RT.GivesConspiracy),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.WantsConspiracy) && b.tags.any(RT.GivesConspiracy),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.NeedsDiscard) && b.tags.any(RT.FuelsDiscard),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.WantsCreatureETBs) &&
      b.tags.any(RT.MakesTokens, RT.BlinksSelf, RT.BouncesSelf),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.WantsNonTokenETBs, RT.WantsLTBs) &&
      b.tags.any(RT.BlinksSelf, RT.BouncesSelf),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.UntapsCreature) && b.tags.any(RT.HasTapAbility),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.MakesTokens) && b.tags.any(RT.WantsGoWide, RT.WantsTokens),
  },
  {
    relationship: RE.Tutors,
    isMatch: (a, b) =>
      a.tags.any(RT.TutorsEquipment) && b.types.any(CT.Equipment),
  },
  {
    relationship: RE.Tutors,
    isMatch: (a, b) => a.tags.any(RT.TutorsLand) && b.types.any(CT.Land),
  },
  {
    relationship: RE.Tutors,
    isMatch: (a, b) =>
      a.tags.any(RT.TutorsLegends) && b.types.any(CT.Legendary),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.HasETB, RT.WantsBounce) &&
      (b.tags.any(RT.BouncesCreature) ||
        (a.subtypes.any('Changeling', 'Elf') && b.tags.any(RT.BouncesElf))),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesHaste) &&
      b.tags.any(RT.AttackTrigger, RT.HasTapAbility),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.AttackTrigger) &&
      b.tags.any(RT.GivesIndestructible, RT.GivesEvasion),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesDeathtouchWhileAttacking) &&
      b.tags.any(RT.WantsDeathtouchWhileAttacking, RT.WantsDeathtouchFlexible),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesDeathtouchWhileTapped) &&
      b.tags.any(RT.WantsDeathtouchWhileTapped, RT.WantsDeathtouchFlexible),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesDeathtouchAlways) &&
      b.tags.any(
        RT.WantsDeathtouchWhileAttacking,
        RT.WantsDeathtouchWhileTapped,
        RT.WantsDeathtouchAlways,
        RT.WantsDeathtouchFlexible,
      ),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesLifelink) && b.tags.any(RT.WantsLifelink),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesIndestructible) && b.tags.any(RT.WantsIndestructible),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) => a.tags.any(RT.GivesPower) && b.tags.any(RT.WantsPower),
  },
  {
    relationship: RE.Buffs,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesPlusCounters) &&
      b.tags.any(RT.WantsPlusCounters, RT.WantsPower),
  },
  {
    relationship: RE.CombosWith,
    isMatch: (a, b) =>
      a.tags.any(RT.GivesLifelink, RT.GainsLife) &&
      b.tags.any(RT.LifegainTrigger),
  },
];
