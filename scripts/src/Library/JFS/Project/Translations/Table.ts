import * as Type from './Type';
import * as File from './File';

const columns = ['de', 'en', 'it'];

export const title = (translations: Type.Translations, filter: 'all' | 'missing') => (
  Object
  .keys(translations)
  .reduce(
    (title, language) => ({
      ...title,
      [language]: language
    }),
    { key: `Keys (${rows(translations, filter).length})` } as Type.Table.Row
  )
);

export const rows = (translations: Type.Translations, filter: 'all' | 'missing') => (
  filter === 'all'
    ? all(translations)
    : missing(translations)
);

export const all = (translations: Type.Translations) => (
  File.keys(translations)
    .map(key => (
      Object.keys(translations)
        .reduce(
          (row, language) => ({
            ...row,
            [language]: translations[language][key]
          }),
          { key } as Type.Table.Row
        )
    ))
);

export const missing = (translations: Type.Translations) => (
  all(translations)
    .filter(row => (
      !Object
        .keys(row)
        .every(index => row[index])
    ))
)

export const get = (translations: Type.Translations, filter: 'all' | 'missing' = 'missing') => [
  title(translations, filter),
  ...rows(translations, filter)
];

export const language = (rows: Type.Table.Row[], name: string): Type.Language => (
  rows
    .reduce(
      (messages, row) => ({
        ...messages,
        [row.key]: row[name]
      }),
      {} as Type.Language
    )
);

export const normalize = (rows: Type.Table.Row[]) => (
  rows.map(row => (
    Object
      .keys(row)
      .reduce(
        (normalized, column) => {
          const key = (
            columns.includes(column)
              ? column
              : 'key'
          );
          return {
            ...normalized,
            [key]: row[column]
          }
        },
        {} as Type.Table.Row
      )
  ))
);