import { CardEdge, DeckData } from '../types';
import { sortBy } from '../util/list';
import { CardImpl } from './card';
import { Graph } from './graph';

export class Deck {
  readonly cards: CardImpl[];
  readonly edges: CardEdge[];

  constructor(readonly data: DeckData) {
    Deck.validate(data);
    this.cards = sortBy(
      data.cardDrafts.map(d => new CardImpl(d)),
      c => c.displayName,
    );
    this.edges = new Graph().getEdges(this.cards, data.matchers);
  }

  readonly compareEdges = (a: CardEdge, b: CardEdge) => {
    const [ai, bi] = [a, b].map(e => {
      const index = this.data.relationshipOrder.indexOf(e.relationship);
      return index >= 0 ? index : 999;
    });
    if (ai < bi) return -1;
    if (ai > bi) return 1;
    return a < b ? -1 : 1;
  }

  private static validate(data: DeckData) {
    const unique = new Set<string>();
    data.cardDrafts.forEach(d => {
      if (unique.has(d.name)) {
        throw new Error('duplicate card! ' + d.name);
      }
      unique.add(d.name);
    });
  }
}
