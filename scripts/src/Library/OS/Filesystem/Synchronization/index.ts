import { Stats } from 'fs';
import Emitter from 'events';
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
  public readonly emitter: Emitter;

  constructor({ from, to }: Synchronization.Props) {
    this.from = from;
    this.to = to;
    this.emitter = new Emitter;
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
        (eventName, path, stats) => this.equalize(
          () => this.emit(eventName, { path, stats })
        )
      )
    );
  };

  start = () => {
    if (this.from.exists() && this.to.exists()) {
      this.equalize(() => this.watch());
    }
  }

  private emit = (
    eventName: string,
    payload: Synchronization.Payload
  ) => this.emitter.emit(eventName, payload);

  on = (
    eventName: string,
    callback: (payload: Synchronization.Payload) => void
  ) => this.emitter.on(eventName, callback);
}

export default Synchronization;
