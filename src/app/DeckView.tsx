import { useState } from "react";
import { Deck } from "../lib/deck";
import { sort, unique, uniqueBy } from "../util/list";
import { CardView } from "./CardView";
import { GraphVis } from "./GraphVis";

export const DeckView = (props: {
  deck: Deck,
}) => {
  const { deck } = props;
  const [includePending, setIncludePending] = useState(false);
  const [filter, setFilter] = useState<string>();
  const [showGraph, setShowGraph] = useState(false);

  if (showGraph) {
    return (
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
      }}>
        <GraphVis deck={deck} />
        <button onClick={() => setShowGraph(false)} style={{
          position: 'absolute',
          top: '0',
          right: '0',
        }}>close</button>
      </div>
    );
  }


  const categories = unique(deck.cards.map(c => c.category));
  const tags = unique(deck.cards.map(c => c.tags.asArray).flat());
  const toRender = deck.cards
    .filter(c => includePending || !c.pending)
    .filter(c => !filter || c.category === filter || c.tags.has(filter));
  const edges = uniqueBy(
    deck.edges.filter(e => includePending || e.related.every(c => !c.pending)),
    elm => sort(elm.related.map(c => c.id)).join('|')
  );

  return (
    <div>
      <h1>{deck.name}</h1>
      {/* <p>
        <button onClick={() => setShowGraph(true)}>graph</button>
      </p> */}
      <section>
        <div>
          Show cards not in deck?
          <input
            type="checkbox"
            value={includePending.toString()}
            onClick={() => setIncludePending(!includePending)}
          />
        </div>
        <div>
          Filter: {filter ?? 'none'}
          <button onClick={() => setFilter(undefined)}>
            reset
          </button>
        </div>
        <div>
          Category:
          {categories.map((t, ti) => (
            <button key={ti} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
        <div>
          Tags:
          {tags.map((t, ti) => (
            <button key={ti} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
      </section>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '1em 0',
      }}>
        {toRender.map((card) => (
          <CardView
            key={card.id}
            edges={edges}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};
