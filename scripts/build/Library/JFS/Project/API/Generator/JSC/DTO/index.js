"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.group = exports.Description = exports.Constant = void 0;
const Render_1 = __importDefault(require("../../Render"));
const Constant = __importStar(require("./Constant"));
const Description = __importStar(require("./Description"));
exports.Constant = __importStar(require("./Constant"));
exports.Description = __importStar(require("./Description"));
const group = ({ name, constants, dtos, namespaces }) => {
    return (Render_1.default.TypeScript.namespace({
        name,
        what: Render_1.default.Text.lines(...[
            ...(constants || []).map(Constant.generate),
            ...dtos.map(description => Description.generate(Object.assign({}, description))),
            ...namespaces.map(dtoNamespace => exports.group(dtoNamespace))
        ].map(Render_1.default.EcmaScript.export))
    }));
};
exports.group = group;
//# sourceMappingURL=index.js.map