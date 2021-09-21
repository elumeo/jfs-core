"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = exports.Navigation = exports.Translations = void 0;
var moment_1 = __importDefault(require("moment"));
Date.prototype.toJSON = function () {
    return (0, moment_1.default)(this).format();
};
var Translations_json_1 = require("./Translations.json");
Object.defineProperty(exports, "Translations", { enumerable: true, get: function () { return __importDefault(Translations_json_1).default; } });
var Navigation_1 = require("./Navigation");
Object.defineProperty(exports, "Navigation", { enumerable: true, get: function () { return __importDefault(Navigation_1).default; } });
var Routes_1 = require("./Routes");
Object.defineProperty(exports, "Routes", { enumerable: true, get: function () { return __importDefault(Routes_1).default; } });
