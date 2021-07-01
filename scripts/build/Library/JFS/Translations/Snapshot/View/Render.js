"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.table = exports.tr = exports.td = exports.style = exports.script = void 0;
const columns = ['de', 'en', 'it'];
const script = (js) => (`<script type="application/javascript">${js}</script>`);
exports.script = script;
const style = (css) => (`<style>${css}</style>`);
exports.style = style;
const td = (value, pivot) => (`<td class=\\"${pivot ? 'key-cell' : 'value-cell'}\\">${value}</td>`);
exports.td = td;
const tr = (row, pivot) => ([
    `<tr class=\\"${pivot ? 'header-row' : 'value-row'}\\">`,
    ...['key', ...columns]
        .map((key, index) => exports.td(row[key], !index)),
    '</tr>'
].join(''));
exports.tr = tr;
const table = (rows) => [
    `<table>`,
    ...rows.map((row, index) => exports.tr(row, !index)),
    `</table>`
].join('');
exports.table = table;
//# sourceMappingURL=Render.js.map