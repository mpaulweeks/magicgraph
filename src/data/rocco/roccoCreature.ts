import { CardDraft, CardType as CT } from "../../types";
import { ReanimatesCombo } from "./roccoMatcher";
import { RoccoEdge as RE, RoccoTag as RT } from "./roccoTypes";

export const Creatures: (Omit<CardDraft, 'types' | 'category'> & {
  additionalTypes?: string[];
})[] = [{
  name: `Rocco, Cabaretti Caterer`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Elf', 'Drui'],
  mc: 'WRG',
  tags: [RT.HasETB],
}, {
  name: `Norin the Wary`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Warrior'],
  mc: 'R',
  power: 2,
  tags: [RT.BlinksSelf],
}, {
  name: `Saltskitter`,
  subtypes: ['Wurm'],
  mc: '3W',
  power: 3,
  tags: [RT.BlinksSelf],
}, {
  name: `Soltari Foot Soldier`,
  subtypes: ['Soltari', 'Soldier'],
  mc: 'W',
  tags: [RT.AttackTrigger, RT.Unblockable],
}, {
  name: `Spore Frog`,
  subtypes: ['Frog'],
  mc: 'G',
  tags: [RT.SelfSacrifice],
}, {
  name: `Kami of False Hope`,
  subtypes: ['Spirit'],
  mc: 'W',
  tags: [RT.SelfSacrifice],
}, {
  name: `Selfless Spirit`,
  subtypes: ['Spirit'],
  mc: '1W',
  tags: [RT.SelfSacrifice],
}, {
  name: `Saffi Eriksdotter`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Scout'],
  mc: 'WG',
  tags: [RT.SelfSacrifice],
}, {
  name: `Whitemane Lion`,
  subtypes: ['Cat'],
  mc: '1W',
  power: 2,
  tags: [RT.BouncesSelf, RT.BouncesCreature, RT.HasETB],
}, {
  name: `Stonecloaker`,
  subtypes: ['Gargoyle'],
  mc: '2W',
  power: 3,
  tags: [RT.BouncesSelf, RT.BouncesCreature, RT.HasETB],
}, {
  name: `Squee, Goblin Nabob`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Goblin'],
  mc: '2R',
  tags: [RT.FuelsDiscard],
}, {
  name: `Guardian Scalelord`,
  subtypes: ['Dragon'],
  mc: '4W',
  tags: [RT.AttackTrigger, RT.HasETB],
  combos: [ReanimatesCombo(other =>
    !other.types.has(CT.Land) &&
    other.mv <= 3,
  )],
}, {
  name: `Sun Titan`,
  subtypes: ['Avatar'],
  mc: '4WW',
  tags: [
    RT.AttackTrigger,
    RT.HasETB,
    RT.HasKeywords,
  ],
  combos: [ReanimatesCombo(other =>
    other.mv <= 3,
  )],
},
{
  name: `Fauna Shaman`,
  subtypes: ['Elf', 'Shaman'],
  mc: '1G',
  tags: [RT.HasTapAbility, RT.NeedsDiscard],
},
{
  name: `Temur Sabertooth`,
  subtypes: ['Cat'],
  mc: '2GG',
  tags: [RT.BouncesCreature],
},
{
  name: `Wirewood Symbiote`,
  subtypes: ['Insect'],
  mc: 'G',
  tags: [RT.BouncesElf, RT.UntapsCreature],
},
{
  name: `Arwen, Mortal Queen`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Elf', 'Noble'],
  mc: '1WG',
  tags: [
    RT.HasKeywords,
    RT.GivesLifelink,
    RT.GivesIndestructible,
    RT.HasETB,
  ],
},
{
  name: `Atla Palani, Nest Tender`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Shaman'],
  mc: '1WRG',
  tags: [
    RT.HasTapAbility,
    RT.MakesTokens,
    RT.MakesSmallTokens,
    RT.WantsMassTribal,
  ],
},
{
  name: `Crested Sunmare`,
  subtypes: ['Horse'],
  mc: '3WW',
  tags: [RT.WantsLifelink, RT.WantsMassTribal],
},
{
  name: `Forgotten Ancient`,
  subtypes: ['Elemental'],
  mc: '3G',
  tags: [RT.GivesPlusCounters],
},
{
  name: `Heartless Hidetsugu`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Ogre', 'Shaman'],
  mc: '3RR',
  tags: [RT.HasTapAbility, RT.WantsLifelink],
},
{
  name: `Immaculate Magistrate`,
  subtypes: ['Elf', 'Shaman'],
  mc: '3G',
  tags: [RT.HasTapAbility, RT.WantsMassTribal],
  combos: [{
    relationship: RE.CombosWith,
    isMatch: other => other.tags.has(RT.MakesElfTokens),
  }],
},
{
  name: `Krenko, Tin Street Kingpin`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Goblin'],
  mc: '2R',
  tags: [RT.AttackTrigger, RT.WantsPower, RT.MakesTokens, RT.MakesSmallTokens],
},
{
  name: `Mirror Entity`,
  subtypes: ['Changeling'],
  mc: '2W',
  tags: [RT.GivesPower, RT.WantsGoWide, RT.GivesMassTribal],
},
{
  name: `Nearheath Pilgrim`,
  subtypes: ['Human', 'Cleric'],
  mc: '1W',
  tags: [RT.GivesLifelink],
},
{
  name: `Nightshade Peddler`,
  subtypes: ['Human', 'Druid'],
  mc: '1G',
  tags: [RT.GivesDeathtouchAlways],
},
{
  name: `Odric, Lunarch Marshal`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Soldier'],
  mc: '3W',
  tags: [
    RT.WantsDeathtouchAlways,
    RT.WantsIndestructible,
  ],
  combos: [{
    relationship: RE.Buffs,
    isMatch: other => other.tags.has(RT.HasKeywords),
  }],
},
{
  name: `Purphoros, Bronze-Blooded`,
  additionalTypes: [CT.Legendary, CT.Enchantment],
  subtypes: ['God'],
  mc: '4R',
  tags: [RT.GivesHaste, RT.HasKeywords],
  combos: [{
    relationship: RE.CombosWith,
    isMatch: other =>
      other.types.has(CT.Creature) &&
      other.mc.includes('R'),
  }],
},
{
  name: `Ronin Cliffrider`,
  subtypes: ['Human', 'Samurai'],
  mc: '3RR',
  tags: [RT.AttackTrigger, RT.WantsDeathtouchWhileAttacking, RT.WantsDeathtouchWhileTapped],
},
{
  name: `Saryth, the Viper's Fang`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Warlock'],
  mc: '3GG',
  tags: [
    RT.GivesDeathtouchWhileTapped,
    RT.UntapsCreature,
    RT.HasKeywords,
  ],
},
{
  name: `Scalding Salamander`,
  subtypes: ['Salamander'],
  mc: '2R',
  tags: [RT.AttackTrigger, RT.WantsDeathtouchWhileAttacking, RT.WantsDeathtouchWhileTapped],
},
{
  name: `Stonehewer Giant`,
  subtypes: ['Giant', 'Warrior'],
  mc: '3WW',
  tags: [
    RT.HasTapAbility,
    RT.TutorsEquipment,
    RT.HasKeywords,
  ],
},
{
  name: `Swathcutter Giant`,
  subtypes: ['Giant', 'Soldier'],
  mc: '4RG',
  tags: [RT.AttackTrigger, RT.WantsDeathtouchWhileAttacking],
},
{
  name: `Thundering Mightmare`,
  subtypes: ['Horse', 'Spirit'],
  mc: '4G',
  tags: [RT.GivesPlusCounters],
},
{
  name: `Wolverine Riders`,
  subtypes: ['Elf', 'Warrior'],
  mc: '4GG',
  tags: [RT.MakesTokens, RT.MakesElfTokens, RT.MakesSmallTokens, RT.WantsConspiracy],
},
{
  name: `Jaya Ballard, Task Mage`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Spellshaper'],
  mc: '1RR',
  tags: [
    RT.HasTapAbility,
    RT.NeedsDiscard,
    RT.WantsDeathtouchWhileTapped,
    RT.WantsLifelink,
    RT.WantsIndestructible,
  ],
},
{
  name: `Peacekeeper`,
  subtypes: ['Human'],
  mc: '2W',
  tags: [RT.SelfSacrifice, RT.WantsBounce],
},
{
  name: `Spikeshot Elder`,
  subtypes: ['Goblin', 'Shaman'],
  mc: 'R',
  tags: [RT.WantsDeathtouchFlexible, RT.WantsPower],
},
{
  name: `Squallmonger`,
  subtypes: ['Monger'],
  mc: '3G',
  tags: [RT.WantsDeathtouchFlexible, RT.WantsLifelink],
},
{
  name: `Cartographer's Hawk`,
  subtypes: ['Bird'],
  mc: '1W',
  tags: [RT.AttackTrigger],
},
{
  name: `Farhaven Elf`,
  subtypes: ['Elf', 'Druid'],
  mc: '2G',
  tags: [RT.HasETB],
},
{
  name: `Gala Greeters`,
  subtypes: ['Elf', 'Druid'],
  mc: '1G',
  tags: [RT.WantsCreatureETBs],
},
{
  name: `Heronblade Elite`,
  subtypes: ['Human', 'Warrior'],
  mc: '2G',
  tags: [
    RT.HasTapAbility,
    RT.WantsPower,
    RT.HasKeywords,
    RT.WantsConspiracy,
  ],
  combos: [{
    relationship: RE.CombosWith,
    isMatch: other =>
      other.subtypes.has('Changeling', 'Human') &&
      other.tags.has(RT.BlinksSelf, RT.BouncesSelf),
  }],
},
{
  name: `Kami of Whispered Hopes`,
  subtypes: ['Spirit'],
  mc: '2G',
  tags: [RT.HasTapAbility, RT.WantsPower],
},
{
  name: `Scholar of New Horizons`,
  subtypes: ['Human', 'Scout'],
  mc: '1W',
  tags: [RT.HasETB, RT.HasTapAbility, RT.WantsPlusCounters],
},
{
  name: `Shigeki, Jukai Visionary`,
  additionalTypes: [CT.Legendary, CT.Enchantment],
  subtypes: ['Snake', 'Druid'],
  mc: '1G',
  tags: [RT.HasTapAbility, RT.SelfSacrifice],
},
{
  name: `Wood Elves`,
  subtypes: ['Elf', 'Scout'],
  mc: '2G',
  tags: [RT.HasETB],
},
{
  name: `Mentor of the Meek`,
  subtypes: ['Human', 'Soldier'],
  mc: '2W',
  combos: [{
    relationship: RE.CombosWith,
    isMatch: other =>
      other.tags.has(RT.MakesSmallTokens) || (
        other.power !== undefined &&
        other.power <= 2 &&
        other.tags.has(RT.BlinksSelf, RT.BouncesSelf)
      ),
  }],
},
{
  name: `Ohran Frostfang`,
  subtypes: ['Snake'],
  mc: '3GG',
  tags: [RT.GivesDeathtouchWhileAttacking, RT.WantsGoWide],
},
{
  name: `Soul of the Harvest`,
  subtypes: ['Elemental'],
  mc: '4GG',
  tags: [RT.WantsNonTokenETBs],
},
{
  name: `Toski, Bearer of Secrets`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Squirrel'],
  mc: '3G',
  tags: [RT.WantsGoWide, RT.HasKeywords],
},
{
  name: `Anger`,
  subtypes: ['Elemental'],
  mc: '3R',
  tags: [RT.FuelsDiscard, RT.GivesHaste, RT.HasKeywords],
},
{
  name: `Genesis`,
  subtypes: ['Elemental'],
  mc: '4G',
  tags: [RT.FuelsDiscard],
  combos: [ReanimatesCombo(other =>
    other.types.has(CT.Creature) &&
    other.tags.has(RT.SelfSacrifice),
  )],
},
{
  name: `Glory`,
  subtypes: ['Elemental'],
  mc: '3WW',
  tags: [RT.FuelsDiscard],
},
{
  name: `Thorn Mammoth`,
  subtypes: ['Elephant'],
  mc: '5GG',
  tags: [
    RT.WantsDeathtouchAlways,
    RT.WantsLifelink,
    RT.HasETB,
    RT.WantsCreatureETBs,
    RT.WantsGoWide,
  ],
},
{
  name: `Magus of the Disk`,
  subtypes: ['Human', 'Wizard'],
  mc: '2WW',
  tags: [RT.WantsIndestructible, RT.HasTapAbility],
},
{
  name: `Khârn the Betrayer`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Astartes', 'Berserker'],
  mc: '3R',
},
{
  name: `Primeval Herald`,
  subtypes: ['Elf', 'Scout'],
  mc: '3G',
  tags: [RT.HasETB, RT.AttackTrigger],
},
{
  name: `Etali, Primal Storm`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Elder', 'Dinosaur'],
  mc: '4RR',
  tags: [RT.AttackTrigger],
},
{
  name: `Bane of Progress`,
  subtypes: ['Elemental'],
  mc: '4GG',
  tags: [RT.HasETB],
},
{
  name: `Rhonas the Indomitable`,
  additionalTypes: [CT.Legendary],
  subtypes: ['God'],
  mc: '2G',
  tags: [RT.HasKeywords, RT.GivesPower],
},
{
  name: `Oketra the True`,
  additionalTypes: [CT.Legendary],
  subtypes: ['God'],
  mc: '3W',
  tags: [RT.HasKeywords, RT.MakesTokens, RT.MakesSmallTokens],
},
{
  name: `Angelic Skirmisher`,
  subtypes: ['Angel'],
  mc: '4WW',
  tags: [RT.GivesLifelink],
},
{
  name: `Nullmage Advocate`,
  subtypes: ['Insect', 'Druid'],
  mc: '2G',
  tags: [RT.HasTapAbility],
},
{
  name: `Captain Sisay`,
  additionalTypes: [CT.Legendary],
  subtypes: ['Human', 'Soldier'],
  mc: '2WG',
  tags: [RT.TutorsLegends],
},
];
