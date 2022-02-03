"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Stateless_1 = __importDefault(require("./Stateless"));
var Stateful_1 = __importDefault(require("./Stateful"));
var Title_1 = __importDefault(require("./Title"));
var moment_1 = __importDefault(require("moment"));
Date.prototype.toJSON = function () {
    return (0, moment_1.default)(this).format();
};
var App = function (_a) {
    var children = _a.children, allowRobotLogin = _a.allowRobotLogin, translations = _a.translations, packageJSON = _a.packageJSON, title = _a.title, store = _a.store;
    return (react_1.default.createElement(Stateful_1.default, { store: store },
        react_1.default.createElement(Title_1.default, { value: title || packageJSON.name }),
        react_1.default.createElement(Stateful_1.default.Initialized, null,
            react_1.default.createElement(Stateful_1.default.International, { translations: translations }, function (_a) {
                var locale = _a.locale;
                return (react_1.default.createElement(Stateless_1.default, { locale: locale, messages: translations[locale] },
                    react_1.default.createElement(Stateful_1.default.Snackbar, null, children)));
            })),
        react_1.default.createElement(Stateful_1.default.Uninitialized, null,
            react_1.default.createElement(Stateless_1.default.Style, null,
                react_1.default.createElement(Stateful_1.default.Initializer, { allowRobotLogin: allowRobotLogin, packageJSON: packageJSON, translations: translations })))));
};
exports.default = App;
