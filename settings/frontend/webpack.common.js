const { resolve } = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rules = require('./rules');
const alias = require('./alias');

const {
  projectSrc,
  projectStatic,
  projectDist,
  projectMainTsx,
  projectNodeModules,
  projectLocalJs,
  projectLocalJsDist,
  projectConfigJsonDist,
  projectDistConfigJson
} = require('./resolvedPaths');

const copyJobs = [
  { from: projectStatic },
  { from: projectConfigJsonDist, to: projectDistConfigJson }
];

module.exports.local = null;
try {
  module.exports.local = require(projectLocalJs);
} catch (error) {
  console.error(error.message);
  copyJobs.push({
    from: projectLocalJsDist,
    to: projectLocalJs
  });
}

module.exports.common = {

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [projectSrc, projectNodeModules],
    alias
  },

  context: projectSrc,
  entry: [projectMainTsx],
  output: {
    filename: 'bundle.js',
    path: projectDist,
    publicPath: ''
  },

  module: {
    rules
  },

  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(projectStatic, 'index.html'),
      inject: false
    }),
    new CopyWebpackPlugin(copyJobs)
  ]
};
