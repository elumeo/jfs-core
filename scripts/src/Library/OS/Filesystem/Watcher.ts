import chokidar, { FSWatcher, WatchOptions } from 'chokidar';
import { EventEmitter } from 'events';
import Event from './Event';
import File from './File';
import Directory from './Directory';

class Watcher {
  public stream: FSWatcher;
  public emitter: EventEmitter = new EventEmitter;
  public readonly path: string;

  constructor({ path }) {
    this.path = path;
  }

  public on = (event: Event.Name, handle: (payload: Event.Payload) => void) => {
    this.emitter.on(event, handle);
  }

  public watch = (options?: WatchOptions) => {
    this.stream = chokidar.watch(this.path, options);
    this.stream.once(
      'ready',
      () => this.stream.on(
        'all',
        (event, path) => {
          if (event === 'add') {
            this.emitter.emit('FILE_CREATED', new File({ path }));
          }
          else if (event === 'change') {
            this.emitter.emit('FILE_CHANGED', new File({ path }));
          }
          else if (event === 'unlink') {
            this.emitter.emit('FILE_REMOVED', new File({ path }));
          }
          else if (event === 'addDir') {
            this.emitter.emit('DIRECTORY_CREATED', new Directory({ path }));
          }
          else if (event === 'unlinkDir') {
            this.emitter.emit('DIRECTORY_REMOVED', new Directory({ path }));
          }
        }
      )
    );
  }

  public unwatch = () => this.stream.close();
}

export default Watcher;
