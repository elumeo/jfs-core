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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapt = exports.Type = exports.Client = exports.DTO = void 0;
exports.DTO = __importStar(require("./DTO"));
exports.Client = __importStar(require("./Client"));
exports.Type = __importStar(require("./Type"));
const DTO = __importStar(require("./DTO"));
const Client = __importStar(require("./Client"));
const adapt = (description) => (Object.assign(Object.assign({}, description), { dtos: DTO.namespaces(description.dtos), clients: Client.namespaces(description.clients) }));
exports.adapt = adapt;
//# sourceMappingURL=index.js.map