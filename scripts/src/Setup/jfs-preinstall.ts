import * as Type from 'Type';
import * as NPM from 'Library/NPM';
import { resolve } from 'path';
import fs from 'fs-extra';

export const name = 'jfs-preinstall';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  switch (env.which) {
    case 'app':
    case 'component':
      // await NPM.Package.run('jfs-set-peer-dependencies')
      // await NPM.Package.run('jfs-set-dev-dependencies')

      const { name, devDependencies: coreDevDependencies } = await NPM.Package.json(resolve(env.core, 'package.json'));
      const { devDependencies: appDevDependencies, ...appPackagejson } = await NPM.Package.json(resolve(process.cwd(), 'package.json'));

      console.log({ name, coreDevDependencies, appDevDependencies, appPackagejson })

      const path = resolve(process.cwd(), 'package.json');
      const next = {
        ...appPackagejson,
        devDependencies: {
          ...appDevDependencies ?? {},
          ...coreDevDependencies ?? {},
        }
      };

      await fs.writeJSON(path, next, {
        spaces: 2
      });

      console.log(`Added devDependencies of ${name} to package.json`)



      break
  }
}
