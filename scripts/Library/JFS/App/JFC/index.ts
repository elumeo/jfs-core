import TsConfig from 'Library/TypeScript/TsConfig';
import NodePackage from 'Library/Node/Package';
import Directory from 'Library/OS/Filesystem/Directory';
import Text from 'Library/Text';

class JFC {
  public readonly isHead: boolean;
  public readonly name: string;
  public readonly path: string;
  public readonly aliasPrefix: string;
  public readonly pathPrefix: string;
  public readonly directory: Directory;
  public readonly nodePackage: NodePackage;
  public readonly tsConfig: TsConfig;
  public readonly pathMappings: {
    [name: string]: string[]
  }

  public static fromNodePackage = (
    nodePackage: NodePackage,
    onComplete: (jfc: JFC[]) => void
  ) => nodePackage.json(
    ({ dependencies }) => onComplete(
      Object.keys(dependencies)
        .filter(name => Text.beginsWith(name, 'jfc-'))
        .map(jfcKey => new JFC({ path: nodePackage.nodeModule(jfcKey).path }))
    )
  );

  constructor({ path, isHead }: JFC.Props) {
    this.isHead = isHead || false;
    this.path = path;
    this.directory = new Directory({ path });
    this.nodePackage = new NodePackage(NodePackage.location(path));
    this.tsConfig = new TsConfig(TsConfig.location(path));
    this.name = this.directory.name
      .substring('jfc-'.length)
      .split('-')
      .map(Text.capitalize)
      .join('')
    this.aliasPrefix = `Jfc/${this.name}`;
    this.pathPrefix = (
      this.isHead
        ? `./`
        : `../node_modules/${this.directory.name}`
    );

    this.pathMappings = TsConfig.pathMappings({
      prefix: this.aliasPrefix,
      pathPrefix: this.pathPrefix
    });
  }

  setup = (onComplete: () => void) => {
    onComplete();
  }

}

namespace JFC {
  export type Props = {
    path: string;
    isHead?: boolean;
  }
}

export default JFC;
