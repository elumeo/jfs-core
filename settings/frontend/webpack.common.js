const { resolve } = require('path');
const copyLocal = require('./copyLocal');
copyLocal();

// -----------------------------------------------------------------------------

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [resolve('src'), 'node_modules'],
    alias: {
      Action: resolve('src', 'Store', 'Action'),
      Component: resolve('src', 'Component'),
      Composition: resolve('src', 'Composition'),
      Core: '@elumeo/jfs-core/src',
      'Jfc/Component/HelloWorld': 'jfc-hello-world',
      JscApi: resolve('src', 'Jsc', 'JscApi'),
      Mock: resolve('src', 'Mock'),
      Setup: resolve('src', 'Setup'),
      Store: resolve('src', 'Store', 'index.ts')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', ['@babel/env', { modules: false, loose: true }]],
              plugins: ['@babel/transform-runtime']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true
            }
          }
        ]
      },
      {
        test: /\.s*css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  context: resolve('src'),
  entry: [resolve('src', 'Main.tsx')],
  output: {
    filename: 'bundle.js',
    path: resolve('dist'),
    publicPath: ''
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('static', 'index.html'),
      inject: false
    }),
    new CopyWebpackPlugin([
      { from: resolve('static') },
      { from: resolve('config.json.dist'), to: resolve('dist', 'config.json') }
    ])
  ],
  performance: { hints: false },
};
