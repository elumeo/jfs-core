import * as JFS from 'Library/JFS';
import * as Package from 'Library/NPM/Package';
import { resolve } from 'path';
import fs from 'fs-extra';
import * as Type from 'Type';

export const name = 'jfs-set-peer-dependencies';
export const scope: Type.Script.Scope[] = ['app', 'component'];

export const run = async (env: Type.Environment.Info) => {
  if (env.which !== 'core') {
    const { name, dependencies: coreDependencies, peerDependencies: corePeerdependencies, devDependencies: coreDevDependencies } = await Package.json(resolve(env.core, 'package.json'));
    const { peerDependencies: appPeerDependencies, devDependencies: appDevDependencies, ...appPackagejson } = await Package.json(resolve(process.cwd(), 'package.json'));

    const path = resolve(process.cwd(), 'package.json');
    const next = {
      ...appPackagejson,
      peerDependencies: { ...appPeerDependencies ?? {}, ...corePeerdependencies ?? {}, ...coreDependencies ?? {} },
      devDependencies: {
        ...appDevDependencies ?? {},
        ...coreDevDependencies ?? {},
      }
    };

    await fs.writeJSON(path, next, {
      spaces: 2
    });

    console.log(`Added peerDependencies to package.json of ${name}`)
  }
}
