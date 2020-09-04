"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operation_1 = require("../../Directory/Operation");
const fs_1 = require("fs");
const path_1 = require("path");
exports.default = (path, onComplete) => {
    Operation_1.create(path_1.dirname(path), () => fs_1.appendFile(path, '', (error) => {
        if (error) {
            throw error;
        }
        else if (onComplete) {
            onComplete();
        }
    }));
};
//# sourceMappingURL=Create.js.map