import CLI from 'Library/OS/CLI';
import Deployment from 'Library/JFS/Core/Settings/Deployment';
import JFS from 'Library/JFS';
import Location from 'Library/JFS/Environment/Location';

const blackList = [
  'webpack.common.js', 'webpack.development.js', 'webpack.production.js',
  'webpack.scripts.js', 'copyLocal.js'
];

JFS.discover(
  () => {
    const { Environment, Core } = JFS;
    Core.settings.compose(
      CLI.parameter('scripts-mode')
        ? 'scripts'
        : 'frontend',
      settings => {
        settings.forEach(setting => setting.setBlackList(...blackList));

        const onComplete = () => {};

        if (Environment.Location.type === Location.Type.LOCAL) {
          new Deployment({
            path: Environment.Location.path,
            settings,
            onComplete
          });
        }
        else if (Environment.Location.type === Location.Type.REMOTE) {
          new Deployment({
            path: Environment.Head.path,
            settings,
            onComplete: () => {
              if (JFS.App) {
                JFS.App.setup(() => {

                });
              }
              else if (JFS.Component) {
                JFS.Component.setup(() => {
                  // console.log(JFS.Component);
                });
              }
            }
          });
        }
      }
    );
  }
);
