import { CardDraft, CardType, Cardlike, DeckData, Matcher } from "../types";

//// Counter Manipulation:
// Nesting Grounds
// Karn's Bastion
// Kiora Bests the Sea God
// The World Spell
// Myojin of Life's Web
// Myojin of Seeing Winds
// Myojin of Towering Might

//// Land Types Matter:
// Yavimaya, Cradle of Growth
// Urborg, Tomb of Yawgmoth
// Fortitude
// Lifetap
// Roots of Life

//// Tribal Synergy:
// Tyrite Sanctum
// Shapesharer
// Taurean Mauler

//// Damage Prevention:
// Glacial Chasm
// Heartless Hidetsugu

//// Enrage:
// Desert
// Sorrow's Path
// Apex Altisaur
// Polyraptor
// Vigor

//// Targeting Matters:
// Hanweir Battlements
// Nesting Grounds
// Kessig Wolf Run
// Dismiss into Dream
// Willbreaker

//// Reanimating Lands:
// Drownyard Temple
// Constant Mists
// Elvish Reclaimer
// Fortitude
// World Breaker

//// Indestructible Land:
// Silverbluff Bridge
// Awakening of Vitu-Ghazi
// Druid Class

export enum MonCat {
  Land = 'Land',
  NonLand = 'Non Land',
}

export enum MonTag {
  HasAbilityCounters = 'Ability Counters',
  HasDivinityCounters = 'Divinity Counters',

  IncreasesCounters = 'Increases Counters',
  MovesCounters = 'Moves Counters',
}

enum MonumentEdge {
  ManipulatesCounters = 'Manipulates Counters',
  CountersManipulatedBy = 'Counters Manipulated By'
}
export const MonumentInverseEdge = (edge: string) => ({
  [MonumentEdge.ManipulatesCounters]: MonumentEdge.CountersManipulatedBy,
  [MonumentEdge.CountersManipulatedBy]: MonumentEdge.ManipulatesCounters,
}[edge]);
export const MonumentEdges: string[] = [
  MonumentEdge.ManipulatesCounters,
  MonumentEdge.CountersManipulatedBy,
];

const MonumentDraft: CardDraft[] = ([
{
  name: `Nesting Grounds`,
  types: [CardType.Land],
  tags: [MonTag.MovesCounters],
},
{
  name: `Karn's Bastion`,
  types: [CardType.Land],
  tags: [MonTag.IncreasesCounters],
},
{
  name: `Kiora Bests the Sea God`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
},
{
  name: `The World Spell`,
  types: [CardType.Enchantment],
  subtypes: ['Saga'],
},
{
  name: `Myojin of Life's Web`,
  types: [CardType.Creature],
  tags: [MonTag.HasDivinityCounters],
},
{
  name: `Myojin of Seeing Winds`,
  types: [CardType.Creature],
  tags: [MonTag.HasDivinityCounters],
},
{
  name: `Myojin of Towering Might`,
  types: [CardType.Creature],
  tags: [MonTag.HasAbilityCounters],
},
{
  name: `Yavimaya, Cradle of Growth`,
  types: [CardType.Land],
},
{
  name: `Urborg, Tomb of Yawgmoth`,
  types: [CardType.Land],
},
{
  name: `Fortitude`,
  types: [CardType.Land],
},
{
  name: `Lifetap`,
  types: [CardType.Land],
},
{
  name: `Roots of Life`,
  types: [CardType.Land],
},
{
  name: `Tyrite Sanctum`,
  types: [CardType.Land],
},
{
  name: `Shapesharer`,
  types: [CardType.Land],
},
{
  name: `Taurean Mauler`,
  types: [CardType.Land],
},
{
  name: `Glacial Chasm`,
  types: [CardType.Land],
},
{
  name: `Heartless Hidetsugu`,
  types: [CardType.Land],
},
{
  name: `Desert`,
  types: [CardType.Land],
},
{
  name: `Sorrow's Path`,
  types: [CardType.Land],
},
{
  name: `Apex Altisaur`,
  types: [CardType.Land],
},
{
  name: `Polyraptor`,
  types: [CardType.Land],
},
{
  name: `Vigor`,
  types: [CardType.Land],
},
{
  name: `Hanweir Battlements // Hanweir, the Writhing Township`,
  nick: `Hanweir Battlements`,
  types: [CardType.Land],
},
{
  name: `Nesting Grounds`,
  types: [CardType.Land],
},
{
  name: `Kessig Wolf Run`,
  types: [CardType.Land],
},
{
  name: `Dismiss into Dream`,
  types: [CardType.Land],
},
{
  name: `Willbreaker`,
  types: [CardType.Land],
},
{
  name: `Drownyard Temple`,
  types: [CardType.Land],
},
{
  name: `Constant Mists`,
  types: [CardType.Land],
},
{
  name: `Elvish Reclaimer`,
  types: [CardType.Land],
},
{
  name: `Fortitude`,
  types: [CardType.Land],
},
{
  name: `World Breaker`,
  types: [CardType.Land],
},
{
  name: `Silverbluff Bridge`,
  types: [CardType.Land],
},
{
  name: `Awakening of Vitu-Ghazi`,
  types: [CardType.Land],
},
{
  name: `Druid Class`,
  types: [CardType.Land],
},
] as Omit<CardDraft, "category">[]).map(card => ({
  ...card,
  category: card.types.includes(CardType.Land) ? MonCat.Land : MonCat.NonLand,
}));

const landWithNon = (a: Cardlike, b: Cardlike) => (
  a.types.has(CardType.Land) !== b.types.has(CardType.Land)
);

const MonMatchers: Matcher[] = [{
  relationship: MonumentEdge.ManipulatesCounters,
  isMatch: (a, b) => landWithNon(a, b) &&
    a.tags.has(MonTag.MovesCounters) &&
    (
      b.tags.has(MonTag.HasAbilityCounters) ||
      b.subtypes.has('Saga')
    )
}, {
  relationship: MonumentEdge.ManipulatesCounters,
  isMatch: (a, b) => landWithNon(a, b) &&
    a.tags.has(MonTag.IncreasesCounters) &&
    (
      b.tags.has(MonTag.HasAbilityCounters) ||
      b.tags.has(MonTag.HasDivinityCounters) ||
      b.subtypes.has('Saga')
    )
}];

export const MonumentData: DeckData = {
  name: 'Monument.dec',
  cardDrafts: MonumentDraft,
  matchers: MonMatchers,
};
