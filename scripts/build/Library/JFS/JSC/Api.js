"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = __importDefault(require("../../OS/Filesystem/File"));
class Api {
    constructor(path) {
        this.parseHash = (apiString) => (apiString
            .match(/export const JSC_API_VERSION: string = '(.*)';/g)[0]);
        this.version = (versionReady) => this.read(apiString => versionReady(this.parseHash(apiString)));
        this.update = (apiString, updateComplete) => {
            this.file.write({
                data: apiString,
                dataWritten: updateComplete
            });
        };
        this.path = path;
        this.file = new File_1.default({ path: this.path });
    }
    read(apiStringReady) {
        this.file.read({
            dataReady: apiStringReady
        });
    }
}
exports.default = Api;
//# sourceMappingURL=Api.js.map