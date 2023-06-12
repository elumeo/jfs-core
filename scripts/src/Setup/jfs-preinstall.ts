import path from 'path';
import * as Type from 'Type';
import * as JFS from 'Library/JFS';
import * as NPM from 'Library/NPM';

export const name = 'jfs-preinstall';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  switch (env.which) {

    case 'core':
      await JFS.Package.register(env, await JFS.Bin.scripts(env)).then(() => {
        console.log("√ jfs-core scripts registered in package.json")
      });
      break

    case 'app':
    case 'component':
      await NPM.Package.run('jfs-set-peer-dependencies').then(() => {
        console.log(`√ jfs-core peer-dependencies added to package.json`)
      });
      await NPM.Package.run('jfs-set-dev-dependencies').then(() => {
        console.log(`√ jfs-core dev-dependencies added to package.json`)
      });
      break
  }
}
