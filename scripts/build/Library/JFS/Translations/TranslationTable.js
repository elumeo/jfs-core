"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const json_2_csv_1 = require("json-2-csv");
class TranslationTable {
    constructor(translations) {
        this.missingAmount = (options) => {
            return this.rows((options || {
                includeCompleteRows: false
            }).includeCompleteRows).length;
        };
        this.titleRow = () => {
            const titleRow = {
                key: `Keys (${this.keys.length})`,
            };
            this.languages.forEach(language => titleRow[language.name()] = language.name());
            return titleRow;
        };
        this.rows = (includeCompleteRows = false) => {
            const allRows = this.keys.map(translationKey => {
                const row = { key: translationKey };
                this.languages.forEach(language => row[language.name()] = language.lookup(translationKey));
                return row;
            });
            return allRows.filter((row, index) => includeCompleteRows || (!Object.keys(row).every(stringIndex => row[stringIndex])));
        };
        this.csv = (csvOptions) => {
            json_2_csv_1.json2csv(this.get(csvOptions), (error, csv) => {
                if (error) {
                    throw error;
                }
                else {
                    csvOptions.csvReady(csv);
                }
            }, {
                keys: [
                    'key',
                    ...this.languages.map(language => language.name())
                ],
                prependHeader: false
            });
        };
        this.html = (htmlOptions) => {
            htmlOptions.htmlReady([
                `<table>`,
                ...this.get(htmlOptions).map((row, rowIndex) => [
                    `<tr class=\\"${rowIndex ? 'value-row' : 'header-row'}\\">`,
                    ...['key', ...this.languages.map(language => language.name())].map((key, index) => (`<td class=\\"${index ? 'value-cell' : 'key-cell'}\\">${row[key]}</td>`)),
                    '</tr>'
                ].join('')),
                `</table>`
            ].join(''));
        };
        this.get = (options) => [
            this.titleRow(),
            ...this.rows((options || {
                includeCompleteRows: false
            }).includeCompleteRows)
        ];
        this.languages = index_1.default.languages(translations);
        this.keys = index_1.default.keys(...this.languages);
    }
}
exports.default = TranslationTable;
//# sourceMappingURL=TranslationTable.js.map