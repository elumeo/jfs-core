import { resolve } from 'path';
import Directory from 'Library/OS/Filesystem/Directory';
import Settings from './Settings';
import Project from 'Library/JFS/Project';

class Core extends Project {
  public readonly settings: Settings;

  constructor({ path }: Core.Props) {
    super({ path });
    this.settings = new Settings(
      new Directory({ path: resolve(path, 'settings') })
    );
  }
}

namespace Core {
  export type Props = {
    path: string;
  }
}

export default Core;
