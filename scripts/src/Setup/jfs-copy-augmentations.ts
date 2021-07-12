import * as Type from 'Type';
import * as JFS from 'Library/JFS';
import path from 'path';

export const name = 'jfs-copy-augmentations';
export const scope: Type.Script.Scope[] = ['app', 'component'];

export const run = async (env: Type.Environment.Info) => {
  const target = path.resolve(env.root, 'augmentation');
  await JFS.Augmentation.copy(env, target);
}