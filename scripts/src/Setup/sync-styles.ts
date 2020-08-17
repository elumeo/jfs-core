import { resolve, join } from 'path';
import JFS from 'Library/JFS';
import App from 'Library/JFS/App';
import { magentaBright } from 'ansi-colors';
import Directory from 'Library/OS/Filesystem/Directory';
import Text from 'Library/Text';
import File from 'Library/OS/Filesystem/File';

JFS.discover(() => {
  if (JFS.Head instanceof App) {
    console.log('sync-development can not be run from an app');
    process.exit(1);
  }

  const src = new Directory({
    path: resolve(JFS.Head.path, 'src')
  });

  const build = new Directory({
    path: resolve(JFS.Head.path, 'build')
  });

  const isStyle = (file: File) => ['.scss', '.woff', '.woff2'].some(
    extension => Text.endsWith(file.path, extension)
  );

  const path = (update: File) => {
    const virtual = update.path.substring(src.path.length);
    return join(build.path, virtual);
  }

  const onEqual = (update: File) => console.log(magentaBright(update.path));

  src.on('FILE_CREATED', (update: File) => {
    if (isStyle(update)) {
      new File({
        path: path(update)
      }).create(() => onEqual(update));
    }
  });

  src.on('FILE_CHANGED', (update: File) => {
    if (isStyle(update)) {
      update.read(
        text => new File({
          path: path(update)
        }).write(text, () => onEqual(update))
      );
    }
  });

  src.on('FILE_REMOVED', (update: File) => {
    if (isStyle(update)) {
      new File({
        path: path(update)
      }).remove(() => onEqual(update));
    }
  });

  src.watch();
});
