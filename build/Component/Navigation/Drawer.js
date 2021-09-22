"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var useActions_1 = __importDefault(require("../../Store/useActions"));
var Redux_1 = require("../../Types/Redux");
var Header_1 = __importDefault(require("./Header"));
var Drawer = function (_a) {
    var children = _a.children;
    var closeNavigation = (0, useActions_1.default)().closeNavigation;
    var navigationOpen = (0, Redux_1.useSelector)(function (state) { return state.Core.Navigation.navigationOpen; });
    var close = (0, react_1.useCallback)(function () { return closeNavigation(); }, []);
    return (react_1.default.createElement(Drawer_1.default, { open: navigationOpen, anchor: 'left', onClose: close },
        react_1.default.createElement("div", { style: {
                width: 270,
            } },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(List_1.default, null, children))));
};
exports.default = Drawer;
