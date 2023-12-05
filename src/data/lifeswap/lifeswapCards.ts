import {
  CardDraft, CardType as CT
} from '../../types';
import { LifeswapCategory as LC, LifeswapEdge, LifeswapTag as LT } from './lifeswapTypes';

export const LifeswapDraft: CardDraft[] = [
{
  name: `Athreos, Shroud-Veiled`,
  types: [CT.Creature, CT.Enchantment, CT.Legendary],
  category: LC.Other,
  tags: [
    LT.ReanimatesCreatures,
  ],
  combos: [{
    relationship: LifeswapEdge.CombosWith,
    isMatch: other => other.tags.has(LT.ExileSelf),
  }],
},
{
  name: `Arvinox, the Mind Flail`,
  types: [CT.Creature, CT.Enchantment, CT.Enchantment],
  category: LC.Draw,
  tags: [],
},
{
  name: `Brainstealer Dragon`,
  types: [CT.Creature],
  category: LC.Draw,
  tags: [],
},
{
  name: `Elder Brain`,
  types: [CT.Creature],
  category: LC.Draw,
  tags: [],
},
{
  name: `Gonti, Lord of Luxury`,
  types: [CT.Creature, CT.Legendary],
  category: LC.Draw,
  tags: [],
},
{
  name: `Greed`,
  types: [CT.Enchantment],
  category: LC.Draw,
  tags: [
    LT.PaySomeLife,
  ],
},
{
  name: `Loran of the Third Path`,
  types: [CT.Creature, CT.Legendary],
  category: LC.Removal,
  tags: [],
},
{
  name: `Love Song of Night and Day`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Draw,
  tags: [],
},
{
  name: `Necrologia`,
  types: [CT.Instant],
  category: LC.Draw,
  tags: [
    LT.PayAnyLife
  ],
},
{
  name: `Necropotence`,
  types: [CT.Enchantment],
  category: LC.Draw,
  tags: [
    LT.PayAnyLife,
  ],
},
{
  name: `Phyrexian Arena`,
  types: [CT.Enchantment],
  category: LC.Draw,
  tags: [
    LT.PaySomeLife,
  ],
},
{
  name: `Protection Racket`,
  types: [CT.Enchantment],
  category: LC.Draw,
  tags: [],
},
{
  name: `The War in Heaven`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Other,
  tags: [],
},
{
  name: `Burnished Hart`,
  types: [CT.Creature, CT.Artifact],
  category: LC.Mana,
  tags: [
    LT.SacrificeSelf,
  ],
},
{
  name: `Expedition Map`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [],
},
{
  name: `Kor Cartographer`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [],
},
{
  name: `Monument to Perfection`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [],
},
{
  name: `Scholar of New Horizons`,
  types: [CT.Creature],
  category: LC.Mana,
  tags: [
    LT.RemovesCounters,
  ],
},
{
  name: `Solemn Simulacrum`,
  types: [CT.Creature, CT.Artifact],
  category: LC.Mana,
  tags: [],
},
{
  name: `The Birth of Meletis`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Mana,
  tags: [],
},
{
  name: `Weathered Wayfarer`,
  types: [CT.Creature],
  category: LC.Mana,
  tags: [],
},
{
  name: `Blind Obedience`,
  types: [CT.Creature],
  category: LC.Removal,
  tags: [
    LT.DrainsLife,
  ],
},
{
  name: `Heliod, God of the Sun`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [],
},
{
  name: `Heliod, Sun-Crowned`,
  types: [CT.Creature, CT.Enchantment, CT.Legendary],
  category: LC.Threat,
  tags: [],
},
{
  name: `Lithoform Engine`,
  types: [CT.Artifact, CT.Legendary],
  category: LC.Other,
  tags: [],
},
{
  name: `Mirage Mirror`,
  types: [CT.Artifact],
  category: LC.Other,
  tags: [],
},
{
  name: `Mischievous Poltergeist`,
  types: [CT.Creature],
  category: LC.Threat,
  tags: [
    LT.PayAnyLife,
  ],
},
{
  name: `Children of Korlis`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.ResetsLife,
    LT.SacrificeSelf,
  ],
},
{
  name: `Eternity Vessel`,
  types: [CT.Artifact],
  category: LC.Other,
  tags: [
    LT.ResetsLife,
  ],
},
{
  name: `Exquisite Archangel`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.ResetsLife,
  ],
},
{
  name: `Resolute Archangel`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.ResetsLife,
  ],
},
{
  name: `Tainted Sigil`,
  types: [CT.Artifact],
  category: LC.Other,
  tags: [
    LT.ResetsLife,
  ],
},
{
  name: `Ferropede`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.RemovesCounters,
  ],
},
{
  name: `Hex Parasite`,
  types: [CT.Creature, CT.Artifact],
  category: LC.Other,
  tags: [
    LT.PayAnyLife,
    LT.RemovesCounters,
  ],
},
{
  name: `Power Conduit`,
  types: [CT.Artifact],
  category: LC.Other,
  tags: [
    LT.AddsPlusCounters,
    LT.RemovesCounters,
  ],
},
{
  name: `Thrull Parasite`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.DrainsLife,
    LT.RemovesCounters,
  ],
},
{
  name: `Elspeth Conquers Death`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Removal,
  tags: [],
},
{
  name: `Firja's Retribution`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Removal,
  tags: [],
},
{
  name: `Magus of the Balance`,
  types: [CT.Creature],
  category: LC.Removal,
  tags: [
    LT.SacrificeSelf,
  ],
},
{
  name: `Magus of the Disk`,
  types: [CT.Creature],
  category: LC.Removal,
  tags: [
    LT.SacrificeSelf,
  ],
},
{
  name: `Mangara of Corondor`,
  types: [CT.Creature, CT.Legendary],
  category: LC.Removal,
  tags: [
    LT.ExileSelf,
  ],
},
{
  name: `One Ring to Rule Them All`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Removal,
  tags: [],
},
{
  name: `Phyrexian Scriptures`,
  types: [CT.Enchantment, CT.Saga],
  category: LC.Removal,
  tags: [],
},
{
  name: `Toxic Deluge`,
  types: [CT.Sorcery],
  category: LC.Removal,
  tags: [
    LT.PayAnyLife,
  ],
},
{
  name: `Vona, Butcher of Magan`,
  types: [CT.Creature, CT.Legendary],
  category: LC.Removal,
  tags: [
    LT.PaySomeLife,
  ],
},
{
  name: `Cauldron of Souls`,
  types: [CT.Artifact],
  category: LC.Other,
  tags: [
    LT.Persist,
    LT.ReanimatesCreatures,
  ],
},
{
  name: `From the Catacombs`,
  types: [CT.Sorcery],
  category: LC.Other,
  tags: [
    LT.ReanimatesCreatures,
  ],
},
{
  name: `Luminous Broodmoth`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.WantsRemoveCounters,
    LT.ReanimatesCreatures,
  ],
},
{
  name: `Mikaeus, the Unhallowed`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.Undying,
    LT.ReanimatesCreatures,
  ],
},
{
  name: `Priest of Fell Rites`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.ReanimatesCreatures,
  ],
},
{
  name: `Puppeteer Clique`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.Persist,
  ],
},
{
  name: `Twilight Shepherd`,
  types: [CT.Creature],
  category: LC.Other,
  tags: [
    LT.Persist,
  ],
},
{
  name: `Axis of Mortality`,
  types: [CT.Enchantment],
  category: LC.Other,
  tags: [
    LT.SwapsLife,
  ],
},
{
  name: `Profane Transfusion`,
  types: [CT.Sorcery],
  category: LC.Other,
  tags: [
    LT.SwapsLife,
  ],
},
{
  name: `Repay in Kind`,
  types: [CT.Sorcery],
  category: LC.Other,
  tags: [
    LT.SwapsLife,
  ],
},
{
  name: `Reverse the Sands`,
  types: [CT.Sorcery],
  category: LC.Other,
  tags: [
    LT.SwapsLife,
  ],
},
{
  name: `Soul Conduit`,
  types: [CT.Artifact],
  category: LC.Other,
  tags: [
    LT.SwapsLife,
  ],
},
{
  name: `Karn's Bastion`,
  types: [CT.Land],
  category: LC.Mana,
  tags: [
    LT.Proliferates,
  ],
},
{
  name: `Nesting Grounds`,
  types: [CT.Land],
  category: LC.Mana,
  tags: [
    LT.RemovesCounters,
  ],
},
{
  name: `Orzhova, the Church of Deals`,
  types: [CT.Land],
  category: LC.Mana,
  tags: [
    LT.DrainsLife,
  ],
},
{
  name: `Vault of the Archangel`,
  types: [CT.Land],
  category: LC.Mana,
  tags: [
    LT.GainsLife,
  ],
},
];
