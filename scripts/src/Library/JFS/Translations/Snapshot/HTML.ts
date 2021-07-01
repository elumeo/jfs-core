import fs from 'fs-extra';
import * as CSV from './CSV';
import * as File from './File';
import * as View from './View';
import * as Type from 'Library/JFS/Translations/Type';

export const get = async (base: string) => {
  const path = File.path(base, await CSV.version(base), 'html');
  return (
    fs.existsSync(path)
      ? await fs.readFile(path, 'utf8')
      : null
  );
}

export const save = (base: string, version: number, html: string) => (
  fs.writeFile(File.path(base, version, 'html'), html)
);

export const remove = async (base: string) => (
  fs.unlink(File.path(base, await CSV.version(base), 'html'))
);

export const injection = (
  rows: Type.Table.Row[],
  base: string,
  version: number
) => {
  const path = File.path(base, version, 'csv');
  return [
    `const htmlTable = \"${View.Render.table(rows)}\";`,
    `const csvPath = \"${path}\";`
  ].join('');
};

export const create = (rows: Type.Table.Row[], base: string, version: number) => View.create(
  injection(
    rows,
    base,
    version
  )
)