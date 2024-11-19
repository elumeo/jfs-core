const development = require('./development');
const PATH = require('./PATH');

const server = {
  ...development,
  devServer: {
    static: PATH.PUBLIC,
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost',
        changeOrigin: true
      }
    ]
  }
};

module.exports = server;
