import { LarryDraft } from './data/larry';
import { CardImpl } from './lib/card';
import { DeckView } from './app/DeckView';
import { Deck } from './types';

function App() {
  const deck: Deck = {
    name: 'Larry Loops',
    cards: LarryDraft.map(draft => new CardImpl(draft)),
  };
  return (
    <DeckView deck={deck} />
  );
}

export default App;
