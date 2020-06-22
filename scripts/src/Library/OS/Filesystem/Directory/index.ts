import { readdir, mkdir } from 'fs';
import FsNode from '../FsNode';
import File from '../File';
import {resolve, sep} from "path";
import rmdir from 'rimraf';
import ncp from 'ncp';
import chokidar, { FSWatcher, WatchOptions } from 'chokidar';
import Explorer from '../Explorer';

namespace Directory {
  export type Children = (
    onComplete: (children: {
      directories: Directory[]
      files: File[];
    }) => void
  ) => void;
}

class Directory extends FsNode {
  public watcher: FSWatcher;

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

  public file = ({
    fileName,
    fileReady
  }) => this.files(
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

  public create = (directoryCreated: () => void) => (
    (new Explorer(this.path)).explore(
      (path) => path,
      pathStack => {
        const payload = (
          this.path
          .substring(pathStack[0].length, this.path.length)
          .split(sep)
          .slice(1)
        )
        const createChild = (payload: string[], onComplete: () => void) => {
          if (!payload.length) {
            onComplete();
          }
          else {
            mkdir(
              resolve(
                pathStack[0],
                payload[0]
              ),
              () => createChild(
                payload.slice(1),
                onComplete
              )
            )
          }
        }

        createChild(payload, directoryCreated);
      }
    )
  );

  public watch = (options?: WatchOptions) => {
    this.watcher = chokidar.watch(this.path, options);
  }

  public unwatch = () => this.watcher.close();
}

export default Directory;
