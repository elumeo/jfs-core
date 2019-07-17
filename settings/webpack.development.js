const { resolve } = require('path');

const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const { projectPath, common, local } = require('./webpack.common.js');

const mode = process.argv.includes('--watch') ? 'watch' : 'devServer';

module.exports = {
  ...common,
  devtool: 'cheap-module-source-map',
  plugins: [
    ...common.plugins,
    new ForkTsCheckerWebpackPlugin({ tsconfig: resolve('./tsconfig.json') }),
    new CompressionPlugin({ test: [/\.tsx/, /\.ts/, /\.js/], minRatio: 0.1 }),
    new webpack.DefinePlugin({ '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'}),
    new webpack.NamedModulesPlugin()
  ]
};

if (mode === 'devServer') {
  module.exports.devServer = {
    contentBase: resolve(projectPath, 'dist'),
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    noInfo: true,
    host: local ? local.hostname : '127.0.0.1',
    port: local ? local.port : '2008',
    publicPath: '/',
    watchOptions: {
      poll: 1500,
      ignored: /node_modules\/(?!.*@elumeo).*$/,
      aggregateTimeout: 200
    }
  }

  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}
