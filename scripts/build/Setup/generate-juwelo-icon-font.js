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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const DartSass = __importStar(require("dart-sass"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const run = () => JFS_1.default.discover(() => __awaiter(void 0, void 0, void 0, function* () {
    if (JFS_1.default.Head instanceof Core_1.default) {
        const Fontagon = (yield Promise.resolve().then(() => __importStar(require('fontagon')))).default;
        const resources = path_1.resolve(JFS_1.default.Head.path, 'scripts', 'Resources');
        const scss = path_1.resolve(resources, 'juwelo-icon-font', 'scss');
        const dist = path_1.resolve(resources, 'juwelo-icon-font', 'dist');
        const target = path_1.resolve(JFS_1.default.Head.path, 'src', 'Component', 'JuweloFontIcon');
        Fontagon({
            files: [
                path_1.resolve(resources, 'juwelo-icon-font', 'svg', '*.svg')
            ],
            dist,
            fontName: 'juwelo-icon-font',
            style: 'sass',
            classOptions: {
                baseClass: 'juwelo-icon-font',
                classPrefix: 'jif',
                order: ['woff', 'woff2']
            }
        }).then(opts => {
            DartSass.render({
                file: path_1.resolve(dist, 'juwelo-icon-font.sass'),
                outFile: path_1.resolve(scss, 'juwelo-icon-font.scss'),
            }, (error, result) => {
                if (error) {
                    console.error(error); // used to be "code" in v2x and below
                }
                else {
                    let cssLineSplit = result.css.toString().split(/\r?\n/);
                    const r = new RegExp('.*juwelo-icon-font\.eot.*');
                    cssLineSplit = cssLineSplit.filter(line => r.exec(line) === null);
                    fs_1.default.writeFile(path_1.resolve(dist, 'juwelo-icon-font.scss'), cssLineSplit.join('\n'), (err) => {
                        if (err) {
                            return console.log(err);
                        }
                        ['sass', 'eot', 'ttf', 'svg'].forEach(suffix => fs_1.default.unlinkSync(path_1.resolve(dist, `juwelo-icon-font.${suffix}`)));
                        ['scss', 'woff', 'woff2'].forEach(suffix => {
                            fs_1.default.copyFileSync(path_1.resolve(dist, `juwelo-icon-font.${suffix}`), path_1.resolve(target, `juwelo-icon-font.${suffix}`));
                            fs_1.default.unlinkSync(path_1.resolve(dist, `juwelo-icon-font.${suffix}`));
                        });
                        fs_1.default.rmdirSync(dist);
                        console.log('The file was saved!');
                    });
                }
            });
        }).catch(err => console.error('fail! ', err));
    }
}));
exports.default = new Script_1.default({
    path: __filename,
    name: 'generate-juwelo-icon-font',
    scope: ['core'],
    run
});
//# sourceMappingURL=generate-juwelo-icon-font.js.map