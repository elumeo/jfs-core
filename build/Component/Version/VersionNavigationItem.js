"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@welldone-software/why-did-you-render/jsx-runtime");
var react_intl_1 = require("react-intl");
var react_1 = __importDefault(require("react"));
var useCore_1 = __importDefault(require("../../Effect/useCore"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var Info_1 = __importDefault(require("@mui/icons-material/Info"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Version_1 = require("../../Constant/Version");
var VersionNavigationItem = function () {
    var formatMessage = (0, react_intl_1.useIntl)().formatMessage;
    var version = (0, useCore_1.default)().App.packageJson.version;
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Info_1.default, { color: 'info' }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: formatMessage({ id: 'app.version' }, { versionNumber: version }) })] }), (0, jsx_runtime_1.jsxs)(ListItem_1.default, { children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Info_1.default, { color: 'info' }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: formatMessage({ id: 'core.version' }, { versionNumber: Version_1.CORE_VERSION }) })] })] });
};
exports.default = react_1.default.memo(VersionNavigationItem);
