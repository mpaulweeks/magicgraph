import { CardDraft, CardListStatus } from "../types";
import { unique } from "../util/list";

export function collate(args: {
  current: string[];
  cuts: string[];
  pending: string[];
  rejected: string[];
  cards: CardDraft[];
}): {
  cardDrafts: CardDraft[];
  unused: string[];
  undefined: string[];
} {
  const allDefined = args.cards.map(c => c.name);
  const allUsed = unique([
    ...args.current,
    ...args.pending,
    ...args.rejected,
    ...args.cuts,
  ]);
  const unused = allDefined.filter(name => !allUsed.includes(name));
  const undefined = allUsed.filter(name => !allDefined.includes(name));
  const cardDrafts = [
    ...args.cards.filter(c => args.current.includes(c.name)).map(c => ({
      ...c,
      status: CardListStatus.Current,
    })),
    ...args.cards.filter(c => args.pending.includes(c.name)).map(c => ({
      ...c,
      status: CardListStatus.Pending,
    })),
    ...args.cards.filter(c => args.rejected.includes(c.name)).map(c => ({
      ...c,
      status: CardListStatus.Rejected,
    })),
    ...args.cards.filter(c => args.cuts.includes(c.name)).map(c => ({
      ...c,
      status: CardListStatus.Cuts,
    })),
  ];
  return { cardDrafts, unused, undefined };
}
