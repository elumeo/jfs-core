"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TsConfig_1 = __importDefault(require("../../../TypeScript/TsConfig"));
const Package_1 = __importDefault(require("../../../Node/Package"));
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
const Text_1 = __importDefault(require("../../../Text"));
const JSC_1 = __importDefault(require("../../../JFS/JSC"));
class JFC {
    constructor({ path, isHead }) {
        this.isHead = isHead || false;
        this.path = path;
        this.directory = new Directory_1.default({ path });
        this.nodePackage = new Package_1.default(Package_1.default.location(path));
        this.tsConfig = new TsConfig_1.default(TsConfig_1.default.location(path));
        this.name = this.directory.name
            .substring('jfc-'.length)
            .split('-')
            .map(Text_1.default.capitalize)
            .join('');
        this.aliasPrefix = `Jfc/${this.name}`;
        this.pathPrefix = (this.isHead
            ? `./`
            : `../node_modules/${this.directory.name}`);
        this.JSC = new JSC_1.default(JSC_1.default.location(path));
    }
}
JFC.fromNodePackage = (nodePackage, onComplete) => nodePackage.json(({ dependencies }) => onComplete(Object.keys(dependencies)
    .filter(name => Text_1.default.beginsWith(name, 'jfc-'))
    .map(jfcKey => new JFC({ path: nodePackage.nodeModule(jfcKey).path }))));
exports.default = JFC;
//# sourceMappingURL=index.js.map