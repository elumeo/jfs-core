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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icons_material_1 = require("@mui/icons-material");
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var react_1 = __importDefault(require("react"));
var inputComponentByVariant = function (variant) {
    switch (variant) {
        case 'outlined':
            return material_1.OutlinedInput;
        case 'filled':
            return material_1.FilledInput;
        case 'standard': return material_1.Input;
        default:
            return material_1.Input;
    }
};
var CustomInput = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'standard' : _b, label = _a.label, onClear = _a.onClear, canClear = _a.canClear, helperText = _a.helperText, inputProps = __rest(_a, ["variant", "label", "onClear", "canClear", "helperText"]);
    var Determined = react_1.default.useMemo(function () { return inputComponentByVariant(variant); }, [variant]);
    return (react_1.default.createElement(material_1.Stack, { spacing: 0.25 },
        react_1.default.createElement(Determined, __assign({ label: label, endAdornment: canClear
                ? react_1.default.createElement(material_1.InputAdornment, { position: 'end' },
                    react_1.default.createElement(material_1.IconButton, { color: 'secondary', size: variant !== 'standard' ? 'medium' : 'small', onClick: onClear },
                        react_1.default.createElement(icons_material_1.Clear, null)))
                : react_1.default.createElement(react_1.default.Fragment, null) }, inputProps)),
        helperText && react_1.default.createElement(material_1.Typography, { variant: 'caption', color: colors_1.grey[700] }, helperText)));
};
exports.default = CustomInput;
