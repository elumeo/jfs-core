"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.match = void 0;
const match = (text, pattern) => (text.substring(0, pattern.length) === pattern);
exports.match = match;
const remove = (text, prefix) => ((0, exports.match)(text, prefix)
    ? text.substring(prefix.length, text.length)
    : text);
exports.remove = remove;
//# sourceMappingURL=Prefix.js.map