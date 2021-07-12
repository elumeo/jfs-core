import * as Type from 'Type';
import * as JFS from 'Library/JFS';
import * as NPM from 'Library/NPM';

export const name = 'jfs-postinstall';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  if (env.which !== 'core') {
    await JFS.Package.register(env, await JFS.Bin.scripts(env));
  }
  await NPM.Package.run('jfs-deploy-config-files');
  if (['app', 'component'].includes(env.which)) {
    await NPM.Package.run('jfs-set-peer-dependencies');
  }
}
