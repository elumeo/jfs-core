const  development = require('./development');
const  PATH = require('./PATH');
 
const server = {
  ...development,
  devServer: {
    publicPath: '/',
    contentBase: PATH.PUBLIC,
    proxy: {
      '/api': 'http://localhost'
    }
  } 
};

module.exports = server;
