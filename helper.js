const { spawn } = require('child_process');
const { resolve } = require('path');

const cwd = resolve(__dirname);

const copyfiles = resolve(cwd, 'node_modules', 'copyfiles', 'copyfiles');
const tscAlias = resolve(cwd, 'node_modules', 'tsc-alias', 'src', 'bin', 'index.js');

spawn(
  copyfiles,
  ['-u', '1', 'src/**/*.scss', 'Library'],
  { cwd }
);
const tscAliasProcess = spawn(
  tscAlias,
  [],
  { cwd }
);

tscAliasProcess.stdout.on(
  'data',
  data => console.log(data.toString())
);
