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
        loader: 'ts-loader',
        exclude: [/node_modules/],
        options: {
          allowTsInNodeModules: true,
          transpileOnly: true
        }
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader']
      },
      {
        test: /\.s*css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
            },
          },
        ]
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
    extensions: ['.ts', '.tsx', '.js', '.json'],
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
