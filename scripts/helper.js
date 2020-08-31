const { spawn } = require('child_process');
const { resolve } = require('path');

const cwd = resolve(__dirname);

const copyfiles = resolve(cwd, 'node_modules', 'copyfiles', 'copyfiles');
const tscAlias = resolve(cwd, 'node_modules', 'tsc-alias', 'src', 'bin', 'index.js');

['scss', 'css', 'html', 'js'].forEach(
  extension => spawn(
    'node',
    [copyfiles, '-u', '1', `src/**/*.${extension}`, 'build'],
    { cwd }
  )
);

const tscAliasProcess = spawn(
  'node',
  [tscAlias],
  { cwd }
);

tscAliasProcess.stdout.on(
  'data',
  data => console.log(data.toString())
);
