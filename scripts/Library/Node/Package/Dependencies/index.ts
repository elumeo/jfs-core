import NodePackage from "..";
import Dependency from "./Dependency";
import LocalLink from "./Dependency/LocalLink";

class Dependencies {
  private nodePackage: NodePackage;

  constructor(nodePackage: NodePackage) {
    this.nodePackage = nodePackage;
  }

  public value = (
    valueReady: (value: any) => void
  ) => {
    this.nodePackage.json(
      ({ dependencies }) => valueReady(dependencies)
    )
  }

  public detect = (
    dependencies: {
      [key: string]: string;
  }) => (
    Object.keys(dependencies)
        .filter(
          dependencyName => LocalLink.isLocalLink(
            dependencies[dependencyName]
          )
        )
        .map((dependencyName: string) => Dependency.toLocalLink(
          this.nodePackage,
          dependencyName,
          dependencies[dependencyName]
        ))
  );

}

export default Dependencies;
