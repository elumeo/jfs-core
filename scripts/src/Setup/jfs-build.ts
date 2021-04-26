import * as JFS from 'Library/JFS';
import * as Project from 'Library/JFS/Project';
import Script from 'Library/JFS/Core/Script';

const run = async () => {
  const { type } = await JFS.discover(process.cwd());

  if (type === 'app') {
    console.log('jfs-build can not be run from an app (please use webpack)');
  }
  else {
    Project.Build.run(process.cwd(), process.argv.slice(2)[0] === '--watch');
  }
}

export default new Script({
  path: __filename,
  name: 'build',
  scope: ['core', 'jfc'],
  run
});
