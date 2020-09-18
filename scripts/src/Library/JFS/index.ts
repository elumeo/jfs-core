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
      }
    );
  }

  public static discover = (
    onComplete: () => void
  ) => JFS.project(
    new NodePackage(NodePackage.location(process.cwd())),
    project => {
      JFS.Head = project;
      if (project instanceof Core) {
        JFS.Core = project;
      }
      else {
        JFS.project(
          new NodePackage(
            NodePackage.location(
              JFS.Head.directory.resolve(
                'node_modules',
                '@elumeo',
                'jfs-core'
              )
            )
          ),
          project => {
            JFS.Core = project as Core;
            onComplete();
          }
        )
      }
    }
  )
}

export default JFS;
