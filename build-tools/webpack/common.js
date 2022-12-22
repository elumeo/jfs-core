const PATH = require('./PATH');
const PathAliasPlugin = require('tsconfig-paths-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
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
        include: PATH.SOURCE,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', {
                  "modules": false
                }],
                '@babel/preset-react',
                '@babel/preset-typescript'
              ],
              plugins: [
                ['@babel/transform-runtime', {
                  regenerator: true
                }],
                "@babel/plugin-proposal-class-properties",
                [
                  'babel-plugin-import',
                  {
                    'libraryName': '@material-ui/core',
                    'libraryDirectory': 'esm',
                    'camel2DashComponentName': false
                  },
                  'core'
                ],
                [
                  'babel-plugin-import',
                  {
                    'libraryName': '@material-ui/icons',
                    'libraryDirectory': 'esm',
                    'camel2DashComponentName': false
                  },
                  'icons'
                ]
              ]
            }
          }
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.mp3$/,
        use: ['file-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.eot(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: "asset/inline"
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: "asset/inline"
      },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: "asset/inline"
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mp3'],
    alias: {
      Core: resolve(PATH.ROOT, 'node_modules', '@elumeo', 'jfs-core', 'build'),
      'react-virtualized': resolve(PATH.ROOT, 'node_modules', '@enykeev', 'react-virtualized'),
    },
    plugins: [
      new PathAliasPlugin({
        configFile: resolve(PATH.ROOT, 'tsconfig.json')
      })
    ]
  },
  plugins: [
    new ESLintWebpackPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      exclude: 'node_modules'
    })
  ]
};

module.exports = common;
