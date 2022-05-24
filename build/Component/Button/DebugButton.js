"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var react_redux_1 = require("react-redux");
var Action = __importStar(require("../../Store/Action"));
var Definition_1 = __importDefault(require("../App/Stateless/Style/Theme/Definition"));
var DebugButton = function (_a) {
    var msg = _a.msg;
    var dispatch = (0, react_redux_1.useDispatch)();
    var onClick = function () {
        dispatch(Action.Debug.post(JSON.stringify({ raw: msg })));
    };
    return react_1.default.createElement(core_1.Tooltip, { title: 'Report Senden' },
        react_1.default.createElement(core_1.IconButton, { onClick: onClick },
            react_1.default.createElement(core_1.Box, { color: Definition_1.default.palette.common.white },
                react_1.default.createElement(icons_1.BugReport, { color: 'inherit' }))));
};
exports.default = DebugButton;
