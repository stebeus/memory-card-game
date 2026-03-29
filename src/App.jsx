import { useState } from 'react';

import { Footer } from './components/Footer.jsx';
import { Grid } from './components/Grid.jsx';
import { Header } from './components/Header.jsx';

import './assets/App.css';

export function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [tappedCards, setTappedCards] = useState([]);

  function handleTap({ target }) {
    const card = target.closest('[data-pokemon]');
    const pokemon = card.dataset.pokemon;

    if (tappedCards.includes(pokemon)) {
      setBestScore(score > bestScore ? score : bestScore);
      setScore(0);
      setTappedCards([]);

      return;
    }

    setScore(score + 1);
    setTappedCards([...tappedCards, pokemon]);
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        <p>Tap a card to score, but never click the same Pokémon twice!</p>
        <Grid cardHandler={handleTap} />
      </main>
      <Footer />
    </>
  );
}
