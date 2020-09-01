import { existsSync, mkdirSync, appendFile } from 'fs';
import { sep } from 'path';

export default (
  path: string,
  predecessors: string[],
  onComplete: () => void
) => {
  predecessors.reduce(
    (parent, segment) => {
      if (parent) {
        const path = (
          parent.length > 1
            ? `${parent}${sep}${segment}`
            : `${parent}${segment}`
        );
        if (!existsSync(path)) {
          mkdirSync(path);
        }
        return path;
      }
      else {
        if (process.platform === 'win32') {
          return segment;
        }
        else {
          return `${sep}${segment}`;
        }
      }
    },
    null
  );
  appendFile(
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
};
