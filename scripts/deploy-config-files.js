/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("ansi-colors");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __webpack_require__(1);
const FsNode_1 = __importDefault(__webpack_require__(4));
const File_1 = __importDefault(__webpack_require__(5));
const path_1 = __webpack_require__(0);
const rimraf_1 = __importDefault(__webpack_require__(9));
const ncp_1 = __importDefault(__webpack_require__(10));
const child_process_1 = __webpack_require__(11);
const chokidar_1 = __importDefault(__webpack_require__(12));
const handleChange_1 = __importDefault(__webpack_require__(13));
class Directory extends FsNode_1.default {
    constructor() {
        super(...arguments);
        this.children = (childrenReady) => {
            fs_1.readdir(this.path, (error, childrenNames) => {
                if (error) {
                    throw error;
                }
                else {
                    const files = [];
                    const directories = [];
                    childrenNames.forEach((childName) => {
                        const fsNodeProps = { path: path_1.resolve(this.path, childName) };
                        const fsNode = new FsNode_1.default(fsNodeProps);
                        fsNode.stats(stats => {
                            if (stats.isDirectory()) {
                                directories.push(new Directory(fsNodeProps));
                            }
                            else {
                                files.push(new File_1.default(fsNodeProps));
                            }
                            if (childrenNames.length === files.length + directories.length) {
                                childrenReady({
                                    directories,
                                    files
                                });
                            }
                        });
                    });
                }
            });
        };
        this.child = ({ childName, childReady }) => this.children(({ files, directories }) => childReady(files.find(file => file.name === childName) ||
            directories.find(directory => directory.name === childName)));
        this.files = (filesReady) => this.children(({ files }) => filesReady(files));
        this.file = ({ fileName, fileReady }) => this.files(files => fileReady(files.find(file => file.name === fileName)));
        this.directories = (directoriesReady) => this.children(({ directories }) => directoriesReady(directories));
        this.directory = ({ directoryName, directoryReady }) => this.directories(directories => directoryReady(directories.find(directory => directory.name === directoryName)));
        this.remove = (directoryRemoved) => rimraf_1.default(this.path, directoryRemoved);
        this.copy = ({ newPath, directoryCopied }) => ncp_1.default(this.path, newPath, (error) => {
            if (error) {
                throw error;
            }
            else {
                directoryCopied();
            }
        });
        this.run = ({ command, parameters, commandExited }) => {
            const options = {};
            options.cwd = this.path;
            const task = child_process_1.spawn(command, parameters, options);
            task.stdout.on('data', data => console.log(data.toString()));
            task.stderr.on('data', data => console.log(data.toString()));
            task.on('exit', code => commandExited(code, task));
        };
        this.watch = (watcherReady) => watcherReady(chokidar_1.default.watch(path_1.resolve(this.path)));
        this.create = (directoryCreated) => fs_1.mkdir(this.path, directoryCreated);
        this.sync = (targetBasePath, messagePrefix = '') => {
            this.copy({
                newPath: targetBasePath,
                directoryCopied: () => {
                    this.watch(watcher => setTimeout(() => watcher.on('all', (event, sourcePath) => {
                        const corePath = sourcePath.substring(this.path.length, sourcePath.length);
                        handleChange_1.default({
                            event,
                            sourcePath,
                            targetPath: [
                                targetBasePath,
                                corePath
                            ].join(''),
                            corePath,
                            messagePrefix
                        });
                    }), 1000));
                }
            });
        };
    }
}
exports.default = Directory;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __webpack_require__(1);
const path_1 = __webpack_require__(0);
class FsNode {
    constructor(props) {
        this.stats = (statsReady) => fs_1.lstat(this.path, (error, stats) => {
            if (error) {
                throw error;
            }
            else {
                statsReady(stats);
            }
        });
        this.exists = () => fs_1.existsSync(this.path);
        this.path = props.path;
        this.predecessors = props.path.split(path_1.sep);
        this.name = this.predecessors[this.predecessors.length - 1];
        this.parent = this.predecessors.slice(0, this.predecessors.length - 1).join(path_1.sep);
    }
}
exports.default = FsNode;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __webpack_require__(1);
const FsNode_1 = __importDefault(__webpack_require__(4));
class File extends FsNode_1.default {
    constructor() {
        super(...arguments);
        this.create = ({ fileCreated }) => fs_1.appendFile(this.path, '', (error) => {
            if (error) {
                throw error;
            }
            else if (fileCreated) {
                fileCreated();
            }
        });
        this.read = ({ encoding, dataReady }) => fs_1.readFile(this.path, encoding || File.defaultReadSettings.encoding, (error, data) => {
            if (error) {
                throw error;
            }
            else {
                dataReady(data);
            }
        });
        this.write = ({ data, dataWritten }) => fs_1.writeFile(this.path, data, (error) => {
            if (error) {
                throw error;
            }
            else if (dataWritten) {
                dataWritten();
            }
        });
        this.remove = ({ fileRemoved }) => this.exists() && fs_1.unlink(this.path, (error) => {
            if (error) {
                throw error;
            }
            else if (fileRemoved) {
                fileRemoved();
            }
        });
        this.copy = ({ newPath: path, fileCopied }) => this.read({
            dataReady: data => {
                const newFile = new File({ path });
                newFile.write({
                    data,
                    dataWritten: () => fileCopied(newFile)
                });
            }
        });
        this.move = ({ newPath, fileMoved }) => this.copy({
            newPath,
            fileCopied: newFile => fileMoved(newFile)
        });
    }
}
File.defaultReadSettings = {
    encoding: 'utf8',
};
exports.default = File;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Core_1 = __importDefault(__webpack_require__(8));
Core_1.default.deployAppSettings();


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __webpack_require__(0);
const ansi_colors_1 = __importDefault(__webpack_require__(2));
const Directory_1 = __importDefault(__webpack_require__(3));
const CLI_1 = __importDefault(__webpack_require__(14));
class Core {
    static sync() {
        if (!CLI_1.default.parameter('project-path')) {
            console.error(ansi_colors_1.default.red('Error: Missing path of related project'));
        }
        Core.developmentInstance().directory({
            directoryName: 'src',
            directoryReady: (srcDirectory) => {
                srcDirectory.sync(path_1.resolve(Core.projectInstance().path, 'src'));
            }
        });
        Core.developmentInstance().directory({
            directoryName: 'scripts',
            directoryReady: (srcDirectory) => {
                srcDirectory.sync(path_1.resolve(Core.projectInstance().path, 'scripts'));
            }
        });
    }
}
Core.projectInstance = () => new Directory_1.default({
    path: path_1.resolve(process.cwd(), CLI_1.default.parameter('project-path'), 'node_modules', '@elumeo', 'jfs-core')
});
Core.developmentInstance = () => new Directory_1.default({
    path: path_1.resolve(__dirname, '..')
});
Core.deployAppSettings = () => {
    const appDirectory = new Directory_1.default({
        path: path_1.resolve(process.cwd(), CLI_1.default.parameter('project-path'))
    });
    const globalSettingsDirectory = new Directory_1.default({
        path: path_1.resolve(__dirname, '..', 'settings')
    });
    globalSettingsDirectory.directory({
        directoryName: 'frontend',
        directoryReady: frontendDirectory => {
            globalSettingsDirectory.files(globalSettingsFiles => {
                frontendDirectory.files(frontendDirectoryFiles => {
                    let copiedFiles = 0;
                    const filesToCopy = [
                        ...frontendDirectoryFiles
                            .filter(({ name }) => ['tsconfig.json', 'tslint.json'].includes(name)),
                        ...globalSettingsFiles
                    ];
                    filesToCopy.forEach(file => {
                        file.copy({
                            newPath: path_1.resolve(appDirectory.path, file.name),
                            fileCopied: () => {
                                if (++copiedFiles === filesToCopy.length) {
                                    console.log(ansi_colors_1.default.greenBright('Deployed config files'));
                                }
                            }
                        });
                    });
                });
            });
        }
    });
};
Core.scriptsDirectory = (scriptsDirectoryReady) => {
    Core.developmentInstance().directory({
        directoryName: 'scripts',
        directoryReady: scriptsDirectory => scriptsDirectoryReady(scriptsDirectory)
    });
};
Core.scriptFiles = (scriptFilesReady) => {
    Core.scriptsDirectory(scriptsDirectory => scriptsDirectory.directory({
        directoryName: 'Setup',
        directoryReady: (setupDirectory) => setupDirectory.files(files => scriptFilesReady(files))
    }));
};
Core.compileScripts = (scriptFiles) => {
    const scriptFile = scriptFiles[0];
    Core.scriptsDirectory(scriptsDirectory => scriptFile.copy({
        newPath: path_1.resolve(scriptsDirectory.path, 'index.ts'),
        fileCopied: () => {
            scriptsDirectory.run({
                command: 'npm',
                parameters: [
                    'run',
                    'build-scripts',
                    '--',
                    '--output-filename',
                    scriptFile.name.replace('.ts', '.js')
                ],
                commandExited: () => {
                    if (scriptFiles.length > 1) {
                        Core.compileScripts(scriptFiles.slice(1, scriptFiles.length));
                    }
                }
            });
        }
    }));
};
exports.default = Core;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("rimraf");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ncp");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("chokidar");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ansi_colors_1 = __importDefault(__webpack_require__(2));
const File_1 = __importDefault(__webpack_require__(5));
const index_1 = __importDefault(__webpack_require__(3));
const formatMessagePrefix = (messagePrefix) => messagePrefix ? `${messagePrefix}: ` : '';
const handleNewDirectory = (targetPath, corePath, messagePrefix) => {
    const newDirectory = new index_1.default({ path: targetPath });
    newDirectory.create(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.greenBright(`+${corePath}`)}`);
    });
};
const handleNewFile = (sourcePath, targetPath, corePath, messagePrefix) => {
    const newFile = new File_1.default({ path: sourcePath });
    newFile.copy({
        newPath: targetPath,
        fileCopied: () => {
            console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.greenBright(`+${corePath}`)}`);
        }
    });
};
const handleRemoveFile = (targetPath, corePath, messagePrefix) => {
    const removedFile = new File_1.default({ path: targetPath });
    removedFile.remove({
        fileRemoved: () => {
            console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.redBright(`-${corePath}`)}`);
        }
    });
};
const handleRemoveDirectory = (targetPath, corePath, messagePrefix) => {
    const removedDirectory = new index_1.default({ path: targetPath });
    removedDirectory.remove(() => {
        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.redBright(`-${corePath}`)}`);
    });
};
const handleChange = ({ event, sourcePath, targetPath, corePath, messagePrefix }) => {
    switch (event) {
        case 'addDir': {
            handleNewDirectory(targetPath, corePath, messagePrefix);
            break;
        }
        case 'add':
        case 'change': {
            handleNewFile(sourcePath, targetPath, corePath, messagePrefix);
            break;
        }
        case 'unlink': {
            handleRemoveFile(targetPath, corePath, messagePrefix);
            break;
        }
        case 'unlinkDir': {
            handleRemoveDirectory(targetPath, corePath, messagePrefix);
        }
    }
};
exports.default = handleChange;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class CLI {
    static parse() {
        return process.argv
            .slice(2)
            .map(CLI.detectInput)
            .reduce(CLI.mergeInput, []);
    }
    static parameters() {
        return (CLI.parse()
            .reduce((result, parameter) => {
            const parameters = Object.assign({}, result);
            parameters[parameter.label] = (parameter.value.length > 1
                ? parameter.value
                : parameter.value[0]);
            return parameters;
        }, {}));
    }
    static parameter(name) {
        return CLI.parameters()[name];
    }
}
exports.default = CLI;
CLI.detectInput = (word) => {
    const isLongNameLabel = word.substring(0, 2) === '--';
    const isShortcutLabel = word.substring(0, 1) === '-';
    const isLabel = isLongNameLabel || isShortcutLabel;
    return {
        text: (isLongNameLabel
            ? word.substring(2, word.length)
            : isShortcutLabel
                ? word.substring(1, word.length)
                : word),
        type: isLabel ? 'label' : 'value'
    };
};
CLI.mergeInput = (result, input) => {
    if (input.type === 'label') {
        result.push({ label: input.text, value: [] });
    }
    else {
        if (!result.length) {
            throw `CLI input must be labeled with '-' or '--'`;
        }
        result[result.length - 1].value.push(input.text);
    }
    return result;
};


/***/ })
/******/ ]);