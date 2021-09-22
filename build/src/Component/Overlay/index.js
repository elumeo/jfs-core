"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_dom_1 = require("react-dom");
var Overlay = function (_a) {
    var children = _a.children;
    return (0, react_dom_1.createPortal)(children, document.getElementById('overlay'));
};
exports.default = Overlay;
