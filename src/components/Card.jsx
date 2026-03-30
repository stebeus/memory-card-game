import { useEffect, useState } from 'react';
import { fetchPokemon } from '@/api.js';

import errorIcon from '@/assets/icons.svg#error';
import loaderIcon from '@/assets/icons.svg#poke-ball';

export function Card({ id, handler }) {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPokemon(id, setPokemon, setError, setIsLoading);
  }, [id]);

  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  const [imgClassName, setImgClassName] = useState('sprite');
  const [imgUrl, setImgUrl] = useState(spriteUrl);
  const [title, setTitle] = useState(pokemon);

  function setContent(imgClassName, imgUrl, title) {
    setImgClassName(imgClassName);
    setImgUrl(imgUrl);
    setTitle(title);
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
        width={100}
        height={100}
      />
      <h2>{title}</h2>
    </article>
  );
}
