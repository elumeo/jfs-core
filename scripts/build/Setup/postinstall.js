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
const JFS_1 = __importDefault(require("../Library/JFS"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const Process_1 = __importDefault(require("../Library/OS/Process"));
exports.default = new Script_1.default({
    path: __filename,
    name: 'jfs-postinstall',
    scope: ['all'],
    run: () => JFS_1.default.discover(() => __awaiter(void 0, void 0, void 0, function* () {
        yield JFS_1.default.Head.addRegisterScripts(JFS_1.default.Core);
        yield JFS_1.default.Head.registerScripts();
        yield JFS_1.default.Head.deployConfigFiles();
        yield JFS_1.default.Head.setPeerDependencies();
        const parent = yield JFS_1.default.Head.parent();
        if (parent) {
            const propagation = new Process_1.default({
                command: process.platform === 'win32' ? 'npm.cmd' : 'npm',
                parameters: ['run', 'jfs-postinstall'],
                options: {
                    cwd: parent.path,
                    stdio: 'inherit'
                }
            });
            propagation.run();
        }
    }))
});
//# sourceMappingURL=postinstall.js.map