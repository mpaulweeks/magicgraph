import { DeckView } from './app/DeckView';
import { BrokkosData } from './data/brokkos/brokkosIndex';
import { LarryData } from './data/larry/larryIndex';
import { MonumentData } from './data/monument/monumentIndex';
import { RoccoData } from './data/rocco/roccoIndex';
import { Deck } from './lib/deck';
import { DeckData } from './types';

function App() {
  const decks: {
    slug: string;
    data: DeckData;
  }[] = [
    { slug: 'brokkos', data: BrokkosData },
    { slug: 'larry', data: LarryData },
    { slug: 'monument', data: MonumentData },
    { slug: 'rocco', data: RoccoData },
  ];

  const queryParsm = new URLSearchParams(window.location.search);
  const queryDeck = decks.filter(d => queryParsm.get(d.slug))[0];
  if (queryDeck) {
    return (
      <DeckView deck={new Deck(queryDeck.data)} />
    );
  }

  return (
    <div>
      <h1>Magic Graph</h1>
      <p>
        Website for tracking complex, overlapping combos in my EDH decks
      </p>
      {decks.map(d => (
        <div>
          <h2>
            <a href={`?${d.slug}=1`}>
              {d.data.name}
            </a>
          </h2>
          <p>{d.data.description}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
