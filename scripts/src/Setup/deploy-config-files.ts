import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import { resolve } from 'path';
import Component from 'Library/JFS/Component';
import Core from 'Library/JFS/Core';
import App from 'Library/JFS/App';
import Text from 'Library/Text';

const filesNamesToCopy = [
  'tsconfig.app.json',
  'tsconfig.component.json',
  'tsconfig.core.json',
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
            file => {
              const onCopyComplete = () => {
                copiedFileNames.push(file.name);
                if (copiedFileNames.length === filesNamesToCopy.length) {
                  console.log('ALL CONFIG FILES DEPLOYED');
                }
              };

              if (Text.beginsWith(file.name, 'tsconfig.')) {
                const target = resolve(JFS.Head.path, 'tsconfig.json');
                const onComplete = () => {};

                const check = () => [
                  { pattern: 'app', type: App },
                  { pattern: 'component', type: Component },
                  { pattern: 'core', type: Core }
                ].reduce(
                  (isValid, { pattern, type }) => (
                    isValid || (
                      Text.between(
                        file.name, 'tsconfig.', '.json'
                      ) === pattern &&
                      JFS.Head instanceof type
                    )
                  ),
                  false
                );

                if (check()) {
                  file.copy(target, onComplete);
                }
              }
              else {
                file.copy(
                  resolve(JFS.Head.path, file.name),
                  onCopyComplete
                )
              }
            }
          );
      }
    );
  }
);
