import { CardDraft, CardEdge } from "../types";
import { sortBy } from "../util/list";
import { CardImpl } from "./card";
import { Graph } from "./graph";
import { IdMapper } from "./idmapper";

export class Deck {
  readonly cards: CardImpl[];
  readonly edges: CardEdge[];

  constructor(
    readonly name: string,
    drafts: CardDraft[],
  ) {
    this.cards = sortBy(drafts.map(d => new CardImpl(d)), c => c.name);
    this.edges = new Graph().getEdges(this.cards);
  }

  getGraph() {
    const mapper = new IdMapper<string>();
    const graph = {
      nodes: this.cards.map((c, ci) => ({
        id: mapper.id(c.id),
        label: c.name,
        title: c.name,
      })),
      edges: this.edges.map(e => ({
        from: mapper.id(e.related[0].id),
        to: mapper.id(e.related[1].id),
      })),
    };
    return graph;
  }
}
