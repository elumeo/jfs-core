export type Braces = {
  lines: string[];
  indentation: number
};

export type Variable = {
  name: string;
  value?: string;
};

export type Assignment = {
  name: string;
  value: string;
};

export type Object = {
  properties: Assignment[];
};

export type Function = {
  parameters: string[];
  arrow?: boolean | {
    short: boolean;
  };
  body: string | string[];
};

export type Condition = {
  condition: string;
  match: string[];
  mismatch?: string[];
};