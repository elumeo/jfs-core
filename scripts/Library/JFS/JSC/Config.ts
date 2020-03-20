import File from 'Library/OS/Filesystem/File';
import { JFS } from '../Config';

namespace JSC {
  export class Config {
    private file: File;
    constructor(path: string) {
      this.file = new File({ path });
    }

    read = (
      configReady: (config: Config.Data) => void
    ) => this.file.read({
      dataReady: (rawConfig: string) => configReady(
        JSON.parse(rawConfig)
      )
    });

    endpoint = (
      jfsConfig: JFS.Config.Data,
      versionNumber = 2
    ): string => (
      `${jfsConfig.JscClient.Host}/client/generated/v${versionNumber}`
    );
  }

  export namespace Config {
    export type Data = {
      [controllerName: string]: string[];
    };
  }
}

export default JSC.Config;
