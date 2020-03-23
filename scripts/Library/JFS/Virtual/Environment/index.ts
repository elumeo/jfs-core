import Environment from './Type';
import Directory from 'Library/OS/Filesystem/Directory';
import File from 'Library/OS/Filesystem/File';
import Virtual from '..';
import Mirror from '../Mirror';
import { resolve } from 'path';

class Environment {
  public readonly root: string;
  public readonly source: Directory;
  public readonly directory: Directory;
  public readonly mirrors: Mirror[] = [];

  constructor({ root, source }: Environment.Props) {
    this.root = root;
    this.directory = new Directory({ path: root });
    this.source = new Directory({ path: source });
  }

  createVirtualPath = (...segments: string[]) => resolve(
    this.root,
    ...segments
  );

  createSourcePath = (...segments: string[]) => resolve(
    this.source.path,
    ...segments
  )

  addMirror = ({
    virtualPath,
    sourcePath
  }: Environment.IDetect) => {
    this.mirrors.push(
      new Virtual.Mirror({
        virtualFile: new File({ path: virtualPath }),
        sourceFile: new File({ path: sourcePath })
      })
    );
  }

}

export default Environment;
