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
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var material_1 = require("@mui/material");
var react_1 = __importDefault(require("react"));
var Action_1 = require("../../Store/Action");
var react_redux_1 = require("react-redux");
var Clippy_type_1 = require("../../Types/Clippy.type");
var ClippyConfig_selector_1 = require("../../Store/Selector/Core/ClippyConfig.selector");
var ClippyMenu = function () {
    var variant = (0, react_redux_1.useSelector)(ClippyConfig_selector_1.pickPreferredClippyVariant);
    var dispatch = (0, react_redux_1.useDispatch)();
    var handleChange = react_1.default.useCallback(function (event) {
        dispatch((0, Action_1.clippySaveAgent)(event.target.value));
    }, [dispatch]);
    return (0, jsx_runtime_1.jsxs)(material_1.FormControl, __assign({ fullWidth: true }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, __assign({ id: 'clippy-picker-label' }, { children: "Helferlein w\u00E4hlen" })), (0, jsx_runtime_1.jsx)(material_1.Select, __assign({ value: variant, onChange: handleChange }, { children: Clippy_type_1.AGENTS
                    .map(function (agentName) {
                    return (0, jsx_runtime_1.jsx)(material_1.MenuItem, __assign({ value: agentName }, { children: agentName }), agentName);
                }) }))] }));
};
exports.default = ClippyMenu;
