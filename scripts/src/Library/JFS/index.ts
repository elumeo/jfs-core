import App from './App';
import Core from './Core';
import Component from './Component';
import NodePackage from 'Library/Node/Package';
import Text from 'Library/Text';
import Project from './Project';
import { resolve } from 'path';

class JFS {
  public static Head: Project;
  public static Core: Core = null;
  public static projects: Project[] = [];

  public static project = (
    nodePackage: NodePackage,
    onComplete: (project: Project) => void
  ) => {
    const path = nodePackage.file.parent;
    nodePackage.json(
      ({ name }) => {
        if (name === '@elumeo/jfs-core') {
          onComplete(new Core({ path }));
        }
        else if (Text.beginsWith(name, 'jfc')) {
          onComplete(new Component({ path }));
        }
        else if (Text.beginsWith(name, 'jfs')) {
          onComplete(new App({ path }));
        }
      }
    );
  }

  private static head = async () => new Promise<Project>((resolve, reject) => {
    const path = process.cwd();
    const nodePackage = new NodePackage(
      NodePackage.location(process.cwd())
    );

    nodePackage.json(({ name }) => {
      if (name === '@elumeo/jfs-core') {
        resolve(new Core({ path }));
      }
      else if (Text.beginsWith(name, 'jfc')) {
        resolve(new Component({ path }));
      }
      else if (Text.beginsWith(name, 'jfs')) {
        resolve(new App({ path }));
      }
      else {
        reject('No valid head found for jfs.');
      }
    });
  });

  public static discover = (
    onComplete: () => void
  ) => {
    JFS.head().then(head => {
      JFS.Head = head;
      if (head instanceof Component || head instanceof App) {
        JFS.Core = new Core({
          path: resolve(head.path, 'node_modules', '@elumeo', 'jfs-core')
        });

        head.nodePackage.json(({ dependencies }) => {
          JFS.projects = [
            JFS.Head,
            JFS.Core,
            ...(
              Object.keys(dependencies)
                .filter(key => Text.beginsWith(key, 'jfc'))
                .map(key => new Component({
                  path: resolve(head.path, 'node_modules', key)
                }))
            )
          ];
          onComplete();
        });
      }
      else if (head instanceof Core) {
        JFS.Core = head;
        onComplete();
      }
    });
  }
}

export default JFS;
