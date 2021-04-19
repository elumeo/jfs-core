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
            loader: 'babel-loader',
            options: {
              presets: ['@babel/react', ['@babel/env', { modules: false, loose: true }]],
              plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-export-namespace-from']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              allowTsInNodeModules: true,
              transpileOnly: true
            }
          }
        ]
      },
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   use: ['source-map-loader']
      // }
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

  },
  plugins: [
    
    // new BundleAnalyzerPlugin({
    //   analyzerPort: 6000
    // })
  ],
};
module.exports =  common;
