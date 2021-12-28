import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import { resolve } from 'path';
import Script from 'Library/JFS/Core/Script';

const filesNamesToCopy = [
  'cypress',
  'cypress.json',
  'docker-compose-snapshots.yml',
  'Dockerfile',
  'Jenkinsfile',
];

const run = () => JFS.discover(
  () => {
    new Directory({
      path: resolve(JFS.Core.path, 'settings')
    }).files(
      files => {
        const copiedFileNames = []
        files
          .filter(file => filesNamesToCopy.includes(file.name))
          .forEach(
            file => {
              file.copy(
                resolve(JFS.Head.path, file.name),
                () => {
                  copiedFileNames.push(file.name)
                  if (copiedFileNames.length === filesNamesToCopy.length) {
                    console.log('ALL CYPRESS RELATED FILES DEPLOYED')
                  }
                }
              )
            }
          )
      }
    )
  }
)

export default new Script({
  path: __filename,
  name: 'setup-cypress',
  scope: ['all'],
  run
})
