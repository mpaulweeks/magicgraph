import { LarryCategory } from "../data/larry";
import { CardImpl } from "../lib/card";
import { Deck } from "../lib/deck";
import { AutoCard } from "./AutoCard";
import { CardLink } from "./CardLink";

export const CardView = (props: {
  deck: Deck,
  card: CardImpl,
}) => {
  const { deck, card } = props;
  const edgeTo = deck.edges.filter(e => e.related[0].id === card.id);
  const edgeFrom = deck.edges.filter(e => e.related[1].id === card.id);

  const bgColor = (
    (card.tags.intersects(LarryCategory.Disk) && 'salmon') ||
    (card.tags.intersects(LarryCategory.Recursion) && 'lightgreen') ||
    (card.tags.intersects(LarryCategory.Protection) && 'lightyellow') ||
    'lightgrey'
  )

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

        {edgeTo.map((edge, ei) => (
          <div key={ei}>
            {edge.relationship} {'->'} <CardLink card={edge.related[1]} />
          </div>
        ))}
        {edgeFrom.map((edge, ei) => (
          <div key={ei}>
            <CardLink card={edge.related[0]} /> {'->'} {edge.relationship}
          </div>
        ))}
      </section>
    </div>
  )
}
