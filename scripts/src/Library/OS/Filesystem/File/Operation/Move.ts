import copy from './Copy';
import remove from './Remove';

export default (
  from: string,
  to: string,
  onComplete: () => void
) => copy(
  from,
  to,
  () => remove(from, onComplete)
);
