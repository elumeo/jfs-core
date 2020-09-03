"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FsNode_1 = __importDefault(require("../FsNode"));
const Operation = __importStar(require("./Operation"));
class File extends FsNode_1.default {
    constructor() {
        super(...arguments);
        this.open = () => Operation.open(this.path);
        this.create = (onComplete) => Operation.create(this.path, this.predecessors, onComplete);
        this.read = (options) => Operation.read(this.path, options);
        this.write = (data, onComplete) => Operation.write(this.path, data, onComplete);
        this.remove = (onComplete) => Operation.remove(this.path, onComplete);
        this.copy = (to, onComplete) => Operation.copy(this.path, to, () => onComplete(new File({ path: to })));
        this.move = (to, onComplete) => Operation.move(this.path, to, () => onComplete(new File({ path: to })));
        this.json = (onComplete) => Operation.json(this.path, onComplete);
        this.update = ({ patcher, onComplete }) => Operation.update(this.path, { patcher, onComplete });
        this.csv = (onComplete) => Operation.csv(this.path, onComplete);
        this.save = (data, onComplete) => Operation.save(this.path, data, onComplete);
    }
}
exports.default = File;
//# sourceMappingURL=index.js.map