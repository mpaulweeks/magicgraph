import { CardEdge, Cardlike } from "../types";

export class Graph {
  getEdges(allCards: Cardlike[]): CardEdge[] {
    const edges: CardEdge[] = [];
    allCards.forEach(a => {
      allCards.forEach(b => {
        if (a.id === b.id) { return; }
        a.combos.forEach(combo => {
          if (combo.match(b)) {
            edges.push({
              relationship: combo.edgeType,
              related: [a, b],
            });
          }
        });
      });
    });
    return edges;
  }
}
