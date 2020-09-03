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
const Process_1 = __importDefault(require("../../../OS/Process"));
const ansi_colors_1 = require("ansi-colors");
class Transpiler {
}
Transpiler.process = null;
Transpiler.run = (project) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => {
        new Process_1.default({
            command: 'node',
            parameters: [
                project.resolve('node_modules', 'typescript', 'bin', 'tsc')
            ],
            options: {
                cwd: project.path,
                stdio: 'inherit'
            }
        }).run(instance => {
            Transpiler.running = true;
            Transpiler.process = instance;
            instance.on('exit', code => {
                Transpiler.running = false;
                if (!code) {
                    console.log(ansi_colors_1.green('No type errors found.'));
                }
                resolve();
            });
        });
    });
});
exports.default = Transpiler;
//# sourceMappingURL=Transpiler.js.map