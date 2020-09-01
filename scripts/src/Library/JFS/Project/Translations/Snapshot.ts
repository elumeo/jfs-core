import { ITranslations } from './Types';
import File from 'Library/OS/Filesystem/File';
import Directory from 'Library/OS/Filesystem/Directory';
import Text from 'Library/Text';
import { csv2json, json2csv } from 'json-2-csv';
import { resolve } from 'path';
import PageRenderer from './PageRenderer';
import Translations from '.';
import View from './View';

class Snapshot {
  public readonly translations: Translations;
  public readonly subject: File;
  public readonly includeCompleteRows: boolean;
  public readonly version: number;
  public static renderer = new PageRenderer({
    pageDirectoryPath: resolve(
      __dirname.replace('/build', '/src'),
      'public'
    )
  });

  constructor({ translations, subject, includeCompleteRows, version }: {
    translations: ITranslations;
    subject: File;
    includeCompleteRows: boolean;
    version: number;
  }) {
    this.subject = subject;
    this.translations = new Translations(translations);
    this.includeCompleteRows = includeCompleteRows;
    this.version = version;
  }

  public csv = (onComplete: (csv: string) => void) => {
    json2csv(
      this.translations.table(this.includeCompleteRows),
      (error, csv) => {
        if (error) {
          throw error;
        }
        else {
          onComplete(csv);
        }
      },
      {
        keys: [
          'key',
          ...this.translations.languages().map(language => language.name())
        ],
        prependHeader: false
      }
    );
  }

  public static readonly prefix = 'missing.translations.v';
  public static readonly suffix = '.csv';

  private static parseVersion = (fileName: string) => parseInt(
    Text.between(fileName, Snapshot.prefix, Snapshot.suffix)
  );

  public static readonly pattern = [
    /(?<=missing.translations.v)(.*)(?=.html)/,
    /(?<=missing.translations.v)(.*)(?=.csv)/,
  ];

  public static mapCsvToTranslations = (
    translations: { key: string; de: string; en: string; it: string; }[],
    columns = ['de', 'en', 'it'],
  ) => translations.reduce(
    (mapped, { key, ...languages }) => columns.map(
      (language) => ({
        ...mapped[language],
        [key]: languages[language]
      })
    ).reduce(
      (joined, language, index) => ({
        ...joined,
        [columns[index]]: language
      }),
      {}
    ),
    {}
  );

  public static files = async (subject: File) => new Promise<File[]>(
    (resolve) => {
      new Directory({
        path: subject.parent
      })
        .files(
          files => resolve(
            files.filter(
              ({ name }) => Snapshot.pattern.some(
                pattern => Boolean(name.match(pattern))
              )
            )
          )
        )
    }
  );

  public static previous = (subject: File) => new Promise<Snapshot>(
    async resolve => {
      const files = await Snapshot.files(subject);
      const file = files.find(file => Text.endsWith(file.name, '.csv'));
      if (file) {
        file.read(
          csv => {
            csv2json(csv as string, (error, data) => {
              if (error) {
                throw error;
              }
              else {
                resolve(new Snapshot({
                  translations: Snapshot.mapCsvToTranslations(
                    data.map<{
                      key: string;
                      de: string;
                      en: string;
                      it: string;
                    }>(entry => Object.keys(entry).reduce(
                      (mapped, key) => {
                        if (['de', 'en', 'it'].includes(key)) {
                          return {
                            ...mapped,
                            [key]: entry[key]
                          };
                        }
                        else {
                          return {
                            ...mapped,
                            key: entry[key]
                          };
                        }
                      },
                      {} as {
                        key: string;
                        de: string;
                        en: string;
                        it: string;
                      }
                    ))
                  ),
                  subject,
                  includeCompleteRows: false,
                  version: Snapshot.parseVersion(file.name)
                }));
              }
            })
          }
        )
      }
      else {
        resolve(null);
      }
    }
  );

  public static current = async (
    subject: File,
    includeCompleteRows: boolean = false
  ) => new Promise<Snapshot>(
    resolve => {
      subject.json<{
        [language: string]: {
          [key: string]: string;
        }
      }>(
        translations => resolve(
          new Snapshot({
            translations,
            subject,
            includeCompleteRows,
            version: null
          })
        )
      )
    }
  );

  public static difference = (
    previous: Snapshot,
    current: Snapshot
  ) => new Promise<boolean>(
    async resolve => {
      if (previous) {
        previous.csv(data => current.csv(csv => resolve(data !== csv)));
      }
    }
  );

  public file = (extension: string) => new Promise<File>(
    async (resolve) => resolve((await Snapshot.files(this.subject)).find(
      ({ name }) => Text.endsWith(name, `.${extension}`)
    ))
  );

  public static create = (
    version: number,
    snapshot: Snapshot,
    onComplete: () => void
  ) => {
    snapshot.csv(
      async csv => {
        const csvFile = new File({
          path: resolve(
            snapshot.subject.parent,
            [Snapshot.prefix, version.toString(), Snapshot.suffix].join('')
          )
        });

        csvFile.create(
          () => csvFile.write(
            csv,
            () => View.create(version, snapshot, onComplete)
          )
        );
      }
    );
  }

  public remove = (onComplete: () => void) => {
    this.file('html')
      .then(html => html.remove(() => (
        this.file('csv')
          .then(csv => csv.remove(onComplete))
      )));
  }

  public static replace = (
    previous: Snapshot,
    current: Snapshot,
    onComplete: () => void
  ) => Snapshot.create(
    previous.version +1,
    current,
    () => previous.remove(() => onComplete())
  );

  public static update = (
    previous: Snapshot,
    current: Snapshot,
    onComplete: ({ missing, html }: {
      missing: { key: string }[],
      html: File;
    }) => void
  ) => (
    Snapshot.difference(previous, current)
      .then(async isDifferent => {
        const snapshot = isDifferent ? current : previous;
        const { includeCompleteRows } = snapshot;
        const missing = snapshot.translations.missing(includeCompleteRows);
        const html = await snapshot.file('html');
        if (isDifferent) {
          if (missing.length) {
            Snapshot.replace(previous, current, () => onComplete({
              missing, html,
            }));
          }
          else {
            previous.remove(() => onComplete({ missing, html: null }));
          }
        }
        else {
          onComplete({ missing, html });
        }
      })
  )
}

export default Snapshot;
