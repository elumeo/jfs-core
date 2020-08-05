import { Stats } from 'fs';
import Directory from 'Library/OS/Filesystem/Directory';
import { greenBright, redBright, yellowBright, blueBright } from 'ansi-colors'
import File from '../File';
import { resolve } from 'path';

namespace Synchronization {
  export type Props = {
    from: Directory;
    to: Directory;
  };

  export type Equalize = (onComplete: () => void) => void;

  export type Payload = {
    path: string;
    stats: Stats;
  }
}

const eventIndicator = (
  eventName: 'add' | 'change' | 'unlink' | 'addDir' | 'unlinkDir'
) => {
  if (eventName === 'add') {
    return greenBright('+File');
  }
  else if (eventName === 'change') {
    return greenBright('+File (UPDATE)');
  }
  else if (eventName === 'unlink') {
    return redBright('-File');
  }
  else if (eventName === 'addDir') {
    return greenBright('+Directory');
  }
  else if (eventName === 'unlinkDir') {
    return redBright('-Directory');
  }
}

const print = (
  from: Directory,
  eventName: 'add' | 'addDir' | 'change' | 'unlink' | 'unlinkDir',
  path: string
) => {
  console.log(
    yellowBright(new Directory({ path: from.parent }).name),
    blueBright(from.name + path.substring(from.path.length)),
    eventIndicator(eventName)
  );
}

class Synchronization {
  private from: Directory;
  private to: Directory;

  constructor({ from, to }: Synchronization.Props) {
    this.from = from;
    this.to = to;
  }

  equalize: Synchronization.Equalize = onComplete => {
    this.from.copy(this.to.path, onComplete);
  }

  watch = () => {
    this.from.watch();
    this.from.watcher.once(
      'ready',
      () => this.from.watcher.on(
        'all',
        (eventName, path) => {
          setTimeout(
            () => {
              if (['unlinkDir', 'addDir'].includes(eventName)) {
                const directory = new Directory({
                  path: resolve(
                    this.to.path,
                    path.substring(this.from.path.length +1)
                  )
                });
                if (eventName === 'unlinkDir') {
                  directory.remove(() => print(this.from, eventName, path));
                }
                else if (eventName === 'addDir') {
                  directory.create(() => print(this.from, eventName, path));
                }
              }
              else if (['add', 'unlink', 'change'].includes(eventName)) {
                const file = new File({
                  path: resolve(
                    this.to.path,
                    path.substring(this.from.path.length +1)
                  )
                });

                if (eventName === 'add') {
                  file.create(() => print(this.from, eventName, path));
                }
                else if (eventName === 'unlink') {
                  file.remove(() => print(this.from, eventName, path));
                }
                else if (eventName === 'change') {
                  new File({ path }).copy(
                    file.path,
                    () => print(this.from, eventName, path)
                  );
                }
              }
            },
            200
          );
        }
      )
    );
  };

  start = () => {
    if (this.from.exists() && this.to.exists()) {
      this.equalize(() => this.watch());
    }
  }
}

export default Synchronization;
