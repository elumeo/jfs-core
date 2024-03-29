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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = exports.languages = exports.rows = exports.create = exports.options = void 0;
const json_2_csv_1 = require("json-2-csv");
const Table = __importStar(require("./Table"));
const columns = ['de', 'en', 'it'];
exports.options = {
    keys: ['key', ...columns],
    prependHeader: false
};
const create = (rows) => (new Promise((resolve, reject) => ((0, json_2_csv_1.json2csv)(rows, (error, csv) => (error
    ? reject(error)
    : resolve(csv)), exports.options))));
exports.create = create;
const rows = (csv) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield new Promise((resolve, reject) => ((0, json_2_csv_1.csv2json)(csv, (error, rows) => (error
        ? reject(error)
        : resolve(Table.normalize(rows)))))));
});
exports.rows = rows;
const languages = (csv) => Promise.all(columns
    .map((column) => __awaiter(void 0, void 0, void 0, function* () {
    return ({
        name: column,
        messages: Table.language(yield (0, exports.rows)(csv), column)
    });
})));
exports.languages = languages;
const json = (csv) => __awaiter(void 0, void 0, void 0, function* () {
    return ((yield (0, exports.languages)(csv))
        .reduce((translations, { name, messages }) => (Object.assign(Object.assign({}, translations), { [name]: messages })), {}));
});
exports.json = json;
//# sourceMappingURL=CSV.js.map