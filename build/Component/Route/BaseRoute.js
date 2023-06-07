"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var react_intl_1 = require("react-intl");
var react_helmet_1 = require("react-helmet");
var BaseRoute = function (_a) {
    var title = _a.title, subtitle = _a.subtitle, translateTitle = _a.translateTitle, translateSubtitle = _a.translateSubtitle;
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var forcedTitle = !title
        ? formatMessage({ id: 'app.title' })
        : translateTitle
            ? formatMessage({ id: title })
            : title;
    var optionalSubtitle = !subtitle
        ? null
        : translateSubtitle
            ? formatMessage({ id: subtitle })
            : subtitle;
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_helmet_1.Helmet, { children: (0, jsx_runtime_1.jsx)("title", { children: "".concat(forcedTitle).concat(optionalSubtitle ? " | ".concat(optionalSubtitle) : '') }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] });
};
exports.default = BaseRoute;
