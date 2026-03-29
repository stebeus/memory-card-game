import { BASE_URL } from '@/constants.js';

export function Link({ to = BASE_URL, children }) {
  const protocol = 'https://';
  const isExternal = to.includes(protocol);

  const isTargetBlank = isExternal && {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <a href={to} {...isTargetBlank}>
      {children}
    </a>
  );
}
