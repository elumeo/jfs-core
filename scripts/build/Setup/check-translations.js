"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = require("ansi-colors");
const JFS_1 = __importDefault(require("../Library/JFS"));
const Snapshot_1 = __importDefault(require("../Library/JFS/Project/Translations/Snapshot"));
const opn_1 = __importDefault(require("opn"));
const Job_1 = __importDefault(require("../Library/Job"));
const Translations_1 = __importDefault(require("../Library/JFS/Project/Translations"));
const File_1 = __importDefault(require("../Library/OS/Filesystem/File"));
const checkTranslations = ({ open }) => new Job_1.default({
    name: 'jfs-translation-check',
    task: onComplete => JFS_1.default.discover(() => __awaiter(void 0, void 0, void 0, function* () {
        const translations = new File_1.default({
            path: Translations_1.default.location(JFS_1.default.Head.path)
        });
        const previous = yield Snapshot_1.default.previous(translations);
        const current = yield Snapshot_1.default.current(translations);
        if (previous) {
            Snapshot_1.default.update(previous, current, onComplete);
        }
        else {
            const missing = current.translations.missing(current.includeCompleteRows);
            if (missing.length) {
                const html = yield current.file('html');
                Snapshot_1.default.create(1, current, () => onComplete({ missing, url: html && html.path || null }));
            }
            else {
                onComplete({ missing, url: null });
            }
        }
    })),
    onComplete: ({ missing, url }, status) => {
        if (missing.length) {
            status('NOT_OK', `${ansi_colors_1.bold('INCOMPLETE')}: ${missing.length} translations missing`);
            if (url && open) {
                opn_1.default(url);
            }
        }
        else {
            status('OK');
        }
    }
});
checkTranslations({ open: true }).run();
//# sourceMappingURL=check-translations.js.map