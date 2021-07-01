import * as JFS from 'Library/JFS';
import * as Type from 'Type';

export const name = 'jfs-generate-api';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  JFS.API.Generator.run(env.root, {
    core: env.which === 'core'
  });
}
