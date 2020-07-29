type CompilerOptions = {
  outDir: string;
  baseUrl: string;
  paths: {
    [key: string]: string[];
  }
}

type TsConfig = {
  compilerOptions: CompilerOptions;
}

export default TsConfig;
