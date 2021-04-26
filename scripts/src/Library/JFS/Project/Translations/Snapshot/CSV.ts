import fs from 'fs-extra';
import * as Version from './Version';
import * as File from './File';

export const pattern = /(?<=missing.translations.v)(.*)(?=.csv)/;

export const version = async (base: string): Promise<number> => {
  const names = await fs.readdir(base);
  const [match] = names.filter(name => pattern.test(name));
  return (
    match
      ? Version.get(match, 'csv')
      : null
  );
};

export const get = async (base: string) => {
  const path = File.path(base, await version(base), 'csv');
  return (
    fs.existsSync(path)
      ? fs.readFile(path, 'utf8')
      : null
  );
}

export const save = (base: string, version: number, csv: string) => (
  fs.writeFile(File.path(base, version, 'csv'), csv)
);

export const remove = async (base: string) => (
  fs.unlink(File.path(base, await version(base), 'csv'))
);