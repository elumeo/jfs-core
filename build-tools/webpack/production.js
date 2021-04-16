const webpack = require('webpack');
const common = require('./common');
const PATH = require('./PATH');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rimraf = require('rimraf');

rimraf.sync(PATH.PUBLIC);

process.env.NODE_ENV = 'production';

const production = {
  ...common,
  mode: 'production',
  output: {
    filename: PATH.UNIQUE_BUNDLE_NAME,
    path: PATH.PUBLIC,
    publicPath: ''
  },
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
    new CopyWebpackPlugin({
        patterns: [
            { from: PATH.CONFIGURATION_DEV, to: PATH.CONFIGURATION_DIST }
        ]
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATH.HTML_TEMPLATE,
      inject: false,
      templateParameters: {
        BUNDLE_FILE_NAME : PATH.UNIQUE_BUNDLE_NAME
      }      
    }),
  ]
};

module.exports = production;
