"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Text {
}
Text.lines = (...lines) => lines.join('\n');
Text.capitalize = (text) => text[0].toUpperCase() + text.substring(1);
exports.default = Text;
//# sourceMappingURL=index.js.map