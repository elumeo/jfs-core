export type Annotation = {
  type?: string,
  optional?: boolean;
  array?: boolean;
};

export type Namespace = {
  name: string;
  what: string;
}

export type Assignment = {
  name: string;
  value: string;
  generics?: string[];
  annotation?: Annotation;
}

export type Type = {
  name: string;
  generics?: string[];
  value: string;
};

export type Variable = {
  name: string;
  value?: string;
  constant?: boolean;
  annotation?: Annotation;
};

export type Function = {
  parameters: string[];
  arrow?: boolean | {
    short: boolean;
  };
  body: string | string[];
  generics?: string[];
  return: {
    type: string;
  };
};


export type Interface = {
  name: string;
  lines: string[];
}