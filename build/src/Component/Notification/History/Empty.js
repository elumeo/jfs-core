"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Notifications_1 = __importDefault(require("@material-ui/icons/Notifications"));
var react_intl_1 = require("react-intl");
var Empty = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var iconRef = react_1.default.useRef();
    return (react_1.default.createElement(Box_1.default, { component: 'div', style: {
            width: 'max-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            color: 'grey',
        } },
        react_1.default.createElement(Notifications_1.default, { fontSize: 'large', ref: iconRef }),
        react_1.default.createElement(Typography_1.default, null, formatMessage({ id: 'app.noNotifications' }))));
};
exports.default = Empty;
