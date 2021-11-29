"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.files = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const files = (root, locales) => Promise.all(Object
    .keys(locales)
    .map(name => file(path_1.default.resolve(root, `${name}.json`), locales[name])));
exports.files = files;
const file = (path, data) => (fs_extra_1.default.writeFile(path, JSON.stringify(data, null, 2)));
//# sourceMappingURL=Output.js.map