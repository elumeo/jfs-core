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
var react_dom_1 = require("react-dom");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Popper_1 = __importDefault(require("@mui/material/Popper"));
var Popover_1 = __importDefault(require("@mui/material/Popover"));
var Notifications_1 = __importDefault(require("@mui/icons-material/Notifications"));
var Overlay_1 = __importDefault(require("../../Notification/Overlay"));
var notistack_1 = require("notistack");
var Redux_1 = require("../../../Types/Redux");
var ShowButton = function (_a) {
    var keepOpenOnOutsideClick = _a.keepOpenOnOutsideClick;
    var _b = react_1.default.useState(null), anchorRef = _b[0], setAnchorRef = _b[1];
    var buttonRef = react_1.default.useRef();
    var open = Boolean(anchorRef);
    var id = open ? 'notification-popper' : undefined;
    var all = (0, Redux_1.useSelector)(function (state) { return state.Core.Notification.history; });
    var snackbar = (0, notistack_1.useSnackbar)();
    react_1.default.useEffect(function () {
        if (open) {
            all.forEach(function (_a) {
                var id = _a.id;
                return snackbar.closeSnackbar(id);
            });
        }
    }, [open]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ color: 'inherit', ref: buttonRef, "aria-describedby": id, onClick: function () { return setAnchorRef(open ? null : buttonRef.current); } }, { children: (0, jsx_runtime_1.jsx)(Badge_1.default, __assign({ badgeContent: all.length, color: 'secondary' }, { children: (0, jsx_runtime_1.jsx)(Notifications_1.default, {}) })) })), (0, react_dom_1.createPortal)(keepOpenOnOutsideClick ? ((0, jsx_runtime_1.jsx)(Popper_1.default, __assign({ open: open, placement: 'bottom-end', id: id, anchorEl: anchorRef, modifiers: [
                    {
                        name: 'flip',
                        enabled: true
                    },
                    {
                        name: 'preventOverflow',
                        enabled: true,
                        options: { boundariesElement: 'scrollParent' },
                    },
                    {
                        name: 'arrow',
                        enabled: true,
                        options: { element: anchorRef },
                    }
                ], onResize: undefined, onResizeCapture: undefined }, { children: (0, jsx_runtime_1.jsx)(Overlay_1.default, {}) }))) : ((0, jsx_runtime_1.jsx)(Popover_1.default, __assign({ open: open, anchorEl: anchorRef, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                }, onClose: function () { return setAnchorRef(null); } }, { children: (0, jsx_runtime_1.jsx)(Overlay_1.default, {}) }))), document.getElementById('overlay'))] }));
};
exports.default = ShowButton;
