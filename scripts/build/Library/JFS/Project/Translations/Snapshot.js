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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
const Text_1 = __importDefault(require("../../../Text"));
const json_2_csv_1 = require("json-2-csv");
const path_1 = require("path");
const PageRenderer_1 = __importDefault(require("./PageRenderer"));
const _1 = __importDefault(require("."));
const View_1 = __importDefault(require("./View"));
class Snapshot {
    constructor({ translations, subject, includeCompleteRows, version }) {
        this.csv = (onComplete) => {
            json_2_csv_1.json2csv(this.translations.table(this.includeCompleteRows), (error, csv) => {
                if (error) {
                    throw error;
                }
                else {
                    onComplete(csv);
                }
            }, {
                keys: [
                    'key',
                    ...this.translations.languages().map(language => language.name())
                ],
                prependHeader: false
            });
        };
        this.file = (extension) => new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            return resolve((yield Snapshot.files(this.subject)).find(({ name }) => Text_1.default.endsWith(name, `.${extension}`)));
        }));
        this.remove = (onComplete) => {
            this.file('html')
                .then(html => html.remove(() => (this.file('csv')
                .then(csv => csv.remove(onComplete)))));
        };
        this.subject = subject;
        this.translations = new _1.default(translations);
        this.includeCompleteRows = includeCompleteRows;
        this.version = version;
    }
}
Snapshot.renderer = new PageRenderer_1.default({
    pageDirectoryPath: path_1.resolve(__dirname.replace('/build', '/src'), 'public')
});
Snapshot.prefix = 'missing.translations.v';
Snapshot.suffix = '.csv';
Snapshot.parseVersion = (fileName) => parseInt(Text_1.default.between(fileName, Snapshot.prefix, Snapshot.suffix));
Snapshot.pattern = [
    /(?<=missing.translations.v)(.*)(?=.html)/,
    /(?<=missing.translations.v)(.*)(?=.csv)/,
];
Snapshot.mapCsvToTranslations = (translations, columns = ['de', 'en', 'it']) => translations.reduce((mapped, _a) => {
    var { key } = _a, languages = __rest(_a, ["key"]);
    return columns.map((language) => (Object.assign(Object.assign({}, mapped[language]), { [key]: languages[language] }))).reduce((joined, language, index) => (Object.assign(Object.assign({}, joined), { [columns[index]]: language })), {});
}, {});
Snapshot.files = (subject) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        new Directory_1.default({
            path: subject.parent
        })
            .files(files => resolve(files.filter(({ name }) => Snapshot.pattern.some(pattern => Boolean(name.match(pattern))))));
    });
});
Snapshot.previous = (subject) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield Snapshot.files(subject);
    const file = files.find(file => Text_1.default.endsWith(file.name, '.csv'));
    if (file) {
        file.read(csv => {
            json_2_csv_1.csv2json(csv, (error, data) => {
                if (error) {
                    throw error;
                }
                else {
                    resolve(new Snapshot({
                        translations: Snapshot.mapCsvToTranslations(data.map(entry => Object.keys(entry).reduce((mapped, key) => {
                            if (['de', 'en', 'it'].includes(key)) {
                                return Object.assign(Object.assign({}, mapped), { [key]: entry[key] });
                            }
                            else {
                                return Object.assign(Object.assign({}, mapped), { key: entry[key] });
                            }
                        }, {}))),
                        subject,
                        includeCompleteRows: false,
                        version: Snapshot.parseVersion(file.name)
                    }));
                }
            });
        });
    }
    else {
        resolve(null);
    }
}));
Snapshot.current = (subject, includeCompleteRows = false) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(resolve => {
        subject.json(translations => resolve(new Snapshot({
            translations,
            subject,
            includeCompleteRows,
            version: null
        })));
    });
});
Snapshot.difference = (previous, current) => new Promise((resolve) => __awaiter(void 0, void 0, void 0, function* () {
    if (previous) {
        previous.csv(data => current.csv(csv => resolve(data !== csv)));
    }
}));
Snapshot.create = (version, snapshot, onComplete) => {
    snapshot.csv((csv) => __awaiter(void 0, void 0, void 0, function* () {
        const csvFile = new File_1.default({
            path: path_1.resolve(snapshot.subject.parent, [Snapshot.prefix, version.toString(), Snapshot.suffix].join(''))
        });
        csvFile.create(() => csvFile.write(csv, () => View_1.default.create(version, snapshot, onComplete)));
    }));
};
Snapshot.replace = (previous, current, onComplete) => Snapshot.create(previous.version + 1, current, () => previous.remove(() => onComplete()));
Snapshot.update = (previous, current, onComplete) => (Snapshot.difference(previous, current)
    .then((isDifferent) => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = isDifferent ? current : previous;
    const { includeCompleteRows } = snapshot;
    const missing = snapshot.translations.missing(includeCompleteRows);
    const html = yield snapshot.file('html');
    if (isDifferent) {
        if (missing.length) {
            Snapshot.replace(previous, current, () => onComplete({
                missing, url: html.path,
            }));
        }
        else {
            previous.remove(() => onComplete({ missing, url: null }));
        }
    }
    else {
        onComplete({ missing, url: html.path });
    }
})));
exports.default = Snapshot;
//# sourceMappingURL=Snapshot.js.map