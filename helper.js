const { spawn } = require('child_process');
const { resolve } = require('path');
const rif = require('replace-in-file');

const cwd = resolve(__dirname);

const copyfiles = resolve(cwd, 'node_modules', 'copyfiles', 'copyfiles');
const tscAlias = resolve(cwd, 'node_modules', 'tsc-alias', 'src', 'bin', 'index.js');

spawn(
  copyfiles,
  ['-u', '1', 'src/**/*.scss', 'build'],
  { cwd }
);

rif.sync({
  files: [
    './build/**/*.*s'
  ],
  from: /from 'Core/gm,
  to: 'from \'@elumeo/jfs-core/build'
});

const tscAliasProcess = spawn(
  tscAlias,
  [],
  { cwd }
);

tscAliasProcess.stdout.on(
  'data',
  data => console.log(data.toString())
);

tscAliasProcess.on('exit', () => {
  rif.sync({
    files: [
      './build/**/*.*s'
    ],
    from: /index\/Reducer/gm,
    to: 'Reducer'
  });
});
