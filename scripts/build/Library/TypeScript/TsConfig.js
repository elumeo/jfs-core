"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = __importDefault(require("../OS/Filesystem/File"));
const path_1 = require("path");
const Text_1 = __importDefault(require("../Text"));
class TsConfig {
    constructor(path) {
        this.update = ({ patcher, onComplete }) => {
            this.file.update({
                patcher: (data) => JSON.stringify(patcher(JSON.parse(data)), null, 2),
                onComplete
            });
        };
        this.path = path;
        this.file = new File_1.default({ path });
    }
}
TsConfig.location = (path) => path_1.resolve(path, 'tsconfig.json');
TsConfig.pathMappings = ({ prefix, pathPrefix }) => ({
    [`${prefix}/Action/*`]: [`${pathPrefix}/Store/Action/*`],
    [`${prefix}/Component/*`]: [`${pathPrefix}/Component/*`],
    [`${prefix}/JscApi`]: [`${pathPrefix}/Jsc/JscApi`],
    [`${prefix}/Mock/*`]: [`${pathPrefix}/Mock/*`],
    [`${prefix}/Setup/*`]: [`${pathPrefix}/Setup/*`]
});
TsConfig.removeWildcard = (text) => Text_1.default.removeSuffix(text, '/*');
TsConfig.addPathMapping = (tsconfig, pathMapping) => (Object.assign(Object.assign({}, tsconfig), { compilerOptions: Object.assign(Object.assign({}, tsconfig.compilerOptions), { paths: Object.assign(Object.assign({}, tsconfig.compilerOptions.paths), pathMapping) }) }));
// export default TsConfig;
//# sourceMappingURL=TsConfig.js.map