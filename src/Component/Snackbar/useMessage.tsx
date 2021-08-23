import React from 'react';
import Failure from './Failure';
import { Toast } from 'Types/Toast';
import * as Format from 'Utilities/Format';

const useMessage = (toast: Toast, words: string[]): React.ReactNode => {
  const [message, setMessage] = React.useState<React.ReactNode>('');

  React.useEffect(
    () => {
      if (toast?.contentMessage || toast?.contentTranslationId) {
        setMessage(words.join(' '));
      }
      else if (toast?.contentError && toast?.contentError instanceof Error) {
        const { title, details } = Format.Error.apply(toast.contentError);
        setMessage(
          <Failure
            title={title}
            details={details}/>
        );
      }
    },
    [JSON.stringify(toast), JSON.stringify(words)]
  );

  return message;
};

export default useMessage;