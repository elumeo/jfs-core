"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var notistack_1 = require("notistack");
var react_intl_1 = require("react-intl");
var DefaultNotificationCard = function (_a) {
    var _b = _a.notification, title = _b.title, subtitle = _b.subtitle, content = _b.content, action = _b.action, id = _b.id, _c = _b.isTranslationId, isTranslationId = _c === void 0 ? false : _c, httpDetails = _b.httpDetails, timeStamp = _b.timeStamp, temporary = _a.temporary;
    var snackbar = (0, notistack_1.useSnackbar)();
    var _d = (0, react_intl_1.useIntl)(), formatMessage = _d.formatMessage, formatDate = _d.formatDate, formatTime = _d.formatTime;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { color: 'inherit' } },
            title && (react_1.default.createElement(Typography_1.default, { variant: 'h6', component: 'div' }, isTranslationId ? formatMessage({ id: title }) : title)),
            subtitle && (react_1.default.createElement(Typography_1.default, { variant: 'subtitle1', component: 'div' }, isTranslationId
                ? formatMessage({ id: subtitle })
                : subtitle)),
            content && (react_1.default.createElement(Typography_1.default, { variant: 'body2', component: 'div' }, isTranslationId
                ? formatMessage({ id: content })
                : content)),
            (httpDetails || timeStamp) &&
                react_1.default.createElement("div", { style: { padding: '4px' } },
                    httpDetails && react_1.default.createElement(Typography_1.default, { variant: 'caption', component: 'div' }, httpDetails),
                    timeStamp &&
                        react_1.default.createElement(Typography_1.default, { variant: 'caption', component: 'div' },
                            formatDate(timeStamp, { dateStyle: 'medium' }),
                            "\u00A0",
                            formatTime(timeStamp, { timeStyle: 'medium' })))),
        !temporary && action && react_1.default.createElement(CardActions_1.default, null, action(snackbar, id, temporary))));
};
exports.default = DefaultNotificationCard;
