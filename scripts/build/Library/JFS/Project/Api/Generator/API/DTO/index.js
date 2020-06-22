"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Render_1 = __importDefault(require("../../Render"));
const Constant_1 = __importDefault(require("./Constant"));
const Description_1 = __importDefault(require("./Description"));
class DTO {
}
DTO.Constant = Constant_1.default;
DTO.Description = Description_1.default;
DTO.group = ({ name, constants, dtos }) => (Render_1.default.TypeScript.namespace({
    name,
    what: Render_1.default.Text.lines(...[
        ...constants.map(DTO.Constant.generate),
        ...dtos.map((description) => DTO.Description.generate(Object.assign({}, description)))
    ].map(Render_1.default.EcmaScript.export))
}));
exports.default = DTO;
//# sourceMappingURL=index.js.map