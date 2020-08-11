export namespace CompilerOptions {
  export type Paths = {
    [key: string]: string[];
  }
}

export type CompilerOptions = {
  outDir: string;
  baseUrl: string;
  incremental: boolean;
  removeComments: boolean;
  sourceMap: boolean;
  paths: {
    [key: string]: string[];
  }
}

type TsConfig = {
  compilerOptions: CompilerOptions;
}

export default TsConfig;
