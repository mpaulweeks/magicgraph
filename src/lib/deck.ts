import { CardDraft, CardEdge, Matcher } from "../types";
import { sortBy } from "../util/list";
import { CardImpl } from "./card";
import { Graph } from "./graph";

export class Deck {
  readonly cards: CardImpl[];
  readonly edges: CardEdge[];

  constructor(
    readonly name: string,
    drafts: CardDraft[],
    matchers: Matcher[],
  ) {
    this.cards = sortBy(drafts.map(d => new CardImpl(d)), c => c.name);
    this.edges = new Graph().getEdges(this.cards, matchers);
  }
}
