"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Directory_1 = __importDefault(require("../../OS/Filesystem/Directory"));
const Settings_1 = __importDefault(require("./Settings"));
const Project_1 = __importDefault(require("../../JFS/Project"));
class Core extends Project_1.default {
    constructor({ path }) {
        super({ path });
        this.settings = new Settings_1.default(new Directory_1.default({ path: path_1.resolve(path, 'settings') }));
    }
}
exports.default = Core;
//# sourceMappingURL=index.js.map