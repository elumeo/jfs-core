import React from "react";
import Format from "../../../Utilities/Format";
import ErrorContent, { errorText } from "../../Snackbar/ErrorContent";
import CardText from "react-md/lib/Cards/CardText";
import { timeToRead as _timeToRead } from '../../Snackbar/TimeToRead';
const getContent = (notification) => {
    const { message, translationId, translationValues, error } = notification;
    const { formatMessage } = Format.Translations;
    if (!((message ? 1 : 0) ^ (translationId ? 1 : 0) ^ (error ? 1 : 0))) {
        throw new Error(`Either 'message', 'translationId' or 'error' must be specified.`);
    }
    let content = null;
    let words = '';
    if (message) {
        words = (typeof message == 'object'
            ? message.join(' ')
            : message);
        content = (typeof message == 'object'
            ? (React.createElement("ul", null, message.map((m, i) => React.createElement("li", { key: i }, m))))
            : message);
    }
    if (translationId) {
        words = typeof translationId == 'object'
            ? (translationId
                .map(tId => formatMessage({ id: tId }, translationValues))
                .join(' '))
            : translationId;
        content = typeof translationId == 'object'
            ? (React.createElement("ul", null, translationId.map((tId, i) => (React.createElement("li", { key: i }, formatMessage({ id: tId }, translationValues))))))
            : formatMessage({ id: translationId }, translationValues);
    }
    if (error) {
        const { body, head } = errorText(error);
        words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
        content = React.createElement(ErrorContent, { contentError: error });
    }
    return {
        words,
        content: (React.createElement(CardText, { className: 'md-text--inherit' }, content)),
        timeToRead: _timeToRead(words)
    };
};
export default getContent;
//# sourceMappingURL=getContent.js.map