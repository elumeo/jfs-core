import App from './App';
import Core from './Core';
import Environment from './Environment';
import Location from './Environment/Location';
import Head from './Environment/Head';
import JFC from './App/JFC';

class JFS {
  public static Environment = Environment;
  public static Core: Core;
  public static App: App;
  public static Component: JFC;

  public static discover = (
    onComplete: () => void
  ) => {
    const { Environment } = JFS;
    Environment.detect(
      () => {
        const { path } = Environment.Location;
        JFS.Core = new Core({ path });
        if (Environment.Location.type === Location.Type.REMOTE) {
          if (Environment.Head.type === Head.Type.APP) {
            JFS.App = new App({
              path: Environment.Head.path
            });
          }
          else if (Environment.Head.type === Head.Type.JFC) {
            JFS.Component = new JFC({
              path: Environment.Head.path,
              isHead: true
            });
          }
        }
        onComplete();
      }
    )
  }
}

export default JFS;
