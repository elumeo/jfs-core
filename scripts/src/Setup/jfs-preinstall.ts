import * as Type from 'Type';
import * as NPM from 'Library/NPM';

export const name = 'jfs-preinstall';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  switch (env.which) {
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
