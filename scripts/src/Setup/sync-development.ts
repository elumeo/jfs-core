import { resolve, sep } from 'path';
import JFS from 'Library/JFS';
import App from 'Library/JFS/App';
import Component from 'Library/JFS/Component';
import Synchronization from 'Library/OS/Filesystem/Synchronization';
import Core from 'Library/JFS/Core';
import { cyanBright, magenta } from 'ansi-colors';

JFS.discover(() => {
  if (JFS.Head instanceof Core) {
    console.log('sync-development can not be run from the core');
    process.exit(1);
  }
  else if (JFS.Head instanceof App) {
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
  else if (JFS.Head instanceof Component) {
    // console.log({
    //   Core: JFS.Core,
    //   Component: JFS.Head,
    // });
  }

  JFS.Head.nodePackage.json(({ jfs }) => {
    if (jfs) {
      console.log('Synchronization');
      Object.keys(jfs.sync).map(name => {
        console.log(`- ${name} => ${jfs.sync[name]}`);
        const from = resolve(JFS.Head.path, jfs.sync[name]).replace('/', sep);
        const to = resolve(JFS.Head.path, 'node_modules', name).replace('/', sep);
        const synchronization = new Synchronization({
          from, to,
          ignore: [
            'node_modules',
            '.git',
            '.idea'
          ]
        });
        const format = (event: string, project: string, path: string) => {
          return `${cyanBright(event)}: ${magenta(project)}${path}`
        }
        synchronization.run(({ event, target }) => {
          const path = target.path.substring(to.length);
          const message = format(event, name, path);
          console.log(message);
        });
      });
    }
  });
});
