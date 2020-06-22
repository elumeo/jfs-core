import App from './App';
import Core from './Core';
import Component from './Component';
import Explorer from 'Library/OS/Filesystem/Explorer'
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

  public static discover = (
    onComplete: () => void
  ) => {
    const explorer = new Explorer(
      resolve(
        __dirname, '..', '..', '..', '..'
      )
    );
    explorer.explore(
      NodePackage.location,
      (paths: string[]) => (
        paths
          .map(path => new NodePackage(NodePackage.location(path)))
          .forEach((nodePackage) => {
            JFS.project(nodePackage, project => {
              JFS.projects.push(project);
              if (project instanceof Core) {
                JFS.Core = project;
              }
              if (JFS.projects.length === paths.length) {
                JFS.Head = JFS.projects[JFS.projects.length -1];
                onComplete();
              }
            })
          })
      )
    );
  }
}

export default JFS;
