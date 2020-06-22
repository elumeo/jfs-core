import File from "Library/OS/Filesystem/File";

class Api {
  public parseHash = (apiString: string) => (
      (apiString as string)
      .match(/export const JSC_API_VERSION: string = '(.*)';/g)[0]
  );

  public version = (versionReady: (apiHash: string) => void) => this.read(
      apiString => versionReady(
          this.parseHash(apiString as string)
      )
  );

  public readonly path: string;
  private file: File;

  constructor(path) {
    this.path = path;
    this.file = new File({ path: this.path });
  }

  public read(apiStringReady: (apiString: string) => void) {
    this.file.read(apiStringReady);
  }

  public update = (
    apiString: string,
    updateComplete: () => void
  ) => this.file.write(apiString, updateComplete);

}

export default Api;
