import { CardListStatus } from './enums';
import { CardCombo, Matcher } from './interfaces';

export type CardDraft = {
  status?: CardListStatus;
  name: string;
  nick?: string;
  types: string[];
  subtypes?: string[];
  mc?: string;
  category: string;
  tags?: string[];
  notes?: string[];
  combos?: CardCombo[];
};

export type DeckData = {
  name: string;
  url?: string;
  cardDrafts: CardDraft[];
  matchers: Matcher[];
  categoryColorMap: Record<string, string>;
  relationshipInverse: Record<string, string>;
  relationshipOrder: string[];
};
