"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../../../OS/Filesystem/Directory"));
const ansi_colors_1 = __importDefault(require("ansi-colors"));
const Notifier_1 = __importDefault(require("../../../../Notifier"));
class LocalLink {
    constructor(props) {
        this.toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;
        this.sync = (projectPath, syncList) => this.linkDirectory.directories(directories => directories
            .filter(({ name }) => syncList['includes'](name))
            .forEach(directory => {
            // directory.sync(
            //     resolve(
            //         projectPath,
            //         'node_modules',
            //         this.linkName,
            //         directory.name
            //     ),
            //     `${color.yellow(this.linkName)}/${color.cyan(directory.name)}`
            // )
        }));
        this.linkName = props.linkName;
        this.linkPath = props.linkPath;
        this.linkDirectory = new Directory_1.default({
            path: this.linkPath
        });
    }
}
LocalLink.prefix = 'jfs-sync: ';
LocalLink.isLocalLink = (dependencyVersion) => (dependencyVersion.substring(0, LocalLink.prefix.length) === LocalLink.prefix);
LocalLink.extractPath = (linkPath) => (linkPath.substring(LocalLink.prefix.length, linkPath.length));
LocalLink.showLocalLinks = (localLinks) => console.log(localLinks
    .map((localLink) => ansi_colors_1.default.green(localLink.toString()))
    .join('\n'), '\n');
LocalLink.warnNoLocalLinks = () => console.warn(Notifier_1.default.framedMessage(Notifier_1.default.multiLineMessage(ansi_colors_1.default.yellow([
    'WARNING: No local links to jfs-core or jfc components detected.',
    'Please check your dependencies.'
].join(' ')), '', `Troubleshooting: Your local link pattern should match ${ansi_colors_1.default.green(ansi_colors_1.default.bold(`"${LocalLink.prefix}path/to/jfs/module"`))}`)));
exports.default = LocalLink;
//# sourceMappingURL=LocalLink.js.map