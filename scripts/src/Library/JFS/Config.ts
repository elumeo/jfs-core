import File from 'Library/OS/Filesystem/File';
import { resolve } from 'path';

export namespace JFS {
  export namespace Config {
    export type Data = {
      [key: string]: any;
    }
  }
  export class Config {
    private path: string;
    public file: File;

    static location = (path: string) => resolve(
      path,
      'config.json.dist'
    )

    constructor(path: string) {
      this.path = path;
      this.file = new File({ path: this.path });
    }

    read = (
      configReady: (data: Config.Data) => void
    ) => this.file.read(
      data => configReady(
        JSON.parse(data as string)
      )
    );
  }
}

export default JFS.Config;
