import { BASE_URL } from '@/constants';

export function Link({ to = BASE_URL, children }) {
  const urlScheme = /http|https/;
  const isExternal = urlScheme.test(`${to}//:`);

  const isTargetBlank = isExternal && {
    target: ' __blank',
    rel: 'noopener noreferrer',
  };

  return (
    <a href={to} {...isTargetBlank}>
      {children}
    </a>
  );
}
