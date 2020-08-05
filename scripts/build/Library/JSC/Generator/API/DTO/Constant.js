"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Render_1 = __importDefault(require("../../Render"));
class Constant {
}
Constant.generate = ({ name, value }) => Render_1.default.TypeScript.variable({
    name,
    value: `'${value}'`
});
exports.default = Constant;
//# sourceMappingURL=Constant.js.map