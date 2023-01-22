import { CardDraft, CardEdge } from "../types";
import { CardImpl } from "./card";
import { Graph } from "./graph";

export class Deck {
  readonly cards: CardImpl[];
  readonly edges: CardEdge[];

  constructor(
    readonly name: string,
    drafts: CardDraft[],
  ) {
    this.cards = drafts.map(d => new CardImpl(d));
    this.edges = new Graph().getEdges(this.cards);
  }
}
