import React from 'react';
import ErrorContent, { errorText } from './ErrorContent';
import { IToastConfig } from '../../Store/Reducer/ToastReducer';

// https://en.wikipedia.org/wiki/Speed_reading
const AVERAGE_READING_WORDS_PER_MINUTE = 200;
const AVERAGE_READING_WORDS_PER_SECOND = AVERAGE_READING_WORDS_PER_MINUTE / 60;

const getToastAutohideTimeout = (text: any, min: number = 3000) => {
  const isString = (typeof text === 'string') || (text instanceof String);
  if (!isString) {
    return min;
  }
  const words = text.split(' ').length;
  const calculatedTimeout = words / AVERAGE_READING_WORDS_PER_SECOND * 1000;
  return Math.max(min, calculatedTimeout);
};

export default (toast: IToastConfig, formatMessage) => {
  const {contentTranslationId, contentMessage, contentError} = toast;

  let text, toastContent;
  if (contentTranslationId) {
    text = formatMessage({id: contentTranslationId}, {...toast});
    toastContent = text;
  } else if (contentMessage) {
    text = contentMessage;
    toastContent = text;
  } else {
    const {body, head} = errorText(contentError);
    text = `${formatMessage({id: 'app.error'})}: ${body} ${head}`;
    toastContent = (
      <ErrorContent contentError={contentError}/>
    );
  }

  return {
    text: toastContent,
    action: toast.dismissLabel,
    autohideTimeout: getToastAutohideTimeout(text)
  };
}
