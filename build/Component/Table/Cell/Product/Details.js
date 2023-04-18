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
var react_1 = __importStar(require("react"));
var material_1 = require("@mui/material");
var Name_1 = __importDefault(require("./Name"));
var Button_1 = __importDefault(require("./Button"));
var sx = {
    justifyContent: 'space-between',
    flexGrow: 1
};
var Details = function (_a) {
    var _b = _a.id, id = _b === void 0 ? null : _b, _c = _a.name, name = _c === void 0 ? null : _c, _d = _a.onClick, onClick = _d === void 0 ? null : _d;
    return react_1.default.createElement(material_1.Stack, { direction: 'column', sx: sx },
        react_1.default.createElement(Name_1.default, { name: name }),
        react_1.default.createElement(Button_1.default, { onClick: onClick, id: id }));
};
exports.default = (0, react_1.memo)(Details);
