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
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var core_1 = require("@material-ui/core");
var styles = { marginRight: '21px' };
var ClearButton = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, _d = _a.iconSize, iconSize = _d === void 0 ? 'medium' : _d, _e = _a.multiple, multiple = _e === void 0 ? false : _e, onClick = _a.onClick;
    var handleClearClick = (0, react_1.useCallback)(function () { return onClick(multiple ? [] : ''); }, [onClick]);
    var finalIconSize = (0, react_1.useMemo)(function () { return iconSize ? iconSize : size === 'medium' ? 'medium' : 'small'; }, [iconSize, size]);
    return react_1.default.createElement(core_1.IconButton, { disabled: disabled, size: size, color: 'secondary', onClick: handleClearClick, style: styles },
        react_1.default.createElement(Close_1.default, { fontSize: finalIconSize }));
};
exports.default = (0, react_1.memo)(ClearButton);
