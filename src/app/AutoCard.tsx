import React from 'react';
import { Cardlike } from '../types';

export const AutoCard = (props: {
  card: Cardlike | string;
  realName?: boolean;
}) => {
  const { card, realName } = props;
  const name = typeof card === 'string' ? card : card.name;
  const displayName = typeof card === 'string' ? card : card.displayName;
  return React.createElement(
    'auto-card',
    {
      name: name,
    },
    realName ? name : displayName,
  );
};
