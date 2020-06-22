import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import { resolve } from 'path';

const filesNamesToCopy = [
  'tsconfig.json',
  'tslint.json',
  '.editorconfig',
  '.prettierconfig',
  '.prettierrc',
];

JFS.discover(
  () => {
    new Directory({
      path: resolve(JFS.Core.path, 'settings')
    }).files(
      files => {
        const copiedFileNames = [];
        files
          .filter(file => filesNamesToCopy.includes(file.name))
          .forEach(
            file => file.copy(
              resolve(JFS.Head.path, file.name),
              () => {
                copiedFileNames.push(file.name);
                if (copiedFileNames.length === filesNamesToCopy.length) {
                  console.log('ALL CONFIG FILES DEPLOYED');
                }
              }
            )
          );
      }
    );
  }
);
