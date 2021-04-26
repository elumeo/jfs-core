import { green } from "ansi-colors";
import child_process from "child_process";
import { resolve } from 'path';

export let child: child_process.ChildProcess = null;
export let running: boolean;

export const run = async (path: string) => {
  const tsc = resolve(path, 'node_modules', 'typescript', 'bin', 'tsc');
  child = child_process.spawn('node', [tsc], {
    cwd: path,
    stdio: 'inherit'
  });
  
  running = true;
  child.on('exit', code => {
    running = false;
    if (!code) {
      console.log(green('No type errors found.'));
    }
    resolve();
  })
};

export const stop = () => running && child?.kill(`SIGKILL`);