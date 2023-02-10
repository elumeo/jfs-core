"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
var react_intl_1 = require("react-intl");
var material_1 = require("@mui/material");
var Empty = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var iconRef = react_1.default.useRef();
    return (react_1.default.createElement(material_1.Box, { sx: {
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
