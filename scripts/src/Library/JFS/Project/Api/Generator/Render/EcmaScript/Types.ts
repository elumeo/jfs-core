export namespace EcmaScript {
  export type Import = {
    what: string;
    from: string;
  }

  export namespace Static {
    export type Import = (parameters: EcmaScript.Import) => string;
    export type Export = (what: string) => string;
  }
}
