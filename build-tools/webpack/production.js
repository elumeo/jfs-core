const webpack = require('webpack');
const common = require('./common');
const PATH = require('./PATH');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const rimraf = require('rimraf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

rimraf.sync(PATH.PUBLIC);

process.env.NODE_ENV = 'production';

const production = {
  ...common,
  mode: 'production',
  output: {
    filename: PATH.UNIQUE_BUNDLE_NAME,
    path: PATH.PUBLIC,
    publicPath: ''
  },
  optimization: {
    minimize: true,
    usedExports: true,
    sideEffects: true,
    splitChunks: false,
    runtimeChunk: false,
    moduleIds: 'named',
    chunkIds: 'named',
    concatenateModules: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: {
            warnings: false,
          },
          output: {
            comments: false
          },
          ie8: true,
        },
      })
    ]
  },
  resolve: {
    ...common.resolve,
    alias: {
      ...common.resolve.alias,
      // Alias the unwanted agents to null-loader
      'clippyts/dist/agents/Bonzi': 'null-loader',
      'clippyts/dist/agents/F1': 'null-loader',
      'clippyts/dist/agents/Genie': 'null-loader',
      'clippyts/dist/agents/Genius': 'null-loader',
      'clippyts/dist/agents/Merlin': 'null-loader',
      'clippyts/dist/agents/Peedy': 'null-loader',
      'clippyts/dist/agents/Rocky': 'null-loader',
      'clippyts/dist/agents/Rover': 'null-loader',
      'clippyts/dist/agents/Sparky': 'null-loader',

    }
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
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ContextReplacementPlugin(
      /clippyts[\/\\]dist[\/\\]agents/,
      /^\.\/(?:Clippy|Links)\.js$/
    ),
    new LodashModuleReplacementPlugin(),
    new CompressionPlugin({ test: [/\.tsx/, /\.ts/, /\.js/], minRatio: 0.1 }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATH.HTML_TEMPLATE,
      inject: false,
      favicon: PATH.FAVICON,
      templateParameters: {
        BUNDLE_FILE_NAME: PATH.UNIQUE_BUNDLE_NAME
      }
    })
  ]
};

module.exports = production;
