import * as Package from 'Library/NPM/Package';
import { resolve, sep, relative, join } from 'path';
import * as fs from 'fs-extra';

export const setPeerDependencies = (path: string) => (
  Package.run('set-peer-dependencies', {
    cwd: path,
    stdio: 'inherit'
  })
);

export const deployConfigFiles = (path: string) => (
  Package.run('deploy-config-files', {
    cwd: path,
    stdio: 'inherit'
  })
);

export const registerScripts = (path: string) => (
  Package.run('register-scripts', {
    cwd: path,
    stdio: 'inherit'
  })
);

export const scriptPath = (path: string, core: string, name: string) => join(
  relative(path, core),
  'scripts', 'build', 'Setup', name
).replace(sep, '/');

export const addPostinstallScript = async (path: string, core: string) => {
  const { scripts, ...json } = (await Package.json(resolve(path, 'package.json')));
  if (!scripts['jfs-postinstall']) {
    await fs.writeJSON(path, {
      ...json,
      scripts: {
        ...scripts,
        'jfs-postinstall': `node ${scriptPath(path, core, 'postinstall')}`
      }
    })
  }
}

export const addRegisterScripts = async (path: string, core: string) => {
  const { scripts, ...json } = (await Package.json(resolve(path, 'package.json')));
  if (!scripts['register-scripts']) {
    await fs.writeJSON(path, {
      ...json,
      scripts: {
        ...scripts,
        'register-scripts': `node ${scriptPath(path, core, 'register-scripts')}`
      }
    });
  }
}