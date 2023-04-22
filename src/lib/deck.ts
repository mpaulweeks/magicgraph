import { CardEdge, DeckData } from '../types';
import { sortBy } from '../util/list';
import { CardImpl } from './card';
import { Graph } from './graph';

export class Deck {
  readonly name: string;
  readonly cards: CardImpl[];
  readonly edges: CardEdge[];

  constructor(readonly data: DeckData) {
    this.name = data.name;
    this.cards = sortBy(
      data.cardDrafts.map(d => new CardImpl(d)),
      c => c.name,
    );
    this.edges = new Graph().getEdges(this.cards, data.matchers);
  }
}
