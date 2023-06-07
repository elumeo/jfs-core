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
var react_1 = __importDefault(require("react"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_intl_1 = require("react-intl");
var Redux_1 = require("Types/Redux");
var react_redux_1 = require("react-redux");
var Action_1 = require("Store/Action");
var Dialog = function (_a) {
    var children = _a.children;
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var open = (0, Redux_1.useSelector)(function (state) { return state.Core.Settings.settingsOpen; });
    var onClose = react_1.default.useCallback(function () { return dispatch((0, Action_1.closeSettings)()); }, [dispatch]);
    return ((0, jsx_runtime_1.jsxs)(Dialog_1.default, __assign({ open: open, onClose: onClose }, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: formatMessage({ id: 'app.settings' }) }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { children: children }), (0, jsx_runtime_1.jsx)(DialogActions_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({ variant: 'outlined', onClick: onClose }, { children: formatMessage({ id: 'app.closeBtnLabelModalDialog' }) })) })] })));
};
exports.default = Dialog;
