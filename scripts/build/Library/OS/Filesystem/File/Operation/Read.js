"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
exports.default = (path, options) => {
    const shortSyntax = typeof options === 'function';
    const encoding = (shortSyntax
        ? 'utf8'
        : options.encoding);
    const onComplete = (shortSyntax
        ? options
        : options.onComplete);
    fs_1.readFile(path, encoding, (error, data) => {
        if (error) {
            throw error;
        }
        else {
            onComplete(data);
        }
    });
};
//# sourceMappingURL=Read.js.map