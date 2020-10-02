import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import Text from 'Library/Text';
import { relative, basename, extname } from 'path';
import Core from 'Library/JFS/Core';

export type Scripts = {
  [key: string]: string;
}

const scripts = async (core: Core) => new Promise<Scripts>(resolve => {
  const directory = new Directory({
    path: core.directory.resolve('scripts', 'build', 'Setup')
  });

  directory.files(files => {
    resolve(
      files
        .filter(({ path }) => Text.endsWith(path, '.js'))
        .map(({ path }) => path)
        .map(path => relative(JFS.Head.path, path))
        .map(path => ({
          key: Text.removeSuffix(basename(path), extname(path)),
          command: `node ${path}`
        }))
        .reduce(
          (previous, current) => ({
            ...previous,
            [current.key]: current.command
          }),
          {}
        )
    );
  });
})

JFS.discover(() => {
  const replaceJfsBuildByBuild = (scripts: Scripts) => {
    scripts.build = scripts['jfs-build'];
    delete scripts['jfs-build'];
    return scripts;
  }
  JFS.Head.nodePackage.json(async nodePackage => (
    JFS.Head.nodePackage.file.save({
      ...nodePackage,
      scripts: {
        ...nodePackage.scripts,
        ...replaceJfsBuildByBuild(await scripts(JFS.Core))
      }
    }, () => {
      console.log(`Registered scripts from jfs-core`);
    })
  ));
});
