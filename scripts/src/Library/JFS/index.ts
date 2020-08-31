import App from './App';
import Core from './Core';
import Component from './Component';
import File from 'Library/OS/Filesystem/File'
import NodePackage from 'Library/Node/Package';
import Text from 'Library/Text';
import Project from './Project';
import { resolve } from 'path';
import Directory from 'Library/OS/Filesystem/Directory';

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
        else {
          throw `Invalid name format in  ${nodePackage.file.path}`;
        }
      }
    );
  }

  public static discover = (
    onComplete: () => void
  ) => {
    const directory = new Directory({ path: __dirname });

    const projects = directory
      .trace()
      .filter(
        path => (
          !Text.endsWith(path, 'scripts') &&
          new File({ path: resolve(path, 'package.json') }).exists()
        )
      );

    const nodePackages = projects.map(
      path => new NodePackage(NodePackage.location(path))
    );

    JFS.project(nodePackages[0], project => {
      if (project instanceof Core) {
        JFS.Core = project;
      }
      JFS.Head = project;
      JFS.projects.push(project);
      if (JFS.projects.length === projects.length) {
        onComplete();
      }
    });

    if (nodePackages.length > 1) {
      nodePackages
        .slice(1)
        .forEach(nodePackage => {
          JFS.project(nodePackage, project => {
            JFS.projects.push(project);
            if (JFS.projects.length === projects.length) {
              onComplete();
            }
          })
        });
    }
  }
}

export default JFS;
