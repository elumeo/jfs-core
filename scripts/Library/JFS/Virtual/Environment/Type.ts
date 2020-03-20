namespace Environment {
  export type Props = {
    root: string;
    source: string;
  }

  export interface IDetect {
    virtualPath: string;
    sourcePath: string;
  }
}

export default Environment;
