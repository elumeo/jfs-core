import { bold } from 'ansi-colors';
import JFS from 'Library/JFS';
import Snapshot from 'Library/JFS/Project/Translations/Snapshot';
import Job from 'Library/Job';
import Translations from 'Library/JFS/Project/Translations';
import File from 'Library/OS/Filesystem/File';

const job = new Job<{
  missing: { key: string; }[],
  html: File;
}>({
  name: 'jfs-translation-check',
  task: onComplete => JFS.discover(async () => {
    const translations = new File({
      path: Translations.location(JFS.Head.path)
    });

    const previous = await Snapshot.previous(translations);
    const current = await Snapshot.current(translations);

    if (previous) {
      Snapshot.update(previous, current, onComplete);
    }
    else {
      const missing = current.translations.missing(current.includeCompleteRows);
      if (missing.length) {
        Snapshot.create(1, current, async () => onComplete({
          missing,
          html: (await current.file('html')) || null
        }));
      }
      else {
        onComplete({ missing, html: null });
      }
    }
  }),
  onComplete: ({ missing, html }, status) => {
    if (missing.length) {
      status(
        'NOT_OK',
        `${bold('INCOMPLETE')}: ${missing.length} translations missing`
      );

      if (html) {
        html.open();
      }
    }
    else {
      status('OK');
    }
  }
});

job.run();
