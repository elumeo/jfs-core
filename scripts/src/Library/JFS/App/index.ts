import { join } from 'path';
import Project from 'Library/JFS/Project';
import Component from '../Component';

namespace App {
  export type Props = Project.Props & {

  }
}

class App extends Project {
  protected readonly components: Component[];

  constructor({ path }: App.Props) {
    super({ path });
    this.components = [];
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
