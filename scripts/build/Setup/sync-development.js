"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const JFS_1 = __importDefault(require("../Library/JFS"));
const App_1 = __importDefault(require("../Library/JFS/App"));
const Component_1 = __importDefault(require("../Library/JFS/Component"));
const Synchronization_1 = __importDefault(require("../Library/OS/Filesystem/Synchronization"));
const Core_1 = __importDefault(require("../Library/JFS/Core"));
const ansi_colors_1 = require("ansi-colors");
JFS_1.default.discover(() => {
    if (JFS_1.default.Head instanceof Core_1.default) {
        console.log('sync-development can not be run from the core');
        process.exit(1);
    }
    else if (JFS_1.default.Head instanceof App_1.default) {
        // JFS.Head.discover(
        //   () => {
        //     console.log({
        //       Core: JFS.Core,
        //       Components: (JFS.Head as App).components,
        //       App: JFS.Head
        //     });
        //   }
        // );
    }
    else if (JFS_1.default.Head instanceof Component_1.default) {
        // console.log({
        //   Core: JFS.Core,
        //   Component: JFS.Head,
        // });
    }
    JFS_1.default.Head.nodePackage.json(({ jfs }) => {
        if (jfs) {
            console.log('Synchronization');
            Object.keys(jfs.sync).map(name => {
                console.log(`- ${name} => ${jfs.sync[name]}`);
                const from = path_1.resolve(JFS_1.default.Head.path, jfs.sync[name]).replace('/', path_1.sep);
                const to = path_1.resolve(JFS_1.default.Head.path, 'node_modules', name).replace('/', path_1.sep);
                const synchronization = new Synchronization_1.default({
                    from, to,
                    ignore: [
                        'node_modules',
                        '.git',
                        '.idea'
                    ]
                });
                const format = (event, project, path) => {
                    return `${ansi_colors_1.cyanBright(event)}: ${ansi_colors_1.magenta(project)}${path}`;
                };
                synchronization.run(({ event, target }) => {
                    const path = target.path.substring(to.length);
                    const message = format(event, name, path);
                    console.log(message);
                });
            });
        }
    });
});
//# sourceMappingURL=sync-development.js.map