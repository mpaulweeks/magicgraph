import { LarryDraft } from './data/larry';
import { DeckView } from './app/DeckView';
import { Deck } from './lib/deck';

function App() {
  const deck = new Deck('Larry Loops', LarryDraft);
  return (
    <DeckView deck={deck} />
  );
}

export default App;
