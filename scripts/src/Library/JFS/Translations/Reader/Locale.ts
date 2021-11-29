import * as Type from './Type';

type Locale = Type.Translation.Locale;

const unique = <T>(values: T[]) => Array.from(new Set(values));

export const merge = (first: Locale, second: Locale) => {
  const keys = unique([first, second].map(Object.keys).flat());
  const add = (locale: Locale, key: string): Locale => {
    const value = second[key] || first[key];
    if (value) {
      locale[key] = value
    }
    return locale;
  };
  return keys.reduce(add, {});
};

export const get = (keys: string[], values: string[]): Locale => (
  keys
    .reduce<Locale>(add(values), {})
);

const add = (values: string[]) => (
  (locale: Locale, key: string, index: number): Locale => {
    locale[key] = values[index];
    return locale;
  }
);