"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Process_1 = __importDefault(require("../../OS/Process"));
class Subpackage {
}
Subpackage.install = (core) => new Promise(resolve => {
    const child = new Process_1.default({
        command: 'npm',
        parameters: ['run', 'subpkg:install'],
        options: {
            cwd: core.path,
            stdio: 'inherit'
        }
    });
    child.run(instance => instance.on('exit', resolve));
});
exports.default = Subpackage;
//# sourceMappingURL=Subpackage.js.map