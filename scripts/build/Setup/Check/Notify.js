"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = require("ansi-colors");
const missingSpaceAmount = (text, width) => (text.length <= width
    ? width - text.length
    : 0);
const whitespaces = (amount) => Array(amount).fill(' ').join('');
const leftAlignText = (text, width) => {
    const space = whitespaces(missingSpaceAmount(text, width));
    return `${text}${space}`;
};
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
    const text = centerText(status, 'NOT_OK'.length + 2);
    const name = ' ' + leftAlignText(checkName, 'jfs-translation-check'.length + 1);
    const details = (description
        ? [description]
        : []);
    console.log([
        color(text),
        name,
        ...details
    ].join('|'));
};
exports.default = Notify;
//# sourceMappingURL=Notify.js.map