"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Snackbar_1 = __importDefault(require("@mui/material/Snackbar"));
// import useActions from '../../Store/useActions';
var useVisibleToast_1 = __importDefault(require("./useVisibleToast"));
var lab_1 = require("@mui/lab");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var Snackbar = function () {
    var dispatch = (0, react_redux_1.useDispatch)();
    var _a = (0, useVisibleToast_1.default)(), open = _a.open, severity = _a.severity, message = _a.message, autoHideDuration = _a.autoHideDuration;
    var onCloseCallback = react_1.default.useCallback(function (event, reason) {
        if (reason === 'timeout') {
            dispatch((0, Action_1.dismissToastAction)());
        }
    }, [dispatch]);
    // const alertEl = useMemo(() => {}, [])
    return (react_1.default.createElement(Snackbar_1.default, { open: open, id: 'alert-snackbar', onClose: onCloseCallback, autoHideDuration: autoHideDuration },
        react_1.default.createElement(lab_1.Alert, { severity: severity, variant: 'filled' }, message)));
};
exports.default = Snackbar;
