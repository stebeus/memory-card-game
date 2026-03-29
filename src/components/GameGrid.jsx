import { Card } from '@/components/ui/Card.jsx';

export function GameGrid() {
  const getRandomId = (pokemonAmount = 151) => {
    const randomId = Math.random() * pokemonAmount;
    return Math.ceil(randomId);
  };

  const grid = Array.from({ length: 8 }, () => (
    <Card key={crypto.randomUUID()} id={getRandomId()} />
  ));

  return grid;
}
