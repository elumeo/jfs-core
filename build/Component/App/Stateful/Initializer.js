"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var useActions_1 = __importDefault(require("../../../Store/useActions"));
var style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};
var Initializer = function (_a) {
    var allowRobotLogin = _a.allowRobotLogin, packageJSON = _a.packageJSON, translations = _a.translations;
    var initializeApp = (0, useActions_1.default)().initializeApp;
    react_1.default.useEffect(function () {
        initializeApp({
            allowRobotLogin: allowRobotLogin,
            packageJson: packageJSON,
            translations: translations
        });
    }, []);
    return (react_1.default.createElement("div", { style: style },
        react_1.default.createElement(core_1.CircularProgress, null)));
};
exports.default = Initializer;
