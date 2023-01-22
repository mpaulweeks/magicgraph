import { Card } from "../lib/card";

export const Deck = (props: {
  deck: Card[],
}) => {
  const { deck } = props;
  return (
    <div>
      deck view!
    </div>
  );
};
