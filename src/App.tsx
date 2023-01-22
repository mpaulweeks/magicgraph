import { LarryDraft } from './data/larry';
import { CardImpl } from './lib/card';
import { DeckView } from './app/DeckView';
import { Deck } from './lib/deck';

function App() {
  const deck = new Deck('Larry Loops', LarryDraft);
  console.log(deck);
  return (
    <DeckView deck={deck} />
  );
}

export default App;
