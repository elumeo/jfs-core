import { Stats } from 'fs';
import Directory from 'Library/OS/Filesystem/Directory';

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
                return '+File';
              }
              else if (eventName === 'change') {
                return '+File (UPDATE)';
              }
              else if (eventName === 'unlink') {
                return '-File';
              }
              else if (eventName === 'addDir') {
                return '+Directory';
              }
              else if (eventName === 'unlinkDir') {
                return '-Directory';
              }
            }

            console.log(
              this.from.name,
              eventIndicator(eventName),
              path.substring(this.from.path.length)
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
