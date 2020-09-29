const { resolve } = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const common = require('./webpack.common.js');

const mode = process.argv.includes('--watch') ? 'watch' : 'devServer';
const https = mode === 'devServer' && process.argv.includes('--https');

module.exports = {
  ...common,
  devtool: 'inline-source-map',
  module: {
    ...common.module,
    rules: [
      ...common.module.rules,
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      }
    ]
  },
  mode: 'development',
  plugins: [
    ...common.plugins,
    new ForkTsCheckerWebpackPlugin({ tsconfig: resolve('tsconfig.json') }),
    new webpack.NamedModulesPlugin()
  ]
};

const overrideHostAndPort = (host = 'localhost', port = 8080) => {
  module.exports.devServer.host = host;
  module.exports.devServer.port = port;
  const entry = module.exports.entry[0];
  module.exports.entry = () => [
    `webpack-dev-server/client?http://${host}:${port}/`,
    'webpack/hot/only-dev-server',
    entry
  ];
  module.exports.output.publicPath = `http://localhost:${port}/`;
};

if (mode === 'devServer') {
  module.exports.devServer = {
    https,
    contentBase: resolve('dist'),
    hot: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
    disableHostCheck: true,
    publicPath: '/',
    watchOptions: {
      poll: (
        process.platform === 'darwin'
          ? undefined
          : 1500
      ),
      aggregateTimeout: 200
    }
  };

  try {
    const { host, port } = require(resolve('local'));
    overrideHostAndPort(host, port);
  }
  catch (error) {
    console.log(error);
    overrideHostAndPort();
  }


  module.exports.module.rules[0].use.shift({ loader: 'react-hot-loader/webpack' });
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}
