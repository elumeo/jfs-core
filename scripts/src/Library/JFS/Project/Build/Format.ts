import TsConfig from 'Library/Types/TsConfig';
const rif = require('replace-in-file');
import child_process from 'child_process';
import fs from 'fs-extra';
import { resolve } from 'path';

export const replaceCoreAlias = async (path: string) => {
  const tsconfig = await fs.readJSON(resolve(path, 'tsconfig.json')) as TsConfig;
  const { outDir } = tsconfig.compilerOptions;
  rif.sync({
    files: [
      `./${outDir}/**/*.*s`
    ],
    from: /from 'Core/gm,
    to: 'from \'@elumeo/jfs-core/build'
  });
}

export const replaceAliases = (path: string) => {
  const command = 'node';
  const argv = [
    resolve(
      path,
      process.argv[1], '..', '..', '..',
      'node_modules', 'tsc-alias', 'src', 'bin', 'index.js'
    ),
    '-p',
    resolve(path, 'tsconfig.json')
  ];
  const options = { cwd: path }
  const child = child_process.spawn(command, argv, options);
  return new Promise<number>(resolve => child.on('exit', resolve));
}

export const apply = async (path: string) => {
  await replaceCoreAlias(path);
  await replaceAliases(path);
};
