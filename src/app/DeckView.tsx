import { useState } from "react";
import { Deck } from "../lib/deck";
import { sort, unique, uniqueBy } from "../util/list";
import { CardView } from "./CardView";
import { GraphVis } from "./GraphVis";
import styles from './App.module.css';
import { AutoCard } from "./AutoCard";

export const DeckView = (props: {
  deck: Deck,
}) => {
  const { deck } = props;
  const queryParsm = new URLSearchParams(window.location.search);
  const [includePending, setIncludePending] = useState<boolean>(!!queryParsm.get('pending'));
  const [includeRejected, setIncludeRejected] = useState<boolean>(!!queryParsm.get('rejected'));
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

  const cardTypes = unique(deck.cards.map(c => c.types.asArray).flat());
  const categories = unique(deck.cards.map(c => c.category));
  const tags = unique(deck.cards.map(c => c.tags.asArray).flat());
  const filtered = deck.cards
    .filter(c => !filter || c.filterBy.has(filter));
  const current = filtered.filter(c => c.current);
  const pending = filtered.filter(c => c.pending);
  const rejected = filtered.filter(c => c.rejected);
  const toRender = filtered
    .filter(c => includePending || !c.pending)
    .filter(c => includeRejected || !c.rejected)
  const edges = uniqueBy(
    deck.edges
      .filter(e => includePending || e.related.every(c => !c.pending))
      .filter(e => includeRejected || e.related.every(c => !c.rejected)),
    elm => sort(elm.related.map(c => c.id)).join('|')
  );

  return (
    <div>
      <h1>{deck.name}</h1>
      {deck.data.url && (
        <div>
          <a href={deck.data.url}>
            Link to Decklist
          </a>
        </div>
      )}
      {/* <p>
        <button onClick={() => setShowGraph(true)}>graph</button>
      </p> */}
      <section>
        <div>
          Show pending?
          <input
            type="checkbox"
            checked={includePending}
            onClick={() => setIncludePending(!includePending)}
          />
        </div>
        <div>
          Show removed?
          <input
            type="checkbox"
            checked={includeRejected}
            onClick={() => setIncludeRejected(!includeRejected)}
          />
        </div>
        <div>
          Filter: {filter ?? 'none'}
          <button onClick={() => setFilter(undefined)}>
            reset
          </button>
        </div>
        <div>
          Types:
          {cardTypes.map((t, ti) => (
            <button key={ti} onClick={() => setFilter(`type:${t}`)}>
              {t}
            </button>
          ))}
        </div>
        <div>
          Category:
          {categories.map((t, ti) => (
            <button key={ti} onClick={() => setFilter(`category:${t}`)}>
              {t}
            </button>
          ))}
        </div>
        <div>
          Tags:
          {tags.map((t, ti) => (
            <button key={ti} onClick={() => setFilter(`tag:${t}`)}>
              {t}
            </button>
          ))}
        </div>
      </section>
      <div className={styles.CardGallery}>
        {toRender.map((card) => (
          <CardView
            key={card.id}
            deck={deck}
            edges={edges}
            card={card}
          />
        ))}
      </div>
      <section style={{ display: 'flex', gap: '1em' }}>
        <div>
          <h3>{current.length} Played Cards</h3>
          {current.map(card => (
            <div>
              <AutoCard key={card.id} card={card} />
            </div>
          ))}
        </div>
        <div>
          <h3>{pending.length} Pending Cards</h3>
          {pending.map(card => (
            <div>
              <AutoCard key={card.id} card={card} />
            </div>
          ))}
        </div>
        <div>
          <h3>{rejected.length} Rejected Cards</h3>
          {rejected.map(card => (
            <div>
              <AutoCard key={card.id} card={card} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
