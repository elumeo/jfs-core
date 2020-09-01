import { unlink, existsSync } from "fs";

export default (path: string, onComplete: () => void) => (
  existsSync(path) && unlink(
    path,
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
