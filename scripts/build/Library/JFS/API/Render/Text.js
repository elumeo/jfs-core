"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.lines = void 0;
const lines = (...lines) => lines.join('\n');
exports.lines = lines;
const capitalize = (text) => text[0].toUpperCase() + text.substring(1);
exports.capitalize = capitalize;
//# sourceMappingURL=Text.js.map