class Locale {

  public static selectedLanguage: string;
  public static selectLanguage = (language: string) => {
    Locale.selectedLanguage = language;
  };

  public static mapProductLanguageToLocale = (productLanguage: string) => {
    switch (productLanguage) {
      case 'en':
        return 'en_gb';
      case 'es':
        return 'es_es';
      case 'fr':
        return 'fr_fr';
      case 'it':
        return 'it_it';
      case 'nl':
        return 'nl_nl';
      case 'de':
      default:
        return 'de_de';
    }
  }

}

export default Locale;
