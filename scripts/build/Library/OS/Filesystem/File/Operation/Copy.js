"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (from, to, onComplete) => {
    fs_1.copyFile(from, to, onComplete);
};
//# sourceMappingURL=Copy.js.map
