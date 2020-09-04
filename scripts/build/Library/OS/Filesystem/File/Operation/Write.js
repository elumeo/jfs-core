"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const Operation_1 = require("../../Directory/Operation");
const fs_1 = require("fs");
exports.default = (path, data, onComplete) => Operation_1.create(path_1.dirname(path), () => fs_1.writeFile(path, data, (error) => {
    if (error) {
        throw error;
    }
    else if (onComplete) {
        onComplete();
    }
}));
//# sourceMappingURL=Write.js.map