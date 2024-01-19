import { useState } from "react";
import { Deck } from "../lib/deck";
import { sort, sortBy, unique, uniqueBy } from "../util/list";
import styles from './App.module.css';
import { AutoCard } from "./AutoCard";
import { CardView } from "./CardView";
import { GraphVis } from "./GraphVis";

enum Sorting {
  Alphabetical = 1,
  Edges,
}

export const DeckView = (props: {
  deck: Deck,
}) => {
  const { deck } = props;
  const queryParsm = new URLSearchParams(window.location.search);
  const [includeCurrent, setIncludeCurrent] = useState<boolean>(queryParsm.get('current') === null || !!queryParsm.get('current'));
  const [includeChoppingBlock, setIncludeChoppingBlock] = useState<boolean>(queryParsm.get('choppingBlock') === null || !!queryParsm.get('choppingBlock'));
  const [includePending, setIncludePending] = useState<boolean>(!!queryParsm.get('pending'));
  const [includeRejected, setIncludeRejected] = useState<boolean>(!!queryParsm.get('rejected'));
  const [sortAscending, setSortAscending] = useState<boolean>(true);
  const [sorting, setSorting] = useState<Sorting>(Sorting.Alphabetical);
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
  const choppingBlock = filtered.filter(c => c.choppingBlock);
  const toRender = filtered
    .filter(c => includeCurrent || !c.current)
    .filter(c => includePending || !c.pending)
    .filter(c => includeRejected || !c.rejected)
    .filter(c => includeChoppingBlock || !c.choppingBlock);
  const edges = uniqueBy(
    deck.edges
      .filter(e => includePending || e.related.every(c => !c.pending))
      .filter(e => includeRejected || e.related.every(c => !c.rejected)),
    elm => sort(elm.related.map(c => c.id)).join('|')
  );
  const toRenderPreSort = {
    [Sorting.Alphabetical]: toRender,
    [Sorting.Edges]: sortBy(toRender, card =>
      edges.filter(e =>
        e.related.map(c => c.id).includes(card.id)
      ).length
    ),
  }[sorting];
  const toRenderSorted = sortAscending
    ? toRenderPreSort
    : toRenderPreSort.concat().reverse();

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
      {deck.data.notes?.length ? (
        <ul>
          {deck.data.notes.map((n, ni) => (
            <li key={ni}>{n}</li>
          ))}
        </ul>
      ) : null}
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
            checked={includeChoppingBlock}
            onClick={() => setIncludeChoppingBlock(!includeChoppingBlock)}
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
        <div>
          Sort by:
          <select
            value={sorting}
            onChange={e => setSorting(parseFloat(e.target.value))}
          >
            <option value={Sorting.Alphabetical}>Alphabetical</option>
            <option value={Sorting.Edges}>Edges</option>
          </select>
        </div>
        <div>
          Sort ascending?
          <input
            type="checkbox"
            readOnly={true}
            checked={sortAscending}
            onClick={() => setSortAscending(!sortAscending)}
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
        {toRenderSorted.map((card) => (
          <CardView
            key={card.id}
            deck={deck}
            edges={edges}
            card={card}
          />
        ))}
      </div>
      <section className={styles.DebugLists}>
        <div>
          <h3>{current.length} Current</h3>
          {current.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{choppingBlock.length} Chopping Block</h3>
          {choppingBlock.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{pending.length} Pending</h3>
          {pending.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{rejected.length} Rejected</h3>
          {rejected.map(card => (
            <div key={card.id}>
              <AutoCard card={card} realName={true} />
            </div>
          ))}
        </div>
        <div>
          <h3>{deck.data.missingDefinition.length} Missing</h3>
          {deck.data.missingDefinition.map(cardname => (
            <div key={cardname}>
              <AutoCard card={cardname} />
            </div>
          ))}
        </div>
        <div>
          <h3>{deck.data.unused.length} Unused</h3>
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
