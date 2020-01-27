const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['react', ['es2015', { modules: false, loose: true }]],
    plugins: ['transform-runtime', 'lodash']
  }
};

const atLoader = { loader: 'awesome-typescript-loader' }

const typescriptRule = {
  test: /\.tsx?$/,
  use: [
    babelLoader,
    atLoader
  ]
};

const sassRule = {
  test: /\.s*css$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
}

const jsonRule = {
  test: /\.json$/,
  loaders: ['json-loader']
}

module.exports = [
  typescriptRule,
  sassRule,
  jsonRule
];

module.exports.typescriptRule = typescriptRule;
module.exports.babelLoader = babelLoader;
module.exports.atLoader = atLoader;

module.exports.sassRule = sassRule;
module.exports.jsonRule = jsonRule;
