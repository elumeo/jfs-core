"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
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
exports.default = Details;
