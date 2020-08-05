"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directory_1 = __importDefault(require("../../OS/Filesystem/Directory"));
const path_1 = require("path");
const ansi_colors_1 = __importDefault(require("ansi-colors"));
const Notifier_1 = __importDefault(require("../../Notifier"));
class LocalLink {
    constructor(props) {
        this.toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;
        this.sync = (projectPath, syncList) => this.linkDirectory.directories(directories => directories
            .filter(({ name }) => syncList['includes'](name))
            .forEach(directory => directory.sync(path_1.resolve(projectPath, 'node_modules', this.linkName, directory.name), `${ansi_colors_1.default.yellow(this.linkName)}/${ansi_colors_1.default.cyan(directory.name)}`)));
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
LocalLink.fromDependency = (nodePackage, name, value) => (new LocalLink({
    linkName: name,
    linkPath: path_1.resolve(nodePackage.file.parent, LocalLink.extractPath(value))
}));
exports.default = LocalLink;
//# sourceMappingURL=LocalLink.js.map