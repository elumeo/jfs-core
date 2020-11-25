import React from 'react';
import ErrorContent, { errorText } from './ErrorContent';
import { timeToRead } from './TimeToRead';
import { IToastConfig } from 'Store/Reducer/Core/ToastReducer';
import { InjectedIntl } from 'react-intl';

export default (toast: IToastConfig, intl: InjectedIntl) => {
  const { contentTranslationId, contentTranslationValues, contentMessage, contentError } = toast;

  let text, toastContent;
  if (contentTranslationId) {
    text = intl.formatMessage({ id: contentTranslationId }, { ...toast, ...contentTranslationValues });
    toastContent = text;
  } else if (contentMessage) {
    text = contentMessage;
    toastContent = text;
  } else {
    const { body, head } = errorText(contentError);
    text = `${intl.formatMessage({ id: 'app.error' })}: ${body} ${head}`;
    toastContent = (
      <ErrorContent contentError={contentError}/>
    );
  }

  return {
    text: toastContent,
    action: toast.dismissLabel,
    autohideTimeout: timeToRead(text)
  };
}
