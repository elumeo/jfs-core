import { JavaScript } from '../JavaScript/Types';

export namespace TypeScript {
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

  export type Parameter = JavaScript.Parameter & Annotation;

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
    parameters: Parameter[];
    fatArrow?: boolean | {
      shortSyntax: boolean;
    };
    body: string | string[];
    generics?: string[];
    returnAnnotation: {
      type: string;
    };
  };


  export type Interface = {
    name: string;
    generics?: string[];
    lines: string[];
  }

  export namespace Static {
    export type Annotation = (parameters: TypeScript.Annotation) => string;
    export type Generics = (...generics: string[]) => string;
    export type Parameter = (parameters: TypeScript.Parameter) => string;
    export type Parameters = (parameters: TypeScript.Parameter[]) => string;
    export type Namespace = (parameters: TypeScript.Namespace) => string;
    export type Assignment = (parameters: TypeScript.Assignment) => string;
    export type Type = (parameter: TypeScript.Type) => string;
    export type Variable = (parameter: TypeScript.Variable) => string;
    export type Function = (parameter: TypeScript.Function) => string;
    export type Interface = (parameters: TypeScript.Interface) => string;
  }
}
