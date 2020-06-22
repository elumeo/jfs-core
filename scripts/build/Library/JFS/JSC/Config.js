"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = __importDefault(require("../../OS/Filesystem/File"));
var JSC;
(function (JSC) {
    class Config {
        constructor(path) {
            this.read = (configReady) => this.file.read({
                dataReady: (rawConfig) => configReady(JSON.parse(rawConfig))
            });
            this.endpoint = (jfsConfig, versionNumber = 2) => (`${jfsConfig.JscClient.Host}/client/generated/v${versionNumber}`);
            this.file = new File_1.default({ path });
        }
    }
    JSC.Config = Config;
})(JSC || (JSC = {}));
exports.default = JSC.Config;
//# sourceMappingURL=Config.js.map