import { CardImpl } from "../lib/card";
import { Deck } from "../lib/deck";
import { CardEdge, Cardlike } from "../types";
import { groupBy, sortBy, unique } from "../util/list";
import styles from './App.module.css';
import { AutoCard } from "./AutoCard";
import { AutoCardImage } from "./AutoCardImage";
import { CardLink } from "./CardLink";

function CardStyle(card: Cardlike): React.CSSProperties {
  return {
    fontWeight: (
      (card.styling.emphasize && 'bold') ||
      undefined
    ),
    textDecoration: (
      (card.rejected && 'line-through wavy') ||
      (card.cuts && 'line-through') ||
      undefined
    ),
    fontStyle: (
      (card.pending && 'italic') ||
      undefined
    ),
  }
}

interface DisplayBin {
  relationship: string;
  neighbors: Cardlike[];
}
const EdgeBinView = (props: {
  parent: Cardlike;
  bin: DisplayBin;
}) => (
  <div style={{
    minWidth: '10em',
  }}>
    <div><b>
      {props.bin.relationship}
    </b></div>
    <br/>
    {props.bin.neighbors.map(card => (
      <div key={`${props.parent.id}-${card.id}`} style={{
        marginBottom: '0.3em',
      }}>
        <CardLink card={card} style={CardStyle(card)} />
      </div>
    ))}
  </div>
)

export const CardView = (props: {
  deck: Deck,
  edges: CardEdge[],
  card: CardImpl,
}) => {
  const { deck, edges, card } = props;
  const edgeTo = edges.filter(e => e.related[0].id === card.id).map(edge => ({
    relationship: edge.relationship,
    neighbor: edge.related[1],
  }));
  const edgeFrom = edges.filter(e => e.related[1].id === card.id).map(edge => ({
    relationship: deck.data.relationshipInverse[edge.relationship] ?? edge.relationship,
    neighbor: edge.related[0],
  }));

  const edgeBins: DisplayBin[] = sortBy(groupBy([...edgeTo, ...edgeFrom], e => e.relationship).map(rel => ({
    relationship: rel[0].relationship,
    neighbors: sortBy(unique(rel.map(rel => rel.neighbor)), c => c.displayName),
  })), bin => deck.data.relationshipOrder.indexOf(bin.relationship));

  const bgColor = deck.data.categoryColorMap[card.category] ?? 'black';

  return (
    <div id={card.id} className={styles.CardView}>
      <main>
        <header className={styles.CardHeader} style={{
          backgroundColor: bgColor,
        }}>
          <div style={{
            ...CardStyle(card),
            fontSize: '1.6em',
          }}>
            <AutoCard card={card}/>
          </div>
          <div>
            {card.category}
          </div>
        </header>

        <section style={{
          padding: '1em',
        }}>
          {card.styling.notes.length ? (
            <p>
              {card.styling.notes.map((note, ni) => (
                <div key={ni}>
                  {note}
                </div>
              ))}
            </p>
          ) : null}

          <div className={styles.CardViewEdges}>
            {edgeBins.map((bin, bi) => (
              <EdgeBinView key={bi} parent={card} bin={bin} />
            ))}
          </div>
        </section>
      </main>
      <aside>
        <AutoCardImage card={card} />
      </aside>
    </div>
  )
}
