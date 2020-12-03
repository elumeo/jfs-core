import { join, resolve } from 'path';
import { existsSync } from 'fs';
import Project from 'Library/JFS/Project';
import Config from 'Library/JFS/Config';
import Component from '../Component';

namespace App {
  export type Props = Project.Props & {

  }
}

class App extends Project {
  public readonly components: Component[];

  constructor({ path }: App.Props) {
    super({ path });
    this.components = [];
    if (existsSync(resolve(this.path, 'dist', 'config.json'))) {
      this.config = new Config(resolve(this.path, 'dist', 'config.json'));
    }
  }

  jfcPath = (jfc: Component) => join(
    `..`,
    `node_modules`,
    `${jfc.directory.name}`,
  )

  discover = (onComplete: () => void) => (
    Component.fromNodePackage(
      this.nodePackage,
      (jfc: Component[]) => {
        jfc.forEach(jfc => this.components.push(jfc));
        onComplete();
      }
    )
  );

}

export default App;
