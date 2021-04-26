import { resolve, sep } from 'path';
import * as JFS from 'Library/JFS';
import { cyanBright, magenta } from 'ansi-colors';
import Script from 'Library/JFS/Core/Script';
import * as Package from 'Library/NPM/Package';
import chokidar from 'chokidar';
import * as Text from 'Library/Text';
import fs from 'fs-extra';

const run = async () => {
  const { type } = await JFS.discover(process.cwd());

  if (type === 'core') {
    console.log('sync-development can not be run from the core');
    process.exit(1);
  }
  else if (type === 'app') {
    // JFS.Head.discover(
    //   () => {
    //     console.log({
    //       Core: JFS.Core,
    //       Components: (JFS.Head as App).components,
    //       App: JFS.Head
    //     });
    //   }
    // );
  }
  else if (type === 'component') {
    // console.log({
    //   Core: JFS.Core,
    //   Component: JFS.Head,
    // });
  }

  const { jfs } = await Package.json(resolve(process.cwd(), 'package.json'));

  if (jfs) {
    console.log('Synchronization');
    Object.keys(jfs.sync).map(name => {
      console.log(`- ${name} => ${jfs.sync[name]}`);
      const from = resolve(process.cwd(), jfs.sync[name]).replace('/', sep);
      const to = resolve(process.cwd(), 'node_modules', name).replace('/', sep);
      const ignore = [
        'node_modules',
        '.git',
        '.idea'
      ];

      const format = (event: string, project: string, path: string) => {
        return `${cyanBright(event)}: ${magenta(project)}${path}`
      }

      const watcher = chokidar.watch(from);
      const events = ['add', 'change', 'unlink', 'addDir', 'unlinkDir'];

      events.forEach(event => watcher.on(event, async (event, source) => {
        const target = resolve(
          to,
          Text.Prefix.remove(source.substring(from.length), sep)
        );

        const ignored = ignore.includes(
          target.substring(to.length +1).split(sep)[0]
        );

        if (ignored) {
          return;
        }
        else if (event === 'add') {
          await fs.writeFile(target, '');
        }
        else if (event === 'change') {
          await fs.writeFile(target, await fs.readFile(source));
        }
        else if (event === 'unlink') {
          await fs.unlink(target);
        }
        else if (event === 'addDir') {
          await fs.mkdir(target);
        }
        else if (event === 'unlinkDir') {
          await fs.rmdir(target);
        }

        const path = target.substring(to.length);
        const message = format(event, name, path);
        console.log(message);
      }));
    });
  }
  else {
    console.log('No jfs field found in package.json.');
  }
}

export default new Script({
  path: __filename,
  name: 'sync-development',
  scope: ['app', 'jfc'],
  run
});
