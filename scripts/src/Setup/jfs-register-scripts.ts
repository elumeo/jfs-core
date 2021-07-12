import * as JFS from 'Library/JFS';
import * as Type from 'Type';

export const name = 'jfs-register-scripts';
export const scope: Type.Script.Scope[] = ['app', 'component'];

export const run = async (env: Type.Environment.Info) => {
  const scripts = await JFS.Bin.scripts(env);
  await JFS.Package.register(env, scripts);
};