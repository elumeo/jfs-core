import { resolve } from 'path';
import File from 'Library/OS/Filesystem/File';
import NodeModule from '../Module';

type NodePackageData = {
  name: string;
  version: string;
  description: string;
  author: string;
  devDependencies: string;
  scripts: {
    [name: string]: string;
  };
  dependencies: {
    [name: string]: string;
  };
  jfs: {
    sync: {
      [project: string]: string;
    }
  }
};

class NodePackage {
  public readonly path: string;
  public readonly file: File;

  static location = (path: string) => resolve(
    path,
    'package.json'
  );

  constructor(path: string) {
    this.path = path;
    this.file = new File({ path });
  }

  public nodeModule = (nodeModuleName: string) => new NodeModule({
    path: NodeModule.location(this.file.parent, nodeModuleName)
  });

  public json = (
    onComplete: (json: NodePackageData) => void
  ) => this.file.json<NodePackageData>(onComplete);

}

export default NodePackage;
