const webpack = require('webpack');
const { resolve } = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.common.js');

process.env.NODE_ENV = 'production';

module.exports = {
  ...common,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { warnings: false },
          output: { comments: false },
          ie8: true
        },
        sourceMap: false
      })
    ]
  },
  plugins: [
    ...common.plugins,
    new CopyWebpackPlugin([
      { from: resolve('static') },
      { from: resolve('config.json.dist'), to: resolve('dist', 'config.json') }
    ]),
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
