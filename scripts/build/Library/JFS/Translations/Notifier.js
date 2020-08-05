"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = __importDefault(require("ansi-colors"));
class Notifier {
}
Notifier.tellAboutMissingTranslations = (missingLanguageKeys) => {
    const output = [
        ansi_colors_1.default.red('❌ There are missing translations'),
        '',
        ...missingLanguageKeys.map(({ languageName, missingKeys }) => ansi_colors_1.default.yellow(`   '${languageName}': ${missingKeys.length}`)),
        ''
    ].join('\n');
    console.log(output);
};
Notifier.tellAboutCompleteTranslations = () => {
    console.log(ansi_colors_1.default.green('️✔️  There are no missing translations'));
};
exports.default = Notifier;
//# sourceMappingURL=Notifier.js.map