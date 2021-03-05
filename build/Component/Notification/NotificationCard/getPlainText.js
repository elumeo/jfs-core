const getPlainText = (notification) => {
    const { message, translationId, translationValues, error } = notification;
    // const {words} =  getContent(notification)
    let words;
    if (message) {
        words = (typeof message == 'object'
            ? message === null || message === void 0 ? void 0 : message.join(' ') : message);
    }
    if (translationId) {
        words = typeof translationId == 'object'
            ? (translationId === null || translationId === void 0 ? void 0 : translationId
            // .map(tId => formatMessage({ id: tId }, translationValues))
            .join(' '))
            : translationId; //formatMessage({ id: translationId }, translationValues);
    }
    if (error) {
        words = typeof error == 'object'
            ? (error === null || error === void 0 ? void 0 : error
            // .map(tId => formatMessage({ id: tId }, translationValues))
            .join(' '))
            : error;
        // const { body, head } = errorText(error);
        // words = `${formatMessage({ id: 'app.error' }, translationValues)}: ${body} ${head}`;
        // content = <ErrorContent contentError={error}/>
    }
    return words;
};
export default getPlainText;
//# sourceMappingURL=getPlainText.js.map