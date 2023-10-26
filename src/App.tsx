import { DeckView } from './app/DeckView';
import { LarryData } from './data/larry';
import { MonumentData } from './data/monument/monument';
import { RoccoData } from './data/rocco';
import { Deck } from './lib/deck';

function App() {
  const queryParsm = new URLSearchParams(window.location.search);

  const deck = (
    (queryParsm.get('larry') && new Deck(LarryData)) ||
    (queryParsm.get('monument') && new Deck(MonumentData)) ||
    (queryParsm.get('rocco') && new Deck(RoccoData)) ||
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
        <a href="?rocco=1">
          <button>
            {RoccoData.name}
          </button>
        </a>
      </div>
    </div>
  )
}

export default App;
