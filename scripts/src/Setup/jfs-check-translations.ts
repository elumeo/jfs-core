import * as JFS from 'Library/JFS';
import { resolve } from 'path';
import * as ANSI from 'ansi-colors';
import * as Type from 'Type';

export const name = 'jfs-check-translations';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  const path = resolve(env.root, 'src', 'Setup', 'Locale');
  if (await JFS.Translations.Check.run(path)) {
    console.info(ANSI.bgGreenBright(
      ANSI.black(' All translations seem to be available! ')
    ));
  }
  else {
    console.warn(ANSI.bgRedBright(
      ANSI.black(' Some translations seem to be missing! ')
    ));
  }
};
