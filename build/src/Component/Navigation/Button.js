"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var ArrowBack_1 = __importDefault(require("@material-ui/icons/ArrowBack"));
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var Redux_1 = require("../../../Types/Redux");
var Button = function () {
    var navigationOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Navigation.navigationOpen; });
    var _a = (0, useActions_1.default)(), openNavigation = _a.openNavigation, closeNavigation = _a.closeNavigation;
    var toggle = react_1.default.useCallback(function () { return (navigationOpen ? closeNavigation() : openNavigation()); }, [navigationOpen]);
    return (react_1.default.createElement(IconButton_1.default, { onClick: toggle },
        react_1.default.createElement(ArrowBack_1.default, { fontSize: 'small' })));
};
exports.default = Button;
