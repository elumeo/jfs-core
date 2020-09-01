"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ncp_1 = __importDefault(require("ncp"));
exports.default = (path, target, onComplete) => ncp_1.default(path, target, (error) => {
    if (error) {
        throw error;
    }
    else {
        onComplete();
    }
});
//# sourceMappingURL=Copy.js.map