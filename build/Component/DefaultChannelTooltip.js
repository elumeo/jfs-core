"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Warning_1 = __importDefault(require("@material-ui/icons/Warning"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles_1 = require("@material-ui/core/styles");
var react_intl_1 = require("react-intl");
var DefaultChannelTooltip = function () {
    var theme = (0, styles_1.useTheme)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    return react_1.default.createElement(Tooltip_1.default, { title: formatMessage({ id: 'productSearchAdvancedOptions.tooltip.defaultChannel.searchHint' }), style: { transform: 'translate(3px, 3px)', display: 'inline-block' } },
        react_1.default.createElement("span", null,
            react_1.default.createElement(Warning_1.default, { style: { color: theme.palette.warning.main } })));
};
exports.default = DefaultChannelTooltip;
