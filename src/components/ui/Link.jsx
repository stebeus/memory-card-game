import { BASE_URL } from '@/constants.js';

export function Link({ to = BASE_URL, children }) {
  const urlScheme = /http|https/;
  const isExternal = urlScheme.test(`${to}://`);

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
