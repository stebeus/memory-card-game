import { useEffect, useState } from 'react';
import { fetchPokemon } from '@/api.js';

import errorIcon from '@/assets/icons/error.svg';
import loaderIcon from '@/assets/icons/poke-ball.svg';

import './index.css';

export function Card({ id, handler }) {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(id, setPokemon, setError, setIsLoading);
  }, [id]);

  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  let imgClassName = 'sprite';
  let imgUrl = spriteUrl;
  let title = pokemon;

  function setContent(newImgClassName, newImgUrl, newTitle) {
    imgClassName = newImgClassName;
    imgUrl = newImgUrl;
    title = newTitle;
  }

  if (isLoading) setContent('loader', loaderIcon, 'Loading...');
  if (error != null) setContent('error', errorIcon, `Error: ${error}`);

  return (
    <article
      className="card"
      data-pokemon={pokemon}
      onClick={handler}
      onKeyDown={handler}
    >
      <img
        className={imgClassName}
        src={imgUrl}
        alt=""
        width={64}
        height={64}
      />
      <h2>{title}</h2>
    </article>
  );
}
