import { IntlMessageFormat, PrimitiveType } from 'intl-messageformat';
import Notifier from '../../Notifier';
import Messages from './Messages';
import Locale from '../Locale';
import * as Country from 'Types/Country';
import { Language } from 'Types/Language';

namespace Translations {
  export type Set = {
    [language: string]: Messages.Language;
  }
}

class Translations {

  private static mapLocaleToLanguage = (locale: Country.Locale): Language => {
    if (locale === 'de-DE') {
      return 'de';
    }
    else if (locale === 'en-GB') {
      return 'en';
    }
    else if (locale === 'it-IT') {
      return 'it';
    }
    else {
      return null;
    }
  }

  private static messages: Translations.Set = {};

  public static addMessages = (newMessages: Translations.Set) => {
    Translations.messages = Messages.merge(
      Translations.messages,
      newMessages
    );
  };

  public static formatMessage = (
    { id },
    values?: Record<string, PrimitiveType>
  ) => {
    const language = Translations.mapLocaleToLanguage(Locale.locale);
    if (Translations.messages[language][id]) {
      const message = new IntlMessageFormat(
        Translations.messages[language][id]
      );
      return message.format(values);
    } else {
      Notifier.warn(
        `Missing translation for '${id}' in locale '${Locale.locale}'`
      );
      return id;
    }
  };

}

export default Translations;
