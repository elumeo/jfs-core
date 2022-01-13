import { resolve } from 'path';
import fs from 'fs-extra';
import child_process from 'child_process';
import * as Type from 'Type';

export const node_module = (path: string, name: string) => resolve(
  path,
  'node_modules',
  name
);

export const json = async (path: string) => (
  (await fs.readJSON(path)) as Type.Package.JSON
);

export const save = async (path: string, json: Type.Package.JSON) => {
  const data = JSON.stringify(json, null, 2);
  await fs.writeFile(path, data);
}

export const run = (
  script: string,
  options: child_process.SpawnOptions = {},
  onSpawn?: (child: child_process.ChildProcess) => void
) => {
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  const argv = ['run', script];
  const child = child_process.spawn(
    command,
    argv,
    options
  );
  if (onSpawn) {
    onSpawn(child);
  }
  return new Promise<number>(resolve => child.on('exit', resolve));
}

export const start = (path: string) => run('start', {
  cwd: path,
  stdio: 'inherit'
});
