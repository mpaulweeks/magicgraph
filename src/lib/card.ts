import { CardDraft, CardEdges, Cardlike } from "../types";
import { Interset } from "../util/set";

export class Card implements Cardlike {
  readonly name: string;
  readonly mc: string;
  readonly mv: number;
  readonly types: Interset<string>;
  readonly tags: Interset<string>;
  readonly combos: {
    edgeType: string;
    match: (other: Cardlike) => boolean;
  }[];
  constructor(draft: CardDraft) {
    this.name = draft.name;
    this.mc = draft.mc;
    this.types = new Interset(draft.types);
    this.tags = new Interset(draft.tags ?? []);
    this.combos = draft.combos ?? [];

    this.mv = draft.mc.split('').map(c => {
      const parsed = parseFloat(c);
      return isNaN(parsed) ? 1 : parsed;
    }).reduce((sum, cur) => sum + cur, 0);
  }

  getEdges(allCards: Card[]): CardEdges[] {
    const lookup = new Map<string, Card[]>();
    allCards.forEach(other => {
      this.combos.forEach(combo => {
        if (combo.match(other)) {
          const newEdge = lookup.get(combo.edgeType) ?? [];
          lookup.set(combo.edgeType, newEdge.concat(other));
        }
      });
    });
    const edges: CardEdges[] = Array.from(lookup.entries()).map(value => ({
      category: value[0],
      related: value[1],
    }));
    return edges;
  }
}
