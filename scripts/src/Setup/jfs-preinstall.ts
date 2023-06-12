import * as Type from 'Type';
import * as NPM from 'Library/NPM';
import { resolve } from 'path';
import fs from 'fs-extra';

export const name = 'jfs-preinstall';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  if (env.which != 'component' && env.which != 'app') {
    return
  }

  const { name, devDependencies: coreDevDependencies, peerDependencies: corePeerDependencies } = await NPM.Package.json(resolve(env.core, 'package.json'));
  const { devDependencies: appDevDependencies, peerDependencies: appPeerDependencies, ...appPackagejson } = await NPM.Package.json(resolve(process.cwd(), 'package.json'));

  const path = resolve(process.cwd(), 'package.json');
  const next = {
    ...appPackagejson,
    devDependencies: {
      ...appDevDependencies ?? {},
      ...coreDevDependencies ?? {},
    },
    peerDependencies: {
      ...appPeerDependencies ?? {},
      ...corePeerDependencies ?? {},
    }
  };

  await fs.writeJSON(path, next, {
    spaces: 2
  });

  console.log(`Added devDependencies of ${name} to package.json`)
  console.log(`Added peerDependencies of ${name} to package.json`)

  NPM.Package.run('npm run install')

}
