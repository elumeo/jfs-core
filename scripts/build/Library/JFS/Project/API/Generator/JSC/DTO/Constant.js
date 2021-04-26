"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const Render_1 = __importDefault(require("../../Render"));
const generate = (constant) => Render_1.default.TypeScript.variable({
    name: `I_${constant.name}`,
    value: `'${constant.value}'`
});
exports.generate = generate;
//# sourceMappingURL=Constant.js.map