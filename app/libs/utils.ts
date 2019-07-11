export const getBasePath = (): string => {
  const pathname = window.location.pathname.split('/');
  if (pathname.length === 2) {
    return '/';
  }
  return pathname[1] ? '/' + pathname[1].replace(/\//g, '') + '/' : '/';
};
