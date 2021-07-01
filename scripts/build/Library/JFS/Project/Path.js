"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = exports.build = exports.src = void 0;
const path_1 = __importDefault(require("path"));
const src = (root) => path_1.default.resolve(root, 'src');
exports.src = src;
const build = (root) => path_1.default.resolve(root, 'build');
exports.build = build;
const scripts = (core) => path_1.default.resolve(core, 'scripts');
exports.scripts = scripts;
//# sourceMappingURL=Path.js.map