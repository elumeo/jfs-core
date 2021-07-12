import * as Type from 'Type';
import path from 'path';
import fs from 'fs-extra';

export const base = (env: Type.Environment.Info) => (
  path.resolve(env.core, 'augmentation')
);

export const files = async (base: string) => (
  (await fs.readdir(base))
    .map(name => ({
      path: path.resolve(base, name),
      name
    }))
);

export const copy = async (env: Type.Environment.Info, target: string) => (
  Promise.all((await files(base(env)))
    .map(file => fs.copyFile(
      file.path,
      path.resolve(target, file.name)
    )))
);