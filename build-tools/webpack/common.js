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
          },
          'eslint-loader'
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
        loader: "url-loader",
        options: {
          esModule: false,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          esModule: false,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader",
        options: {
          esModule: false,
          mimetype: 'application/font-woff2'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.mp3'],
    alias: {
      Core: resolve(PATH.ROOT, 'node_modules', '@elumeo', 'jfs-core', 'build')
    },
    plugins: [
      new  PathAliasPlugin({
        configFile : resolve(PATH.ROOT, 'tsconfig.json')
      })
    ]
  },
};

module.exports = common;
