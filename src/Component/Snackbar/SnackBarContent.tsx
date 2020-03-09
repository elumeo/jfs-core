import * as React from 'react';
import ErrorContent, { errorText } from './ErrorContent';
import { IToastConfig } from '../../Store/Reducer/ToastReducer';
import { determineTimeToRead as getToastAutohideTimeout } from '../../Base/Utilities';

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
