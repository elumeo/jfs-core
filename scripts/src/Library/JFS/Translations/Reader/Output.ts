import fs from 'fs-extra';
import path from 'path';
import * as Type from './Type';

type Locale = Type.Translation.Locale;

export const files = (root: string, locales: Record<string, Locale>) => Promise.all(
  Object
    .keys(locales)
    .map(name => file(
      path.resolve(root, `${name}.json`),
      locales[name]
    ))
);

const file = <T>(path: string, data: T): Promise<void> => (
  fs.writeFile(path, JSON.stringify(data, null, 2))
);