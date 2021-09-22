"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Default_1 = __importDefault(require("./Default"));
var styles_1 = require("@material-ui/core/styles");
var Icon_1 = __importDefault(require("./Icon"));
var useActions_1 = __importDefault(require("../../../../Store/useActions"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var notistack_1 = require("notistack");
var react_intl_1 = require("react-intl");
var Card = function (_a) {
    var _b, _c, _d;
    var notification = _a.notification, temporary = _a.temporary;
    var palette = (0, styles_1.useTheme)().palette;
    var removeNotification = (0, useActions_1.default)().removeNotification;
    var snackbar = (0, notistack_1.useSnackbar)();
    var _e = (0, react_intl_1.useIntl)(), formatMessage = _e.formatMessage, formatDate = _e.formatDate, formatTime = _e.formatTime;
    return (react_1.default.createElement(Card_1.default, { style: {
            width: '100%',
            minHeight: 'fit-content',
            backgroundColor: (_b = palette[notification.variant]) === null || _b === void 0 ? void 0 : _b['main'],
            color: (_c = palette[notification.variant]) === null || _c === void 0 ? void 0 : _c['contrastText'],
        } },
        react_1.default.createElement(CardHeader_1.default, { avatar: react_1.default.createElement(Icon_1.default, { variant: notification.variant }), title: react_1.default.createElement(Typography_1.default, { variant: 'h6', component: 'div' }, (notification === null || notification === void 0 ? void 0 : notification.isTranslationId)
                ? formatMessage({ id: notification.title })
                : notification.title), subheader: react_1.default.createElement(Typography_1.default, { variant: 'subtitle1', component: 'div' }, (notification === null || notification === void 0 ? void 0 : notification.isTranslationId)
                ? formatMessage({ id: notification.subtitle })
                : notification.subtitle), subheaderTypographyProps: { color: 'inherit' }, action: react_1.default.createElement(CardActions_1.default, null,
                notification.action
                    ? notification.action(snackbar, notification.id, temporary)
                    : null,
                react_1.default.createElement(IconButton_1.default, { onClick: function () { return removeNotification(notification.id); } },
                    react_1.default.createElement(Delete_1.default, { style: {
                            color: (_d = palette[notification.variant]) === null || _d === void 0 ? void 0 : _d.contrastText,
                        } }))) }),
        react_1.default.createElement(Box_1.default, { component: CardContent_1.default, pt: 0 },
            react_1.default.createElement(Typography_1.default, { variant: 'body2', component: 'div' }, (notification === null || notification === void 0 ? void 0 : notification.isTranslationId)
                ? formatMessage({ id: notification.content })
                : notification.content),
            ((notification === null || notification === void 0 ? void 0 : notification.httpDetails) || (notification === null || notification === void 0 ? void 0 : notification.timeStamp)) &&
                react_1.default.createElement(Box_1.default, { pt: 0.5 },
                    (notification === null || notification === void 0 ? void 0 : notification.httpDetails) && react_1.default.createElement(Typography_1.default, { variant: 'caption', component: 'div' }, notification.httpDetails),
                    (notification === null || notification === void 0 ? void 0 : notification.timeStamp) &&
                        react_1.default.createElement(Typography_1.default, { variant: 'caption', component: 'div' },
                            formatDate(notification.timeStamp, { dateStyle: 'medium' }),
                            "\u00A0",
                            formatTime(notification.timeStamp, { timeStyle: 'medium' }))))));
};
Card.Default = Default_1.default;
Card.Icon = Icon_1.default;
exports.default = Card;
