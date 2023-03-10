"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedTable = void 0;
var VirtualizedTable_1 = require("./VirtualizedTable");
Object.defineProperty(exports, "VirtualizedTable", { enumerable: true, get: function () { return __importDefault(VirtualizedTable_1).default; } });
var TableHead_1 = __importDefault(require("./TableHead"));
var TableRow_1 = __importDefault(require("./TableRow"));
var TableCell_1 = __importDefault(require("./TableCell"));
var VirtualizedTable_2 = __importDefault(require("./VirtualizedTable"));
var Table = {
    TableHead: TableHead_1.default,
    TableRow: TableRow_1.default,
    TableCell: TableCell_1.default,
    VirtualizedTable: VirtualizedTable_2.default,
};
exports.default = Table;
