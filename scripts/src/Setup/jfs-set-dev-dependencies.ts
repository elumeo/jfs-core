import * as JFS from 'Library/JFS';
import * as Package from 'Library/NPM/Package';
import { resolve } from 'path';
import fs from 'fs-extra';
import * as Type from 'Type';

export const name = 'jfs-set-dev-dependencies';
export const scope: Type.Script.Scope[] = ['app', 'component'];

export const run = async (env: Type.Environment.Info) => {
  if (env.which !== 'core') {
    const { name, devDependencies: coreDevDependencies } = await Package.json(resolve(env.core, 'package.json'));
    const { devDependencies: appDevDependencies, ...appPackagejson } = await Package.json(resolve(process.cwd(), 'package.json'));

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

    console.log(`Added devDependencies to package.json of ${name}`)
  }
}
