"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dependency_1 = __importDefault(require("./Dependency"));
const LocalLink_1 = __importDefault(require("./Dependency/LocalLink"));
class Dependencies {
    constructor(nodePackage) {
        this.value = (valueReady) => {
            this.nodePackage.json(({ dependencies }) => valueReady(dependencies));
        };
        this.detect = (dependencies) => (Object.keys(dependencies)
            .filter(dependencyName => LocalLink_1.default.isLocalLink(dependencies[dependencyName]))
            .map((dependencyName) => Dependency_1.default.toLocalLink(this.nodePackage, dependencyName, dependencies[dependencyName])));
        this.nodePackage = nodePackage;
    }
}
exports.default = Dependencies;
//# sourceMappingURL=index.js.map