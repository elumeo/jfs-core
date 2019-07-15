const { resolve } = require('path');

const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common.js');

let local = null;
try {
  local = require('./local');
} catch (err) {
  console.error(err.message);
}

module.exports = {
  ...common,
  devServer: {
    contentBase: resolve(__dirname, '..', '..', '..', '..', 'dist'),
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    noInfo: true,
    host: local ? local.hostname : '127.0.0.1',
    port: local ? local.port : '2008',

    publicPath: '/',

    watchOptions:
    {
      poll: 1500,
      ignored: /node_modules\/(?!.*@elumeo).*$/,
      aggregateTimeout: 200
    }
  },
  devtool: 'cheap-module-source-map',
  plugins:
  [
    new ForkTsCheckerWebpackPlugin({ tsconfig: resolve('./tsconfig.json') }),
    new CompressionPlugin({ test: [/\.tsx/, /\.ts/, /\.js/], minRatio: 0.1 }),
    new webpack.DefinePlugin({ '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'}),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};
