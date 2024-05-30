import { Interset } from '../util/interset';
import { Color } from './enums';

export interface Cardlike {
  readonly id: string;
  readonly name: string;
  readonly displayName: string;
  readonly types: Interset<string>;
  readonly subtypes: Interset<string>;
  readonly mc: string;
  readonly mv: number;
  readonly colors: Color[];
  readonly power?: number;
  readonly category: string;
  readonly tags: Interset<string>;
  readonly combos: CardCombo[];
  readonly current: boolean;
  readonly choppingBlock: boolean;
  readonly pending: boolean;
  readonly rejected: boolean;
  readonly styling: CardStyling;
}

export type CardStyling = {
  emphasize: boolean;
  notes: string[];
};

export type CardCombo = {
  relationship: string;
  isMatch: (other: Cardlike) => boolean;
};

export type MatchFunction = (a: Cardlike, b: Cardlike) => boolean;
export type Matcher = {
  relationship: string;
  isMatch: MatchFunction;
};

export type CardEdge = {
  relationship: string;
  related: Cardlike[];
};

export type TagLinks = Record<string, string[]>;
