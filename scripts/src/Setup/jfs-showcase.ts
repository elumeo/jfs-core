import Process from 'Library/OS/Process';
import JFS from 'Library/JFS';
import fs from 'fs';
import Directory from 'Library/OS/Filesystem/Directory';
import { ChildProcess } from 'child_process';
import Script from 'Library/JFS/Core/Script';

const install = (path: string) => new Promise((resolve, reject) => {
  const installer = new Process({
    command: 'npm',
    parameters: ['i'],
    options: {
      cwd: path,
      stdio: 'inherit'
    }
  });

  installer.run(instance => {
    instance.on('exit', code => {
      if (code === 0) {
        resolve();
      }
      else {
        reject();
      }
    });

    process.on('exit', () => {
      instance.kill();
    });
  });
});

const start = (path: string, onSpawn?: (child: ChildProcess) => void) => {
  const server = new Process({
    command: 'npm',
    parameters: ['start'],
    options: {
      cwd: path,
      stdio: 'inherit'
    }
  });
  server.run(onSpawn);
}

const run = () => JFS.discover(async () => {
  const showcase = new Directory({
    path: JFS.Core.directory.resolve('showcase')
  });
  const installed = fs.existsSync(showcase.resolve('node_modules'));

  if (installed) {
    start(showcase.path);
  }
  else {
    await install(showcase.path);
    start(showcase.path);
  }
});

export default new Script({
  path: __filename,
  name: 'core-showcase',
  scope: ['all'],
  run
});
