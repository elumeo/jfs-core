"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="@welldone-software/why-did-you-render" />
var react_1 = __importDefault(require("react"));
if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var whyDidYouRender = require('@welldone-software/why-did-you-render');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    var ReactRedux = require('react-redux/dist/react-redux.js');
    whyDidYouRender(react_1.default, {
        trackAllPureComponents: true,
        trackExtraHooks: [
            [ReactRedux, 'useSelector'],
        ],
        exclude: [
            new RegExp('Virtuoso'),
            new RegExp('TableVirtuoso'),
        ]
    });
}
