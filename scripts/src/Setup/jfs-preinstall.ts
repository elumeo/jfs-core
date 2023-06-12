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

  const { name, devDependencies: coreDevDependencies, dependencies: coreDependencies } = await NPM.Package.json(resolve(env.core, 'package.json'));
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
      ...coreDependencies ?? {},
    }
  };

  await fs.writeJSON(path, next, {
    spaces: 2
  });

  console.log(`Added devDependencies of ${name} to package.json`)
  console.log(`Added dependencies of ${name} as peerDependencies in package.json`)
  console.log(`Be sure to install for dev environments using`)
  console.log(`\t$> npm i --include=dev`)
}
