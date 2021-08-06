import * as genson from 'genson-js';
import Ajv from 'ajv';
import * as Type from 'Type';
import * as JFS from 'Library/JFS';
import * as ANSI from 'ansi-colors';

export const name = 'jfs-check-config-schema';
export const scope: Type.Script.Scope[] = ['all'];

const success = (text: string) => ANSI.bgGreenBright(ANSI.black(text));
const failure = (text: string) => ANSI.bgRedBright(ANSI.black(text));

export const run = async (env: Type.Environment.Info) => {
  const config = await JFS.Config.get(env.root);
  const template = await JFS.Config.template(env.root);
  const ajv = new Ajv;
  const schema = genson.createSchema(config);
  const match = ajv.validate(schema, template);

  if (match) {
    console.log(success(' config.dist.json matches the schema of config.json '));
  }
  else {
    console.log(failure(' config.dist.json does not match the schema of config.json '));
    process.exit(1);
  }
}