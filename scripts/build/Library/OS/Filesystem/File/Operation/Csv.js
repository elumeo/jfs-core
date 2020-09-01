"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const json_2_csv_1 = require("json-2-csv");
const Read_1 = __importDefault(require("./Read"));
exports.default = (path, onComplete) => Read_1.default(path, data => json_2_csv_1.csv2json(data, (error, data) => {
    if (error) {
        throw error;
    }
    else {
        onComplete(data);
    }
}));
//# sourceMappingURL=Csv.js.map