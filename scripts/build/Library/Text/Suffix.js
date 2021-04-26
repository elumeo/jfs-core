"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.match = void 0;
const match = (text, pattern) => (text.substring(text.length - pattern.length, text.length) === pattern);
exports.match = match;
const remove = (text, suffix) => (exports.match(text, suffix)
    ? text.substring(0, text.length - suffix.length)
    : text);
exports.remove = remove;
//# sourceMappingURL=Suffix.js.map