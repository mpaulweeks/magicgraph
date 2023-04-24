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

  const categories = unique(deck.cards.map(c => c.category));
  const tags = unique(deck.cards.map(c => c.tags.asArray).flat());
  const toRender = deck.cards
    .filter(c => includePending || !c.pending)
    .filter(c => includeRejected || !c.rejected)
    .filter(c => !filter || c.category === filter || c.tags.has(filter));
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
        {(includePending || includeRejected) && (
          <div>
            <h3>Played Cards</h3>
            {toRender.filter(card => !card.pending && !card.rejected).map(card => (
              <div>
                <AutoCard key={card.id} card={card} />
              </div>
            ))}
          </div>
        )}
        {includePending && (
          <div>
            <h3>Pending Cards</h3>
            {toRender.filter(card => card.pending).map(card => (
              <div>
                <AutoCard key={card.id} card={card} />
              </div>
            ))}
          </div>
        )}
        {includeRejected && (
          <div>
            <h3>Rejected Cards</h3>
            {toRender.filter(card => card.rejected).map(card => (
              <div>
                <AutoCard key={card.id} card={card} />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
