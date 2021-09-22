"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Configuration_1 = require("../Store/Selector/Core/Configuration");
var Redux_1 = require("../Types/Redux");
var useConfig = function () {
    return (0, Redux_1.useSelector)(Configuration_1.Configuration);
};
exports.default = useConfig;
