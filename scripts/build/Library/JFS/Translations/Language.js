"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Language {
    constructor(props) {
        this.translationKeys = () => Object.keys(this.translationList);
        this.missingKeys = (keyList) => {
            const existingKeys = this.translationKeys();
            return keyList.filter(keyListEntry => !existingKeys.includes(keyListEntry));
        };
        this.name = () => this.languageName;
        this.lookup = (key) => {
            return this.translationList[key] || '';
        };
        this.translationList = props.translationList;
        this.languageName = props.languageName;
    }
}
exports.default = Language;
//# sourceMappingURL=Language.js.map