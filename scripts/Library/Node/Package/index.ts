import { resolve } from 'path';
import File from 'Library/OS/Filesystem/File';
import Dependencies from './Dependencies';
import NodeModule from '../Module';

class NodePackage {
  public readonly path: string;
  public readonly file: File;
  public readonly dependencies: Dependencies;

  static location = (path: string) => resolve(
    path,
    'package.json'
  );

  constructor(path: string) {
    this.path = path;
    this.file = new File({ path });
    this.dependencies = new Dependencies(this);
  }

  public json = (jsonReady: (data: any) => void) => this.file.read({
    dataReady: json => jsonReady(JSON.parse(json as string))
  })

  public nodeModule = (nodeModuleName: string) => new NodeModule({
    path: NodeModule.location(this.file.parent, nodeModuleName)
  });

}

export default NodePackage;
