import { copyFile } from 'fs';

export default (
  from: string,
  to: string,
  onComplete: () => void
) => {
  copyFile(
    from,
    to,
    onComplete
  )
};
