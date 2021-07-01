import fs from 'fs-extra';
import path from 'path';
import * as Type from 'Type';

export const code = (script: Type.Script.File) => [
  '#!/usr/bin/env node',
  `const script = require('../build/Setup/${script.name}');`,
  "const { detect } = require('../build/Library/JFS/Environment');",
  "const cwd = process.cwd();",
  'const main = async () => script.run(await detect(cwd));',
  "main();"
].join('\n');

export const script = (path: string): Promise<Type.Script.File> => import(path);

export const names = async (base: string) => {
  const suffix = '.ts';
  return (
    (await fs.readdir(base))
      .map(name => name.substring(0, name.length - suffix.length))
  );
}

export const files = async (env: Type.Environment.Info): Promise<Type.Script.File[]> => {
  const src = path.resolve(env.core, 'scripts', 'src', 'Setup');
  const build = path.resolve(env.core, 'scripts', 'build', 'Setup');
  return (
    (await Promise.all((await names(src))
      .map(name => path.resolve(build, name))
      .map(script)))
  );
}

export const scripts = async (env: Type.Environment.Info) => (
  (await files(env))
    .filter(file => (
      file.scope.includes('all') ||
      file.scope.includes(env.which)
    ))
    .map(({ name }) => ({
      name,
      command: name
    }))
);

export const generate = async (env: Type.Environment.Info) => {
  (await files(env)).map(script => fs.writeFile(
    path.resolve(env.root, 'bin', script.name),
    code(script)
  ));
}