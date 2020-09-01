"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const events_1 = __importDefault(require("events"));
class FsNode {
    constructor({ path }) {
        this.stats = (onReady) => fs_1.lstat(this.path, (error, stats) => {
            if (error) {
                throw error;
            }
            else {
                onReady(stats);
            }
        });
        this.exists = () => fs_1.existsSync(this.path);
        this.trace = (origin = this) => {
            if (origin.path.length > 1) {
                return [
                    ...this.trace(new FsNode({ path: origin.parent })),
                    origin.path
                ];
            }
            else {
                return [path_1.sep];
            }
        };
        this.path = path.replace('/', path_1.sep).replace('\\', path_1.sep);
        this.segments = path.split(path_1.sep);
        this.predecessors = this.segments.slice(0, this.segments.length - 1);
        this.name = this.segments[this.segments.length - 1];
        this.parent = this.predecessors.join(path_1.sep) || path_1.sep;
        this.emitter = new events_1.default;
    }
}
exports.default = FsNode;
//# sourceMappingURL=FsNode.js.map