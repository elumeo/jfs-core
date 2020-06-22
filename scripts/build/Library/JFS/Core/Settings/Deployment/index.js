"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = __importDefault(require("ansi-colors"));
class Deployment {
    constructor({ path, settings, onComplete }) {
        const totalDeployedFiles = [];
        settings.forEach(setting => setting.deploy({
            path,
            deploymentDone: (deployedFiles) => {
                totalDeployedFiles.push(deployedFiles);
                if (settings.length === totalDeployedFiles.length) {
                    onComplete(totalDeployedFiles.reduce((allDeployedFiles, deployedFiles) => [
                        ...allDeployedFiles,
                        ...deployedFiles
                    ], []));
                }
            }
        }));
    }
}
Deployment.notify = (deployedFiles) => {
    const title = (message) => ansi_colors_1.default.greenBright(`${message}\n`);
    const listEntry = (entry) => ansi_colors_1.default.greenBright(`-- ${entry}`);
    console.log(title('Deployed config files'));
    deployedFiles
        .forEach(({ name }) => console.log(listEntry(name)));
};
exports.default = Deployment;
//# sourceMappingURL=index.js.map