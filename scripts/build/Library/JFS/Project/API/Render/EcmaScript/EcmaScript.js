"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EcmaScript {
}
EcmaScript.import = ({ what, from }) => `import ${what} from '${from}'`;
EcmaScript.export = (what) => `export ${what}`;
exports.default = EcmaScript;
//# sourceMappingURL=EcmaScript.js.map