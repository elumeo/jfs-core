"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const path_1 = require("path");
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
class Mirror {
    constructor({ sourceFile, virtualFile }) {
        this.apply = () => {
            const { relativePath } = Array(Math.max(this.virtualFile.predecessors.length, this.sourceFile.predecessors.length))
                .fill(null)
                .map((_, index) => ({
                virtual: this.virtualFile.predecessors[index] || null,
                source: this.sourceFile.predecessors[index] || null
            }))
                .reduce(({ relativePath, equal }, { virtual, source }) => {
                if (equal) {
                    if (virtual !== source) {
                        equal = !equal;
                        return {
                            relativePath: ['.', source].join(path_1.sep),
                            equal
                        };
                    }
                }
                else {
                    if (virtual) {
                        return {
                            relativePath: ['..', relativePath, source].join(path_1.sep),
                            equal
                        };
                    }
                    else {
                        return {
                            relativePath: [relativePath, source].join(path_1.sep),
                            equal
                        };
                    }
                }
                return { relativePath, equal };
            }, { relativePath: '', equal: true });
            (new Directory_1.default({ path: this.virtualFile.parent })).create(() => this.sourceFile.read({
                dataReady: (data) => this.virtualFile.write({
                    data: [
                        `export * from '${File_1.default.removeExtension(relativePath)}';`,
                        ...(data.includes('export default')
                            ? [
                                `import d from '${File_1.default.removeExtension(relativePath)}';`,
                                `export default d;`
                            ]
                            : [])
                    ].join('\n')
                })
            }));
        };
        this.sourceFile = sourceFile;
        this.virtualFile = virtualFile;
    }
}
exports.default = Mirror;
//# sourceMappingURL=index.js.map