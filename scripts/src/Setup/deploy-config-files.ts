import * as JFS from 'Library/JFS';
import fs from 'fs-extra';
import path from 'path';
import Script from 'Library/JFS/Core/Script';

const tsconfig = async () => {
  const { type } = await JFS.discover(process.cwd());

  switch (type) {
    case 'core': return 'core.json';
    case 'component': return 'shared-component.json';
    case 'app': return 'app.json';
    default: return null;
  };
};

const run = async () => {
  const { core } = await JFS.discover(process.cwd());

  const tools = path.resolve(core, 'build-tools');
  const typescript = path.resolve(tools, 'typescript');
  const editorconfig = path.resolve(tools, 'editorconfig');
  const prettier = path.resolve(tools, 'prettier');

  const copy = [
    {
      from: path.resolve(typescript, await tsconfig()),
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

  console.log('ALL CONFIG FILES DEPLOYED');
}

export default new Script({
  path: __filename,
  name: 'deploy-config-files',
  scope: ['all'],
  run
});
