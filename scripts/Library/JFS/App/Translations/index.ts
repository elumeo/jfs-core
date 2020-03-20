import { resolve } from "path";
import color from 'ansi-colors';
import opn from 'opn';

import File from "Library/OS/Filesystem/File";
import Directory from "Library/OS/Filesystem/Directory";
import CLI from 'Library/OS/CLI';

import { ITranslations } from './Types';
import Language from './Language';
import TranslationTable, { ICsvOptions, IHtmlOptions } from "./TranslationTable";
import PageRenderer from "./PageRenderer";

type TranslationsReadyCallback = (translations: ITranslations) => void;
type ViewContent = { csvString: string; htmlString: string; };

export interface IGenerateViewContentOptions {
    includeCompleteRows?: boolean;
    viewContentReady: (viewContent: ViewContent) => void;
}

export interface ICheckOptions {
    includeCompleteRows?: boolean;
    checkDone?: (htmlPath?: string) => void;
}

class Translations {

    private static translationsFile: File = new File({
        path: resolve(
            process.cwd(),
            CLI.parameter('project-path') || '.',
            'src',
            'Setup',
            'Translations.json'
        )
    });

    private static renderer: PageRenderer = new PageRenderer({
        pageDirectoryPath: resolve(
            __dirname,
            ...(
                CLI.parameter('development')
                    ? ['..', '..']
                    : []
            ),
            'Resources',
            'check-lang',
            'public'
        )
    });

    public static get = (translationsReady: TranslationsReadyCallback) => {
        Translations.translationsFile.read({
            dataReady: (translationsString) => translationsReady(
                JSON.parse(translationsString as string)
            )
        });
    };


    public static languages = (translations: ITranslations) => Object.keys(translations).map(
        languageName => new Language({
            languageName,
            translationList: translations[languageName]
        })
    );

    public static keys = (...languages: Language[]): string[] => {
        const allTranslationKeys: Set<string> = new Set();
        languages.forEach(
            language => (
                language.translationKeys()
                    .forEach(translationKey => allTranslationKeys.add(translationKey))
            )
        );

        return Array.from(allTranslationKeys);
    };

    private static table = (tableReady) => Translations.get(
        translations => tableReady(new TranslationTable(translations))
    );

    private static csv = (csvOptions: ICsvOptions) => Translations.table(
        translationTable => translationTable.csv(csvOptions)
    );

    private static html = (htmlOptions: IHtmlOptions) => Translations.table(
        translationTable => translationTable.html(htmlOptions)
    );

    private static generateViewContent = ({
        includeCompleteRows,
        viewContentReady
    }: IGenerateViewContentOptions) => Translations.csv({
        includeCompleteRows,
        csvReady: csvString => Translations.html({
            includeCompleteRows,
            htmlReady: htmlString => viewContentReady({
                csvString,
                htmlString
            })
        })
    });

    private static setupDirectory = () => new Directory({
        path: Translations.translationsFile.parent
    });

    private static lastHtmlFile = (fileFound: (lastHtmlFile: File) => void) => {
        Translations.setupDirectory().files(files => {
            const pattern = /(?<=missing.translations.v)(.*)(?=.html)/;
            fileFound(
              files.find(({ name }) => Boolean(name.match(pattern)))
            );
        });
    };

    private static lastCsvFile = (fileFound: (lastHtmlFile: File) => void) => {
        Translations.setupDirectory().files(files => {
            const pattern = /(?<=missing.translations.v)(.*)(?=.csv)/;
            fileFound(
              files.find(({ name }) => Boolean(name.match(pattern).length))
            );
        });
    };

    private static createView = ({
        csvString,
        htmlString,
        versionNumber,
        viewCreated
    }) => {
        const htmlFile = new File({
            path: resolve(
                Translations.setupDirectory().path,
                `missing.translations.v${versionNumber}.html`
            )
        });

        const csvFile = new File({
            path: resolve(
                Translations.setupDirectory().path,
                `missing.translations.v${versionNumber}.csv`
            )
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

    private static updateView = (htmlString, csvString, viewUpdated) => {
        Translations.lastHtmlFile(
            lastHtmlFile => lastHtmlFile.read({
                dataReady: data => {
                    const [versionNumber] = lastHtmlFile.name.match(/(?<=missing.translations.v)(.*)(?=.html)/);

                    if (!(data as string).includes(htmlString)) {
                        Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({
                            fileRemoved: () => lastHtmlFile.remove({})
                        }));

                        Translations.createView({
                            htmlString,
                            csvString,
                            versionNumber: JSON.parse(versionNumber) +1,
                            viewCreated: htmlPath => viewUpdated(htmlPath)
                        })
                    }
                    else {
                        viewUpdated(lastHtmlFile.path);
                    }
                }
            })
        );
    };

    private static removeView = (viewRemoved) => {
        Translations.lastHtmlFile(
            lastHtmlFile => Translations.lastCsvFile(
                lastCsvFile => lastCsvFile.remove({
                    fileRemoved: () => lastHtmlFile.remove({
                        fileRemoved: () => viewRemoved()
                    })
                })
            )
        );
    };

    public static check = (checkOptions?: ICheckOptions) => {
        Translations.lastHtmlFile(
            (lastHtmlFile) => {
                if (!lastHtmlFile) {
                    Translations.generateViewContent({
                        includeCompleteRows: (checkOptions || {}).includeCompleteRows,
                        viewContentReady: ({
                            csvString,
                            htmlString
                        }) => {
                            if (csvString.split('\n').length -1) {
                                Translations.createView({
                                    htmlString,
                                    csvString,
                                    versionNumber: 1,
                                    viewCreated: htmlPath => opn(htmlPath)
                                })
                            }
                            else {
                                console.log(
                                    color.green('No translations missing.')
                                );
                            }
                        }
                    });
                }
                else {
                    Translations.generateViewContent({
                        viewContentReady: ({
                            htmlString,
                            csvString
                        }) => {
                            if (csvString.split('\n').length -1) {
                                Translations.updateView(
                                    htmlString,
                                    csvString,
                                    htmlPath => opn(htmlPath)
                                );
                            }
                            else {
                                Translations.removeView(
                                    () => {
                                        console.log(
                                            color.green('No translations missing.')
                                        );
                                    }
                                );
                            }
                        }
                    });
                }
            }
        );
    }
}

export default Translations;
