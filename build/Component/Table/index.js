"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualizedTable = void 0;
var VirtualizedTable_1 = require("./VirtualizedTable");
Object.defineProperty(exports, "VirtualizedTable", { enumerable: true, get: function () { return __importDefault(VirtualizedTable_1).default; } });
var Cell_1 = __importDefault(require("./Cell"));
var Head_1 = __importDefault(require("./Head"));
var Row_1 = __importDefault(require("./Row"));
var Table_1 = __importDefault(require("./Table"));
var Container_1 = __importDefault(require("./Container"));
var VirtualizedTable_2 = __importDefault(require("./VirtualizedTable"));
var Table = {
    Cell: Cell_1.default,
    Head: Head_1.default,
    Row: Row_1.default,
    Container: Container_1.default,
    Table: Table_1.default,
    VirtualizedTable: VirtualizedTable_2.default,
};
exports.default = Table;
