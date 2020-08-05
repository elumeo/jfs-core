export namespace JavaScript {
  export type Parameter = {
    name: string;
    defaultValue?: string;
  };

  export type Braces = {
    lines: string[];
    indentation: number
  };

  export type Variable = {
    name: string;
    value?: string;
    constant?: boolean;
  };

  export type Condition = {
    condition: string;
    match: string[];
    mismatch?: string[];
  };

  export type Assignment = {
    name: string;
    value: string;
  }

  export type Property = Assignment;

  export type Object = {
    properties: JavaScript.Property[];
  };

  export type Function = {
    parameters: JavaScript.Parameter[];
    fatArrow?: boolean | {
      shortSyntax: boolean;
    };
    body: string | string[];
    mapParameters?: (parameters: JavaScript.Parameter[]) => string;
  };

  export namespace Static {
    export type Indentation = (size: number) => string;
    export type Braces = (parameters: JavaScript.Braces) => string;
    export type Variable = (parameters: JavaScript.Variable) => string;
    export type Equal = (first: string, second: string) => string;
    export type And = (first: string, second: string) => string;
    export type Or = (first: string, second: string) => string;
    export type Condition = (parameters: JavaScript.Condition) => string;
    export type Return = (what?: string) => string;
    export type Object = (parameters: JavaScript.Object) => string;
    export type Lines = (...lines: string[]) => string;
    export type Assignment = (parameters: JavaScript.Assignment) => string;
    export type Parameter = (parameters: JavaScript.Parameter) => string;
    export type Parameters = (
      parameters: JavaScript.Parameter[],
      mapParameter?: JavaScript.Static.Parameter
    ) => string;
    export type Function = (parameters: JavaScript.Function) => string;
  }
}
