import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import { resolve } from 'path';
import Script from 'Library/JFS/Core/Script';

const filesNamesToCopy = [
  'cypress.json',
  'docker-compose-test.yml',
  'Dockerfile',
  'Jenkinsfile',
]

const cypressDirName = 'cypress'

const scriptsToRegister = {
  'test': 'npm run test:integration && npm run test:component',
  'test:integration': 'node_modules/cypress/bin/cypress run',
  'test:integration:interactive': 'node_modules/cypress/bin/cypress open',
  'test:component': 'node_modules/cypress/bin/cypress run-ct --env COMPARE_IMAGE_SNAPSHOTS=true',
  'test:component:interactive': 'node_modules/cypress/bin/cypress open-ct --env COMPARE_IMAGE_SNAPSHOTS=true',
  'test:component:clearSnapshots': 'rm -rf cypress/snapshots/*',
  'test:component:updateSnapshots': 'npm run test:component:clearSnapshots && npm run test:component ### https://github.com/jaredpalmer/cypress-image-snapshot/issues/74 ### -> # node_modules/cypress/bin/cypress run-ct --env updateSnapshots=true',
  'test:docker': 'docker-compose -f docker-compose-test.yml run --rm app npm run test',
  'test:docker:updateSnapshots': 'docker-compose -f docker-compose-test.yml run --rm app npm run test:component:updateSnapshots'
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
