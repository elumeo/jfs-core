"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var react_redux_1 = require("react-redux");
var Action_1 = require("../../../Store/Action");
var sx = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
var Initializer = function (_a) {
    var allowRobotLogin = _a.allowRobotLogin, packageJSON = _a.packageJSON, translations = _a.translations;
    var dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(function () {
        dispatch((0, Action_1.initializeApp)({
            allowRobotLogin: allowRobotLogin,
            packageJson: packageJSON,
            translations: translations
        }));
    }, []);
    return (react_1.default.createElement(material_1.Box, { sx: sx },
        react_1.default.createElement(material_1.CircularProgress, null)));
};
exports.default = Initializer;
