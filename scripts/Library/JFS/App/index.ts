import NodePackage from 'Library/Node/Package';
import Directory from 'Library/OS/Filesystem/Directory';
import Config from '../Config';
import JSC from '../JSC';
import { App } from './Type';
import JFC from './JFC';
import Text from 'Library/Text';
import Translations from './Translations';
import TsConfig from 'Library/TypeScript/TsConfig';
import { resolve } from 'path';
import Virtual from 'Library/JFS/Virtual';

class App {
  public static readonly Translations = Translations;

  public readonly path: string;
  public readonly nodePackage: NodePackage;
  public readonly tsConfig: TsConfig;
  public readonly JSC: JSC;
  public readonly directory: Directory;
  public readonly config: Config;
  public readonly JFC: JFC[];

  constructor({ path }: App.Props) {
    this.path = path;
    this.directory = new Directory({ path });
    this.nodePackage = new NodePackage(NodePackage.location(path));
    this.JSC = new JSC(JSC.location(path));
    this.tsConfig = new TsConfig(TsConfig.location(path));
    this.config = new Config(Config.location(path));
    this.JFC = [];
  }

  setup = (onComplete: () => void) => {
    this.discover(
      (jfc: JFC[]) => {
        jfc.forEach(jfc => this.JFC.push(jfc));
        this.tsConfig.update({
          patcher: (tsConfig: any) => (
            this.JFC
              .map(({ pathMappings }) => pathMappings)
              .reduce(TsConfig.addPathMapping, tsConfig)
          ),
          onComplete: () => {
            this.JFC.forEach(
              jfc => {
                const virtual = new Virtual.Environment({
                  root: jfc.path,
                  source: resolve(jfc.path, 'src')
                });

                Object
                  .keys(jfc.pathMappings)
                  .forEach(
                    alias => {
                      const virtualPath = resolve(
                        virtual.root,
                        Text.removePrefix(
                          alias,
                          `${jfc.aliasPrefix}/`
                        )
                      );

                      const sourcePath = resolve(
                        virtual.source.path,
                        Text.removePrefix(
                          jfc.pathMappings[alias][0],
                          `${jfc.pathPrefix}/`
                        )
                      );

                      if (Text.endsWith(sourcePath, '/*')) {
                        const directory = new Directory({
                          path: Text.removeSuffix(
                            sourcePath,
                            '/*'
                          )
                        });

                        const addDirectory = (directory: Directory) => {
                          if (directory.exists()) {
                            directory.files(
                              files => {
                                files.forEach(
                                  file => {
                                    virtual.addMirror({
                                      sourcePath: file.path,
                                      virtualPath: resolve(
                                        Text.removeSuffix(
                                          virtualPath,
                                          '/*'
                                        ),
                                        file.name
                                      )
                                    })
                                  }
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

                        addDirectory(directory);
                      }
                      else {
                        virtual.addMirror({
                          sourcePath,
                          virtualPath
                        });
                      }
                    }
                  )

                setTimeout(
                  () => {
                    virtual.mirrors.forEach(mirror => mirror.apply())
                  },
                  1000
                );
              }
            )

            /*this.JFC.forEach(
              jfc => {
                jfc.tsConfig.file.read({
                  dataReady: (data: string) => {
                    Object.keys(jfc.pathMappings)
                      .forEach((alias) => {
                        const virtualPath = TsConfig.removeWildcard(
                          Text.removePrefix(
                            alias,
                            `${jfc.aliasPrefix}/`
                          )
                        );
                        const localPath = resolve(
                          jfc.path,
                          JSON.parse(data).compilerOptions.baseUrl,
                          TsConfig.removeWildcard(
                            Text.removePrefix(
                              jfc.pathMappings[alias][0],
                              `${jfc.pathPrefix}${sep}`
                            )
                          )
                        );

                        console.log({
                          virtualPath,
                          localPath
                        });
                      })
                  }
                })
              }
            )
            onComplete();*/
          }
        });
      }
    );
  }

  discover = (onComplete: (jfc: JFC[]) => void) => (
    JFC.fromNodePackage(this.nodePackage, onComplete)
  );

}

export default App;
