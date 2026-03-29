import { Footer } from './components/Footer.jsx';
import { Grid } from './components/Grid.jsx';
import { Header } from './components/Header.jsx';

import './assets/App.css';

export function App() {
  return (
    <>
      <Header />
      <main>
        <p>Tap a card to score, but never click the same Pokémon twice!</p>
        <Grid />
      </main>
      <Footer />
    </>
  );
}
