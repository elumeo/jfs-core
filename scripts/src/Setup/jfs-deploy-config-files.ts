import fs from 'fs-extra';
import path from 'path';
import * as Type from 'Type';

export const name = 'jfs-deploy-config-files';
export const scope: Type.Script.Scope[] = ['all'];

const tsconfig = (which: Type.Environment.Info['which']) => {
  switch (which) {
    case 'core': return 'core.json';
    case 'component': return 'shared-component.json';
    case 'app': return 'app.json';
    default: return null;
  }
};

const eslintrc = (which: Type.Environment.Info['which']) => {
  switch (which) {
    case 'core': return 'core.eslintrc';
    case 'component': return 'component.eslintrc';
    case 'app': return 'app.eslintrc';
    default: return null;
  }
}

export const run = async (env: Type.Environment.Info) => {
  const typescript = path.resolve(env.core, 'build-tools', 'typescript');
  // const prettier = path.resolve(env.core, 'build-tools', 'prettier');
  const eslint = path.resolve(env.core, 'build-tools', 'eslint');

  const copy = [
    {
      from: path.resolve(typescript, tsconfig(env.which)),
      to: path.resolve(process.cwd(), 'tsconfig.json')
    },
    {
      from: path.resolve(eslint, eslintrc(env.which)),
      to: path.resolve(process.cwd(), '.eslintrc')
    },
    // {
    //   from: path.resolve(prettier, '.prettierrc'),
    //   to: path.resolve(process.cwd(), '.prettierrc')
    // },
    // {
    //   from: path.resolve(prettier, '.prettierignore'),
    //   to: path.resolve(process.cwd(), '.prettierignore')
    // }
  ];

  await Promise.all(copy.map(({ from, to }) => fs.copyFile(from, to)));
}
