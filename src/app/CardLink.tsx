import { Cardlike } from "../types"

export const CardLink = (props: {
  card: Cardlike;
}) => <a href={'#' + props.card.id}>{props.card.name}</a>;
