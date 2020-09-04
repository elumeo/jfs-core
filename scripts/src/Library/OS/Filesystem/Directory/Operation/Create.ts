import { existsSync, mkdirSync, mkdir } from 'fs';
import { sep, dirname } from 'path';
import Text from 'Library/Text';

export default (
  path: string,
  onComplete: () => void
) => {
  dirname(
    process.platform === 'win32'
      ? Text.removePrefix(path, sep)
      : path
  ).split(sep).reduce(
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
