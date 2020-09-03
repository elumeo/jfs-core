import Event from 'Library/OS/Filesystem/Event';
import File from 'Library/OS/Filesystem/File';
import Directory from 'Library/OS/Filesystem/Directory';
import { extname } from 'path';
import Transpiler from './Transpiler';
import Format from './Format';
import Text from 'Library/Text';
import { cyan } from 'ansi-colors';
import readdir from 'recursive-readdir';

class Build {

  private static equalize = (project: Directory) => {
    return new Promise(async (resolve) => {
      const src = project.directory('src');
      const build = project.directory('build');
      const paths = await readdir(src.path, ['*.ts', '*.tsx']);
      const files = paths.map(path => new File({ path }));
      const copied = [];
      if (files.length) {
        files.forEach(file => {
          const virtual = src.virtual(file.path);
          file.copy(
            build.mount(virtual),
            file => {
              copied.push(file);
              const progress = `(${copied.length}/${files.length})`;
              console.log(`${cyan('Equalized')}: ${virtual} ${progress}`);
              if (copied.length === files.length) {
                resolve();
              }
            }
          );
        })
      }
      else {
        resolve();
      }
    })
  };

  private static synchronize = (
    project: Directory,
    event: Event.Name,
    file: File
  ) => {
    const src = project.directory('src');
    const build = project.directory('build');
    const remove = Text.endsWith(event, 'REMOVED');
    const virtual = src.virtual(file.path);
    const path = build.mount(virtual);
    const onComplete = () => console.log(`${cyan(event)}: ${virtual}`);
    if (remove) {
      new File({ path }).remove(onComplete)
    }
    else {
      file.copy(path, onComplete);
    }
  }

  static compile = (project: Directory) => new Promise(async resolve => {
    if (Transpiler.running) {
      Transpiler.process.kill(`SIGKILL`);
    }
    await Transpiler.run(project);
    await Format.apply(project);
    resolve();
  });

  static single = async (project: Directory) => new Promise(async resolve => {
    await Build.equalize(project);
    console.log('Compiling ...');
    await Build.compile(project);
    resolve();
  });

  static watch = async (project: Directory) => {
    const src = project.directory('src');
    await Build.single(project);
    Event.names.forEach(event => src.on(
      event,
      async fsNode => {
        if (fsNode instanceof File) {
          const file = fsNode;
          if (extname(file.path) === '.ts') {
            console.clear();
            console.log('Recompiling ...');
            await Build.compile(project);
          }
          else {
            console.clear();
            console.log('Synchronizing ...');
            Build.synchronize(project, event, file);

            Build.compile(project);
          }
        }
      }
    ));

    src.watch();
  }
}

export default Build;
