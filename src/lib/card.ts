import { CardDraft, Cardlike } from "../types";
import { Interset } from "../util/interset";

export class CardImpl implements Cardlike {
  readonly id: string;
  readonly name: string;
  readonly types: Interset<string>;
  readonly subtypes: Interset<string>;
  readonly mc: string;
  readonly mv: number;
  readonly category: string;
  readonly tags: Interset<string>;
  readonly notes: string[];
  readonly pending: boolean;
  readonly combos: {
    edgeType: string;
    match: (other: Cardlike) => boolean;
  }[];

  constructor(draft: CardDraft) {
    this.name = draft.name;
    this.types = new Interset(draft.types);
    this.subtypes = new Interset(draft.subtypes ?? []);
    this.mc = draft.mc ?? '';
    this.category = draft.category;
    this.tags = new Interset(draft.tags ?? []);
    this.notes = draft.notes ?? [];
    this.combos = draft.combos ?? [];
    this.pending = !!draft.pending;

    this.id = this.name.split(' ').join('').toLowerCase();
    this.mv = this.mc.split('').map(c => {
      const parsed = parseFloat(c);
      return isNaN(parsed) ? 1 : parsed;
    }).reduce((sum, cur) => sum + cur, 0);
  }
}
