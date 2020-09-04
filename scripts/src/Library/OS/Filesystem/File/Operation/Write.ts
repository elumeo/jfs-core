import { dirname } from 'path';
import { create } from '../../Directory/Operation';
import { writeFile } from 'fs';

export default (
  path: string,
  data: string | Buffer,
  onComplete: () => void
) => create(
  dirname(path),
  () => writeFile(
      path,
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
);
