"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.default = (path, onComplete) => {
    path_1.dirname(path).split(path_1.sep).reduce((parent, segment) => {
        if (parent) {
            const path = (parent.length > 1
                ? `${parent}${path_1.sep}${segment}`
                : `${parent}${segment}`);
            if (!fs_1.existsSync(path)) {
                fs_1.mkdirSync(path);
            }
            return path;
        }
        else {
            return `${path_1.sep}${segment}`;
        }
    }, null);
    fs_1.mkdir(path, onComplete);
};
//# sourceMappingURL=Create.js.map