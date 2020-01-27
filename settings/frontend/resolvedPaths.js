const { resolve } = require('path');

const projectPath = resolve(__dirname, '..', '..', '..', '..', '..');
const projectSrc = resolve(projectPath, 'src');
const projectNodeModules = resolve(projectPath, 'node_modules');
const projectMainTsx = resolve(projectSrc, 'Main.tsx');
const projectStatic = resolve(projectPath, 'static');
const projectLocalJs = resolve(projectPath, 'local.js');
const projectLocalJsDist = resolve(projectPath, 'local.js.dist');
const projectConfigJsonDist = resolve(projectPath, 'config.json.dist');
const projectDist = resolve(projectPath, 'dist');
const projectDistConfigJson = resolve(projectDist, 'config.json');

module.exports = {
  projectPath,
  projectSrc,
  projectNodeModules,
  projectMainTsx,
  projectStatic,
  projectLocalJs,
  projectLocalJsDist,
  projectConfigJsonDist,
  projectDistConfigJson,
  projectDist
};
