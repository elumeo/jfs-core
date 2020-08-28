const webpack = require('webpack');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');
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
    new CompressionPlugin({ test: [/\.tsx/, /\.ts/, /\.js/], minRatio: 0.1 }),
    new CopyWebpackPlugin([
      { from: resolve('static') },
      { from: resolve('config.json.dist'), to: resolve('dist', 'config.json') }
    ])
  ]
};
