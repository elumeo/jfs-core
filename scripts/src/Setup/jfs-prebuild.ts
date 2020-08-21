import JFS from 'Library/JFS';
import Process from 'Library/OS/Process';
import TsConfig from 'Library/Types/TsConfig';
import { resolve } from 'path';
const rif = require('replace-in-file');
const node_modules = resolve(__dirname, '..', '..', 'node_modules');
const copyfiles = resolve(node_modules, 'copyfiles', 'copyfiles');
const tscAlias = resolve(node_modules, 'tsc-alias', 'src', 'bin', 'index.js');

import Core from 'Library/JFS/Core';
import Component from 'Library/JFS/Component';
import App from 'Library/JFS/App';

JFS.discover(() => {
  const types = {
    Core,
    Component,
    App
  };
  console.log(
    Object.keys(types).find(key => JFS.Head instanceof types[key])
  );
  JFS.Head.tsconfig.json<TsConfig>(({
    compilerOptions: { outDir }
  }) => {
    ['scss', 'json', 'woff', 'woff2'].forEach(
      extension => new Process({
        command: copyfiles,
        parameters: [
          '-u', '1', `src/**/*.${extension}`, outDir
        ],
        options: { cwd: JFS.Head.path }
      }).run()
    );

    rif.sync({
      files: [
        `./${outDir}/**/*.*s`
      ],
      from: /from 'Core/gm,
      to: 'from \'@elumeo/jfs-core/build'
    });

    new Process({
      command: tscAlias,
      parameters: ['-p', resolve(JFS.Head.path, 'tsconfig.json')],
      options: { cwd: JFS.Head.path }
    }).run(instance => instance.stdout.on(
      'data',
      data => console.log(data.toString())
    ));
  })
});
