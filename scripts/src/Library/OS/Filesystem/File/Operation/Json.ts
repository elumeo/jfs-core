import read from './Read';

export default <T>(path: string, onComplete: (json: T) => void) => read(
  path,
  data => onComplete(JSON.parse(data as string))
);
