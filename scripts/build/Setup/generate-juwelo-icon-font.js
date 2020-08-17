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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const fontagon_1 = __importDefault(require("fontagon"));
const NodeSass = __importStar(require("node-sass"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
JFS_1.default.discover(() => {
    if (JFS_1.default.Head instanceof Core_1.default) {
        const resources = path_1.resolve(JFS_1.default.Head.path, 'scripts', 'Resources');
        const scss = path_1.resolve(resources, 'juwelo-icon-font', 'scss');
        const dist = path_1.resolve(resources, 'juwelo-icon-font', 'dist');
        const target = path_1.resolve(JFS_1.default.Head.path, 'src', 'Component', 'JuweloFontIcon');
        fontagon_1.default({
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
            NodeSass.render({
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
});
//# sourceMappingURL=generate-juwelo-icon-font.js.map