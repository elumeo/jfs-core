"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const JFS_1 = __importDefault(require("../Library/JFS"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const Directory_1 = __importDefault(require("../Library/OS/Filesystem/Directory"));
const Synchronization_1 = __importDefault(require("../Library/OS/Filesystem/Synchronization"));
const resources = ['build', `scripts${path_1.sep}build`, 'settings'];
JFS_1.default.discover(() => {
    if (JFS_1.default.Head instanceof App_1.default || JFS_1.default.Head instanceof Component_1.default) {
        const node_modules = path_1.resolve(JFS_1.default.Head.path, 'node_modules');
        JFS_1.default.Head.nodePackage.json(({ jfs: { sync } }) => {
            const projects = (Object.keys(sync).map(name => ({ name, path: sync[name] })));
            projects.forEach(({ name, path }) => {
                resources.forEach(resource => {
                    const synchronization = new Synchronization_1.default({
                        from: new Directory_1.default({
                            path: path_1.resolve(JFS_1.default.Head.path, path, resource)
                        }),
                        to: new Directory_1.default({
                            path: path_1.resolve(node_modules, name, resource)
                        })
                    });
                    synchronization.start();
                });
            });
        });
    }
});
//# sourceMappingURL=sync-development.js.map