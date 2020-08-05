const { resolve } = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common.js');

const mode = process.argv.includes('--watch') ? 'watch' : 'devServer';
const https = mode === 'devServer' && process.argv.includes('--https');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    ...common.plugins,
    new ForkTsCheckerWebpackPlugin({ tsconfig: resolve('./tsconfig.json') }),
    new CompressionPlugin({ test: [/\.tsx/, /\.ts/, /\.js/], minRatio: 0.1 }),
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
      poll: 1500,
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
