import { useState } from "react";
import { Deck } from "../lib/deck";
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

  const tags = deck.cards.map(c => c.tags.asArray).flat();
  const toRender = filter ? deck.cards.filter(c => c.tags.intersects(filter)) : deck.cards;

  return (
    <div>
      <h1>{deck.name}</h1>
      <p>
        <button onClick={() => setShowGraph(true)}>graph</button>
      </p>
      <div>
        <button onClick={() => setFilter(undefined)}>
          reset
        </button>
        {tags.map((t, ti) => (
          <button key={ti} onClick={() => setFilter(t)}>
            {t}
          </button>
        ))}
      </div>
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
