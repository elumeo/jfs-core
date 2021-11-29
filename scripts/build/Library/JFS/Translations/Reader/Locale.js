"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.merge = void 0;
const unique = (values) => Array.from(new Set(values));
const merge = (first, second) => {
    const keys = unique([first, second].map(Object.keys).flat());
    const add = (locale, key) => {
        const value = second[key] || first[key];
        if (value) {
            locale[key] = value;
        }
        return locale;
    };
    return keys.reduce(add, {});
};
exports.merge = merge;
const get = (keys, values) => (keys
    .reduce(add(values), {}));
exports.get = get;
const add = (values) => ((locale, key, index) => {
    locale[key] = values[index];
    return locale;
});
//# sourceMappingURL=Locale.js.map