import write from './Write';

export default <T>(
  path: string,
  json: T,
  onComplete: () => void
) => write(
  path,
  JSON.stringify(json, null, 2),
  onComplete
);
