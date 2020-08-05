"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const Language_1 = __importDefault(require("./Language"));
class Translations {
    constructor(translations) {
        this.languages = () => (Object.keys(Object.keys(this.translations).length
            ? this.translations
            : { de: {}, en: {}, it: {} }).map(languageName => new Language_1.default({
            languageName,
            translationList: this.translations[languageName]
        })));
        this.keys = () => {
            const languages = this.languages();
            const allTranslationKeys = new Set();
            languages.forEach(language => (language.translationKeys()
                .forEach(translationKey => allTranslationKeys.add(translationKey))));
            return Array.from(allTranslationKeys);
        };
        // ---------------------------------------------------------------------------
        this.rows = (includeCompleteRows = false) => {
            const languages = this.languages();
            const keys = this.keys();
            const allRows = keys.map(translationKey => {
                const row = { key: translationKey };
                languages.forEach(language => row[language.name()] = language.lookup(translationKey));
                return row;
            });
            return allRows.filter(row => includeCompleteRows || (!Object.keys(row).every(stringIndex => row[stringIndex])));
        };
        this.missing = (includeCompleteRows = false) => (this.rows(includeCompleteRows));
        this.titleRow = (languages) => {
            const titleRow = { key: `Keys (${this.missing().length})` };
            languages.forEach(language => (titleRow[language.name()] = language.name()));
            return titleRow;
        };
        this.table = (includeCompleteRows = false) => [
            this.titleRow(this.languages()),
            ...this.rows(includeCompleteRows)
        ];
        this.translations = translations;
    }
}
Translations.location = (path) => path_1.resolve(path, 'src', 'Setup', 'Translations.json');
Translations.get = (path, onComplete) => new File_1.default({
    path: Translations.location(path)
}).json(translations => onComplete(translations));
exports.default = Translations;
//# sourceMappingURL=index.js.map