"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Default_1 = __importDefault(require("./Default"));
var DateTime_1 = __importDefault(require("./DateTime"));
var DateTimeRange_1 = __importDefault(require("./DateTimeRange"));
var Loading_1 = __importDefault(require("./Loading"));
var Msisdn_1 = __importDefault(require("./Msisdn"));
var Product_1 = __importDefault(require("./Product"));
var Root_1 = __importDefault(require("./Root"));
var Select_1 = __importDefault(require("./Select"));
var TableCell = {
    DateTime: DateTime_1.default,
    DateTimeRange: DateTimeRange_1.default,
    Default: Default_1.default,
    Loading: Loading_1.default,
    Msisdn: Msisdn_1.default,
    Product: Product_1.default,
    Root: Root_1.default,
    Select: Select_1.default
};
exports.default = TableCell;
