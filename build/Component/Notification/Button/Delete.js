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
var React = __importStar(require("react"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var react_redux_1 = require("react-redux");
var Action_1 = require("../../../Store/Action");
var Delete = function (_a) {
    var id = _a.id;
    var dispatch = (0, react_redux_1.useDispatch)();
    var onDeleteCallback = React.useCallback(function () {
        dispatch((0, Action_1.removeNotification)(id));
    }, [id]);
    return (React.createElement(IconButton_1.default, { color: 'inherit', onClick: onDeleteCallback },
        React.createElement(Delete_1.default, null)));
};
exports.default = Delete;
