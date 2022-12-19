const development = require('./development');
const PATH = require('./PATH');

const server = {
  ...development,
  devServer: {
    static: PATH.PUBLIC,
    hot: true,
    proxy: {
      '/api': 'http://localhost'
    }
  }
};

module.exports = server;
