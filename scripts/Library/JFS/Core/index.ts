import { resolve } from 'path';
import Directory from 'Library/OS/Filesystem/Directory';
import Settings from './Settings';
import JSC from '../JSC';
import Config from '../Config';

class Core {
  public readonly path: string;
  public readonly directory: Directory;
  public readonly settings: Settings;
  public readonly JSC: JSC;
  public readonly config: Config;

  constructor({ path }: Core.Props) {
    this.path = path;
    this.directory = new Directory({ path });
    this.settings = new Settings(
      new Directory({ path: resolve(path, 'settings') })
    );
    this.JSC = new JSC(JSC.location(path));
    this.config = new Config(Config.location(path));
  }
}

namespace Core {
  export type Props = {
    path: string;
  }
}

export default Core;
