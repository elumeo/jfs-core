import { readFile, writeFile, appendFile, unlink, existsSync } from 'fs';
import FsNode from './FsNode';

interface IDefaultReadSettings {
    encoding: string;
}

interface IReadSettings {
    encoding?: string;
    dataReady: (data: string | Buffer) => void;
}

interface IWriteSettings {
    data: string | Buffer;
    dataWritten?: () => void;
}

interface IRemoveSettings {
    fileRemoved?: () => void;
}

interface ICreateSettings {
    fileCreated?: () => void;
}

interface ICopySettings {
    newPath: string;
    fileCopied?: (newFile: File) => void;
}

interface IMoveSettings {
    newPath: string;
    fileMoved: (newFile: File) => void;
}

class File extends FsNode {

    public static readonly removeExtension = (path: string) => path.substring(
      0,
      path.lastIndexOf('.')
    )

    public static readonly defaultReadSettings: IDefaultReadSettings =  {
        encoding: 'utf8',
    };

    public exists = () => existsSync(this.path);

    public create = ({ fileCreated }: ICreateSettings) => appendFile(
        this.path,
        '',
        (error: NodeJS.ErrnoException) => {
            if (error) {
                //throw error;
                fileCreated();
            }
            else if (fileCreated) {
                fileCreated();
            }
        }
    );

    public read = ({ encoding, dataReady }: IReadSettings) => readFile(
        this.path,
        encoding || File.defaultReadSettings.encoding,
        (error: NodeJS.ErrnoException, data) => {
            if (error) {
                throw error;
            }
            else {
                dataReady(data);
            }
        }
    );

    public write = ({ data, dataWritten }: IWriteSettings) => writeFile(
        this.path,
        data,
        (error: NodeJS.ErrnoException) => {
            if (error) {
                throw error;
            }
            else if (dataWritten) {
                dataWritten();
            }
        }
    );

    public remove = ({ fileRemoved }: IRemoveSettings) => this.exists() && unlink(
        this.path,
        (error: NodeJS.ErrnoException) => {
            if (error) {
                throw error;
            }
            else if (fileRemoved) {
                fileRemoved();
            }
        }
    );

    public copy = ({ newPath: path, fileCopied }: ICopySettings) => this.read({
        dataReady: data => {
          const newFile = new File({ path });
          newFile.write({
              data,
              dataWritten: () => fileCopied(newFile)
          });
        }
    });

    public move = ({ newPath, fileMoved }: IMoveSettings) => this.copy({
        newPath,
        fileCopied: newFile => fileMoved(newFile)
    });

    public update = ({ patcher, onComplete }: {
      patcher: (data: string | Buffer) => (string | Buffer),
      onComplete: () => void
    }) => {
      this.read({
        encoding: 'utf8',
        dataReady: data => this.write({
          data: patcher(data),
          dataWritten: onComplete
        })
      });
    }

}

export default File;
