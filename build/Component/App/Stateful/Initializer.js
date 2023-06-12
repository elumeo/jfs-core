"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../../Store/Action");
var sx = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
var Initializer = function (_a) {
    var packageJSON = _a.packageJSON, translations = _a.translations;
    var dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(function () {
        dispatch((0, Action_1.initializeApp)({
            packageJson: packageJSON,
            translations: translations
        }));
    }, []);
    return ((0, jsx_runtime_1.jsx)(material_1.Box, __assign({ sx: sx }, { children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {}) })));
};
exports.default = Initializer;
