"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var Redux_1 = require("../../../Types/Redux");
var react_intl_1 = require("react-intl");
var Flag_1 = __importDefault(require("./Flag"));
var material_1 = require("@mui/material");
var BackendIndicator = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var backendRegion = (0, Redux_1.useSelector)(function (state) { return state.Core.System.backendRegion; });
    return (react_1.default.createElement(material_1.Box, { flexGrow: 0 },
        react_1.default.createElement(Tooltip_1.default, { title: "".concat(formatMessage({ id: 'app.backend' }), ": ").concat(backendRegion) },
            react_1.default.createElement(material_1.Box, { flexGrow: 0 },
                react_1.default.createElement(Flag_1.default, { country: (backendRegion || '').toLowerCase() })))));
};
exports.default = BackendIndicator;
