import rmdir from 'rimraf';

export default (
  path: string,
  onComplete: () => void
) => rmdir(path, onComplete);
