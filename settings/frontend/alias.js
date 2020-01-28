const { resolve } = require('path');

const {
  projectSrc, projectNodeModules
} = require('./resolvedPaths');

module.exports = {
  Action: resolve(projectSrc, 'Store', 'Action'),
  Component: resolve(projectSrc, 'Component'),
  Core: '@elumeo/jfs-core/src',
  'Core/Action': '@elumeo/jfs-core/src/Store/Action',
  JscApi: resolve(projectSrc, 'Jsc', 'JscApi'),
  Mock: resolve(projectSrc, 'Mock'),
  Setup: resolve(projectSrc, 'Setup'),
  Store: resolve(projectSrc, 'Store', 'index.ts')
};
