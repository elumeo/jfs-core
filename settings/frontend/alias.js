const { resolve } = require('path');

const {
  projectSrc, projectNodeModules
} = require('./resolvedPaths');

module.exports = {
  Action: resolve(projectSrc, 'Store', 'Action'),
  Component: resolve(projectSrc, 'Component'),
  Composition: resolve(projectSrc, 'Composition'),
  Core: '@elumeo/jfs-core/src',
  'Jfc/Component/HelloWorld': 'jfc-hello-world',
  JscApi: resolve(projectSrc, 'Jsc', 'JscApi'),
  Mock: resolve(projectSrc, 'Mock'),
  Setup: resolve(projectSrc, 'Setup'),
  Store: resolve(projectSrc, 'Store', 'index.ts')
};
