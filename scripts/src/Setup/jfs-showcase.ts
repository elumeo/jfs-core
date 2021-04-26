import * as JFS from 'Library/JFS';
import fs from 'fs';
import { ChildProcess } from 'child_process';
import Script from 'Library/JFS/Core/Script';
import { resolve } from 'path';
import * as Package from 'Library/NPM/Package';

const install = (path: string) => {
  const options = {
    cwd: path,
    stdio: 'inherit'
  };
  const onSpawn = (child: ChildProcess) => process.on('exit', () => child.kill());
  return Package.run('install', options, onSpawn);
};

const start = (path: string) => Package.start(path);

const run = async () => {
  const { core } = await JFS.discover(process.cwd());

  const showcase = resolve(core, 'showcase');
  const installed = fs.existsSync(resolve(showcase, 'node_modules'));

  if (installed) {
    start(showcase);
  }
  else {
    await install(showcase);
    start(showcase);
  }
}

export default new Script({
  path: __filename,
  name: 'core-showcase',
  scope: ['all'],
  run
});
