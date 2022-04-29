"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_intl_1 = require("react-intl");
var Redux_1 = require("../../Types/Redux");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var Dialog = function (_a) {
    var children = _a.children;
    var dispatch = (0, react_redux_1.useDispatch)();
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var open = (0, Redux_1.useSelector)(function (state) { return state.Core.Settings.settingsOpen; });
    var onClose = react_1.default.useCallback(function () { return dispatch((0, Action_1.closeSettings)()); }, [dispatch]);
    return (react_1.default.createElement(Dialog_1.default, { open: open, onClose: onClose },
        react_1.default.createElement(DialogTitle_1.default, null, formatMessage({ id: 'app.settings' })),
        react_1.default.createElement(DialogContent_1.default, null, children),
        react_1.default.createElement(DialogActions_1.default, null,
            react_1.default.createElement(Button_1.default, { variant: 'outlined', onClick: onClose }, formatMessage({ id: 'app.closeBtnLabelModalDialog' })))));
};
exports.default = Dialog;
