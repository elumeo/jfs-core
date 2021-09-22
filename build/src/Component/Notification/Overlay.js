"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var History = __importStar(require("./History"));
var Overlay = function () { return (react_1.default.createElement(Card_1.default, { style: {
        width: 400,
        height: 'calc(100vh - 100px)',
    } },
    react_1.default.createElement(CardHeader_1.default, { style: { height: 70 }, action: react_1.default.createElement(History.Toolbar, null) }),
    react_1.default.createElement(CardContent_1.default, { style: {
            width: '100%',
            height: 'calc(100% - 70px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        } },
        react_1.default.createElement(History.All, null)))); };
exports.default = Overlay;
