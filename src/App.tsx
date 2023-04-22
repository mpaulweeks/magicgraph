import { LarryData } from './data/larry';
import { DeckView } from './app/DeckView';
import { Deck } from './lib/deck';
import { MonumentData } from './data/monument';

function App() {
  const queryParsm = new URLSearchParams(window.location.search);

  const deck = (
    (queryParsm.get('larry') && new Deck(LarryData)) ||
    (queryParsm.get('monument') && new Deck(MonumentData)) ||
    undefined
  );
  if (deck) {
    return (
      <DeckView deck={deck} />
    );
  }

  return (
    <div>
      <h1>Choose deck</h1>
      <div>
        <a href="?larry=1">
          <button>
            {LarryData.name}
          </button>
        </a>
        <a href="?monument=1">
          <button>
            {MonumentData.name}
          </button>
        </a>
      </div>
    </div>
  )
}

export default App;
