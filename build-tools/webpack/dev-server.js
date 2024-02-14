const development = require('./development');
const PATH = require('./PATH');

const server = {
  ...development,
  devServer: {
    static: PATH.PUBLIC,
    hot: true,
    proxy: [{
      '/api': 'http://localhost',
    }],
    client: {
      overlay: {
        errors: false,
        warnings: false,
        runtimeErrors: false,
      },
    },
  },
};

module.exports = server;
