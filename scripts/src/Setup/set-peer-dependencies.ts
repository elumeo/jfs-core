import * as JFS from 'Library/JFS';
import Script from 'Library/JFS/Core/Script';
import * as Package from 'Library/NPM/Package';
import { resolve } from 'path';
import fs from 'fs-extra';

const message = {
  completed: (name: string) => (
    `Added peerDependencies to package.json of ${name}`
  )
};

const run = async () => {
  const { type, core } = await JFS.discover(process.cwd());

  if (type !== 'core') {
    const { name, dependencies } = await Package.json(resolve(core, 'package.json'));

    const path = resolve(process.cwd(), 'package.json');
    const next = {
      ...(await Package.json(resolve(process.cwd(), 'package.json'))),
      peerDependencies: dependencies
    };
    
    await fs.writeJSON(path, next, {
      spaces: 2
    });
    
    console.log(message.completed(`Added peerDependencies to package.json of ${name}`))
  }
}

export default new Script({
  path: __filename,
  name: 'set-peer-dependencies',
  scope: ['all'],
  run
});
