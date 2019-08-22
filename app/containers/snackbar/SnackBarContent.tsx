import * as React from 'react';
import ErrorContent, { errorText } from './ErrorContent';

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
}

export default (toast, formatMessage) => {
  const { contentTranslationId, contentMessage, contentError } = toast;

  let text, toastContent;
  if (contentTranslationId !== null) {
    text = formatMessage({ id: contentTranslationId }, { ...toast });
    toastContent = text;
  }
  else if (contentMessage !== null) {
    text = contentMessage;
    toastContent = text;
  }
  else {
    const { errorMessage, errorBody } = errorText(contentError);
    text = `${formatMessage({ id: 'app.error' })}: ${errorMessage} ${errorBody}`;
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
