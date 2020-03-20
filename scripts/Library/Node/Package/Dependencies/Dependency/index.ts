import { resolve } from "path";
import LocalLink from "./LocalLink";
import NodePackage from "../..";

class Dependency {

  public static toLocalLink = (
    nodePackage: NodePackage,
    name: string,
    value: string
  ) => (
    new LocalLink({
        linkName: name,
        linkPath: resolve(
          nodePackage.file.parent,
          LocalLink.extractPath(value)
        )
    })
  );
}

export default Dependency;
