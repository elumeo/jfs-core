"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = require("react-dom");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Badge_1 = __importDefault(require("@material-ui/core/Badge"));
var Popper_1 = __importDefault(require("@material-ui/core/Popper"));
var Popover_1 = __importDefault(require("@material-ui/core/Popover"));
var Notifications_1 = __importDefault(require("@material-ui/icons/Notifications"));
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
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(IconButton_1.default, { color: 'inherit', ref: buttonRef, "aria-describedby": id, onClick: function () { return setAnchorRef(open ? null : buttonRef.current); } },
            react_1.default.createElement(Badge_1.default, { badgeContent: all.length, color: 'secondary', overlap: 'rectangular' },
                react_1.default.createElement(Notifications_1.default, null))),
        (0, react_dom_1.createPortal)(keepOpenOnOutsideClick ? (react_1.default.createElement(Popper_1.default, { open: open, placement: 'bottom-end', id: id, anchorEl: anchorRef, modifiers: {
                flip: {
                    enabled: true,
                },
                preventOverflow: {
                    enabled: true,
                    boundariesElement: 'scrollParent',
                },
                arrow: {
                    enabled: true,
                    element: anchorRef,
                },
            } },
            react_1.default.createElement(Overlay_1.default, null))) : (react_1.default.createElement(Popover_1.default, { open: open, anchorEl: anchorRef, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            }, onClose: function () { return setAnchorRef(null); } },
            react_1.default.createElement(Overlay_1.default, null))), document.getElementById('overlay'))));
};
exports.default = ShowButton;
