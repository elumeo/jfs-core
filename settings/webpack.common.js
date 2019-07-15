const { resolve, join } = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: [
      resolve(__dirname, '..', '..', '..', 'src'),
      resolve(__dirname, '..', '..')
    ]
  },

  context: resolve(__dirname, '..', 'app'),
  entry: ['./Main.tsx'],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', '..', '..', 'dist'),
    publicPath: ''
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', ['es2015', { modules: false, loose: true }]],
              plugins: ['transform-runtime', 'lodash']
            }
          },
          'awesome-typescript-loader'
        ]
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  performance: { hints: false }
};
