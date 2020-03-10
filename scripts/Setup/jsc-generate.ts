import { resolve } from 'path';
import JSC from 'Library/JSC';
import Directory from 'Library/Filesystem/Directory';

const project = new Directory({ path: resolve('.') });

JSC.generate(
  () => {
    project.run({
      command: 'node',
      parameters: [
        'node_modules/prettier/bin-prettier.js',
        '--write', './src/Jsc/JscApi.ts'
      ],
      commandExited: () => {

      }
    });
  }
);
