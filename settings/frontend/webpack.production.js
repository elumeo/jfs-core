const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const { common } = require('./webpack.common.js');

process.env.NODE_ENV = 'production';

module.exports = {
  ...common,
  plugins: [
    ...common.plugins,
    new CheckerPlugin(),
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
    new LodashModuleReplacementPlugin()
  ]
};
