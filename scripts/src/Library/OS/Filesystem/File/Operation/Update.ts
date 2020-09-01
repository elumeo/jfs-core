import read from './Read';
import write from './Write';

export default (path, { patcher, onComplete }: {
  patcher: (data: string | Buffer) => (string | Buffer),
  onComplete: () => void
}) => read(
  path,
  data => write(path, patcher(data), onComplete)
);
