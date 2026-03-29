import { useEffect, useState } from 'react';
import { fetchPokemon } from '@/api.js';

export function Card({ id, handler }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(id, setPokemon, setError, setIsLoading);
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <article
      className="card"
      data-pokemon={pokemon}
      onClick={handler}
      onKeyDown={handler}
    >
      <h2>{pokemon}</h2>
      <img src={spriteUrl} alt={pokemon} width={160} height={160} />
    </article>
  );
}
