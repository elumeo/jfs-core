import { EcmaScript } from './Types';

class EcmaScript {
  static import: EcmaScript.Static.Import = ({
    what, from
  }) => `import ${what} from '${from}'`;

  static export: EcmaScript.Static.Export = what => `export ${what}`;
}

export default EcmaScript;
