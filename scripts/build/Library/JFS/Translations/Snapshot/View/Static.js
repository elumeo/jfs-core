"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.path = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const path = (name) => (0, path_1.resolve)(__dirname.replace('build', 'src'), 'public', name);
exports.path = path;
const read = (name) => fs_extra_1.default.readFile((0, exports.path)(name), 'utf8');
exports.read = read;
//# sourceMappingURL=Static.js.map