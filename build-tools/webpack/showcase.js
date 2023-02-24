const PATH = require('./PATH');
const production = require('./production');
const rimraf = require('rimraf');
rimraf.sync(PATH.PUBLIC_SHOWCASE);

process.env.NODE_ENV = 'production';

const showcase = {
  ...production,
  entry: PATH.ENTRYPOINT_SHOWCASE,
  context: PATH.SOURCE,
  output: {
    filename: PATH.UNIQUE_BUNDLE_NAME,
    path: PATH.PUBLIC_SHOWCASE,
    publicPath: ''
  },
};

module.exports = showcase;
