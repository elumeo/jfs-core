"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.normalize = exports.language = exports.get = exports.missing = exports.all = exports.rows = exports.title = void 0;
const File = __importStar(require("./File"));
const columns = ['de', 'en', 'it'];
const title = (translations, filter) => (Object
    .keys(translations)
    .reduce((title, language) => (Object.assign(Object.assign({}, title), { [language]: language })), { key: `Keys (${(0, exports.rows)(translations, filter).length})` }));
exports.title = title;
const rows = (translations, filter) => (filter === 'all'
    ? (0, exports.all)(translations)
    : (0, exports.missing)(translations));
exports.rows = rows;
const all = (translations) => (File.keys(translations)
    .map(key => (Object.keys(translations)
    .reduce((row, language) => (Object.assign(Object.assign({}, row), { [language]: translations[language][key] })), { key }))));
exports.all = all;
const missing = (translations) => ((0, exports.all)(translations)
    .filter(row => (!Object
    .keys(row)
    .every(index => row[index]))));
exports.missing = missing;
const get = (translations, filter = 'missing') => [
    (0, exports.title)(translations, filter),
    ...(0, exports.rows)(translations, filter)
];
exports.get = get;
const language = (rows, name) => (rows
    .reduce((messages, row) => (Object.assign(Object.assign({}, messages), { [row.key]: row[name] })), {}));
exports.language = language;
const normalize = (rows) => (rows.map(row => (Object
    .keys(row)
    .reduce((normalized, column) => {
    const key = (columns.includes(column)
        ? column
        : 'key');
    return Object.assign(Object.assign({}, normalized), { [key]: row[column] });
}, {}))));
exports.normalize = normalize;
//# sourceMappingURL=Table.js.map