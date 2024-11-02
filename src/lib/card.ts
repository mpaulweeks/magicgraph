import {
  CardCombo,
  CardDraft,
  CardListStatus,
  CardStyling,
  Cardlike,
  Color,
  Colors,
} from '../types';
import { Interset } from '../util/interset';

export class CardImpl implements Cardlike {
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
  readonly current: boolean;
  readonly choppingBlock: boolean;
  readonly pending: boolean;
  readonly rejected: boolean;
  readonly combos: CardCombo[];
  readonly styling: CardStyling;
  readonly filterBy: Interset<string>;

  constructor(draft: CardDraft) {
    this.name = draft.name;
    this.displayName = draft.nick ?? this.name.split(' // ')[0];
    this.types = new Interset(draft.types);
    this.subtypes = new Interset(
      (draft.subtypes ?? '').split(' ').flatMap(s => (s ? [s] : [])),
    );
    this.mc = draft.mc ?? '';
    this.colors = draft.colors ?? Colors.filter(c => this.mc.includes(c));
    this.power = draft.power;
    this.category = draft.category;
    this.tags = new Interset(draft.tags ?? []);
    this.combos = draft.combos ?? [];
    this.current = draft.status === CardListStatus.Current || !draft.status;
    this.choppingBlock = draft.status === CardListStatus.ChoppingBlock;
    this.pending = draft.status === CardListStatus.Pending;
    this.rejected = draft.status === CardListStatus.Rejected;
    this.styling = {
      emphasize: !!draft.emphasize,
      notes: draft.notes ?? [],
    };

    this.id = this.name.split(' ').join('').toLowerCase();
    this.mv = this.mc
      .split('')
      .map(c => {
        const parsed = parseFloat(c);
        return isNaN(parsed) ? 1 : parsed;
      })
      .reduce((sum, cur) => sum + cur, 0);
    this.filterBy = new Interset([
      ...this.types.asArray.map(t => `type:${t}`),
      `category:${this.category}`,
      ...this.tags.asArray.map(t => `tag:${t}`),
    ]);
  }
}
