"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
class TranslationTable {
    constructor(translations) {
        this.missingAmount = (keys, languages, options) => {
            return this.rows(keys, languages, (options || {
                includeCompleteRows: false
            }).includeCompleteRows).length;
        };
        this.titleRow = (keys, languages) => {
            const titleRow = { key: `Keys (${this.missingAmount(keys, languages)})` };
            languages.forEach(language => (titleRow[language.name()] = language.name()));
            return titleRow;
        };
        this.rows = (keys, languages, includeCompleteRows = false) => {
            const allRows = keys.map(translationKey => {
                const row = { key: translationKey };
                languages.forEach(language => row[language.name()] = language.lookup(translationKey));
                return row;
            });
            return allRows.filter(row => includeCompleteRows || (!Object.keys(row).every(stringIndex => row[stringIndex])));
        };
        this.get = (options) => [
            this.titleRow(this.keys, this.languages),
            ...this.rows(this.keys, this.languages, (options || { includeCompleteRows: false }).includeCompleteRows)
        ];
        this.languages = new index_1.default(translations).languages();
        this.keys = new index_1.default(translations).keys();
    }
}
//  export default TranslationTable;
//# sourceMappingURL=TranslationTable.js.map