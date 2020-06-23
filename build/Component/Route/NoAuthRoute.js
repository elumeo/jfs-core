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
import BaseRoute from './BaseRoute';
import { enterUnauthorizedRoute } from '../../Store/Action/RouterAction';
import { connect } from 'react-redux';
import { compose } from 'redux';
const NoAuthRoute = (_a) => {
    var { enterUnauthorizedRoute } = _a, rest = __rest(_a, ["enterUnauthorizedRoute"]);
    useEffect(() => {
        enterUnauthorizedRoute();
    });
    return (React.createElement(BaseRoute, Object.assign({}, rest)));
};
const mapStateToProps = (_state, ownProps) => (Object.assign({}, ownProps));
const enhance = compose(connect(mapStateToProps, { enterUnauthorizedRoute }));
export default enhance(NoAuthRoute);
//# sourceMappingURL=NoAuthRoute.js.map