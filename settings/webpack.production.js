const { resolve } = require('path');

const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { projectPath, common } = require('./webpack.common.js');

var local = null;
try {
  local = require('./local');
} catch (err) {
  console.error(err.message);
}

process.env.NODE_ENV = 'production';

module.exports = {
  ...common,
  plugins: [
    new CheckerPlugin(),

    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: { screw_ie8: true, warnings: false },
      output: { comments: false },
      sourceMap: false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    // Eliminate more unused lodash code
    new LodashModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(projectPath, 'static', 'index.html'),
      inject: false
    }),

    new CopyWebpackPlugin([
      { from: resolve(projectPath, 'static') },
      { from: resolve(projectPath, 'config.json.dist'), to: resolve(projectPath, 'config.json') },
      { from: resolve(projectPath, 'local.js.dist'), to: resolve(projectPath, 'local.js') }
    ])
  ]
};
