const PATH = require('./PATH');
const PathAliasPlugin = require('tsconfig-paths-webpack-plugin');
const { resolve } = require('path');

const common = {
  mode: 'none',
  entry: PATH.ENTRYPOINT,
  context: PATH.SOURCE,
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true,
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            exclude: /^((?!elumeo\/jfs-core).)*$/,
            options: {
              presets: [['@babel/env', { modules: false, loose: true }]],
              plugins: ["@babel/plugin-proposal-export-namespace-from"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      Core: resolve(PATH.ROOT, 'node_modules', '@elumeo', 'jfs-core')
    },
    plugins: [
      new  PathAliasPlugin({
        configFile : resolve(PATH.ROOT, 'tsconfig.json')
      })
    ],
  }
};
module.exports =  common;
