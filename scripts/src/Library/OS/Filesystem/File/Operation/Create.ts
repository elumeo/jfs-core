import { create } from '../../Directory/Operation';
import { appendFile } from 'fs';
import { dirname } from 'path';

export default (
  path: string,
  onComplete: () => void
) => {
  create(
    dirname(path),
    () => appendFile(
      path,
      '',
      (error: NodeJS.ErrnoException) => {
        if (error) {
          throw error;
        }
        else if (onComplete) {
          onComplete();
        }
      }
    )
  );
};
