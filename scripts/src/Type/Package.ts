export type Script = {
  name: string;
  command: string;
}

export type JSON = {
  name: string;
  version: string;
  description: string;
  author: string;
  devDependencies: Record<string, string>
  scripts: Record<string, string>;
  dependencies: Record<string, string>;
};
