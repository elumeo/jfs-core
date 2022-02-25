import * as Type from 'Type';
import path from 'path';
import * as Package from 'Library/NPM/Package';
import _ from 'lodash';

const combine = (scripts: Type.Package.Script[]) => (
  scripts.reduce<Type.Package.JSON['scripts']>(
    (all, { name, command }) => ({
      ...all,
      [name]: command
    }),
    {
      "test": "echo('running tests is not yet supported')",
      //"test": "cypress run-ct --env COMPARE_IMAGE_SNAPSHOTS=true",
      //"test-interactive": "cypress open-ct --env COMPARE_IMAGE_SNAPSHOTS=true",
      //"test-updateSnapshots": "docker-compose -f docker-compose-test.yml run --rm app rm -rf cypress/snapshots/* && npm test ### https://github.com/jaredpalmer/cypress-image-snapshot/issues/74 ### -> # cypress run-ct --env updateSnapshots=true",
      // "test-docker": "docker-compose -f docker-compose-test.yml run --rm app npm test",
    }
  )
)

export const register = async (env: Type.Environment.Info, scripts: Type.Package.Script[]) => {
  const file = path.resolve(env.root, 'package.json');
  const json = await Package.json(file);
  const next = { scripts: combine(scripts) };
  await Package.save(file, _.merge(json, next));
}
