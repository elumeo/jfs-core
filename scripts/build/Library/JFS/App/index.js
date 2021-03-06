"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const fs_1 = require("fs");
const Project_1 = __importDefault(require("../../JFS/Project"));
const Config_1 = __importDefault(require("../../JFS/Config"));
const Component_1 = __importDefault(require("../Component"));
class App extends Project_1.default {
    constructor({ path }) {
        super({ path });
        this.jfcPath = (jfc) => path_1.join(`..`, `node_modules`, `${jfc.directory.name}`);
        this.discover = (onComplete) => (Component_1.default.fromNodePackage(this.nodePackage, (jfc) => {
            jfc.forEach(jfc => this.components.push(jfc));
            onComplete();
        }));
        this.components = [];
        if (fs_1.existsSync(path_1.resolve(this.path, 'dist', 'config.json'))) {
            this.config = new Config_1.default(path_1.resolve(this.path, 'dist', 'config.json'));
        }
    }
}
exports.default = App;
//# sourceMappingURL=index.js.map