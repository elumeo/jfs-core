import { resolve } from "path";
import File from "Library/OS/Filesystem/File";
import { ITranslations } from './Types';
import Language from './Language';

class Translations {
  public static location = (path: string) => resolve(
    path, 'src', 'Setup', 'Translations.json'
  );

  public static get = (
    path: string,
    onComplete: (translations: ITranslations) => void
  ) => new File({
    path: Translations.location(path)
  }).json<ITranslations>(
    translations => onComplete(translations)
  );

  private translations: ITranslations;

  constructor(translations: ITranslations) {
    this.translations = translations;
  }

  public languages = () => (
    Object.keys(
      Object.keys(this.translations).length
        ? this.translations
        : { de: {}, en: {}, it: {} }
    ).map(
      languageName => new Language({
        languageName,
        translationList: this.translations[languageName]
      })
    )
  );

  public keys = (): string[] => {
    const languages = this.languages();
    const allTranslationKeys: Set<string> = new Set();
    languages.forEach(
      language => (
        language.translationKeys()
        .forEach(translationKey => allTranslationKeys.add(translationKey))
      )
    );

    return Array.from(allTranslationKeys);
  };

  // ---------------------------------------------------------------------------

  private rows = (includeCompleteRows = false) => {
    const languages = this.languages();
    const keys = this.keys();
    const allRows = keys.map(translationKey => {
      const row = { key: translationKey };
      languages.forEach(
        language => row[language.name()] = language.lookup(translationKey)
      );
      return row;
    });

    return allRows.filter(row => includeCompleteRows || (
      !Object.keys(row).every(stringIndex => row[stringIndex])
    ));
  };

  public missing = (includeCompleteRows: boolean = false) => (
    this.rows(includeCompleteRows)
  );

  private titleRow = (languages: Language[]) => {
    const titleRow = { key: `Keys (${this.missing().length})` };
    languages.forEach(
      language => (titleRow[language.name()] = language.name())
    );
    return titleRow;
  };

  public table = (includeCompleteRows: boolean = false) => [
    this.titleRow(this.languages()),
    ...this.rows(includeCompleteRows)
  ];
}

export default Translations;
