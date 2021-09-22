import fs from 'fs-extra';
import path from 'path';

export const names = async (base: string) => (
  (await fs.readdir(base))
    .map(name => path.parse(name))
    .filter(({ ext }) => ext === '.json')
    .map(({ name }) => name)
);

export const all = async (base: string) => (
  (await names(base))
    .map(name => ({
      name,
      messages: fs.readJSON(path.resolve(base, `${name}.json`))
    }))
);