import * as Project from 'Library/JFS/Project';
import Script from 'Library/JFS/Core/Script';
import { resolve } from 'path';
import * as ANSI from 'ansi-colors';

const run = async () => {
  const path = resolve(process.cwd(), 'src', 'Setup', 'Translations.json');
  if (await Project.Translations.Check.run(path)) {
    console.info(ANSI.bgGreenBright('All translations seem to be available!'));
  }
  else {
    console.warn(ANSI.bgRedBright('Some translations seem to be missing!'));
  }
};

export default new Script({
  path: __filename,
  name: 'check-translations',
  scope: ['all'],
  run
});
