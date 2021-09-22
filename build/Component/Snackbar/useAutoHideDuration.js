"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var MINIMUM_AUTO_HIDE_DURATION = 2000;
var READ_TIME_WORDS_PER_MILLISECOND = 0.00375;
var READ_TIME_MILLISECONDS_PER_WORD = 1 / READ_TIME_WORDS_PER_MILLISECOND;
var useAutoHideDuration = function (words) {
    var _a = react_1.default.useState(MINIMUM_AUTO_HIDE_DURATION), autoHideDuration = _a[0], setAutoHideDuration = _a[1];
    react_1.default.useEffect(function () {
        var next = words.length * READ_TIME_MILLISECONDS_PER_WORD;
        setAutoHideDuration(next >= MINIMUM_AUTO_HIDE_DURATION ? next : MINIMUM_AUTO_HIDE_DURATION);
    }, [JSON.stringify(words)]);
    return autoHideDuration;
};
exports.default = useAutoHideDuration;
