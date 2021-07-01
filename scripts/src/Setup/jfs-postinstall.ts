import * as Type from 'Type';
import path from 'path';
import fs from 'fs-extra';
import * as JFS from 'Library/JFS';
import * as NPM from 'Library/NPM';

const parent = (root: string): string => {
  if (fs.existsSync(path.resolve(root, 'package.json'))) {
    return root;
  }
  else if (root.split(path.sep).length > 1) {
    return parent(path.dirname(root));
  }
  else {
    return null;
  }
}

export const name = 'jfs-postinstall';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  await JFS.Package.register(env, await JFS.Bin.scripts(env));
  await NPM.Package.run('jfs-deploy-config-files', {
    stdio: 'inherit'
  });
  if (['app', 'component'].includes(env.which)) {
    await NPM.Package.run('jfs-set-peer-dependencies');
  }
}
