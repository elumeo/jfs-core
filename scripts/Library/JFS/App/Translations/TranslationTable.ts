import Language from "./Language";
import Translations from "./index";
import {json2csv} from "json-2-csv";

interface IGetOptions {
    includeCompleteRows?: boolean;
}

export interface ICsvOptions extends IGetOptions {
    csvReady: (csvString: string) => void;
}

export interface IHtmlOptions extends IGetOptions {
    htmlReady: (csvString: string) => void;
}

class TranslationTable {

    public languages: Language[];
    public keys: string[];

    constructor(translations) {
        this.languages = Translations.languages(translations);
        this.keys = Translations.keys(...this.languages);
    }

    private titleRow = () => {
        const titleRow = {
            key: `Keys (${this.keys.length})`,
        };
        this.languages.forEach(language => titleRow[language.name()] = language.name());

        return titleRow;
    };

    private rows = (includeCompleteRows = false) => {
        const allRows = this.keys.map(translationKey => {
            const row = { key: translationKey };
            this.languages.forEach(language => row[language.name()] = language.lookup(translationKey));
            return row;
        });

        return allRows.filter((row, index) => includeCompleteRows || (
            !Object.keys(row).every(stringIndex => row[stringIndex])
        ));
    };

    public csv = (csvOptions: ICsvOptions) => {
        json2csv(
            this.get(csvOptions),
            (error, csv) => {
                if (error) {
                    throw error;
                }
                else {
                    csvOptions.csvReady(csv);
                }
            },
            {
                keys: [
                    'key',
                    ...this.languages.map(language => language.name())
                ],
                prependHeader: false
            }
        )
    }

    public html = (htmlOptions: IHtmlOptions) => {
        htmlOptions.htmlReady(
            [
                `<table>`,
                ...this.get(htmlOptions).map(
                    (row, rowIndex) => [
                        `<tr class=\\"${rowIndex ? 'value-row' : 'header-row'}\\">`,
                        ...['key', ...this.languages.map(language => language.name())].map(
                            (key, index) => (
                                `<td class=\\"${index ? 'value-cell' : 'key-cell'}\\">${row[key]}</td>`
                            )
                        ),
                        '</tr>'
                    ].join('')
                ),
                `</table>`
            ].join('')
        );
    };


    public get = (options?: IGetOptions) => [
        this.titleRow(),
        ...this.rows((options || {}).includeCompleteRows)
    ];
}

export default TranslationTable;