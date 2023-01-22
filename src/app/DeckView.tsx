import { useState } from "react";
import { CardImpl } from "../lib/card";
import { Deck } from "../types";
import { CardView } from "./CardView";

export const DeckView = (props: {
  deck: Deck,
}) => {
  const { deck } = props;
  const [filter, setFilter] = useState<string>();

  const tags = deck.cards.map(c => c.tags.asArray).flat();
  const toRender = filter ? deck.cards.filter(c => c.tags.intersects(filter)) : deck.cards;

  return (
    <div>
      <h1>{deck.name}</h1>
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
      {toRender.map((card, ci) => (
        <CardView
          key={ci}
          deck={deck}
          card={card}
        />
      ))}
    </div>
  );
};
