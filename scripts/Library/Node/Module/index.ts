import { resolve } from "path";

class NodeModule {

  public static location = (
    path: string,
    nodeModuleName: string
  ) => resolve(
    path,
    'node_modules',
    nodeModuleName
  )

  public readonly path: string;

  constructor({ path }: NodeModule.Props) {
    this.path = path;
  }

}

namespace NodeModule {
  export type Props = {
    path: string;
  }
}

export default NodeModule;
