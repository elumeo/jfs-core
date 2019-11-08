const {readdir, readFile, writeFile, lstat} = require('fs');
const {resolve} = require('path');

const configFilename = 'config.json.dist';

const checkPathType = (pathName, callback) => {
  lstat(
    pathName,
    (error, stats) => {
      if (error) {
        throw error;
      } else {
        callback(
          stats.isDirectory()
            ? 'directory'
            : stats.isFile()
            ? 'file'
            : 'other'
        );
      }
    }
  );
};

const readNodeTypes = (directoryPath, nodeNames, callback) => {
  const directoryNode = {
    directories: [],
    files: [],
    other: 0
  };

  nodeNames.map(
    nodeName => {
      const nodePath = resolve(directoryPath, nodeName);
      checkPathType(
        nodePath,
        type => {
          if (type === 'directory') {
            directoryNode.directories.push({nodeName, nodePath});
          } else if (type === 'file') {
            directoryNode.files.push({nodeName, nodePath});
          } else {
            directoryNode.other++;
          }

          const {directories, files, other} = directoryNode;
          const checkedTotal = directories.length + files.length + other;

          if (checkedTotal === nodeNames.length) {
            callback(directoryNode);
          }
        }
      );
    }
  );
};

const searchSourcePath = (
  searchDirectoryPath,
  targetFileName,
  callback
) => {
  readdir(
    searchDirectoryPath,
    (error, nodeNames) => {
      if (error) {
        throw error;
      }
      readNodeTypes(
        searchDirectoryPath,
        nodeNames,
        ({files}) => {
          const searchResult = files.find(
            ({nodeName}) => nodeName === targetFileName
          );
          if (!searchResult) {
            searchSourcePath(
              resolve(searchDirectoryPath, '..'),
              targetFileName,
              callback
            )
          } else {
            callback(searchResult);
          }
        }
      );
    }
  );
};

const startSearchPath = process.argv.slice(2)[0];

const configTargetPath = resolve(startSearchPath, configFilename);
searchSourcePath(
  startSearchPath,
  configFilename,
  ({nodePath: configSourcePath}) => {
    readdir(
      startSearchPath,
      (error, files) => {
        if (error) {
          console.log(error);
        } else {
          if (!files.find(fileName => fileName === configFilename)) {
            readFile(
              configSourcePath,
              (error, data) => {
                if (error) {
                  throw error;
                } else {
                  writeFile(
                    configTargetPath,
                    data,
                    error => {
                      if (error) {
                        throw error;
                      }
                      process.exit(0);
                    }
                  )
                }
              }
            );
          }
        }
      }
    );
  }
);
