const { resolve } = require('path');

const {
  projectSrc, projectNodeModules
} = require('./resolvedPaths');

console.log(projectSrc);

module.exports = {
  Action: resolve(projectSrc, 'Store', 'Action'),
  Component: resolve(projectSrc, 'Component'),
  Core: resolve(projectNodeModules, '@elumeo', 'jfs-core', 'src'),
  JscApi: resolve(projectSrc, 'Jsc', 'JscApi'),
  Mock: resolve(projectSrc, 'Mock'),
  Setup: resolve(projectSrc, 'Setup'),
  Store: resolve(projectSrc, 'Store', 'index.ts')
};

console.log(module.exports);
