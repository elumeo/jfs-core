const common = require('./common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATH = require('./PATH');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
// const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const { resolve } = require('path');

const development = {
  ...common,
  mode: 'development',
  output: {
    filename: PATH.BUNDLE_NAME,
    path: PATH.PUBLIC
  },
  devtool: 'inline-source-map',
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: resolve(PATH.ROOT, 'tsconfig.json')
    }),
    // new ForkTsCheckerNotifierWebpackPlugin,
    new CopyWebpackPlugin([ 
      { from: PATH.CONFIGURATION_DEV, to: PATH.CONFIGURATION_DIST }
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATH.HTML_TEMPLATE,
      inject: false,
      templateParameters: {
        BUNDLE_FILE_NAME : PATH.BUNDLE_NAME
      }      
    })
]
};

module.exports = development;
