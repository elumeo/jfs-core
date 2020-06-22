"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const ansi_colors_1 = __importDefault(require("ansi-colors"));
const opn_1 = __importDefault(require("opn"));
const File_1 = __importDefault(require("../../OS/Filesystem/File"));
const Directory_1 = __importDefault(require("../../OS/Filesystem/Directory"));
const Language_1 = __importDefault(require("./Language"));
const TranslationTable_1 = __importDefault(require("./TranslationTable"));
const PageRenderer_1 = __importDefault(require("./PageRenderer"));
class Translations {
}
Translations.translationsFile = (projectRoot) => new File_1.default({
    path: path_1.resolve(projectRoot, 'src', 'Setup', 'Translations.json')
});
Translations.renderer = new PageRenderer_1.default({
    pageDirectoryPath: path_1.resolve(__dirname, '..', '..', '..', '..', 'Resources', 'check-lang', 'public')
});
Translations.get = (projectRoot, translationsReady) => {
    Translations.translationsFile(projectRoot).read({
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
Translations.table = (projectRoot, tableReady) => Translations.get(projectRoot, translations => tableReady(new TranslationTable_1.default(translations)));
Translations.csv = (csvOptions) => Translations.table(csvOptions.projectRoot, translationTable => translationTable.csv(csvOptions));
Translations.html = (htmlOptions) => Translations.table(htmlOptions.projectRoot, translationTable => translationTable.html(htmlOptions));
Translations.generateViewContent = ({ includeCompleteRows, viewContentReady, projectRoot }) => Translations.csv({
    projectRoot,
    includeCompleteRows,
    csvReady: csvString => Translations.html({
        includeCompleteRows,
        projectRoot,
        htmlReady: htmlString => viewContentReady({
            csvString,
            htmlString
        })
    })
});
Translations.setupDirectory = (projectRoot) => new Directory_1.default({
    path: Translations.translationsFile(projectRoot).parent
});
Translations.lastHtmlFile = (projectRoot, fileFound) => {
    Translations.setupDirectory(projectRoot).files(files => {
        const pattern = /(?<=missing.translations.v)(.*)(?=.html)/;
        fileFound(files.find(({ name }) => Boolean(name.match(pattern))));
    });
};
Translations.lastCsvFile = (projectRoot, fileFound) => {
    Translations.setupDirectory(projectRoot).files(files => {
        const pattern = /(?<=missing.translations.v)(.*)(?=.csv)/;
        fileFound(files.find(({ name }) => Boolean(name.match(pattern).length)));
    });
};
Translations.createView = ({ csvString, htmlString, versionNumber, viewCreated, projectRoot }) => {
    const htmlFile = new File_1.default({
        path: path_1.resolve(Translations.setupDirectory(projectRoot).path, `missing.translations.v${versionNumber}.html`)
    });
    const csvFile = new File_1.default({
        path: path_1.resolve(Translations.setupDirectory(projectRoot).path, `missing.translations.v${versionNumber}.csv`)
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
Translations.updateView = (htmlString, csvString, viewUpdated, projectRoot) => {
    Translations.lastHtmlFile(projectRoot, lastHtmlFile => lastHtmlFile.read({
        dataReady: data => {
            const [versionNumber] = lastHtmlFile.name.match(/(?<=missing.translations.v)(.*)(?=.html)/);
            if (!data.includes(htmlString)) {
                Translations.lastCsvFile(projectRoot, lastCsvFile => lastCsvFile.remove({
                    fileRemoved: () => lastHtmlFile.remove({})
                }));
                Translations.createView({
                    projectRoot,
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
Translations.removeView = (projectRoot, viewRemoved) => {
    Translations.lastHtmlFile(projectRoot, lastHtmlFile => Translations.lastCsvFile(projectRoot, lastCsvFile => lastCsvFile.remove({
        fileRemoved: () => lastHtmlFile.remove({
            fileRemoved: () => viewRemoved()
        })
    })));
};
Translations.check = (checkOptions) => {
    const defaultCheckOptions = {
        includeCompleteRows: false,
        projectRoot: process.cwd(),
        open: false,
        onComplete: () => { }
    };
    Translations.lastHtmlFile((checkOptions ||
        defaultCheckOptions).projectRoot, (lastHtmlFile) => {
        if (!lastHtmlFile) {
            Translations.generateViewContent({
                projectRoot: (checkOptions ||
                    defaultCheckOptions).projectRoot,
                includeCompleteRows: (checkOptions || {
                    includeCompleteRows: false
                }).includeCompleteRows,
                viewContentReady: ({ csvString, htmlString }) => {
                    if (csvString.split('\n').length - 1) {
                        Translations.createView({
                            projectRoot: (checkOptions ||
                                defaultCheckOptions).projectRoot,
                            htmlString,
                            csvString,
                            versionNumber: 1,
                            viewCreated: htmlPath => opn_1.default(htmlPath)
                        });
                        Translations.table((checkOptions || defaultCheckOptions).projectRoot, table => {
                            (checkOptions || defaultCheckOptions).onComplete(table.missingAmount(checkOptions || defaultCheckOptions));
                        });
                    }
                    else {
                        (checkOptions || defaultCheckOptions).onComplete(0);
                    }
                }
            });
        }
        else {
            Translations.generateViewContent({
                projectRoot: (checkOptions || defaultCheckOptions).projectRoot,
                viewContentReady: ({ htmlString, csvString }) => {
                    if (csvString.split('\n').length - 1) {
                        Translations.updateView(htmlString, csvString, htmlPath => {
                            if ((checkOptions || defaultCheckOptions).open) {
                                opn_1.default(htmlPath);
                            }
                            else {
                                Translations.table((checkOptions || defaultCheckOptions).projectRoot, table => (checkOptions || defaultCheckOptions).onComplete(table.missingAmount()));
                            }
                        }, (checkOptions || defaultCheckOptions).projectRoot);
                    }
                    else {
                        Translations.removeView(checkOptions.projectRoot, () => {
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