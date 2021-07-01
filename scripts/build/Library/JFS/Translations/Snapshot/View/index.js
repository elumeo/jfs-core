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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.inject = exports.Static = exports.Render = void 0;
const Render = __importStar(require("./Render"));
const Static = __importStar(require("./Static"));
exports.Render = __importStar(require("./Render"));
exports.Static = __importStar(require("./Static"));
const inject = ({ html, css, js }) => __awaiter(void 0, void 0, void 0, function* () {
    return (html
        .replace('<!--STYLE-->', Render.style(css))
        .replace('<!--SCRIPT-->', Render.script(js)));
});
exports.inject = inject;
const create = (injection) => __awaiter(void 0, void 0, void 0, function* () {
    return exports.inject({
        html: yield Static.read('index.html'),
        css: yield Static.read('style.css'),
        js: injection + (yield Static.read('script.js'))
    });
});
exports.create = create;
//# sourceMappingURL=index.js.map