const { readFile, writeFile } = require('fs');
const { resolve } = require('path');

const apiFilePath = resolve(__dirname, '..', '..', 'src', 'JscApi.ts');

readFile(
  apiFilePath,
  'utf8',
  (error, data) => {
    if (error) {
      throw error;
    }
    else {
      writeFile(
        apiFilePath,
        data.replace(
          '@elumeo/jfs-core/src/base/Client',
          './base/Client'
        ),
        error => {
          if (error) {
            throw error;
          }
        }
      )
    }
  }
);
