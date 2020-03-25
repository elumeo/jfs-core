import { join } from 'path';
import NodePackage from 'Library/Node/Package';
import Directory from 'Library/OS/Filesystem/Directory';
import Config from '../Config';
import JSC from '../JSC';
import { App } from './Type';
import JFC from './JFC';
import Translations from './Translations';
import TsConfig from 'Library/TypeScript/TsConfig';

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

  jfcPath = (jfc: JFC) => join(
    `..`,
    `node_modules`,
    `${jfc.directory.name}`,
  )

  jfcPathMapping = (jfc: JFC) => ({
    [`Jfc/${jfc.name}/Action/*`]: [`${this.jfcPath(jfc)}/src/Store/Action/*`],
    [`Jfc/${jfc.name}/Component`]: [`${this.jfcPath(jfc)}/src/Component/index.tsx`],
    [`Jfc/${jfc.name}/Component/*`]: [`${this.jfcPath(jfc)}/src/Component/*`],
    [`Jfc/${jfc.name}/Mock/*`]: [`${this.jfcPath(jfc)}/src/Mock/*`],
    [`Jfc/${jfc.name}/JscApi`]: [`${this.jfcPath(jfc)}/src/Jsc/JscApi.ts`],
    [`Jfc/${jfc.name}/Setup`]: [`${this.jfcPath(jfc)}/src/index.ts`]
  })

  addJfcPathMappings = (tsConfig: any) => this.JFC.reduce(
    (tsConfig, jfc) => TsConfig.addPathMapping(
      tsConfig,
      this.jfcPathMapping(jfc)
    ),
    tsConfig
  );

  setupTsConfig = (onComplete: () => void) => this.tsConfig.update({
    patcher: this.addJfcPathMappings,
    onComplete: () => this.JFC.forEach(jfc => jfc.virtualize(onComplete))
  });

  setup = (onComplete: () => void) => {
    this.discover(() => this.setupTsConfig(onComplete));
  }

  discover = (onComplete: () => void) => (
    JFC.fromNodePackage(
      this.nodePackage,
      (jfc: JFC[]) => {
        jfc.forEach(jfc => this.JFC.push(jfc));
        onComplete();
      }
    )
  );

}

export default App;
