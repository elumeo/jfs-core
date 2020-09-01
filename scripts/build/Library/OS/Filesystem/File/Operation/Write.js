"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (path, data, onComplete) => {
    fs_1.writeFile(path, data, (error) => {
        if (error) {
            throw error;
        }
        else if (onComplete) {
            onComplete();
        }
    });
};
//# sourceMappingURL=Write.js.map