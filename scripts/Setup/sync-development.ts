import JFS from 'Library/JFS';
import Location from 'Library/JFS/Environment/Location';
import chokidar from 'chokidar';
import { resolve } from 'path';

JFS.discover(() => {
  if (JFS.Environment.Location.type === Location.Type.REMOTE) {
    JFS.Environment.Head.synchronize(
      'src',
      'settings',
      'scripts'
    );
    if (JFS.App) {
      JFS.App.JFC.forEach(
        jfc => (
          chokidar
            .watch(resolve(jfc.path, 'src'))
            .on('all', () => jfc.virtualize(() => {}))
        )
      )
    }
  }
});
