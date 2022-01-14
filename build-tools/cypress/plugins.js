const injectDevServer = require("@cypress/react/plugins/react-scripts")
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')

// noinspection JSUnusedLocalSymbols
module.exports.setupJfsCoreCypressPlugins = (on, config) => {
  injectDevServer(on, config, {webpackConfigPath: '@elumeo/jfs-core/build-tools/webpack/dev-server'})
  addMatchImageSnapshotPlugin(on, config)
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--force-color-profile=srgb')
    }
  });
}
