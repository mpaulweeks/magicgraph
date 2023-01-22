import { Cardlike, Deck } from "../types";

export const CardView = (props: {
  deck: Deck,
  card: Cardlike,
}) => {
  const { deck, card } = props;
  const edges = card.getEdges(deck.cards);

  return (
    <div>
      <h2>{card.name}</h2>

      <div><b>Tags</b></div>
      <div>
        {card.tags.asArray.join(', ')}
      </div>

      {edges.map((edge, ei) => (
        <div key={ei}>
          <b>{edge.category}</b>
          <div>
            {edge.related.map(c => c.name).join(', ')}
          </div>
        </div>
      ))}
    </div>
  )
}
