"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const ansi_colors_1 = __importDefault(require("ansi-colors"));
const opn_1 = __importDefault(require("opn"));
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const Directory_1 = __importDefault(require("../../../OS/Filesystem/Directory"));
const CLI_1 = __importDefault(require("../../../OS/CLI"));
const Language_1 = __importDefault(require("./Language"));
const TranslationTable_1 = __importDefault(require("./TranslationTable"));
const PageRenderer_1 = __importDefault(require("./PageRenderer"));
class Translations {
}
Translations.translationsFile = new File_1.default({
    path: path_1.resolve(process.cwd(), CLI_1.default.parameter('project-path') || '.', 'src', 'Setup', 'Translations.json')
});
Translations.renderer = new PageRenderer_1.default({
    pageDirectoryPath: path_1.resolve(__dirname, ...(CLI_1.default.parameter('development')
        ? ['..', '..']
        : []), 'Resources', 'check-lang', 'public')
});
Translations.get = (translationsReady) => {
    Translations.translationsFile.read({
        dataReady: (translationsString) => translationsReady(JSON.parse(translationsString))
    });
};
Translations.languages = (translations) => Object.keys(translations).map(languageName => new Language_1.default({
    languageName,
    translationList: translations[languageName]
}));
Translations.keys = (...languages) => {
    const allTranslationKeys = new Set();
    languages.forEach(language => (language.translationKeys()
        .forEach(translationKey => allTranslationKeys.add(translationKey))));
    return Array.from(allTranslationKeys);
};
Translations.table = (tableReady) => Translations.get(translations => tableReady(new TranslationTable_1.default(translations)));
Translations.csv = (csvOptions) => Translations.table(translationTable => translationTable.csv(csvOptions));
Translations.html = (htmlOptions) => Translations.table(translationTable => translationTable.html(htmlOptions));
Translations.generateViewContent = ({ includeCompleteRows, viewContentReady }) => Translations.csv({
    includeCompleteRows,
    csvReady: csvString => Translations.html({
        includeCompleteRows,
        htmlReady: htmlString => viewContentReady({
            csvString,
            htmlString
        })
    })
});
Translations.setupDirectory = () => new Directory_1.default({
    path: Translations.translationsFile.parent
});
Translations.lastHtmlFile = (fileFound) => {
    Translations.setupDirectory().files(files => {
        const pattern = /(?<=missing.translations.v)(.*)(?=.html)/;
        fileFound(files.find(({ name }) => Boolean(name.match(pattern))));
    });
};
Translations.lastCsvFile = (fileFound) => {
    Translations.setupDirectory().files(files => {
        const pattern = /(?<=missing.translations.v)(.*)(?=.csv)/;
        fileFound(files.find(({ name }) => Boolean(name.match(pattern).length)));
    });
};
Translations.createView = ({ csvString, htmlString, versionNumber, viewCreated }) => {
    const htmlFile = new File_1.default({
        path: path_1.resolve(Translations.setupDirectory().path, `missing.translations.v${versionNumber}.html`)
    });
    const csvFile = new File_1.default({
        path: path_1.resolve(Translations.setupDirectory().path, `missing.translations.v${versionNumber}.csv`)
    });
    Translations.renderer.renderPreview({
        scriptInjection: [
            `const htmlTable = \"${htmlString}\";`,
            `const csvPath = \"${csvFile.path}\";`
        ].join(''),
        previewReady: preview => csvFile.create({
            fileCreated: () => csvFile.write({
                data: csvString,
                dataWritten: () => htmlFile.create({
                    fileCreated: () => htmlFile.write({
                        data: preview,
                        dataWritten: () => viewCreated(htmlFile.path)
                    })
                })
            })
        })
    });
};
Translations.updateView = (htmlString, csvString, viewUpdated) => {
    Translations.lastHtmlFile(lastHtmlFile => lastHtmlFile.read({
        dataReady: data => {
            const [versionNumber] = lastHtmlFile.name.match(/(?<=missing.translations.v)(.*)(?=.html)/);
            if (!data.includes(htmlString)) {
                Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({
                    fileRemoved: () => lastHtmlFile.remove({})
                }));
                Translations.createView({
                    htmlString,
                    csvString,
                    versionNumber: JSON.parse(versionNumber) + 1,
                    viewCreated: htmlPath => viewUpdated(htmlPath)
                });
            }
            else {
                viewUpdated(lastHtmlFile.path);
            }
        }
    }));
};
Translations.removeView = (viewRemoved) => {
    Translations.lastHtmlFile(lastHtmlFile => Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({
        fileRemoved: () => lastHtmlFile.remove({
            fileRemoved: () => viewRemoved()
        })
    })));
};
Translations.check = (checkOptions) => {
    Translations.lastHtmlFile((lastHtmlFile) => {
        if (!lastHtmlFile) {
            Translations.generateViewContent({
                includeCompleteRows: (checkOptions || {}).includeCompleteRows,
                viewContentReady: ({ csvString, htmlString }) => {
                    if (csvString.split('\n').length - 1) {
                        Translations.createView({
                            htmlString,
                            csvString,
                            versionNumber: 1,
                            viewCreated: htmlPath => opn_1.default(htmlPath)
                        });
                    }
                    else {
                        console.log(ansi_colors_1.default.green('No translations missing.'));
                    }
                }
            });
        }
        else {
            Translations.generateViewContent({
                viewContentReady: ({ htmlString, csvString }) => {
                    if (csvString.split('\n').length - 1) {
                        Translations.updateView(htmlString, csvString, htmlPath => opn_1.default(htmlPath));
                    }
                    else {
                        Translations.removeView(() => {
                            console.log(ansi_colors_1.default.green('No translations missing.'));
                        });
                    }
                }
            });
        }
    });
};
exports.default = Translations;
//# sourceMappingURL=index.js.map