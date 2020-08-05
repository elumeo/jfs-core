import JFS from 'Library/JFS';
import Job from 'Library/Job';

const job = new Job<string>({
  name: 'jsc-api-check',
  task: onComplete => JFS.discover(
    () => JFS.Head.JSC.describe(
      JFS.Head,
      description => {
        JFS.Head.JSC.check({
          description,
          onComplete
        })
      }
    )
  ),
  onComplete: (diffSequence, status) => {
    status(
      diffSequence.length
        ? 'NOT_OK'
        : 'OK'
    )
  }
});

job.run();
