const common = require('./common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATH = require('./PATH');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const { resolve } = require('path');

const development = {
  ...common,
  mode: 'development',
  output: {
    filename: PATH.BUNDLE_NAME,
    path: PATH.PUBLIC
  },
  devtool: 'inline-source-map',
  plugins: [
    ...common.plugins,
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: resolve(PATH.ROOT, 'tsconfig.json'),
        memoryLimit: 8192,
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
      async: true
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: PATH.CONFIGURATION_DEV, to: PATH.CONFIGURATION_DIST }
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATH.HTML_TEMPLATE,
      inject: false,
      favicon: PATH.FAVICON,
      templateParameters: {
        BUNDLE_FILE_NAME: PATH.BUNDLE_NAME
      }
    }),
  ]
};

module.exports = development;
