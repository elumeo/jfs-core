import fs from 'fs-extra';
import { resolve } from 'path';
import * as Type from './Type';
import * as Snapshot from './Snapshot';
import * as CSV from './CSV';

export const keys = (translations: Type.Translations): string[] => Array.from(
  new Set(
    Object.keys(translations)
      .reduce(
        (all, language) => [
          ...all,
          ...Object.keys(translations[language])
        ],
        []
      )
  )
);

export const json = (base: string): Promise<Type.Translations> => (
  fs.readJSON(resolve(base, 'Translations.json'))
);

export const asset = async (
  rows: Type.Table.Row[],
  base: string,
  version: number
) => ({
  html: await Snapshot.HTML.create(rows, base, version),
  csv: await CSV.create(rows)
});