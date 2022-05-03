import * as Type from 'Type';
import path from 'path';
import * as Package from 'Library/NPM/Package';
import _ from 'lodash';

const combine = (scripts: Type.Package.Script[]) => (
  scripts.reduce<Type.Package.JSON['scripts']>(
    (all, { name, command }) => ({
      ...all,
      [name]: command
    }), {}
  )
)

export const register = async (env: Type.Environment.Info, scripts: Type.Package.Script[]) => {
  const file = path.resolve(env.root, 'package.json');
  const json = await Package.json(file);
  const next = { scripts: combine(scripts) };
  await Package.save(file, _.merge(json, next));
}
