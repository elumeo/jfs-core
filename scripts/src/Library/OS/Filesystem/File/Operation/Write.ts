import { writeFile } from 'fs';

export default (path: string, data: string | Buffer, onComplete: () => void) => {
  writeFile(
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
};
