"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = exports.column = void 0;
const column = (body, key) => (body.map(row => row[key]));
exports.column = column;
const parse = (text, delimiter = ',') => {
    const lines = split(text, delimiter);
    return table(lines[0], lines.slice(1));
};
exports.parse = parse;
const table = (head, lines) => [
    head,
    lines.map(row(head))
];
const split = (text, delimiter = ',') => (text
    .split('\n')
    .map(cells(delimiter))
    .filter(row => row.length));
const row = (head) => (cells) => (cells.reduce(fill(head), {}));
const fill = (head) => ((row, value, index) => {
    const key = head[index];
    row[key] = value;
    return row;
});
const cells = (delimiter = ',') => (row) => (row
    .split(delimiter)
    .map(cell));
const cell = (text) => (text === '' || text === 'undefined'
    ? null
    : text);
//# sourceMappingURL=CSV.js.map