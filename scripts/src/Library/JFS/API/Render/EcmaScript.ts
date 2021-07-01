import * as Type from './Type';

const _import = ({ what, from }: Type.EcmaScript.Import) => `import ${what} from '${from}'`;
const _export = (what: string) => `export ${what}`;

export { _import as import, _export as export };
