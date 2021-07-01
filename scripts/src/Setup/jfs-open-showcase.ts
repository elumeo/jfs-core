import * as JFS from 'Library/JFS';
import fs from 'fs';
import { ChildProcess } from 'child_process';
import { resolve } from 'path';
import * as Package from 'Library/NPM/Package';
import * as Type from 'Type';

export const name = 'jfs-open-showcase';
export const scope: Type.Script.Scope[] = ['all'];

export const run = async (env: Type.Environment.Info) => {

  const showcase = resolve(env.core, 'showcase');
  const node_modules = resolve(showcase, 'node_modules');
  const installed = fs.existsSync(node_modules);

  if (!installed) {
    await Package.run(
      'install',
      { cwd: showcase, stdio: 'inherit' },
      (child: ChildProcess) => process.on('exit', () => child.kill())
    );
  }

  await Package.start(showcase);
}