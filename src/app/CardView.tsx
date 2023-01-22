import { LarryCategory, LarryInverseEdge } from "../data/larry";
import { CardImpl } from "../lib/card";
import { Deck } from "../lib/deck";
import { Cardlike } from "../types";
import { groupBy } from "../util/list";
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
    marginRight: '1em',
  }}>
    <div><b>
      {props.bin.relationship}
    </b></div>
    <br/>
    {props.bin.neighbors.map((card, ci) => (
      <div key={ci}>
        <CardLink card={card} />
      </div>
    ))}
  </div>
)

export const CardView = (props: {
  deck: Deck,
  card: CardImpl,
}) => {
  const { deck, card } = props;
  const edgeTo = deck.edges.filter(e => e.related[0].id === card.id);
  const edgeFrom = deck.edges.filter(e => e.related[1].id === card.id);

  const edgeToBins: DisplayBin[] = groupBy(edgeTo, e => e.relationship).map(bin => ({
    relationship: bin[0].relationship,
    neighbors: bin.map(edge => edge.related[1]),
  }));
  const edgeFromBins: DisplayBin[] = groupBy(edgeFrom, e => e.relationship).map(bin => ({
    relationship: LarryInverseEdge(bin[0].relationship),
    neighbors: bin.map(edge => edge.related[0]),
  }));

  const bgColor = {
    [LarryCategory.Disk]: 'salmon',
    [LarryCategory.Recursion]: 'lightgreen',
    [LarryCategory.Protection]: 'khaki',
  }[card.category] ?? 'lightgrey';

  return (
    <div id={card.id} style={{
      flex: '1',
      minWidth: '400px',
      border: '1px solid black',
      margin: '0 1em 1em 0',
    }}>
      <header style={{
        fontSize: '2em',
        padding: '0.5em',
        backgroundColor: bgColor,
      }}>
        <AutoCard card={card}/>
      </header>

      <section style={{
        padding: '1em',
      }}>
        <div><b>Tags</b></div>
        <div>
          {card.tags.asArray.join(', ')}
        </div>
        <br/>

        <div style={{
          display: 'flex',
        }}>
          {edgeToBins.map((bin, bi) => (
            <EdgeBinView key={bi} bin={bin} />
          ))}
          {edgeFromBins.map((bin, bi) => (
            <EdgeBinView key={bi} bin={bin} />
          ))}
        </div>
      </section>
    </div>
  )
}
