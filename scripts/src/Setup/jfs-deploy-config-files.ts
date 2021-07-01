import fs from 'fs-extra';
import path from 'path';
import * as Type from 'Type';

export const name = 'jfs-deploy-config-files';
export const scope: Type.Script.Scope[] = ['all'];

const tsconfig = async (which: Type.Environment.Info['which']) => {
  switch (which) {
    case 'core': return 'core.json';
    case 'component': return 'shared-component.json';
    case 'app': return 'app.json';
    default: return null;
  };
};

export const run = async (env: Type.Environment.Info) => {
  const typescript = path.resolve(env.core, 'build-tools', 'typescript');
  const editorconfig = path.resolve(env.core, 'build-tools', 'editorconfig');
  const prettier = path.resolve(env.core, 'build-tools', 'prettier');

  const copy = [
    {
      from: path.resolve(typescript, await tsconfig(env.which)),
      to: path.resolve(process.cwd(), 'tsconfig.json')
    },
    {
      from: path.resolve(typescript, 'tslint.json'),
      to: path.resolve(process.cwd(), 'tslint.json')
    },
    {
      from: path.resolve(editorconfig, '.editorconfig'),
      to: path.resolve(process.cwd(), '.editorconfig'),
    },
    {
      from: path.resolve(prettier, '.prettierrc'),
      to: path.resolve(process.cwd(), '.prettierrc')
    },
    {
      from: path.resolve(prettier, '.prettierignore'),
      to: path.resolve(process.cwd(), '.prettierignore')
    }
  ];

  await Promise.all(copy.map(({ from, to }) => fs.copyFile(from, to)));
}
