import React from 'react';
import { Cardlike } from '../types';

export const AutoCardImage = (props: { card: Cardlike }) => {
  return React.createElement('auto-card-image', {}, props.card.name);
};
