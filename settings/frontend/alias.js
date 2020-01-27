const { resolve } = require('path');

const {
  projectSrc
} = require('./resolvedPaths');

console.log(projectSrc);

module.exports = {
  Action: resolve(projectSrc, 'Store', 'Action'),
  Component: resolve(projectSrc, 'Component'),
  JscApi: resolve(projectSrc, 'Jsc', 'JscApi'),
  Mock: resolve(projectSrc, 'Mock'),
  Setup: resolve(projectSrc, 'Setup'),
  Store: resolve(projectSrc, 'Store', 'index.ts')
};
