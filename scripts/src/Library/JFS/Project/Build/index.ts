import { extname, resolve, sep } from 'path';
import * as Transpiler from './Transpiler';
import * as Format from './Format';
import * as Text from 'Library/Text';
import { cyan } from 'ansi-colors';
import readdir from 'recursive-readdir';
import fs from 'fs-extra';
import chokidar from 'chokidar';

export const run = (path: string, _watch?: boolean) => {
  console.log(`Running build in ${_watch ? 'watch' : 'single'} mode`);
  if (_watch) {
    watch(path);
  }
  else {
    single(path);
  }
}

export const equalize = async (path: string) => {
  const src = resolve(path, 'src');
  const build = resolve(path, 'build');
  const paths = await readdir(src, ['*.ts', '*.tsx']);
  const copied = [];
  if (paths.length) {
    paths.map(async path => {
      const virtual = path.substring(src.length);
      await fs.copyFile(
        path,
        resolve(build, Text.Prefix.remove(virtual, sep))
      );
      copied.push(path);
      const progress = `(${copied.length}/${paths.length})`;
      console.log(`${cyan('Equalized')}: ${virtual} ${progress}`);
      if (copied.length === paths.length) {
        resolve();
      }
    })
  }
};

export const synchronize = async (
  path: string,
  event: 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir',
  source: string
) => {
  const src = resolve(path, 'src');
  const build = resolve(path, 'build');
  const virtual = path.substring(src.length);

  if (event === 'unlink') {
    await fs.unlink(source);
  }
  else if (event === 'add' || event === 'change') {
    const resource = resolve(build, Text.Prefix.remove(virtual, sep));
    fs.copyFile(source, resource);
  }
  console.log(`${cyan(event)}: ${virtual}`);
}

export const compile = (path: string) => new Promise<void>(async resolve => {
  Transpiler.stop();
  await Transpiler.run(path);
  await Format.apply(path);
  resolve();
});

export const single = async (path: string) => new Promise<void>(async resolve => {
  await equalize(path);
  console.log('Compiling ...');
  await compile(path);
  resolve();
});

export const watch = async (path: string) => {
  const watcher = chokidar.watch(resolve(path, 'src'));
  
  await single(path);

  watcher.once('ready', () => watcher.on(
    'all',
    async (event, source) => {
        if (['.ts', '.tsx'].includes(extname(source))) {
          console.clear();
          console.log('Recompiling ...');
          await compile(path);
        }
        else {
          console.clear();
          console.log('Synchronizing ...');
          await synchronize(path, event, source);
          await compile(path);
        }
    }
  ));
}
