"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Core_1 = require("../Store/Selector/Core/Core");
var Redux_1 = require("../Types/Redux");
var useCore = function () {
    return (0, Redux_1.useSelector)(Core_1.Core);
};
exports.default = useCore;
