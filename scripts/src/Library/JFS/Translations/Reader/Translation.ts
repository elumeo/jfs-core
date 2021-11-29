import * as Type from './Type';
import * as CSV from './CSV';
import * as Locale from './Locale';

type Locale = Type.Translation.Locale;
type Body = Type.CSV.Body;

export const merge = (first: Record<string, Locale>, second: Record<string, Locale>) => {
  const unique = <T>(data: T[]) => Array.from(new Set(data));
  const keys = unique([first, second].map(Object.keys).flat());
  const add = (locales: Record<string, Locale>, key: string) => {
    locales[key] = Locale.merge(first[key], second[key]);
    return locales;
  };
  return keys.reduce(add, {})
};

export const locales = (body: Body, languages: string[]): Record<string, Locale> => (
  languages
    .reduce<Record<string, Locale>>(add(body, keys(body)), {})
);

const keys = (body: Body): string[] => CSV.column(body, `Keys (${body.length})`);

const add = (body: Body, keys: string[]) => (
  (locales: Record<string, Locale>, name: string): Record<string, Locale> => {
    locales[name] = Locale.get(keys, CSV.column(body, name));
    return locales;
  }
);

