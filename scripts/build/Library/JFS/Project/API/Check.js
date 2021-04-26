"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const json_diff_1 = __importDefault(require("json-diff"));
const run = (path, description) => __awaiter(void 0, void 0, void 0, function* () {
    if (!fs_extra_1.default.existsSync(path_1.resolve(path, 'src', 'API', 'JSC', 'Description.json'))) {
        return 'No description found.';
    }
    else {
        const data = yield fs_extra_1.default.readFile(path_1.resolve(path, 'src', 'API', 'JSC', 'Description.json'), 'utf8');
        return json_diff_1.default.diffString(description, JSON.parse(data));
    }
});
exports.run = run;
//# sourceMappingURL=Check.js.map