import React from 'react';
import ErrorContent, { errorText } from './ErrorContent';
import { timeToRead } from './TimeToRead';
export default (toast, intl) => {
    const { contentTranslationId, contentTranslationValues, contentMessage, contentError } = toast;
    let text, toastContent;
    if (contentTranslationId) {
        text = intl.formatMessage({ id: contentTranslationId }, Object.assign(Object.assign({}, toast), contentTranslationValues));
        toastContent = text;
    }
    else if (contentMessage) {
        text = contentMessage;
        toastContent = text;
    }
    else {
        const { body, head } = errorText(contentError);
        text = `${intl.formatMessage({ id: 'app.error' })}: ${body} ${head}`;
        toastContent = (React.createElement(ErrorContent, { contentError: contentError }));
    }
    return {
        text: toastContent,
        action: toast.dismissLabel,
        autohideTimeout: timeToRead(text)
    };
};
//# sourceMappingURL=SnackBarContent.js.map