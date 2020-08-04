import { readFile, writeFile, appendFile, unlink, existsSync } from 'fs';
import FsNode from './FsNode';
import { csv2json } from 'json-2-csv';

namespace File {
  export namespace Options {
    export type Read = {
      encoding?: string;
      onComplete: (data: string | Buffer) => void;
    };
  }
  export type Read = ((x: (Options.Read | ((data: string) => void))) => void);
  export type Write = (data: string | Buffer, onComplete: () => void) => void;
  export type Create = (onComplete: () => void) => void;
  export type Remove = (onComplete: () => void) => void;
  export type Copy = (path: string, onComplete: (file: File) => void) => void;
  export type Move = (path: string, onComplete: (file: File) => void) => void;
}

class File extends FsNode {

    public static readonly removeExtension = (path: string) => path.substring(
      0,
      path.lastIndexOf('.')
    );

    public exists = () => existsSync(this.path);

    public create: File.Create = (onComplete) => appendFile(
      this.path,
      '',
      (error: NodeJS.ErrnoException) => {
        if (error) {
          throw error;
        }
        else if (onComplete) {
          onComplete();
        }
      }
    );

    public read: File.Read = (parameters) => {
      const shortSyntax = typeof parameters === 'function';
      const encoding = (
        shortSyntax
          ? 'utf8'
          : (parameters as File.Options.Read).encoding
      );
      const onComplete = (
        shortSyntax
          ? parameters as (data: string) => void
          : (parameters as File.Options.Read).onComplete
      );
      readFile(
        this.path,
        encoding,
        (error: NodeJS.ErrnoException, data) => {
          if (error) {
            throw error;
          }
          else {
            onComplete(data);
          }
        }
      );
    };

    public write: File.Write = (data, onComplete) => {
      writeFile(
          this.path,
          data,
          (error: NodeJS.ErrnoException) => {
              if (error) {
                  throw error;
              }
              else if (onComplete) {
                  onComplete();
              }
          }
      )
    };

    public save = <T>(json: T, onComplete: () => void) => {
      this.write(
        JSON.stringify(json, null, 2),
        onComplete
      );
    }

    public remove: File.Remove = onComplete => this.exists() && unlink(
      this.path,
      (error: NodeJS.ErrnoException) => {
        if (error) {
          throw error;
        }
        else if (onComplete) {
          onComplete();
        }
      }
    );

    public copy: File.Copy = (path, onComplete) => this.read(
      data => {
        const newFile = new File({ path });
        newFile.write(data, () => onComplete(newFile));
      }
    );

    public move: File.Move = (path, onComplete) => this.copy(
      path, file => onComplete(file)
    );

    public update = ({ patcher, onComplete }: {
      patcher: (data: string | Buffer) => (string | Buffer),
      onComplete: () => void
    }) => this.read(data => this.write(patcher(data), onComplete));

    public json = <T>(onComplete: (json: T) => void) => this.read(
      data => onComplete(JSON.parse(data))
    );

    public csv = <T>(onComplete: (csv: T[]) => void) => this.read(
      data => csv2json(data, (error, data) => {
        if (error) {
          throw error;
        }
        else {
          onComplete(data as T[]);
        }
      })
    );

}

export default File;
