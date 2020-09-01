import { readFile } from 'fs';

type OnComplete = (data: string | Buffer) => void;
type Settings = {
  encoding?: string;
  onComplete: OnComplete;
};

export type Options = Settings | OnComplete;

export default (path: string, options: Options) => {
  const shortSyntax = typeof options === 'function';
  const encoding = (
    shortSyntax
      ? 'utf8'
      : (options as Settings).encoding
  );
  const onComplete = (
    shortSyntax
      ? options as OnComplete
      : (options as Settings).onComplete
  );
  readFile(
    path,
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
