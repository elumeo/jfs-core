"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const events_1 = __importDefault(require("events"));
class FsNode {
    constructor(props) {
        this.stats = (statsReady) => fs_1.lstat(this.path, (error, stats) => {
            if (error) {
                throw error;
            }
            else {
                statsReady(stats);
            }
        });
        this.exists = () => fs_1.existsSync(this.path);
        this.path = props.path;
        this.segments = props.path.split(path_1.sep);
        this.predecessors = this.segments.slice(0, this.segments.length - 1);
        this.name = this.segments[this.segments.length - 1];
        this.parent = this.predecessors.join(path_1.sep) || path_1.sep;
        this.emitter = new events_1.default;
    }
}
exports.default = FsNode;
//# sourceMappingURL=FsNode.js.map