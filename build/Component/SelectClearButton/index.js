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
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var SelectClearButton = function (_a) {
    var children = _a.children, onChange = _a.onChange, _b = _a.clearButtonSize, clearButtonSize = _b === void 0 ? 'small' : _b, _c = _a.clearIconSize, clearIconSize = _c === void 0 ? 'small' : _c, _d = _a.variant, variant = _d === void 0 ? 'standard' : _d, endAdornment = _a.endAdornment, rest = __rest(_a, ["children", "onChange", "clearButtonSize", "clearIconSize", "variant", "endAdornment"]);
    var getIconSize = (0, react_1.useCallback)(function () { return clearIconSize ? clearIconSize : clearButtonSize === 'medium' ? 'medium' : 'small'; }, []);
    var _e = (0, react_1.useState)(false), showClearButton = _e[0], setShowClearButton = _e[1];
    var _f = (0, react_1.useState)(null), inputValue = _f[0], setInputValue = _f[1];
    (0, react_1.useEffect)(function () {
        if (onChange !== undefined) {
            if (rest.value !== undefined) {
                if ((rest.multiple === false && rest.value !== '' || rest.value.length > 0) && showClearButton === false) {
                    setShowClearButton(true);
                }
                else if (rest.value === '' && showClearButton === true) {
                    setShowClearButton(false);
                }
                if (inputValue !== rest.value) {
                    setInputValue(rest.value);
                }
            }
        }
    }, [rest.value]);
    var handleOnChange = (0, react_1.useCallback)(function (event, changeValue) {
        if (onChange === undefined) {
            if (rest.multiple === false && rest.value !== '' || rest.value.length > 0) {
                if (showClearButton === false) {
                    setShowClearButton(true);
                }
            }
            else if (showClearButton === true) {
                setShowClearButton(false);
            }
            if (rest.value === undefined) {
                setInputValue(changeValue === null ? rest.multiple ? [] : '' : changeValue);
            }
        }
        else {
            onChange(event, changeValue);
        }
    }, [onChange]);
    var handleClearClick = (0, react_1.useCallback)(function () { return handleOnChange(null, null); }, [onChange]);
    var endAdornmentClearButton = showClearButton && (react_1.default.createElement(core_1.IconButton, { disabled: rest.disabled, size: clearButtonSize, color: 'secondary', onClick: handleClearClick, style: { marginRight: '21px' } },
        react_1.default.createElement(Close_1.default, { fontSize: getIconSize() })));
    var preparedEndAdornment = react_1.default.createElement(core_1.InputAdornment, { position: 'end' },
        endAdornment && endAdornment.props.children,
        endAdornmentClearButton);
    return (react_1.default.createElement(core_1.Select, __assign({}, rest, { onChange: handleOnChange, endAdornment: preparedEndAdornment, autoComplete: 'new-password', value: inputValue === null ? rest.multiple ? [] : '' : inputValue }), children));
};
exports.default = (0, react_1.memo)(SelectClearButton);
