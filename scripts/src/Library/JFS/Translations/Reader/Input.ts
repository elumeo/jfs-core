import fs from 'fs-extra';
import { resolve } from 'path';
import * as Type from './Type';
import * as CSV from './CSV';

type Locale = Type.Translation.Locale;

export const file = (target: string): Promise<string> => (
  fs.readFile(path(target), 'utf8')
);

export const path = (target: string): string => (
  target.startsWith('/')
    ? target
    : resolve(process.cwd(), target)
);

export const csv = async (path: string) => CSV.parse(await file(path));

export const locales = async (target: string): Promise<Record<string, Locale>> => {
  const root = path(target);
  
  const files = (
    (await fs.readdir(root))
      .filter(name => !name.startsWith('index.'))
  );

  const add = async (locales: Promise<Record<string, Locale>>, name: string) => {
    const next = await locales;
    const path = resolve(root, name);
    const data = await file(path);
    const key = name.substring(0, name.length - '.json'.length);
    next[key] = JSON.parse(data) as Locale;
    return next;
  };

  const initial = Promise.resolve({} as Record<string, Locale>);

  return files.reduce(add, initial);
}