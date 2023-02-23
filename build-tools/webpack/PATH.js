const { resolve } = require('path');

const ROOT = process.cwd();//resolve(__dirname, '..');
const PACKAGE_JSON = resolve(ROOT, 'package.json');
const PUBLIC = resolve(ROOT, 'dist');
const PUBLIC_SHOWCASE = resolve(ROOT, 'showcase-dist');
const BUNDLE_NAME = 'bundle.js';
const BUNDLE = resolve(PUBLIC, BUNDLE_NAME);
const UNIQUE_BUNDLE_NAME = `bundle_${require(PACKAGE_JSON).version}.js`;
const UNIQUE_BUNDLE = resolve(PUBLIC, UNIQUE_BUNDLE_NAME);
const SOURCE = resolve(ROOT, 'src');
const SHOWCASE = resolve(SOURCE, 'Showcase');
const ENTRYPOINT = resolve(SOURCE, 'index.tsx');
const ENTRYPOINT_SHOWCASE = resolve(SHOWCASE, 'index.tsx');
const JSC = resolve(SOURCE, 'Jsc')
const SETUP = resolve(SOURCE, 'Setup')
const UTILITIES = resolve(SOURCE, 'Utilities')
const COMPONENT = resolve(SOURCE, 'Component')
const CONSTANT = resolve(SOURCE, 'Constant')
const STORE = resolve(SOURCE, 'Store')
const TYPE = resolve(SOURCE, 'Types');
const LOCAL = resolve(__dirname, '..');
const STATIC = resolve(LOCAL, 'static');
const FAVICON = resolve(STATIC, 'favicon.ico')
const HTML_TEMPLATE = resolve(STATIC, 'index.html');
const CONFIGURATION = resolve(ROOT, 'config');
const CONFIGURATION_DIST = resolve(PUBLIC, 'config.json');
const CONFIGURATION_DEV = resolve(ROOT, 'config.json');
const ACTION = resolve(STORE, 'Action');

module.exports = {
   ACTION,
   BUNDLE_NAME,
   BUNDLE,
   COMPONENT,
   CONFIGURATION_DEV,
   CONFIGURATION_DIST,
   CONFIGURATION,
   CONSTANT,
   ENTRYPOINT,
   ENTRYPOINT_SHOWCASE,
   FAVICON,
   HTML_TEMPLATE,
   JSC,
   PUBLIC,
   PUBLIC_SHOWCASE,
   ROOT,
   SETUP,
   SOURCE,
   STATIC,
   STORE,
   TYPE,
   UNIQUE_BUNDLE_NAME,
   UNIQUE_BUNDLE,
   UTILITIES,
}
