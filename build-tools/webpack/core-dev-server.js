const devServer = require('./dev-server');
const PATH = require('./PATH');

const server = {
  ...devServer,

  entry: PATH.ENTRYPOINT_SHOWCASE,
  context: PATH.SOURCE,
};

module.exports = server;
