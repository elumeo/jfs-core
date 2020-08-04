import JFS from 'Library/JFS';
import Directory from 'Library/OS/Filesystem/Directory';
import { resolve } from 'path';
import TsConfig, { CompilerOptions } from 'Library/Types/TsConfig';
import File from 'Library/OS/Filesystem/File';
import Component from 'Library/JFS/Component';

const filesNamesToCopy = [
  'tsconfig.json',
  'tslint.json',
  '.editorconfig',
  '.prettierconfig',
  '.prettierrc',
];

const updateCompilerOptions = (
  tsconfig: TsConfig,
  compilerOptions: CompilerOptions
): TsConfig => ({
  ...tsconfig,
  compilerOptions
});

const updatePaths = (
  tsconfig: TsConfig,
  paths: CompilerOptions.Paths
): TsConfig => updateCompilerOptions(
  tsconfig,
  {
    ...tsconfig.compilerOptions,
    paths
  }
);

const removeAliasFromPaths = (
  tsconfig: TsConfig,
  alias: string
): TsConfig => updatePaths(
  tsconfig,
  Object.keys(tsconfig.compilerOptions.paths).reduce(
    (paths, key) => ({
      ...paths,
      ...(
        alias === key
          ? {}
          : { [key]: tsconfig.compilerOptions.paths[key] }
      )
    }),
    {}
  )
);

JFS.discover(
  () => {
    new Directory({
      path: resolve(JFS.Core.path, 'settings')
    }).files(
      files => {
        const copiedFileNames = [];
        files
          .filter(file => filesNamesToCopy.includes(file.name))
          .forEach(
            file => {
              const onCopyComplete = () => {
                copiedFileNames.push(file.name);
                if (copiedFileNames.length === filesNamesToCopy.length) {
                  console.log('ALL CONFIG FILES DEPLOYED');
                }
              };

              if (JFS.Head instanceof Component && file.name === 'tsconfig.json') {
                file.json<TsConfig>(tsconfig => {
                  new File({
                    path: resolve(JFS.Head.path, 'tsconfig.json')
                  }).save<TsConfig>(
                    removeAliasFromPaths(tsconfig, 'Core/*'),
                    onCopyComplete
                  )
                });
              }
              else {
                file.copy(
                  resolve(JFS.Head.path, file.name),
                  onCopyComplete
                )
              }
            }
          );
      }
    );
  }
);
