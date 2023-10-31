import React from "react";
import { Cardlike } from "../types";

export const AutoCard = (props: {
  card: Cardlike;
  realName?: boolean;
}) => {
  return React.createElement('auto-card', {
    name: props.card.name,
  }, props.realName ? props.card.name : props.card.displayName);
}
