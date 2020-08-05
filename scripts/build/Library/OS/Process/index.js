"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class Process {
    constructor({ command, parameters, options }) {
        this.cwd = (cwd) => {
            this.options.cwd = cwd.path;
        };
        this.run = (onSpawn) => {
            this.instance = child_process_1.spawn(this.command, this.parameters, this.options);
            if (onSpawn) {
                onSpawn(this.instance);
            }
        };
        this.command = command;
        this.parameters = parameters;
        this.options = (options || {});
    }
}
Process.print = (instance) => {
    instance.stdout.on('data', data => console.log(data.toString()));
    instance.stderr.on('data', data => console.log(data.toString()));
    instance.on('exit', code => console.log('EXIT: ', code));
};
exports.default = Process;
//# sourceMappingURL=index.js.map