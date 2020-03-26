import TsConfig from 'Library/TypeScript/TsConfig';
import NodePackage from 'Library/Node/Package';
import File from 'Library/OS/Filesystem/File';
import Directory from 'Library/OS/Filesystem/Directory';
import Text from 'Library/Text';
import Virtual from 'Library/JFS/Virtual';
import { resolve } from 'path';

namespace Path {
  export const removeWildcard = (path: string) => Text.removeSuffix(
    path,
    '/*'
  );
}

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

    this.pathMappings = {
      'Core/*': ['../node_modules/@elumeo/jfs-core/src/*'],
      [`Jfc/${this.name}/Action/*`]: [`./Store/Action/*`],
      [`Jfc/${this.name}/Component`]: [`./Component/index.tsx`],
      [`Jfc/${this.name}/Component/*`]: [`./Component/*`],
      [`Jfc/${this.name}/Mock/*`]: [`./Mock/*`],
      [`Jfc/${this.name}/JscApi`]: [`./Jsc/JscApi.ts`],
      [`Jfc/${this.name}/Setup`]: [`./index.ts`]
    }
  }

  setup = (onComplete: () => void) => this.tsConfig.update({
    patcher: (tsConfig) => ({
      ...tsConfig,
      compilerOptions: {
        ...tsConfig.compilerOptions,
        paths: this.pathMappings
      }
    }),
    onComplete
  })

  virtualize = (onComplete: () => void) => {
    const virtualEnvironment = new Virtual.Environment({
      root: this.path,
      source: resolve(this.path, 'src')
    });

    Object
      .keys(this.pathMappings)
      .forEach(
        alias => {
          const virtualPath = virtualEnvironment.createVirtualPath(
            Text.removePrefix(
              alias,
              `${this.aliasPrefix}/`
            )
          );

          const sourcePath = virtualEnvironment.createSourcePath(
            Text.removePrefix(
              this.pathMappings[alias][0],
              `${this.pathPrefix}/`
            )
          );

          if (Text.endsWith(sourcePath, '/*')) {
            const directory = new Directory({
              path: Path.removeWildcard(sourcePath)
            });

            const addDirectory = (directory: Directory) => {
              if (directory.exists()) {
                directory.files(
                  files => {
                    files.forEach(
                      file => virtualEnvironment.addMirror({
                        sourcePath: file.path,
                        virtualPath: resolve(
                          Path.removeWildcard(virtualPath),
                          file.name
                        )
                      })
                    )

                    directory.directories(
                      directories => directories.forEach(
                        addDirectory
                      )
                    )
                  }
                )
              }
            }

            directory.create(() => addDirectory(directory));
          }
          else {
            const fileWithoutSuffix = new File({
              path: sourcePath
            });

            const sourceParent = new Directory({
              path: fileWithoutSuffix.parent
            });

            sourceParent.files(
              files => {
                const fileWithSuffix = files.find(
                  file => Text.beginsWith(
                    file.name,
                    fileWithoutSuffix.name
                  )
                );

                if (fileWithSuffix) {
                  const { path, name } = fileWithSuffix;
                  const suffix = Text.removePrefix(
                    name,
                    fileWithoutSuffix.name
                  );
                  virtualEnvironment.addMirror({
                    sourcePath: path,
                    virtualPath: `${virtualPath}${suffix}`
                  });
                }
              }
            );

          }
        }
      )

    setTimeout(
      () => {
        virtualEnvironment.mirrors.forEach(mirror => mirror.apply());
        onComplete();
      },
      1000
    );
  }

}

namespace JFC {
  export type Props = {
    path: string;
    isHead?: boolean;
  }
}

export default JFC;
