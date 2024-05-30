import { CardDraft, CardListStatus, TagLinks } from '../types';
import { unique } from '../util/list';

export function collate(args: {
  current: string[];
  choppingBlock: string[];
  pending: string[];
  rejected: string[];
  cards: CardDraft[];
  tagLinks?: TagLinks;
}): {
  cardDrafts: CardDraft[];
  unused: string[];
  missingDefinition: string[];
} {
  const tagLinks = args.tagLinks ?? {};
  const cards = args.cards.map<CardDraft>(c => {
    const pending = (c.tags ?? []).concat();
    const newTags: Set<string> = new Set();
    while (pending.length) {
      const t = pending.shift()!;
      newTags.add(t);
      (tagLinks[t] ?? []).forEach(nt => {
        if (!newTags.has(nt)) {
          pending.push(nt);
        }
      });
    }
    return {
      ...c,
      tags: Array.from(newTags.keys()),
    };
  });
  const allDefined = cards.map(c => c.name);
  const allUsed = unique([
    ...args.current,
    ...args.pending,
    ...args.rejected,
    ...args.choppingBlock,
  ]);
  const unused = allDefined.filter(name => !allUsed.includes(name));
  const missingDefinition = allUsed.filter(name => !allDefined.includes(name));
  const cardDrafts = [
    ...cards
      .filter(c => args.current.includes(c.name))
      .map(c => ({
        ...c,
        status: CardListStatus.Current,
      })),
    ...cards
      .filter(c => args.pending.includes(c.name))
      .map(c => ({
        ...c,
        status: CardListStatus.Pending,
      })),
    ...cards
      .filter(c => args.rejected.includes(c.name))
      .map(c => ({
        ...c,
        status: CardListStatus.Rejected,
      })),
    ...cards
      .filter(c => args.choppingBlock.includes(c.name))
      .map(c => ({
        ...c,
        status: CardListStatus.ChoppingBlock,
      })),
  ];
  return { cardDrafts, unused, missingDefinition };
}
