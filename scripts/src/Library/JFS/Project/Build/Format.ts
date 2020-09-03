import TsConfig from 'Library/Types/TsConfig';
import Directory from 'Library/OS/Filesystem/Directory';
const rif = require('replace-in-file');
import Process from 'Library/OS/Process';

class Format {
  static replaceCoreAlias = (project: Directory, onComplete: () => void) => {
    project.file('tsconfig.json').json<TsConfig>(({
      compilerOptions: {
        outDir
      }
    }) => {
      rif.sync({
        files: [
          `./${outDir}/**/*.*s`
        ],
        from: /from 'Core/gm,
        to: 'from \'@elumeo/jfs-core/build'
      });
      onComplete();
    })
  }

  static replaceAliases = (
    project: Directory,
    onComplete: (code: number) => void
  ) => new Process({
    command: 'node',
    parameters: [
      project.resolve(
        process.argv[1], '..', '..', '..',
        'node_modules', 'tsc-alias', 'src', 'bin', 'index.js'
      ),
      '-p',
      project.resolve('tsconfig.json')
    ],
    options: { cwd: project.path }
  }).run(instance => instance.on('exit', onComplete));

  static apply = (project: Directory) => new Promise((resolve) => {
    Format.replaceCoreAlias(
      project,
      () => Format.replaceAliases(project, () => {
        resolve();
      })
    );
  });
}

export default Format;
