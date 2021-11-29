import * as JFS from 'Library/JFS';
import { resolve } from 'path';
import * as Type from 'Type';
import * as Check from './jfs-check-translations';

export const name = 'jfs-read-translations';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  const path = resolve(env.root, 'src', 'Setup', 'Locale');
  const locales = await JFS.Translations.Reader.Input.locales(path);
  const last = await JFS.Translations.Snapshot.last(resolve(env.root, 'src', 'Setup'));
  const target = (
    JFS.Translations.Snapshot.File
      .path(resolve(env.root, 'src', 'Setup'), last.version, 'csv')
  );
  const table = await JFS.Translations.Reader.Input.csv(target);
  const next = await JFS.Translations.Reader.run(locales, table);
  await JFS.Translations.Reader.Output.files(path, next);
  console.info(`Succeessfully added missing translations!`);

  await Check.run(env);
};
