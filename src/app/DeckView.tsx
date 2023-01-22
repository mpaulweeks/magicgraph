import { useState } from "react";
import { Deck } from "../lib/deck";
import { unique } from "../util/list";
import { CardView } from "./CardView";
import { GraphVis } from "./GraphVis";

export const DeckView = (props: {
  deck: Deck,
}) => {
  const { deck } = props;
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
  const toRender = filter ? deck.cards.filter(c => c.category === filter || c.tags.intersects(filter)) : deck.cards;

  return (
    <div>
      <h1>{deck.name}</h1>
      <p>
        <button onClick={() => setShowGraph(true)}>graph</button>
      </p>
      <section>
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
        {toRender.map((card, ci) => (
          <CardView
            key={ci}
            deck={deck}
            card={card}
          />
        ))}
      </div>
    </div>
  );
};
