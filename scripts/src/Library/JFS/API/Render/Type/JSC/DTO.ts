export type Property = {
  type: string;
  array: boolean;
  generics: string[];
};

export type Description = {
  name: string;
  generics: string[];
  properties: {
    [property: string]: Property;
  };
};

export type Constant = {
  name: string;
  value: string;
};

export type Namespace = {
  name: string;
  constants: Constant[];
  dtos: Description[];
  namespaces: Namespace[];
};