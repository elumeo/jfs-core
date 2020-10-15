import { IntlMessageFormat, PrimitiveType } from 'intl-messageformat';
import Notifier from '../../Notifier';
import Messages from './Messages';
import Locale from '../Locale';

namespace Translations {
  export type Set = {
    [language: string]: Messages.Language;
  }
}

class Translations {

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
    if (Translations.messages[Locale.locale][id]) {
      const message = new IntlMessageFormat(
        Translations.messages[Locale.locale][id]
      );
      return message.format(values);
    } else {
      const locale = Locale.locale;
      Notifier.warn(
        `Missing translation for '${id}' in locale '${locale}'`
      );
      return id;
    }
  };

}

export default Translations;
