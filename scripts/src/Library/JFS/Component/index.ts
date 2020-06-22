import Project from 'Library/JFS/Project';
import NodePackage from 'Library/Node/Package';
import Text from 'Library/Text';

namespace Component {
  export type Props = Project.Props & {

  }
}

class Component extends Project {
  public static fromNodePackage = (
    nodePackage: NodePackage,
    onComplete: (jfc: Component[]) => void
  ) => nodePackage.json(
    ({ dependencies }) => onComplete(
      Object.keys(dependencies)
        .filter(name => Text.beginsWith(name, 'jfc-'))
        .map(jfcKey => new Component({
          path: nodePackage.nodeModule(jfcKey).path
        }))
    )
  );
}

export default Component;
