import ncp from 'ncp';

export default (
  path: string,
  target: string,
  onComplete: () => void
) => ncp(path, target, (error) => {
  if (error) {
    throw error;
  }
  else {
    onComplete();
  }
});
