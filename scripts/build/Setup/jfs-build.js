"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const run = () => JFS_1.default.discover(() => {
    if (JFS_1.default.Head instanceof App_1.default) {
        console.log('jfs-build can not be run from an app');
    }
    else {
        JFS_1.default.Head.build(process.argv.slice(2)[0] === '--watch');
    }
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'build',
    scope: ['core', 'jfc'],
    run
});
//# sourceMappingURL=jfs-build.js.map