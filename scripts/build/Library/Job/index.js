"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = require("ansi-colors");
const missingSpaceAmount = (text, width) => (text.length <= width
    ? width - text.length
    : 0);
const whitespaces = (amount) => Array(amount).fill(' ').join('');
const centerText = (text, width) => {
    const space = whitespaces(Math.floor(missingSpaceAmount(text, width) / 2));
    return `${space}${text}${space}`;
};
class Notify {
}
Notify.printCheck = ({ status, checkName, description }) => {
    const color = (status === 'OK'
        ? ansi_colors_1.greenBright
        : ansi_colors_1.redBright);
    const text = centerText(status, 'NOT_OK'.length + 1);
    const details = (description
        ? [description]
        : []);
    console.log([
        ' ' + color(text),
        checkName,
        ...details
    ].join(' | '));
};
class Job {
    constructor({ name, task, onComplete }) {
        this.status = (status, description) => {
            Notify.printCheck({
                checkName: this.name,
                status,
                description
            });
        };
        this.run = () => this.task((payload) => this.onComplete(payload, (text, description) => this.status(text, description)));
        this.name = name;
        this.task = task;
        this.onComplete = onComplete;
    }
}
exports.default = Job;
//# sourceMappingURL=index.js.map