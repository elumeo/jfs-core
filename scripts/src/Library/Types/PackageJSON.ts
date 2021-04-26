type PackageJSON = {
  name: string;
  version: string;
  description: string;
  author: string;
  devDependencies: string;
  scripts: {
    [name: string]: string;
  };
  dependencies: {
    [name: string]: string;
  };
  jfs: {
    sync: {
      [project: string]: string;
    }
  }
};

export default PackageJSON;