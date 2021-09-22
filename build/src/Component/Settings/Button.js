"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Redux_1 = require("../../../Types/Redux");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Settings_1 = __importDefault(require("@material-ui/icons/Settings"));
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var Button = function () {
    var _a = (0, useActions_1.default)(), openSettings = _a.openSettings, closeSettings = _a.closeSettings;
    var settingsOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Settings.settingsOpen; });
    var onClick = react_1.default.useCallback(function () {
        settingsOpen ? closeSettings() : openSettings();
    }, [settingsOpen, closeSettings, openSettings]);
    return (react_1.default.createElement(IconButton_1.default, { color: 'inherit', onClick: onClick },
        react_1.default.createElement(Settings_1.default, null)));
};
exports.default = Button;
