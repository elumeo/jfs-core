"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Explorer_1 = __importDefault(require("../../OS/Filesystem/Explorer"));
const Package_1 = __importDefault(require("../../Node/Package"));
const Location_1 = __importDefault(require("./Location"));
const Head_1 = __importDefault(require("./Head"));
class Environment {
}
Environment.Head = null;
Environment.Satellites = [];
Environment.Location = null;
Environment.satelliteType = (name, dependencies) => {
    const pattern = 'jfc-';
    const match = name.substring(0, pattern.length) === pattern;
    const hasCoreDependency = Boolean(dependencies['@elumeo/jfs-core']);
    return (match && hasCoreDependency
        ? Head_1.default.Type.COMPONENT
        : Head_1.default.Type.APP);
};
Environment.locationType = (list) => (list.length === 2
    ? Location_1.default.Type.LOCAL
    : Location_1.default.Type.REMOTE);
Environment.detect = (onComplete) => {
    const explorer = new Explorer_1.default(__dirname);
    explorer.explore(Package_1.default.location, list => {
        let payload = list.length;
        list
            .map(path => new Package_1.default(Package_1.default.location(path)))
            .forEach((nodePackage, index, nodePackageStack) => (nodePackage.json(({ dependencies, name }) => {
            if (index > 1) {
                const path = nodePackage.file.parent;
                const type = Environment.satelliteType(name, dependencies);
                if (!Environment.Satellites.length) {
                    Environment.Head = new Head_1.default({
                        path,
                        nodePackage,
                        type
                    });
                }
                Environment.Satellites.push({ path, type });
            }
            else if (index === 1) {
                Environment.Location = new Location_1.default({
                    path: nodePackage.file.parent,
                    type: Environment.locationType(nodePackageStack)
                });
            }
            if (!--payload) {
                onComplete();
            }
        })));
    });
};
// export default Environment;
//# sourceMappingURL=index.js.map