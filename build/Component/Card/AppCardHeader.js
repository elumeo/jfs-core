"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var RefreshButton_1 = __importDefault(require("../Button/RefreshButton"));
var linearProgressRootStyles = {
    mb: -.5,
};
var cardHeaderStyles = {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start'
};
var AppCardHeader = function (_a) {
    var _b = _a.isLoading, isLoading = _b === void 0 ? false : _b, title = _a.title, _c = _a.subtitle, subtitle = _c === void 0 ? null : _c, _d = _a.titleIcon, titleIcon = _d === void 0 ? null : _d, _e = _a.onRefresh, onRefresh = _e === void 0 ? null : _e, _f = _a.refreshButtonColor, refreshButtonColor = _f === void 0 ? 'secondary' : _f, _g = _a.refreshButtonSize, refreshButtonSize = _g === void 0 ? 'small' : _g, _h = _a.headerActions, headerActions = _h === void 0 ? null : _h, _j = _a.action, action = _j === void 0 ? null : _j;
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(material_1.CardHeader, { sx: cardHeaderStyles, subheader: subtitle, action: action, title: react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(material_1.Stack, { justifyContent: 'space-between', direction: 'row' },
                    react_1.default.createElement(material_1.Stack, { direction: 'row', spacing: 1, alignItems: 'center' },
                        titleIcon,
                        react_1.default.createElement(material_1.Typography, { variant: 'h5' }, title),
                        onRefresh !== null
                            &&
                                react_1.default.createElement(RefreshButton_1.default, { color: refreshButtonColor, size: refreshButtonSize, disabled: isLoading, onClick: onRefresh })),
                    headerActions !== null && react_1.default.createElement(react_1.default.Fragment, null, headerActions))) }),
        isLoading && react_1.default.createElement(material_1.LinearProgress, { color: 'secondary', sx: linearProgressRootStyles }));
};
exports.default = AppCardHeader;
