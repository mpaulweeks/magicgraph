import React from "react";
import { Cardlike } from "../types";

export const AutoCard = (props: {
  card: Cardlike;
}) => {
  return React.createElement('auto-card', {}, props.card.name);
}
