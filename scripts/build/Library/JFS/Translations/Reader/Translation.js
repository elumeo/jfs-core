"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.locales = exports.merge = void 0;
const CSV = __importStar(require("./CSV"));
const Locale = __importStar(require("./Locale"));
const merge = (first, second) => {
    const unique = (data) => Array.from(new Set(data));
    const keys = unique([first, second].map(Object.keys).flat());
    const add = (locales, key) => {
        locales[key] = Locale.merge(first[key], second[key]);
        return locales;
    };
    return keys.reduce(add, {});
};
exports.merge = merge;
const locales = (body, languages) => (languages
    .reduce(add(body, keys(body)), {}));
exports.locales = locales;
const keys = (body) => CSV.column(body, `Keys (${body.length})`);
const add = (body, keys) => ((locales, name) => {
    locales[name] = Locale.get(keys, CSV.column(body, name));
    return locales;
});
//# sourceMappingURL=Translation.js.map