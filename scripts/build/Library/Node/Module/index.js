"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
class NodeModule {
    constructor({ path }) {
        this.path = path;
    }
}
NodeModule.location = (path, nodeModuleName) => path_1.resolve(path, 'node_modules', nodeModuleName);
exports.default = NodeModule;
//# sourceMappingURL=index.js.map