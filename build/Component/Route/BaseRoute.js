"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_helmet_1.Helmet, null,
            react_1.default.createElement("title", null, "".concat(forcedTitle).concat(optionalSubtitle ? " | ".concat(optionalSubtitle) : ''))),
        react_1.default.createElement(react_router_dom_1.Outlet, null));
};
exports.default = BaseRoute;
