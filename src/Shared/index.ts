import Messages from 'Utilities/Format/Translations/Messages';

class Shared {
  public static translations: Messages.LanguageMap = {};
  public static addTranslations = (translations: Messages.LanguageMap) => {
    Shared.translations = Messages.merge(Shared.translations, translations);
  };
}

export default Shared;
