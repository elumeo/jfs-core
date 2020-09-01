import read from './Read';
import write from './Write';

export default (
  from: string,
  to: string,
  onComplete: () => void
) => read(
  from,
  data => write(to, data, onComplete)
);
