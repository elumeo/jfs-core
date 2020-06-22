"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const App_1 = __importDefault(require("../Library/JFS/App"));
JFS_1.default.discover(() => {
    App_1.default.Translations.check();
});
//# sourceMappingURL=translation-check.js.map