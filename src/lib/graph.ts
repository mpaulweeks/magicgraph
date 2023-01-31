import { CardEdge, Cardlike, Matcher } from "../types";

export class Graph {
  getEdges(allCards: Cardlike[], matchers: Matcher[]): CardEdge[] {
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
        matchers.forEach(m => {
          if (m.isMatch(a,b)) {
            edges.push({
              relationship: m.relationship,
              related: [a, b],
            });
          }
        })
      });
    });
    return edges;
  }
}
