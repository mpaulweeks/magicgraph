import { Interset } from '../util/interset';

export interface Cardlike {
  readonly id: string;
  readonly name: string;
  readonly nick: string;
  readonly types: Interset<string>;
  readonly subtypes: Interset<string>;
  readonly mc: string;
  readonly mv: number;
  readonly category: string;
  readonly tags: Interset<string>;
  readonly combos: CardCombo[];
  readonly pending: boolean;
  readonly rejected: boolean;
  readonly styling: CardStyling;
}

export type CardStyling = {
  emphasize: boolean;
  notes: string[];
}

export type CardCombo = {
  relationship: string;
  isMatch: (other: Cardlike) => boolean;
};

export type Matcher = {
  relationship: string;
  isMatch(a: Cardlike, b: Cardlike): boolean;
};

export type CardEdge = {
  relationship: string;
  related: Cardlike[];
};
