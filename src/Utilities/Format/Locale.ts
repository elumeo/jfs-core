type Language = 'de' | 'en' | 'it';
type TLocale = 'de-DE' | 'en-GB' | 'it-IT';

class Locale {

  public static locale: TLocale;
  public static setLocale = (locale: TLocale) => {
    Locale.locale = locale;
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

  public static mapLanguageToLocale = (language: Language): TLocale => {
    if (language === 'de') {
      return 'de-DE';
    }
    else if (language === 'en') {
      return 'en-GB';
    }
    else if (language === 'it') {
      return 'it-IT';
    }
    else {
      return null;
    }
  }

}

export default Locale;
