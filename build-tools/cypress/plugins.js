const injectDevServer = require("@cypress/react/plugins/react-scripts")
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')

const setupCore10CypressPlugins = (on, config) => {
  injectDevServer(on, config, {webpackConfigPath: '@elumeo/jfs-core/settings/webpack.development'})
  addMatchImageSnapshotPlugin(on, config)
  // force color profile
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.args.push('--force-color-profile=srgb')
    }
  });
}
