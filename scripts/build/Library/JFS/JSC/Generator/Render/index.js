"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./Text"));
const JavaScript_1 = __importDefault(require("./JavaScript"));
const TypeScript_1 = __importDefault(require("./TypeScript"));
const EcmaScript_1 = __importDefault(require("./EcmaScript"));
const Axios_1 = __importDefault(require("./Axios"));
class Render {
}
Render.Text = Text_1.default;
Render.JavaScript = JavaScript_1.default;
Render.TypeScript = TypeScript_1.default;
Render.EcmaScript = EcmaScript_1.default;
Render.Axios = Axios_1.default;
exports.default = Render;
//# sourceMappingURL=index.js.map