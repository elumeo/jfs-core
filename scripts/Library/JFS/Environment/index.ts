import Explorer from 'Library/OS/Filesystem/Explorer';
import NodePackage from 'Library/Node/Package'
import Location from './Location';
import Head from './Head';

type Satellite = {
  path: string;
  type: Head.Type;
};

class Environment {

  public static Head: Head = null;
  public static Satellites: Satellite[] = [];
  public static Location: Location = null;

  private static satelliteType = (name: string, dependencies: {
    [key: string]: string;
  }) => {
    const pattern = 'jfc-';
    const match = name.substring(0, pattern.length) === pattern;
    const hasCoreDependency = Boolean(dependencies['@elumeo/jfs-core']);

    return (
      match && hasCoreDependency
        ? Head.Type.JFC
        : Head.Type.APP
    );
  }

  private static locationType = (list: NodePackage[]) => (
    list.length === 1
      ? Location.Type.LOCAL
      : Location.Type.REMOTE
  );

  public static detect = (onComplete: () => void) => {
    const explorer = new Explorer(__dirname);
    explorer.explore(
      NodePackage.location,
      (list) => {
        let payload = list.length;
        list
          .map((path) => new NodePackage(NodePackage.location(path)))
          .forEach(
            (nodePackage, index, nodePackageStack) => (
              nodePackage.json(
                ({ dependencies, name }) => {
                  if (index) {
                    const path = nodePackage.file.parent;
                    const type = Environment.satelliteType(name, dependencies);
                    if (!Environment.Satellites.length) {
                      Environment.Head = new Head({
                        path,
                        nodePackage,
                        type
                      });
                    }
                    Environment.Satellites.push({ path, type });
                  }
                  else {
                    Environment.Location = new Location({
                      path: nodePackage.file.parent,
                      type: Environment.locationType(nodePackageStack)
                    });
                  }

                  if (!--payload) {
                    onComplete();
                  }
                }
              )
            )
          )
      }
    );
  }

}

export default Environment;
