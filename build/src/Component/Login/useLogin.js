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
var Redux_1 = require("../../../Types/Redux");
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var Selector = __importStar(require("../../../Store/Selector"));
var useLogin = function () {
    var checkLogin = (0, useActions_1.default)().checkLogin;
    var open = (0, Redux_1.useSelector)(Selector.isLoginOpen);
    var _a = react_1.default.useState({
        username: '',
        password: '',
    }), credentials = _a[0], setCredentials = _a[1];
    return {
        open: open,
        credentials: credentials,
        onChange: function (next) { return setCredentials(next); },
        check: function () { return checkLogin(credentials); },
    };
};
exports.default = useLogin;
