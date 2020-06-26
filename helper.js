const { spawn } = require('child_process');
const { resolve } = require('path');
const rif = require('replace-in-file');

const cwd = resolve(__dirname);

const copyfiles = resolve(cwd, 'node_modules', 'copyfiles', 'copyfiles');
const tscAlias = resolve(cwd, 'node_modules', 'tsc-alias', 'src', 'bin', 'index.js');

['scss', 'woff', 'woff2'].forEach(
  extension => spawn(
    copyfiles,
    ['-u', '1', `src/**/*.${extension}`, 'build'],
    { cwd }
  )
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

tscAliasProcess.on('exit', () => {
  rif.sync({
    files: [
      './build/**/*.*s'
    ],
    from: /Store\/index\/Reducer/gm,
    to: 'Store/Reducer'
  });
});
