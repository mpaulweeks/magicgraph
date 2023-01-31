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
      });
    });

    // check a,b and b,a at the same time
    for (let ai = 0; ai < allCards.length - 1; ai++) {
      const a = allCards[ai];
      for (let bi = ai + 1; bi < allCards.length; bi++) {
        const b = allCards[bi];
        for (const m of matchers) {
          if (m.isMatch(a, b)) {
            edges.push({
              relationship: m.relationship,
              related: [a, b],
            });
            break;
          }
          if (m.isMatch(b, a)) {
            edges.push({
              relationship: m.relationship,
              related: [b, a],
            });
            break;
          }
        }
      }
    }

    return edges;
  }
}
