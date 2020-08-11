import { readdir, mkdir, existsSync, mkdirSync } from 'fs';
import FsNode from './FsNode';
import File from './File';
import {resolve, sep} from "path";
import rmdir from 'rimraf';
import ncp from 'ncp';
import chokidar, { FSWatcher, WatchOptions } from 'chokidar';

namespace Directory {
  export type Children = (
    onComplete: (children: {
      directories: Directory[]
      files: File[];
    }) => void
  ) => void;

  export namespace Event {
    export type Name = (
      'FILE_CREATED' |
      'FILE_CHANGED' |
      'FILE_REMOVED' |
      'DIRECTORY_CREATED' |
      'DIRECTORY_REMOVED'
    );
    export type Payload = File | Directory;
  }

  export type Event = {
    name: Event.Name;
    payload: Event.Payload
  }
}

class Directory extends FsNode {
  public watcher: FSWatcher;
  public static readonly events: Directory.Event.Name[] = [
    'FILE_CREATED',
    'FILE_CHANGED',
    'FILE_REMOVED',
    'DIRECTORY_CREATED',
    'DIRECTORY_REMOVED'
  ];

  public children: Directory.Children = onComplete => {
    readdir(
      this.path,
      (error: NodeJS.ErrnoException, childrenNames: string[]) => {
        if (error) {
          throw error;
        }
        else {
          const files = [];
          const directories = [];
          childrenNames.forEach(
            (childName) => {
              const fsNode = new FsNode({
                path: resolve(this.path, childName)
              });
              fsNode.stats(stats => {
                if (stats.isDirectory()) {
                  directories.push(new Directory({ path: fsNode.path }));
                }
                else {
                  files.push(new File({ path: fsNode.path }));
                }
                if (childrenNames.length === files.length + directories.length) {
                  onComplete({
                    directories,
                    files
                  });
                }
              });
            }
          );
        }
      }
    );
  };

  public child = ({
    childName,
    childReady
  }) => this.children(
    ({ files, directories }) => childReady(
      files.find(file => file.name === childName) ||
      directories.find(directory => directory.name === childName)
    )
  );

  public files = (filesReady: (files: File[]) => void) => this.children(
    ({ files }) => filesReady(files)
  );

  public file = (
    fileName: string,
    fileReady: (file: File) => void
  ) => this.files(
    files => fileReady(
      files.find(file => file.name === fileName)
    )
  );

  public directories = (directoriesReady: (directories: Directory[]) => void) => this.children(
    ({ directories }) => directoriesReady(directories)
  );

  public directory = (
    directoryName: string,
    directoryReady: (directory: Directory) => void
  ) => this.directories(
    directories => directoryReady(
      directories.find(directory => directory.name === directoryName)
    )
  );

  public remove = (directoryRemoved: () => void) => rmdir(this.path, directoryRemoved);

  public copy = (target: string, onComplete: () => void) => ncp(
    this.path,
    target,
    (error) => {
      if (error) {
        throw error;
      }
      else {
        onComplete();
      }
    }
  );

  public create = (directoryCreated: () => void) => {
    this.predecessors.reduce(
      (parent, segment) => {
        if (parent) {
          const path = (
            parent.length > 1
              ? `${parent}${sep}${segment}`
              : `${parent}${segment}`
          );
          if (!existsSync(path)) {
            mkdirSync(path);
          }
          return path;
        }
        else {
          return `${sep}${segment}`;
        }
      },
      null
    );
    mkdir(
      this.path,
      directoryCreated
    );
  };

  public on = (event: Directory.Event.Name, handle: (payload: Directory.Event.Payload) => void) => {
    this.emitter.on(event, handle);
  }

  public watch = (options?: WatchOptions) => {
    this.watcher = chokidar.watch(this.path, options);
    this.watcher.once(
      'ready',
      () => this.watcher.on(
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
            this.emitter.emit('DIRECTORY_CREATED', new Directory({ path }))
          }
          else if (event === 'unlinkDir') {
            this.emitter.emit('DIRECTORY_REMOVED', new Directory({ path }));
          }
        }
      )
    );
  }

  public unwatch = () => this.watcher.close();

  public trace = (origin: Directory = this): string[] => {
    if (origin.path.length > 1) {
      return [
        ...this.trace(new Directory({ path: origin.parent })),
        origin.path
      ];
    }
    else {
      return [sep];
    }
  }
}

export default Directory;
