"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var useActions_1 = __importDefault(require("../../../../Store/useActions"));
var useSelector_1 = __importDefault(require("../../../../Store/useSelector"));
var Progress_1 = __importDefault(require("./Progress"));
var Initialized = function (_a) {
    var allowRobotLogin = _a.allowRobotLogin, packageJSON = _a.packageJSON, translations = _a.translations, children = _a.children;
    var initialized = (0, useSelector_1.default)(function (state) { return state.Core.App.appInitialized; });
    var initializeApp = (0, useActions_1.default)().initializeApp;
    react_1.default.useEffect(function () {
        initializeApp({
            allowRobotLogin: allowRobotLogin,
            packageJson: packageJSON,
            translations: translations
        });
    }, []);
    return (initialized
        ? react_1.default.createElement(react_1.default.Fragment, null, children)
        : react_1.default.createElement(Progress_1.default, null));
};
exports.default = Initialized;
