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
var Redux_1 = require("../../Types/Redux");
var DebugButton = function (_a) {
    var _b = _a.selector, selector = _b === void 0 ? function (state) { return state; } : _b, _c = _a.actions, actions = _c === void 0 ? [Action.addErrorNotification] : _c, _d = _a.mapper, mapper = _d === void 0 ? function (action) { var _a, _b; return (_b = (_a = (action)) === null || _a === void 0 ? void 0 : _a.payload) !== null && _b !== void 0 ? _b : action.type; } : _d, _e = _a.filter, filter = _e === void 0 ? function () { return true; } : _e;
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var state = (0, Redux_1.useSelector)(selector);
    var _f = (0, react_1.useState)(false), open = _f[0], setOpen = _f[1];
    var _g = (0, react_1.useState)(''), description = _g[0], setDescription = _g[1];
    var openDialog = react_1.default.useCallback(function () {
        setOpen(true);
    }, [setOpen]);
    var closeDialog = react_1.default.useCallback(function () {
        setOpen(false);
        setDescription('');
    }, [setOpen, setDescription]);
    var submit = react_1.default.useCallback(function () {
        dispatch(Action.Debug.post({ description: description, state: state }));
        closeDialog();
    }, [dispatch, state, description, closeDialog]);
    var onChange = react_1.default.useCallback(function (e) {
        var _a;
        setDescription((_a = e.target.value) === null || _a === void 0 ? void 0 : _a.slice(0, Math.min(e.target.value.length, 255)));
    }, [setDescription]);
    (0, react_1.useEffect)(function () {
        dispatch(Action.Debug.register({ actions: actions, mapper: mapper, filter: filter }));
    }, []);
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
