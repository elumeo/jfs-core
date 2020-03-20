import NodePackage from 'Library/Node/Package';
import TsConfig from 'Library/TypeScript/TsConfig';
import LocalLink from './LocalLink';
import { JFS } from 'Library/JFS/Config';
import JSC from 'Library/JFS/JSC';
import Directory from 'Library/OS/Filesystem/Directory';

class Head {
  public readonly path: string;
  public readonly type: Head.Type;
  public readonly directory: Directory;
  public readonly nodePackage: NodePackage;
  public readonly tsConfig: TsConfig;
  public readonly config: JFS.Config;
  public readonly JSC: JSC;

  constructor({ path, type }: Head.Props) {
    this.path = path;
    this.type = type;
    this.directory = new Directory({ path });
    this.nodePackage = new NodePackage(NodePackage.location(path));
    this.tsConfig = new TsConfig(TsConfig.location(path));
    this.config = new JFS.Config(JFS.Config.location(path));
    this.JSC = new JSC(JSC.location(path));
  }

  synchronize = (...syncDirectoryNames: string[]) => {
    this.nodePackage.json(
      ({ dependencies }) => {
        const localLinks: LocalLink[] = Object.keys(dependencies)
            .filter(
              dependencyName => LocalLink.isLocalLink(
                dependencies[dependencyName]
              )
            )
            .map((dependencyName: string) => LocalLink.fromDependency(
              this.nodePackage,
              dependencyName,
              dependencies[dependencyName]
            ));

        if (!localLinks.length) {
          LocalLink.warnNoLocalLinks();
        }
        else {
          LocalLink.showLocalLinks(localLinks);
        }

        localLinks.forEach((localLink: LocalLink) => localLink.sync(
          this.nodePackage.file.parent,
          syncDirectoryNames
        ));
      }
    );
  }

}

namespace Head {
  export type Props = {
    path: string;
    type: Head.Type;
    nodePackage: NodePackage;
  }
  export enum Type {
    APP = 'app',
    JFC = 'jfc'
  }
}

export default Head;
