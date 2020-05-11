const webpack = require('webpack');
const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  context: resolve(__dirname, '..', '..', 'scripts', 'index.ts'),
  entry: [resolve(__dirname, '..', '..', 'scripts', 'index.ts')],
  output: {
    path: resolve(__dirname, '..', '..', 'scripts'),
    filename: 'jsc-generate.js'
  },
  resolve: {
    extensions: ['.ts', '.json'],
    alias: {
      Library: resolve(__dirname, '..', '..', 'scripts', 'Library'),
      Setup: resolve(__dirname, '..', '..', 'scripts', 'Setup'),
      Constant: resolve(__dirname, '..', '..', 'scripts', 'Constant.json'),
    }
  },
  externals: [nodeExternals()],
  node: {
    '__dirname': false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        SCRIPTS_PATH: JSON.stringify('../../scripts')
      }
    }),
  ]
};
