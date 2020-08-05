"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Project_1 = __importDefault(require("../../JFS/Project"));
const Text_1 = __importDefault(require("../../Text"));
class Component extends Project_1.default {
}
Component.fromNodePackage = (nodePackage, onComplete) => nodePackage.json(({ dependencies }) => onComplete(Object.keys(dependencies)
    .filter(name => Text_1.default.beginsWith(name, 'jfc-'))
    .map(jfcKey => new Component({
    path: nodePackage.nodeModule(jfcKey).path
}))));
exports.default = Component;
//# sourceMappingURL=index.js.map