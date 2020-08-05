"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const LocalLink_1 = __importDefault(require("./LocalLink"));
class Dependency {
}
Dependency.toLocalLink = (nodePackage, name, value) => (new LocalLink_1.default({
    linkName: name,
    linkPath: path_1.resolve(nodePackage.file.parent, LocalLink_1.default.extractPath(value))
}));
exports.default = Dependency;
//# sourceMappingURL=index.js.map