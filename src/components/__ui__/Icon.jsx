import { BASE_URL } from '@/constants.js';

export function Icon({ fileName, alt }) {
  const url = `${BASE_URL}src/assets/icons/${fileName}.svg`;

  return (
    <svg
      className="icon"
      role="img"
      aria-label={alt}
      width={24}
      height={24}
      fill="currentColor"
    >
      <use href={url}></use>
    </svg>
  );
}
