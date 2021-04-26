import * as Package from 'Library/NPM/Package';

export const install = (path: string) => (
  Package.run('subpkg:install', {
    cwd: path,
    stdio: 'inherit'
  })
);
