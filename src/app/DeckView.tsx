import { useState } from "react";
import { Deck } from "../lib/deck";
import { sort, unique, uniqueBy } from "../util/list";
import styles from './App.module.css';
import { AutoCard } from "./AutoCard";
import { CardView } from "./CardView";
import { GraphVis } from "./GraphVis";

export const DeckView = (props: {
  deck: Deck,
}) => {
  const { deck } = props;
  const queryParsm = new URLSearchParams(window.location.search);
  const [includeCurrent, setIncludeCurrent] = useState<boolean>(queryParsm.get('current') === null || !!queryParsm.get('current'));
  const [includeCuts, setIncludeCuts] = useState<boolean>(queryParsm.get('cuts') === null || !!queryParsm.get('cuts'));
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

  const cardTypes = unique(deck.cards.map(c => c.types.asArray).flat()).sort();
  const categories = unique(deck.cards.map(c => c.category)).sort();
  const tags = unique(deck.cards.map(c => c.tags.asArray).flat()).sort();
  const filtered = deck.cards
    .filter(c => !filter || c.filterBy.has(filter));
  const current = filtered.filter(c => c.current);
  const pending = filtered.filter(c => c.pending);
  const rejected = filtered.filter(c => c.rejected);
  const cuts = filtered.filter(c => c.cuts);
  const toRender = filtered
    .filter(c => includeCurrent || !c.current)
    .filter(c => includePending || !c.pending)
    .filter(c => includeRejected || !c.rejected)
    .filter(c => includeCuts || !c.cuts)
  const edges = uniqueBy(
    deck.edges
      .filter(e => includePending || e.related.every(c => !c.pending))
      .filter(e => includeRejected || e.related.every(c => !c.rejected)),
    elm => sort(elm.related.map(c => c.id)).join('|')
  );

  return (
  <div className={styles.DeckView}>
      <div>
        <a href="./">go back</a>
      </div>
      <h1>{deck.data.name}</h1>
      {(deck.data.links ?? []).map(link => (
        <div key={link.url}>
          <a href={link.url}>
            {link.name}
          </a>
        </div>
      ))}
      <p>{deck.data.description}</p>
      {/* <p>
        <button onClick={() => setShowGraph(true)}>graph</button>
      </p> */}
      <section>
        <div>
          Show current?
          <input
            type="checkbox"
            readOnly={true}
            checked={includeCurrent}
            onClick={() => setIncludeCurrent(!includeCurrent)}
          />
        </div>
        <div>
          Show soon to be cut?
          <input
            type="checkbox"
            readOnly={true}
            checked={includeCuts}
            onClick={() => setIncludeCuts(!includeCuts)}
          />
        </div>
        <div>
          Show pending?
          <input
            type="checkbox"
            readOnly={true}
            checked={includePending}
            onClick={() => setIncludePending(!includePending)}
          />
        </div>
        <div>
          Show removed?
          <input
            type="checkbox"
            readOnly={true}
            checked={includeRejected}
            onClick={() => setIncludeRejected(!includeRejected)}
          />
        </div>
      </section>
      <section>
        <h3>
          Filter: {filter ?? 'none'}
          <button onClick={() => setFilter(undefined)}>
            reset
          </button>
        </h3>
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
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{cuts.length} Soon to be Cut</h3>
          {cuts.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{pending.length} Pending Cards</h3>
          {pending.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{rejected.length} Rejected Cards</h3>
          {rejected.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{deck.data.undefined.length} Undefined Cards</h3>
          {deck.data.undefined.map(cardname => (
            <div key={cardname}>
              <AutoCard card={cardname} />
            </div>
          ))}
        </div>
        <div>
          <h3>{deck.data.unused.length} Unused Cards</h3>
          {deck.data.unused.map(cardname => (
            <div key={cardname}>
              <AutoCard card={cardname} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
