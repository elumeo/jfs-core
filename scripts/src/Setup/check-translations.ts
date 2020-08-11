import { bold } from 'ansi-colors';
import JFS from 'Library/JFS';
import Snapshot from 'Library/JFS/Project/Translations/Snapshot';
import opn from 'opn';
import Job from 'Library/Job';
import Translations from 'Library/JFS/Project/Translations';
import File from 'Library/OS/Filesystem/File';

const checkTranslations = ({
  open
}: {
  open: boolean;
}) => new Job<{
  missing: { key: string; }[],
  url: string;
}>({
  name: 'jfs-translation-check',
  task: onComplete => JFS.discover(async () => {
    const translations = new File({
      path: Translations.location(JFS.Head.path)
    });

    const previous = await Snapshot.previous(translations);
    const current = await Snapshot.current(translations);

    if (previous) {
      Snapshot.update(
        previous,
        current,
        onComplete
      );
    }
    else {
      const missing = current.translations.missing(current.includeCompleteRows);
      if (missing.length) {
        const html = await current.file('html');
        Snapshot.create(
          1,
          current,
          () => onComplete({ missing, url: html && html.path || null })
        );
      }
      else {
        onComplete({ missing, url: null });
      }
    }
  }),
  onComplete: ({ missing, url }, status) => {
    if (missing.length) {
      status(
        'NOT_OK',
        `${bold('INCOMPLETE')}: ${missing.length} translations missing`
      )

      if (url && open) {
        opn(url);
      }
    }
    else {
      status('OK');
    }
  }
});

checkTranslations({ open: true }).run();
