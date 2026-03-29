import { useEffect, useState } from 'react';

export function Card({ id, handler }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon-form/${id}`;

      try {
        const response = await fetch(pokemonUrl);
        const data = await response.json();
        setPokemon(data.name);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemon(id);
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: This card is interactive
    <div
      className="card"
      data-pokemon={pokemon}
      onClick={handler}
      onKeyDown={handler}
    >
      <h2>{pokemon}</h2>
      <img src={spriteUrl} alt={pokemon} width={160} height={160} />
    </div>
  );
}
