import React from 'react';
import ErrorContent, { errorText } from './ErrorContent';
import { timeToRead } from './TimeToRead';
export default (toast, formatMessage) => {
    const { contentTranslationId, contentMessage, contentError } = toast;
    let text, toastContent;
    if (contentTranslationId) {
        text = formatMessage({ id: contentTranslationId }, Object.assign({}, toast));
        toastContent = text;
    }
    else if (contentMessage) {
        text = contentMessage;
        toastContent = text;
    }
    else {
        const { body, head } = errorText(contentError);
        text = `${formatMessage({ id: 'app.error' })}: ${body} ${head}`;
        toastContent = (React.createElement(ErrorContent, { contentError: contentError }));
    }
    return {
        text: toastContent,
        action: toast.dismissLabel,
        autohideTimeout: timeToRead(text)
    };
};
//# sourceMappingURL=SnackBarContent.js.map