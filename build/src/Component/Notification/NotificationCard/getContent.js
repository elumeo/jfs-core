import React from 'react';
// import ErrorContent, { errorText } from '../../../../Component/Snackbar/ErrorContent';
import CardText from '@material-ui/core/CardContent';
// import { timeToRead as _timeToRead } from '../../../../Component/Snackbar/TimeToRead';
import { useIntl } from 'react-intl';
import timeToRead from './timeToRead';
import getPlainText from './getPlainText';
const _getContent = (notification) => {
    const { message, translationId, translationValues, error } = notification;
    const { formatMessage } = useIntl();
    let content;
    if (message) {
        content = (typeof message == 'object'
            ? (React.createElement("ul", null, message.map((m, i) => React.createElement("li", { key: i }, m))))
            : message);
    }
    else if (translationId) {
        content = typeof translationId == 'object'
            ? (React.createElement("ul", null, translationId.map((tId, i) => (React.createElement("li", { key: i }, formatMessage({ id: tId }, translationValues))))))
            : formatMessage({ id: translationId }, translationValues);
    }
    if (error) {
        // const { body, head } = errorText(error);
        // words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
        // content = <ErrorContent contentError={error}/>
    }
    return content;
};
const getContent = (notification) => {
    const { message, translationId, translationValues, error } = notification;
    const { formatMessage } = useIntl(); // ({id}, asd?) => id
    if (!(!!message || !!translationId || !!error)) {
        throw new Error(`Either 'message', 'translationId' or 'error' must be specified.`);
    }
    let content = _getContent(notification);
    let words = getPlainText(notification);
    return {
        words,
        content: (React.createElement(CardText, { className: 'md-text--inherit' }, content)),
        timeToRead: timeToRead(notification)
    };
};
export default getContent;
//# sourceMappingURL=getContent.js.map