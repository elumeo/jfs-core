import File from 'Library/OS/Filesystem/File';
import { resolve } from 'path';
import Text from 'Library/Text';

class TsConfig {

  static location = (path: string) => resolve(path, 'tsconfig.json');

  static pathMappings = ({
    prefix,
    pathPrefix
  }: {
    prefix: string;
    pathPrefix: string;
  }) => ({
    [`${prefix}/Action/*`]: [`${pathPrefix}/Store/Action/*`],
    [`${prefix}/Component/*`]: [`${pathPrefix}/Component/*`],
    [`${prefix}/JscApi`]: [`${pathPrefix}/Jsc/JscApi`],
    [`${prefix}/Mock/*`]: [`${pathPrefix}/Mock/*`],
    [`${prefix}/Setup/*`]: [`${pathPrefix}/Setup/*`]
  });

  static removeWildcard = (text: string) => Text.removeSuffix(
    text,
    '/*'
  )

  public readonly path: string;
  public readonly file: File;

  constructor(path: string) {
    this.path = path;
    this.file = new File({ path });
  }

  static addPathMapping = (
    tsconfig: {
      compilerOptions: {
        paths: {
          [name: string]: string[]
        }
      }
    },
    pathMapping: {
      [name: string]: string[]
    }
  ) => ({
    ...tsconfig,
    compilerOptions: {
      ...tsconfig.compilerOptions,
      paths: {
        ...tsconfig.compilerOptions.paths,
        ...pathMapping
      }
    }
  })

  update = ({ patcher, onComplete }: TsConfig.IUpdate) => {
    this.file.update({
      patcher: (data: string) => JSON.stringify(
        patcher(JSON.parse(data)),
        null,
        2
      ),
      onComplete
    })
  }

}

namespace TsConfig {

  export interface IUpdate {
    patcher: (json: any) => any;
    onComplete: () => void;
  }

}

export default TsConfig;
