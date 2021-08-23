import { Language } from "Types/Language";
import * as Country from 'Types/Country';

export let locale: Country.Locale = 'en-GB';
export const setLocale = (next: Country.Locale): void => {
  locale = next;
};

export const mapProductLanguageToLocale = (productLanguage: string): string => {
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
};

export const mapLanguageToLocale = (language: Language): Country.Locale => {
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
};
