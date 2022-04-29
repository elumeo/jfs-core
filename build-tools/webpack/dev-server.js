const development = require('./development');
const PATH = require('./PATH');

const server = {
  ...development,
  devServer: {
    hot: true,
    static: {
      directory: PATH.PUBLIC,
      publicPath: '/',
    },
    proxy: {
      '/api': 'http://localhost'
    }
  }
};

module.exports = server;
