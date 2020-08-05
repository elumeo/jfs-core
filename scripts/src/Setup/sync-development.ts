import { resolve, sep } from 'path';
import JFS from 'Library/JFS';
import App from 'Library/JFS/App';
import Component from 'Library/JFS/Component';
import Directory from 'Library/OS/Filesystem/Directory';
import Synchronization from 'Library/OS/Filesystem/Synchronization';

const resources = ['build', `scripts${sep}build`, 'settings'];

JFS.discover(() => {
  if (JFS.Head instanceof App || JFS.Head instanceof Component) {
    const node_modules = resolve(JFS.Head.path, 'node_modules');
    JFS.Head.nodePackage.json(({ jfs: { sync } }) => {
      const projects = (
        Object.keys(sync).map(name => ({ name, path: sync[name] }))
      );
      projects.forEach(({ name, path }) => resources.forEach(
        resource => new Synchronization({
          from: new Directory({
            path: resolve(JFS.Head.path, path, resource)
          }),
          to: new Directory({
            path: resolve(node_modules, name, resource)
          })
        }).start()
      ));
    })
  }
});
