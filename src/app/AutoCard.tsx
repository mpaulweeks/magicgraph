import React from "react";
import { Cardlike } from "../types";

export const AutoCard = (props: {
  card: Cardlike;
}) => {
  return React.createElement('auto-card', {
    name: props.card.name,
  }, props.card.nick ?? props.card.name);
}
