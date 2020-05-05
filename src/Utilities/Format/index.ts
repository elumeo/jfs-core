import Translations from './Translations';
import Text from './Text';
import Currency from './Currency';
import PhoneNumber from './PhoneNumber';

import Locale from './Locale';

class Format {

  static Locale = Locale;
  static Translations = Translations;
  static Text = Text;
  static Currency = Currency;
  static PhoneNumber = PhoneNumber;

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

  public static formatNumber(value: number, showFraction = false) {
    if (showFraction) {
      return new Intl.NumberFormat(Locale.selectedLanguage).format(value);
    }

    return new Intl.NumberFormat(
      Locale.selectedLanguage,
      { minimumFractionDigits: 0 }
    ).format(value);
  }

  public static formatTime = (value: string | Date) => new Intl.DateTimeFormat(
    Locale.selectedLanguage,
    { hour: '2-digit', minute: '2-digit' }
  ).format(new Date(value));

  public static formatDate = (value: string | Date) => new Intl.DateTimeFormat(
    Locale.selectedLanguage).format(new Date(value)
  );

}

export default Format;
