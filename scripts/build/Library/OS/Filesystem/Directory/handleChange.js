"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = __importDefault(require("ansi-colors"));
const File_1 = __importDefault(require("../File"));
const index_1 = __importDefault(require("./index"));
const formatMessagePrefix = (messagePrefix) => messagePrefix ? `${messagePrefix}: ` : '';
const handleNewDirectory = (targetPath, corePath, messagePrefix) => {
    const newDirectory = new index_1.default({ path: targetPath });
    newDirectory.create(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.greenBright(`+${corePath}`)}`);
    });
};
const handleNewFile = (sourcePath, targetPath, corePath, messagePrefix) => {
    const newFile = new File_1.default({ path: sourcePath });
    newFile.copy(targetPath, () => {
        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.greenBright(`+${corePath}`)}`);
    });
};
const handleRemoveFile = (targetPath, corePath, messagePrefix) => {
    const removedFile = new File_1.default({ path: targetPath });
    removedFile.remove(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.redBright(`-${corePath}`)}`);
    });
};
const handleRemoveDirectory = (targetPath, corePath, messagePrefix) => {
    const removedDirectory = new index_1.default({ path: targetPath });
    removedDirectory.remove(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.redBright(`-${corePath}`)}`);
    });
};
const handleChange = ({ event, sourcePath, targetPath, corePath, messagePrefix }) => {
    switch (event) {
        case 'addDir': {
            handleNewDirectory(targetPath, corePath, messagePrefix);
            break;
        }
        case 'add':
        case 'change': {
            handleNewFile(sourcePath, targetPath, corePath, messagePrefix);
            break;
        }
        case 'unlink': {
            handleRemoveFile(targetPath, corePath, messagePrefix);
            break;
        }
        case 'unlinkDir': {
            handleRemoveDirectory(targetPath, corePath, messagePrefix);
        }
    }
};
exports.default = handleChange;
//# sourceMappingURL=handleChange.js.map