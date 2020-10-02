import JFS from 'Library/JFS';
import Snapshot from 'Library/JFS/Project/Translations/Snapshot';
import Translations from 'Library/JFS/Project/Translations';
import File from 'Library/OS/Filesystem/File';
import Script from 'Library/JFS/Core/Script';

const onComplete = ({ missing, html }) => {
  if (html) {
    html.open();
  }
}

const run = () => JFS.discover(async () => {
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
});

export default new Script({
  path: __filename,
  name: 'check-translations',
  scope: ['all'],
  run
});
