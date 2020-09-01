const { resolve } = require('path');
const copyLocal = require('./copyLocal');
copyLocal();

// ----------------------------------------------------------------------------

const HtmlWebpackPlugin = require('html-webpack-plugin');

const generateAliases = () => {
  const tsConfigPath = resolve('tsconfig.json');
  const { compilerOptions: { baseUrl, paths } } = require(tsConfigPath);

  const removePatternFromPath = (path) => {
    const pattern = '/*';
    if (path.substring(path.length -pattern.length, path.length) === pattern) {
      return path.substring(0, path.length -pattern.length);
    }
    else {
      return path;
    }
  }

  return Object.keys(paths)
    .map(
      (pathKey) => {
        return {
          [removePatternFromPath(pathKey)]: resolve(
            baseUrl,
            removePatternFromPath(paths[pathKey][0])
          )
        };
      }
    )
    .reduce(
      (aliases, alias) => ({
        ...aliases,
        ...alias
      }),
      {}
    )
}

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [resolve('src'), 'node_modules'],
    alias: generateAliases()
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
              allowTsInNodeModules: true,
              transpileOnly: true
            }
          }
        ]
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
    })
  ],
  performance: { hints: false },
};
