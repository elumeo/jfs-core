import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import { resolve } from 'path';
import Script from 'Library/JFS/Core/Script';

const filesNamesToCopy = [
  'cypress.json',
  'docker-compose-snapshots.yml',
  'Dockerfile',
  'Jenkinsfile',
]

const cypressDirName = 'cypress'

const scriptsToRegister = {
  'test': 'node_modules/cypress/bin/cypress run-ct --env COMPARE_IMAGE_SNAPSHOTS=true',
  'test:open-ui': 'node_modules/cypress/bin/cypress open-ct --env COMPARE_IMAGE_SNAPSHOTS=true',
  'test:clearSnapshots': 'rm -rf cypress/snapshots/*',
  'test:updateSnapshots': 'npm run test:clearSnapshots && npm run test ### https://github.com/jaredpalmer/cypress-image-snapshot/issues/74 ### -> # node_modules/cypress/bin/cypress run-ct --env updateSnapshots=true',
  'test:docker': 'docker-compose -f docker-compose-snapshots.yml run app npm run --rm test',
  'test:docker:updateSnapshots': 'docker-compose -f docker-compose-snapshots.yml run --rm app npm run test:updateSnapshots'

}

const registerScripts = () => {
  JFS.Head.nodePackage.json(async nodePackage => {
    JFS.Head.nodePackage.file.save({
        ...nodePackage,
        scripts: {
          ...nodePackage.scripts,
          ...scriptsToRegister
        }
      },
      () => console.log(`Registered test runner scripts from jfs-core`)
    )
  });
}

const run = () => JFS.discover(
  () => {
    const dirExists = new Directory({ path: resolve(JFS.Head.path, cypressDirName) }).exists()
    const settingsDir = new Directory({ path: resolve(JFS.Core.path, 'settings') })
    if (!dirExists) {
      settingsDir.directory(cypressDirName).copy(resolve(JFS.Head.path, cypressDirName),
        () => {
          console.log('cypress directory deployed')
        }
      )
    }

    settingsDir.files(
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
                    console.log('All cypress related config files deployed')
                  }
                }
              )
            }
          )
      }
    )

    registerScripts()
  }
)

export default new Script({
  path: __filename,
  name: 'setup-cypress',
  scope: ['all'],
  run
})
