const common = require('./common');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATH = require('./PATH');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  ...common,
  mode: 'development',
  output: {
    filename: PATH.BUNDLE_NAME,
    path: PATH.PUBLIC
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [ 
        { from: PATH.CONFIGURATION_DEV, to: PATH.CONFIGURATION_DIST }
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PATH.HTML_TEMPLATE,
      inject: false,
      templateParameters: {
        BUNDLE_FILE_NAME : PATH.BUNDLE_NAME
      }      
    })
]
};

module.exports = development;
