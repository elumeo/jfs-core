import fs from 'fs-extra';
import { resolve } from 'path';

export const path = (name: string) => resolve(
  __dirname.replace('build', 'src'),
  'public',
  name
);

export const read = (name: string) => fs.readFile(path(name), 'utf8');