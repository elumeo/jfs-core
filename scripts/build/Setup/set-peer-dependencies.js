"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const JFS_1 = __importDefault(require("../Library/JFS"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const message = {
    completed: (name) => (`Added peerDependencies to package.json of ${name}`)
};
JFS_1.default.discover(() => {
    if (!(JFS_1.default.Head instanceof Core_1.default)) {
        JFS_1.default.Core.nodePackage.json(({ dependencies }) => {
            JFS_1.default.Head.nodePackage.json(nodePackage => {
                JFS_1.default.Head.nodePackage.file.save(Object.assign(Object.assign({}, nodePackage), { peerDependencies: dependencies }), () => console.log(message.completed(nodePackage.name)));
            });
        });
    }
});
//# sourceMappingURL=set-peer-dependencies.js.map