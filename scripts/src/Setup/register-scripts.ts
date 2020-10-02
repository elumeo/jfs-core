import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import Text from 'Library/Text';
import { relative, basename } from 'path';
import Core from 'Library/JFS/Core';
import Component from 'Library/JFS/Component';
import Script, { Scope } from 'Library/JFS/Core/Script';
import Project from 'Library/JFS/Project';
import App from 'Library/JFS/App';
import File from 'Library/OS/Filesystem/File';

export type Scripts = {
  [key: string]: string;
}

const script =  (force: boolean = false) => new Script({
  path: __filename,
  name: 'register-scripts',
  scope: ['all'],
  run,
  force
});

const scope = (head: Project): Scope => (
  head instanceof Core
    ? 'core'
    : head instanceof Component
      ? 'jfc'
      : head instanceof App
        ? 'app'
        : null
);

const files = () => new Promise<File[]>(resolve => (
  new Directory({ path: __dirname })
    .files(resolve)
))

const names = (files: File[]) => (
  files
    .filter(({ path }) => Text.endsWith(path, '.js') && path !== __filename)
    .map(({ path }) => basename(path))
    .map(name => Text.removeSuffix(name, '.js'))
);

const imports = (names: string[]) => (
  names.map(async name => (await import(`./${name}`)).default as Script)
);

const extract = async () => await imports(
  await names(
    await files()
  )
);

const add = (anker: string, scripts: Scripts, script: Script) => ({
  ...scripts,
  [script.name]: `node ${relative(anker, script.path)}`
});

const match = (head: Project, script: Script) => (
  script.scope.includes(scope(head)) ||
  script.scope.includes('all')
);

const collect = (head: Project) => (scripts: Scripts, script: Script) => {
  if (match(head, script)) {
    return add(head.path, scripts, script);
  }
  else {
    return scripts;
  }
}

const merge = (head: Project, scripts: Script[]): Scripts => scripts.reduce(
  collect(head),
  {}
);

const scripts = (
  head: Project,
  scripts: Script[] = [script()]
) => new Promise<Scripts>(async resolve => (
  (await extract())
    .forEach(async script => {
      scripts.push(await script);
      if (scripts.length === imports.length +1) {
        resolve(merge(head, scripts));
      }
    })
));

const run = () => JFS.discover(async () => {
  JFS.Head.nodePackage.json(async nodePackage => (
    JFS.Head.nodePackage.file.save({
      ...nodePackage,
      scripts: {
        ...nodePackage.scripts,
        ...(await scripts(JFS.Head))
      }
    }, () => console.log(`Registered scripts from jfs-core`))
  ));
});

export default script(true);
