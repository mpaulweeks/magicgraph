import { Card } from "../types";

export enum Larry {
  Disk = '1',
}

const partials: Partial<Card>[] = [{
  name: 'Magus of the Disk',
  tags: [Larry.Disk],
}];


export const LarryCards: Card[] = partials.map<Card>(c => {
  if (c.name === undefined) { throw new Error('name is required'); }
  const card: Card = {
    name: c.name!,
    mv: c.mv!,
    types: c.types!,
    tags: c.tags ?? [],
    combos: c.combos ?? [],
  };
  return card;
});
