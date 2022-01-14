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
      "test": "cypress run-ct --env COMPARE_IMAGE_SNAPSHOTS=true",
      "test-interactive": "cypress open-ct --env COMPARE_IMAGE_SNAPSHOTS=true",
      "test-updateSnapshots": "rm -rf cypress/snapshots/* && npm test ### https://github.com/jaredpalmer/cypress-image-snapshot/issues/74 ### -> # node_modules/cypress/bin/cypress run-ct --env updateSnapshots=true",
      "test-docker": "docker-compose -f settings/docker-compose-test.yml run --rm app npm test",
      "test-docker-updateSnapshots": "docker-compose -f settings/docker-compose-test.yml run --rm app npm run test-updateSnapshots"
    }
  )
)

export const register = async (env: Type.Environment.Info, scripts: Type.Package.Script[]) => {
  const file = path.resolve(env.root, 'package.json');
  const json = await Package.json(file);
  const next = { scripts: combine(scripts) };
  await Package.save(file, _.merge(json, next));
}
