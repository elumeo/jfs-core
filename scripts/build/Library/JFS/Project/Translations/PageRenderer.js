"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const path_1 = require("path");
class PageRenderer {
    constructor(props) {
        this.renderPreview = ({ scriptInjection, previewReady }) => {
            this.htmlFile.read(html => this.cssFile.read(css => this.javaScriptFile.read(script => previewReady(html
                .replace('STYLE', css)
                .replace('SCRIPT', `<script type="application/javascript">${scriptInjection || ''}${script}</script>`)))));
        };
        this.htmlFile = new File_1.default({
            path: path_1.resolve(props.pageDirectoryPath, 'index.html')
        });
        this.cssFile = new File_1.default({
            path: path_1.resolve(props.pageDirectoryPath, 'style.css')
        });
        this.javaScriptFile = new File_1.default({
            path: path_1.resolve(props.pageDirectoryPath, 'script.js')
        });
    }
}
exports.default = PageRenderer;
//# sourceMappingURL=PageRenderer.js.map