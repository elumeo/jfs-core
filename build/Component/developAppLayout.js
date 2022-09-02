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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var Layout_1 = __importDefault(require("./App/Layout"));
var core_1 = require("@material-ui/core");
var Card_1 = require("./Card");
var DevelopAppLayout = function () {
    var _a = (0, react_1.useState)('singleColumnWithSpacing'), view = _a[0], setView = _a[1];
    var getLayoutArguments = function () {
        switch (view) {
            case 'singleColumnWithoutSpacing':
                return {
                    spacing: {
                        width: 0,
                        height: 0
                    }
                };
            case 'twoColumnsWithSpacing':
                return {
                    navigation: react_1.default.createElement(core_1.Card, null,
                        react_1.default.createElement(core_1.CardContent, null, "Navigation")),
                    spacing: {
                        width: 2,
                        height: 2.5
                    }
                };
            case 'twoColumnsWithoutSpacing':
                return {
                    navigation: react_1.default.createElement(core_1.Card, null,
                        react_1.default.createElement(core_1.CardContent, null, "Navigation")),
                    spacing: {
                        width: 0,
                        height: 0
                    }
                };
            default:
                return {
                    spacing: {
                        width: 2,
                        height: 2.5
                    }
                };
        }
    };
    return react_1.default.createElement(Layout_1.default, __assign({}, getLayoutArguments()),
        react_1.default.createElement(core_1.Card, { style: { height: '100%' } },
            react_1.default.createElement(Card_1.AppCardHeader, { title: 'App Layouts' }),
            react_1.default.createElement(Card_1.AppCardContent, null,
                react_1.default.createElement(core_1.Button, { onClick: function () { return setView('singleColumnWithSpacing'); } }, "Single Column With Spacing"),
                react_1.default.createElement(core_1.Button, { onClick: function () { return setView('singleColumnWithoutSpacing'); } }, "Single Column Without Spacing"),
                react_1.default.createElement(core_1.Button, { onClick: function () { return setView('twoColumnsWithSpacing'); } }, "Two Columns With Spacing"),
                react_1.default.createElement(core_1.Button, { onClick: function () { return setView('twoColumnsWithoutSpacing'); } }, "Two Columns Without Spacing"))));
};
exports.default = DevelopAppLayout;
