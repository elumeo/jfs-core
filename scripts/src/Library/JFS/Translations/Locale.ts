import fs from 'fs-extra';
import path from 'path';

export const names = async (base: string) => (
  (await fs.readdir(base))
    .map(name => path.parse(name))
    .filter(({ ext }) => ext === '.json')
    .map(({ name }) => name)
);

export const all = async (base: string) => Promise.all(
  (await names(base))
    .map(async name => ({
      name,
      messages: await fs.readJSON(path.resolve(base, `${name}.json`))
    }))
);