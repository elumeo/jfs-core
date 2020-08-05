"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Text;
(function (Text) {
    Text.beginsWith = (text, pattern) => (text.substring(0, pattern.length) === pattern);
    Text.endsWith = (text, pattern) => (text.substring(text.length - pattern.length, text.length) === pattern);
    Text.capitalize = text => text[0].toUpperCase() + text.substring(1);
    Text.removePrefix = (text, prefix) => text.substring(prefix.length, text.length);
    Text.removeSuffix = (text, suffix) => (Text.endsWith(text, suffix)
        ? text.substring(0, text.length - suffix.length)
        : text);
    Text.between = (text, prefix, suffix) => {
        return text.substring(prefix.length, prefix.length + (text.length - (prefix.length
            + suffix.length)));
    };
})(Text || (Text = {}));
exports.default = Text;
//# sourceMappingURL=index.js.map