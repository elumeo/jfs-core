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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var ButtonProgress_1 = require("../Button/ButtonProgress");
var IconButtonProgress = (0, react_1.forwardRef)(function (props, ref) {
    var children = props.children, onClick = props.onClick, _a = props.size, size = _a === void 0 ? 'medium' : _a, _b = props.color, color = _b === void 0 ? 'inherit' : _b, _c = props.disabled, disabled = _c === void 0 ? false : _c, _d = props.inProgress, inProgress = _d === void 0 ? false : _d, rest = __rest(props, ["children", "onClick", "size", "color", "disabled", "inProgress"]);
    var progressClasses = (0, ButtonProgress_1.progressStyles)(props);
    return (react_1.default.createElement(core_1.Box, { className: progressClasses.progressWrapper },
        react_1.default.createElement(core_1.IconButton, __assign({ ref: ref, size: size, color: color, disabled: disabled || inProgress, onClick: onClick }, rest), children),
        inProgress && (react_1.default.createElement(core_1.CircularProgress, { size: (0, ButtonProgress_1.mapToCircularProgressSize)(size), color: (0, ButtonProgress_1.mapToCircularProgressColor)(color), className: progressClasses.progress }))));
});
exports.default = (0, react_1.memo)(IconButtonProgress);
