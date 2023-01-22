import { CardDraft, Cardlike } from "../types";
import { Interset } from "../util/interset";

export class CardImpl implements Cardlike {
  readonly id: string;
  readonly name: string;
  readonly mc: string;
  readonly mv: number;
  readonly types: Interset<string>;
  readonly tags: Interset<string>;
  readonly combos: {
    edgeType: string;
    match: (other: Cardlike) => boolean;
  }[];

  constructor(draft: CardDraft) {
    this.name = draft.name;
    this.mc = draft.mc ?? '';
    this.types = new Interset(draft.types);
    this.tags = new Interset(draft.tags ?? []);
    this.combos = draft.combos ?? [];

    this.id = this.name.split(' ').join('').toLowerCase();
    this.mv = this.mc.split('').map(c => {
      const parsed = parseFloat(c);
      return isNaN(parsed) ? 1 : parsed;
    }).reduce((sum, cur) => sum + cur, 0);
  }
}
