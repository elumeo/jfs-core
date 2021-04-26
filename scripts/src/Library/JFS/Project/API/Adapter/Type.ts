export type Options = {
  namespace: string;
};

export type Property = {
  type: string;
  array: boolean;
  generics: string[];
};

export type Properties = {
  [name: string]: Property;
};