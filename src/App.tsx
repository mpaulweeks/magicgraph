import { LarryDraft } from './data/larry';
import { Card } from './lib/card';
import { Deck } from './app/Deck';

function App() {
  const deck = LarryDraft.map(draft => new Card(draft));
  return (
    <Deck deck={deck} />
  );
}

export default App;
