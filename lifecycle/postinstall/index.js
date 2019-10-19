const { spawn } = require('child_process');
const { resolve } = require('path');

const run = (
  { path, argv, cwd, printOutput, printErrors },
  callback = () => {}
) => {
  const child = spawn(
    'node',
    [path, ...(argv || [])],
    {
      ...(
        cwd
          ? { cwd }
          : {}
      )
    }
  );

  if (printOutput) {
    child.stdout.on(
      'data',
      data => console.log(data.toString())
    );
  }

  if (printErrors) {
    child.stderr.on(
      'data',
      data => console.log(data.toString())
    );
  }

  child.on('exit', code => callback(code));
}

const getConfig = callback => {
  run(
    {
      path: resolve(__dirname, 'getConfig.js'),
      argv: [resolve(__dirname, '..', '..')],
      cwd: resolve(__dirname, '..', '..')
    },
    code => {
      if (!code) {
        callback();
      }
    }
  );
}

const jscGenerate = callback => {
  run(
    {
      path: resolve(
        __dirname,
        '..',
        '..',
        'node_modules',
        '@elumeo',
        'jfs-core-dev',
        'scripts',
        'jsc-generate',
        'index.js'
      ),
      cwd: resolve(__dirname, '..', '..')
    },
    code => {
      if (!code) {
        callback();
      }
    }
  );
}

const adjustApi = callback => {
  run(
    {
      path: resolve(__dirname, 'adjustApi.js'),
      cwd: resolve(__dirname, '..', '..')
    },
    code => {
      if (!code) {
        callback();
      }
    }
  );
}

getConfig(
  () => jscGenerate(
    () => adjustApi(
      () => {

      }
    )
  )
)
