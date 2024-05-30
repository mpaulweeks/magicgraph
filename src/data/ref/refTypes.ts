import { TagLinks } from '../../types';

export enum RefCategory {
  LandTypeCycling = 'LandTypeCycling',
  Cycling = 'Cycling',
  Suspend = 'Suspend',
  Adventure = 'Adventure',
}
export const RefCategoryColorMap = {
  [RefCategory.LandTypeCycling]: '#ddd',
  [RefCategory.Cycling]: '#ddd',
  [RefCategory.Suspend]: '#ddd',
  [RefCategory.Adventure]: '#ddd',
};

export enum RefTag {}

export const RefTagLinks: TagLinks = {};

export enum RefEdge {
  CombosWith = 'Combos With',
}
export const RefInverseEdge = {};
export const RefEdges: string[] = [
  // dont care
];
