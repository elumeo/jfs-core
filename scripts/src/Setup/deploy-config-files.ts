import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import File from 'Library/OS/Filesystem/File';
import path from 'path';
import Component from 'Library/JFS/Component';
import Core from 'Library/JFS/Core';
import App from 'Library/JFS/App';
import Text from 'Library/Text';
import Script from 'Library/JFS/Core/Script';

const filesNamesToCopy = [
  'tsconfig.app.json',
  'tsconfig.component.json',
  'tsconfig.core.json',
  'tslint.json',
  '.editorconfig',
  '.prettierconfig',
  '.prettierrc',
];

const run = () => JFS.discover(
  async () => {
    await new Promise(resolve => (
      new File({ path: path.resolve(
        JFS.Core.path,
        'build-tools',
        'typescript',
        JFS.Head instanceof Core
          ? 'core.json'
          : JFS.Head instanceof Component
            ? 'shared-component.json'
            : 'app.json'
        )})
        .copy(path.resolve(JFS.Head.path, 'tsconfig.json'), resolve)
    ));
    await new Promise(resolve => (
      new File({ path: path.resolve(JFS.Core.path, 'build-tools', 'typescript', 'tslint.json') })
        .copy(path.resolve(JFS.Head.path, 'tslint.json'), resolve)
    ));
    await new Promise(resolve => (
      new File({ path: path.resolve(JFS.Core.path, 'build-tools', 'editorconfig', '.editorconfig') })
        .copy(path.resolve(JFS.Head.path, '.editorconfig'), resolve)
    ));
    await new Promise(resolve => (
      new File({ path: path.resolve(JFS.Core.path, 'build-tools', 'prettier', '.prettierrc') })
        .copy(path.resolve(JFS.Head.path, '.prettierrc'), resolve)
    ));
    await new Promise(resolve => (
      new File({ path: path.resolve(JFS.Core.path, 'build-tools', 'prettier', '.prettierignore') })
        .copy(path.resolve(JFS.Head.path, '.prettierignore'), resolve)
    ));

    console.log('ALL CONFIG FILES DEPLOYED');
  }
);

export default new Script({
  path: __filename,
  name: 'deploy-config-files',
  scope: ['all'],
  run
});
