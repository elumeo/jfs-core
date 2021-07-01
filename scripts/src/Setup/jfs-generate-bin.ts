import * as JFS from 'Library/JFS';
import * as Type from 'Type';

export const name = 'jfs-generate-bin';
export const scope: Type.Script.Scope[] = ['scripts'];
export const run = async (env: Type.Environment.Info) => {
  await JFS.Bin.generate(env);
};