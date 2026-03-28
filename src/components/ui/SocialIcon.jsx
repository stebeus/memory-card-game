import { BASE_URL } from '@/constants.js';

export function SocialIcon({ brand, alt }) {
  return (
    <svg
      className="social-icon"
      role="img"
      aria-label={alt}
      width="24"
      height="24"
      fill="currentColor"
    >
      <use href={`${BASE_URL}social-icons.svg#${brand}`}></use>
    </svg>
  );
}
