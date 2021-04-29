import * as JFS from 'Library/JFS';
import * as Text from 'Library/Text';
import { relative, basename, resolve } from 'path';
import Script, { Scope } from 'Library/JFS/Core/Script';
import * as Package from 'Library/NPM/Package';
import fs, { lstat } from 'fs-extra';

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

const scope = async (path: string): Promise<Scope> => {
  const { type } = await JFS.discover(path);
  return (
    type === 'component'
      ? 'jfc'
      : type
  );
}

const files = async () => {
  const names = await fs.readdir(__dirname);
  const paths = names.map(name => resolve(__dirname, name));

  const match = async (path: string) => {
    const stat = await lstat(path);
    return {
      path,
      match: stat.isFile()
    };
  }

  const matches = (
    (await Promise.all(paths.map(match)))
      .filter(({ match }) => match)
      .map(({ path }) => path)
  );

  return matches;
};

const names = (files: string[]) => (
  files
    .filter(path => Text.Suffix.match(path, '.js') && path !== __filename)
    .map(path => basename(path))
    .map(name => Text.Suffix.remove(name, '.js'))
);

const imports = (names: string[]) => (
  names.map(async name => (await import(`./${name}`)).default as Script)
);

const extract = async () => imports(names(await files()));

const merge = async (path: string, scripts: Script[]): Promise<Scripts> => {
  const matches = scripts.map(async script => ({
    path,
    script,
    match: (
      script.scope.includes(await scope(path)) ||
      script.scope.includes('all')
    ),
  }));

  return (
    (await Promise.all(matches))
      .reduce(
        (scripts, { path, match, script }) => (
          match
            ? {
              ...scripts,
              [script.name]: `node ${relative(path, script.path).split('\\').join('/')}`
            }
            : scripts
        ),
        {}
      )
  );
}

const scripts = (
  path: string,
  scripts: Script[] = [script()]
) => new Promise<Scripts>(async resolve => (
  (await extract())
    .forEach(async script => {
      scripts.push(await script);
      if (scripts.length === imports(await names(await files())).length +1) {
        resolve(merge(path, scripts));
      }
    })
));

const run = async () => {
  const path = resolve(process.cwd(), 'package.json');

  const current = await Package.json(path);

  const next = {
    ...current,
    scripts: {
      ...current.scripts,
      ...(await scripts(process.cwd()))
    }
  };

  await fs.writeJSON(path, next, {
    spaces: 2
  });

  console.log(`Registered scripts from jfs-core`);
}

export default script(true);
