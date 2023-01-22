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

  return (
    <div id={card.id}>
      <h2>
        <AutoCard card={card}/>
      </h2>

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
    </div>
  )
}
