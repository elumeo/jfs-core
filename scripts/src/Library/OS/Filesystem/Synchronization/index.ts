import { Stats } from 'fs';
import Directory from 'Library/OS/Filesystem/Directory';
import { greenBright, redBright, yellowBright, blueBright } from 'ansi-colors'

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
        (eventName, path) => this.equalize(
          () => {
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

            console.log(
              yellowBright(new Directory({ path: this.from.parent }).name),
              blueBright(this.from.name + path.substring(this.from.path.length)),
              eventIndicator(eventName),
            );
          }
        )
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
