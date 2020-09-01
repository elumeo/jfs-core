import { existsSync, mkdirSync, mkdir } from 'fs';
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
        return `${sep}${segment}`;
      }
    },
    null
  );
  mkdir(path, onComplete);
};
