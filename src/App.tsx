import { LarryDraft } from './data/larry';
import { DeckView } from './app/DeckView';
import { Deck } from './lib/deck';

function App() {
  const queryParsm = new URLSearchParams(window.location.search);

  let deck: Deck | undefined;

  if (queryParsm.get('larry')) {
    deck = new Deck('Larry Loops', LarryDraft);
  }

  if (deck) {
    return (
      <DeckView deck={deck} />
    );
  }

  return (
    <div>
      <h1>Choose deck</h1>
      <div>
        <button onClick={() => window.location.href = './?larry=1'}>
          Larry Loops
        </button>
      </div>
    </div>
  )
}

export default App;
