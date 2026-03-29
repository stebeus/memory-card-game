import { useState } from 'react';
import { Card } from '@/components/ui/Card.jsx';

const pokemonList = [];

const getRandomId = (pokemonAmount = 50) => {
  const randomId = Math.random() * pokemonAmount;
  return Math.ceil(randomId);
};

export function GameGrid() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleScore = ({ target }) => {
    const card = target.closest('[data-pokemon]');
    const pokemon = card.dataset.pokemon;

    if (pokemonList.includes(pokemon)) {
      if (score > bestScore) setBestScore(score);
      pokemonList.length = 0;
      setScore(0);
      return;
    }

    setScore(score + 1);

    pokemonList.push(pokemon);
  };

  const cards = Array.from({ length: 8 }, () => (
    <Card key={crypto.randomUUID()} id={getRandomId()} handler={handleScore} />
  ));

  return (
    <main>
      <p>Score by clicking on a card, but don't click on repeated ones!</p>
      <p>Score: {score}</p>
      <p>Best: {bestScore}</p>
      <div className="grid">{cards}</div>
    </main>
  );
}
