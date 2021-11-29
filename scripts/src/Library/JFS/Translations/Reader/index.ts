import * as Translation from './Translation';
import * as Type from './Type';

export * as Input from './Input';
export * as Output from './Output';

type Locale = Type.Translation.Locale;
type Table = Type.CSV.Table;

export const run = async (locales: Record<string, Locale>, table: Table): Promise<Record<string, Locale>> => {
  const [head, body] = table;
  return Translation.merge(
    locales,
    Translation.locales(body, head.slice(1)),
  );
}