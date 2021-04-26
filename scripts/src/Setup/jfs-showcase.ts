import * as JFS from 'Library/JFS';
import fs from 'fs';
import { ChildProcess } from 'child_process';
import Script from 'Library/JFS/Core/Script';
import { resolve } from 'path';
import * as Package from 'Library/NPM/Package';

const run = async () => {
  const { core } = await JFS.discover(process.cwd());

  const showcase = resolve(core, 'showcase');
  const node_modules = resolve(showcase, 'node_modules');
  const installed = fs.existsSync(node_modules);

  if (!installed) {
    await Package.run(
      'install',
      { cwd: showcase, stdio: 'inherit' },
      (child: ChildProcess) => process.on('exit', () => child.kill())
    );
  }

  Package.start(showcase);
}

export default new Script({
  path: __filename,
  name: 'core-showcase',
  scope: ['all'],
  run
});
