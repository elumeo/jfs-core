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
import React, { useEffect } from 'react';
import { Route, useLocation, useParams } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router';
// noinspection ES6PreferShortImport
import { updateRouteDetails } from '../../Store/Action/RouterAction';
import { useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';
const BaseRoute = (_a) => {
    var { Component, translationId, updateDocumentTitle } = _a, rest = __rest(_a, ["Component", "translationId", "updateDocumentTitle"]);
    const location = useLocation();
    const params = useParams();
    const dispatch = useDispatch();
    const { formatMessage } = useIntl();
    useEffect(() => {
        dispatch(updateRouteDetails({ location, params }));
    }, [rest.path]);
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
export default BaseRoute;
//# sourceMappingURL=BaseRoute.js.map