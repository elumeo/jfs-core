"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var List_1 = __importDefault(require("@mui/material/List"));
var Redux_1 = require("../../Types/Redux");
var Header_1 = __importDefault(require("./Header"));
var react_redux_1 = require("react-redux");
var Action_1 = require("../../Store/Action");
var material_1 = require("@mui/material");
var styles = { width: 270 };
var Drawer = function (_a) {
    var children = _a.children;
    var dispatch = (0, react_redux_1.useDispatch)();
    var navigationOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Navigation.navigationOpen; });
    var close = react_1.default.useCallback(function () { return dispatch((0, Action_1.closeNavigation)()); }, [dispatch]);
    return react_1.default.createElement(Drawer_1.default, { open: navigationOpen, anchor: 'left', onClose: close },
        react_1.default.createElement(material_1.Box, { sx: styles },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(List_1.default, null, children)));
};
exports.default = Drawer;
