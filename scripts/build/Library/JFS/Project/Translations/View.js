"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Snapshot_1 = __importDefault(require("./Snapshot"));
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
const path_1 = require("path");
class View {
}
View.html = (snapshot, onComplete) => {
    onComplete([
        `<table>`,
        ...snapshot.translations.table(snapshot.includeCompleteRows).map((row, rowIndex) => [
            `<tr class=\\"${rowIndex ? 'value-row' : 'header-row'}\\">`,
            ...[
                'key',
                ...snapshot.translations.languages().map(language => language.name())
            ].map((key, index) => (`<td class=\\"${index ? 'value-cell' : 'key-cell'}\\">${row[key]}</td>`)),
            '</tr>'
        ].join('')),
        `</table>`
    ].join(''));
};
View.render = (snapshot, onComplete) => (View.html(snapshot, (html) => __awaiter(void 0, void 0, void 0, function* () {
    return Snapshot_1.default.renderer.renderPreview({
        scriptInjection: [
            `const htmlTable = \"${html}\";`,
            `const csvPath = \"${(yield snapshot.file('csv')).path}\";`
        ].join(''),
        previewReady: onComplete
    });
})));
View.create = (version, snapshot, onComplete) => View.render(snapshot, (html) => __awaiter(void 0, void 0, void 0, function* () {
    const htmlFile = new File_1.default({
        path: path_1.resolve(snapshot.subject.parent, [Snapshot_1.default.prefix, version.toString(), '.html'].join(''))
    });
    htmlFile.create(() => htmlFile.write(html, onComplete));
}));
exports.default = View;
//# sourceMappingURL=View.js.map