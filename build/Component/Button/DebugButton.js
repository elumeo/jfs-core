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
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var react_redux_1 = require("react-redux");
var Action = __importStar(require("../../Store/Action"));
var Definition_1 = __importDefault(require("../App/Stateless/Style/Theme/Definition"));
var react_intl_1 = require("react-intl");
var DebugButton = function (_a) {
    var msg = _a.msg;
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var _b = (0, react_1.useState)(false), open = _b[0], setOpen = _b[1];
    var _c = (0, react_1.useState)(''), description = _c[0], setDescription = _c[1];
    var openDialog = react_1.default.useCallback(function () {
        setOpen(true);
    }, [setOpen]);
    var closeDialog = react_1.default.useCallback(function () {
        setOpen(false);
        setDescription('');
    }, [setOpen, setDescription]);
    var submit = react_1.default.useCallback(function () {
        dispatch(Action.Debug.post(JSON.stringify({ description: description, raw: msg })));
        closeDialog();
    }, [dispatch, msg, description, closeDialog]);
    var onChange = react_1.default.useCallback(function (e) {
        setDescription(e.target.value);
    }, [setDescription]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Dialog, { open: open, maxWidth: 'sm', fullWidth: true, onClose: closeDialog },
            react_1.default.createElement(core_1.DialogTitle, null, formatMessage({ id: 'debug.title' })),
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.TextField, { id: 'debug-input', label: formatMessage({ id: 'debug.label' }), value: description, onChange: onChange, fullWidth: true })),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(core_1.Button, { onClick: submit, variant: 'outlined', color: 'secondary' }, formatMessage({ id: 'debug.submit' })))),
        react_1.default.createElement(core_1.Tooltip, { title: formatMessage({ id: 'debug.title' }) },
            react_1.default.createElement(core_1.IconButton, { onClick: openDialog },
                react_1.default.createElement(core_1.Box, { color: Definition_1.default.palette.common.white },
                    react_1.default.createElement(icons_1.BugReport, { color: 'inherit' }))))));
};
exports.default = DebugButton;
