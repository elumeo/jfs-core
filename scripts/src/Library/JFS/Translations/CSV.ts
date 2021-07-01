import * as Type from './Type';
import { json2csv, csv2json, IFullOptions } from 'json-2-csv';
import * as Table from './Table';

const columns = ['de', 'en', 'it']

export const options: IFullOptions = {
  keys: ['key', ...columns],
  prependHeader: false
};

export const create = (rows: Type.Table.Row[]) => (
  new Promise<string>((resolve, reject) => (
    json2csv(
      rows,
      (error, csv) => (
        error
          ? reject(error)
          : resolve(csv)
      ),
      options
    )
  ))
);

export const rows = async (csv: string) => (
  await new Promise<Type.Table.Row[]>((resolve, reject) => (
    csv2json(csv, (error, rows: Type.Table.Row[]) => (
      error
        ? reject(error)
        : resolve(Table.normalize(rows))
    ))
  ))
);

export const languages = (csv: string): Promise<Type.Table.Language[]> => Promise.all(
  columns
    .map(async column => ({
      name: column,
      messages: Table.language(await rows(csv), column)
    }))
);

export const json = async (csv: string): Promise<Type.Translations> => (
  (await languages(csv))
    .reduce(
      (translations, { name, messages }) => ({
        ...translations,
        [name]: messages
      }),
      {}
    )
);