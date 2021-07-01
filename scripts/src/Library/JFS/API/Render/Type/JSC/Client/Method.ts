export type Name = string;
export type Resource = {
  path: string;
  type: {
    name: string;
    generics: string[];
    array: boolean;
  };
  room: string;
};
export type Protocol = {
  name: 'HTTP' | 'WS';
  method: 'get' | 'put' | 'post' | 'patch' | 'delete' | 'join';
  namespace: 'Jsc2Jfs' | 'Jfs2Jsc';
};
export type Parameter = {
  name: string;
  type: string;
  optional: boolean;
  array: boolean;
}
export type Description = {
  name: Name;
  genericTypes: string[];
  resource: Resource;
  protocol: Protocol;
  parameters: Parameter[];
}