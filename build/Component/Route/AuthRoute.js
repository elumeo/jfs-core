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
import { connect } from 'react-redux';
import CircularProgress from 'react-md/lib/Progress/CircularProgress';
import BaseRoute from './BaseRoute';
import { enterAuthorizedRoute } from '../../Store/Action/RouterAction';
const AuthRoute = (_a) => {
    var { isAuthorized, isCheckingSession, enterAuthorizedRoute } = _a, rest = __rest(_a, ["isAuthorized", "isCheckingSession", "enterAuthorizedRoute"]);
    useEffect(() => {
        enterAuthorizedRoute();
    });
    return (isAuthorized
        ? React.createElement(BaseRoute, Object.assign({}, rest))
        : isCheckingSession
            ? React.createElement(CircularProgress, { id: 'check-session-progress' })
            : React.createElement(React.Fragment, null));
};
const mapStateToProps = (state, ownProps) => (Object.assign(Object.assign({}, ownProps), { isAuthorized: state.Core.Session.isAuthorized, isCheckingSession: state.Core.Session.isCheckingSession }));
const enhance = connect(mapStateToProps, { enterAuthorizedRoute });
export default enhance(AuthRoute);
//# sourceMappingURL=AuthRoute.js.map