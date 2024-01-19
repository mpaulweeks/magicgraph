import { CardListStatus, Color } from './enums';
import { CardCombo, Matcher } from './interfaces';

export type CardDraft = {
  status?: CardListStatus;
  name: string;
  nick?: string;
  types: string[];
  subtypes?: string[];
  mc?: string;
  colors?: Color[];
  power?: number;
  category: string;
  tags?: string[];
  combos?: CardCombo[];
  emphasize?: boolean;
  notes?: string[];
};

export type DeckData = {
  name: string;
  description: string;
  notes?: string[];
  links?: { name: string, url: string, }[];
  cardDrafts: CardDraft[];
  missingDefinition: string[];
  unused: string[];
  matchers: Matcher[];
  categoryColorMap: Record<string, string>;
  relationshipInverse: Record<string, string>;
  relationshipOrder: string[];
};
