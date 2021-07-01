import * as JFS from 'Library/JFS';
import ANSI from 'ansi-colors';
import * as Type from 'Type';

export const name = 'jfs-check-api';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {
  const description = await JFS.API.Description.generate(env.root);
  const difference = await JFS.API.Check.run(env.root, description);

  if (difference) {
    console.log(difference);
  }
  else {
    console.log(ANSI.bgGreenBright(' NO DIFFERENCE '))
  }
}