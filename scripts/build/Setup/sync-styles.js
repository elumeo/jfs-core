"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const JFS_1 = __importDefault(require("../Library/JFS"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const ansi_colors_1 = require("ansi-colors");
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const Text_1 = __importDefault(require("../Library/Text"));
const File_1 = __importDefault(require("../Library/OS/Filesystem/File"));
JFS_1.default.discover(() => {
    if (JFS_1.default.Head instanceof App_1.default) {
        console.log('sync-development can not be run from an app');
        process.exit(1);
    }
    const src = new Directory_1.default({
        path: path_1.resolve(JFS_1.default.Head.path, 'src')
    });
    const build = new Directory_1.default({
        path: path_1.resolve(JFS_1.default.Head.path, 'build')
    });
    const isStyle = (file) => ['.scss', '.woff', '.woff2'].some(extension => Text_1.default.endsWith(file.path, extension));
    const path = (update) => {
        const virtual = update.path.substring(src.path.length);
        return path_1.join(build.path, virtual);
    };
    const onEqual = (update) => console.log(ansi_colors_1.magentaBright(update.path));
    src.on('FILE_CREATED', (update) => {
        if (isStyle(update)) {
            new File_1.default({
                path: path(update)
            }).create(() => onEqual(update));
        }
    });
    src.on('FILE_CHANGED', (update) => {
        if (isStyle(update)) {
            update.read(text => new File_1.default({
                path: path(update)
            }).write(text, () => onEqual(update)));
        }
    });
    src.on('FILE_REMOVED', (update) => {
        if (isStyle(update)) {
            new File_1.default({
                path: path(update)
            }).remove(() => onEqual(update));
        }
    });
    src.watch();
});
//# sourceMappingURL=sync-styles.js.map