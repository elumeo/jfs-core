import webpack from 'webpack';
import { resolve } from 'path';
import nodeExternals from 'webpack-node-externals';

const configuration: webpack.Configuration = {
  mode: 'development',
  target: 'node',
  context: resolve(__dirname, '..', '..', 'scripts', 'index.ts'),
  entry: [resolve(__dirname, '..', '..', 'scripts', 'index.ts')],
  output: {
    path: resolve(__dirname, '..', '..', 'scripts'),
    filename: 'sync-development.js'
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

export default configuration;
