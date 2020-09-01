"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (path, onComplete) => (fs_1.existsSync(path) && fs_1.unlink(path, (error) => {
    if (error) {
        throw error;
    }
    else if (onComplete) {
        onComplete();
    }
}));
//# sourceMappingURL=Remove.js.map