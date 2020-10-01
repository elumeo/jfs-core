var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Route } from 'react-router-dom';
import { injectIntl } from 'react-intl';
const BaseRoute = (_a) => {
    var { intl: { formatMessage }, Component, translationId, updateDocumentTitle } = _a, rest = __rest(_a, ["intl", "Component", "translationId", "updateDocumentTitle"]);
    if (Component) {
        rest.component = Component;
    }
    if (updateDocumentTitle === true) {
        if (translationId) {
            document.title += ' | ' + formatMessage({ id: translationId });
        }
        else {
            document.title = formatMessage({ id: 'app.title' });
        }
    }
    return React.createElement(Route, Object.assign({}, rest));
};
const enhance = injectIntl;
export default enhance(BaseRoute);
//# sourceMappingURL=BaseRoute.js.map