import { LarryCategory, LarryInverseEdge, OrderedEdges } from "../data/larry";
import { CardImpl } from "../lib/card";
import { Deck } from "../lib/deck";
import { CardEdge, Cardlike } from "../types";
import { groupBy, sortBy, unique } from "../util/list";
import { AutoCard } from "./AutoCard";
import { CardLink } from "./CardLink";

interface DisplayBin {
  relationship: string;
  neighbors: Cardlike[];
}
const EdgeBinView = (props: {
  bin: DisplayBin;
}) => (
  <div style={{
    marginRight: '2em',
  }}>
    <div><b>
      {props.bin.relationship}
    </b></div>
    <br/>
    {props.bin.neighbors.map((card, ci) => (
      <div key={ci} style={{
        marginBottom: '0.3em',
      }}>
        <CardLink card={card} />
      </div>
    ))}
  </div>
)

export const CardView = (props: {
  edges: CardEdge[],
  card: CardImpl,
}) => {
  const { edges, card } = props;
  const edgeTo = edges.filter(e => e.related[0].id === card.id).map(edge => ({
    relationship: edge.relationship,
    neighbor: edge.related[1],
  }));
  const edgeFrom = edges.filter(e => e.related[1].id === card.id).map(edge => ({
    relationship: LarryInverseEdge(edge.relationship),
    neighbor: edge.related[0],
  }));

  const edgeBins: DisplayBin[] = sortBy(groupBy([...edgeTo, ...edgeFrom], e => e.relationship).map(rel => ({
    relationship: rel[0].relationship,
    neighbors: sortBy(unique(rel.map(rel => rel.neighbor)), c => c.name),
  })), bin => OrderedEdges.indexOf(bin.relationship));

  const bgColor = {
    [LarryCategory.Disk]: 'salmon',
    [LarryCategory.Recursion]: 'lightgreen',
    [LarryCategory.Bouncer]: 'lightblue',
    [LarryCategory.Protection]: 'khaki',
  }[card.category] ?? 'lightgrey';

  return (
    <div id={card.id} style={{
      flex: '1',
      minWidth: '500px',
      border: '1px solid black',
      margin: '0 1em 1em 0',
    }}>
      <header style={{
        padding: '1em',
        backgroundColor: bgColor,
      }}>
        <div style={{
          fontSize: '2em',
        }}>
          <AutoCard card={card}/>
          {card.pending && ' (not in deck)'}
        </div>
        <div>
          {card.category}
        </div>
      </header>

      <section style={{
        padding: '1em',
      }}>
        <div>
          {card.notes.map((note, ni) => (
            <div key={ni}>
              {note}
            </div>
          ))}
        </div>
        <br/>

        <div style={{
          display: 'flex',
        }}>
          {edgeBins.map((bin, bi) => (
            <EdgeBinView key={bi} bin={bin} />
          ))}
        </div>
      </section>
    </div>
  )
}
