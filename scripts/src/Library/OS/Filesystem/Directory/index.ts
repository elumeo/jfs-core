import { readdir } from 'fs';
import FsNode from 'Library/OS/Filesystem/FsNode';
import Event from 'Library/OS/Filesystem/Event';
import File from 'Library/OS/Filesystem/File';
import {resolve, sep} from "path";

import { create, remove, copy } from './Operation';
import { WatchOptions } from 'chokidar';
import Watcher from '../Watcher';
import Text from 'Library/Text';

class Directory extends FsNode {
  private watcher: Watcher;

  constructor({ path }) {
    super({ path });
    this.watcher = new Watcher({ path });
  }

  children = (
    onComplete: (children: {
      directories: Directory[]
      files: File[];
    }) => void
  ) => {
    readdir(
      this.path,
      (error: NodeJS.ErrnoException, names: string[]) => {
        if (error) {
          throw error;
        }
        else {
          const files = [];
          const directories = [];
          names.forEach(name => {
            const fsNode = new FsNode({ path: resolve(this.path, name) });
            fsNode.stats(stats => {
              if (stats.isDirectory()) {
                directories.push(new Directory({ path: fsNode.path }));
              }
              else {
                files.push(new File({ path: fsNode.path }));
              }
              if (names.length === files.length + directories.length) {
                onComplete({ directories, files });
              }
            });
          });
        }
      }
    );
  };

  child = (
    name: string,
    onReady: (fsNode: File | Directory) => void
  ) => this.children(
    ({ files, directories }) => onReady(
      files.find(file => file.name === name) ||
      directories.find(directory => directory.name === name)
    )
  );

  files = (onReady: (files: File[]) => void) => this.children(
    ({ files }) => onReady(files)
  );

  directories = (onReady: (directories: Directory[]) => void) => this.children(
    ({ directories }) => onReady(directories)
  );

  resolve = (...segments: string[]) => resolve(this.path, ...segments);
  file = (name: string) => new File({ path: this.resolve(name) });
  directory = (name: string) => new Directory({ path: this.resolve(name) });

  create = (onComplete: () => void) => create(
    this.path,
    this.predecessors,
    onComplete
  );


  remove = (onComplete: () => void) => remove(
    this.path,
    onComplete
  );

  copy = (target: string, onComplete: () => void) => copy(
    this.path,
    target,
    onComplete
  );

  on = (
    event: Event.Name,
    handle: (payload: Event.Payload) => void
  ) => this.watcher.on(event, handle);

  watch = (options?: WatchOptions) => this.watcher.watch(options);
  unwatch = () => this.watcher.unwatch();

  virtual = (path: string) => path.substring(this.path.length);
  mount = (virtual: string) => this.resolve(
    this.path,
    Text.removePrefix(virtual, sep)
  )
}

export default Directory;
