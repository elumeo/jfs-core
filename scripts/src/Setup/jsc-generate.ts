import * as JFS from 'Library/JFS';
import Script from 'Library/JFS/Core/Script';
import * as Project from 'Library/JFS/Project';

const run = async () => {
  const { type } = await JFS.discover(process.cwd());
  Project.API.Generator.run(
    process.cwd(),
    { core: type === 'core' }
  );
}

export default new Script({
  path: __filename,
  name: 'jsc-generate',
  scope: ['all'],
  run
});
