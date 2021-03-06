"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Job_1 = __importDefault(require("../Library/Job"));
const Script_1 = __importDefault(require("../Library/JFS/Core/Script"));
const job = new Job_1.default({
    name: 'jsc-api-check',
    task: onComplete => JFS_1.default.discover(() => JFS_1.default.Head.JSC.describe(JFS_1.default.Head, description => {
        JFS_1.default.Head.JSC.check({
            description,
            onComplete
        });
    })),
    onComplete: (diffSequence, status) => {
        status(diffSequence.length
            ? 'NOT_OK'
            : 'OK');
    }
});
exports.default = new Script_1.default({
    path: __filename,
    name: 'jsc-check',
    run: () => job.run(),
    scope: ['all']
});
//# sourceMappingURL=jsc-check.js.map