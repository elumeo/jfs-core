"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Action = __importStar(require("../../Store/Action"));
var react_redux_1 = require("react-redux");
var react_intl_1 = require("react-intl");
var BaseRoute = function (_a) {
    var Component = _a.Component, translationId = _a.translationId, updateDocumentTitle = _a.updateDocumentTitle, rest = __rest(_a, ["Component", "translationId", "updateDocumentTitle"]);
    var location = (0, react_router_dom_1.useLocation)();
    var params = (0, react_router_dom_1.useParams)();
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    (0, react_1.useEffect)(function () {
        dispatch(Action.updateRouteDetails({ location: location, params: params }));
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
    return react_1.default.createElement(react_router_dom_1.Route, __assign({}, rest));
};
exports.default = BaseRoute;
