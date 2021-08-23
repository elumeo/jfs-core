import React from 'react';
import { useIntl } from 'react-intl';
import { Toast } from 'Types/Toast';
import * as Format from 'Utilities/Format';

const useWords = (toast: Toast): string[] => {
  const intl = useIntl();
  const [words, setWords] = React.useState<string[]>([]);

  React.useEffect(
    () => {
      if (toast?.contentMessage) {
        const next = toast.contentMessage.split(' ');
        setWords(next);
      }
      else if (toast?.contentTranslationId) {
        const id = toast.contentTranslationId;
        const values = toast.contentTranslationValues || {};
        const next = (
          intl
            .formatMessage({ id }, values)
            .split(' ')
        );
        setWords(next);
      }
      else if (toast?.contentError && toast?.contentError instanceof Error) {
        const { title, details } = Format.Error.apply(toast.contentError);
        const next = [...title.split(' '), ...details.split(' ')];
        setWords(next);
      }
    },
    [JSON.stringify(toast)]
  );

  return words;
}

export default useWords;