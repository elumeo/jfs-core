"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.Type = exports.JSC = exports.Code = exports.Text = exports.HTML = exports.EcmaScript = exports.Axios = exports.TypeScript = void 0;
exports.TypeScript = __importStar(require("./TypeScript"));
exports.Axios = __importStar(require("./Axios"));
exports.EcmaScript = __importStar(require("./EcmaScript"));
exports.HTML = __importStar(require("./HTML"));
exports.Text = __importStar(require("./Text"));
exports.Code = __importStar(require("./Code"));
exports.JSC = __importStar(require("./JSC"));
exports.Type = __importStar(require("./Type"));
//# sourceMappingURL=index.js.map