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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../Library/JFS/App/JFC/index.ts":
/*!***************************************!*\
  !*** ../Library/JFS/App/JFC/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst TsConfig_1 = __importDefault(__webpack_require__(/*! Library/TypeScript/TsConfig */ \"../Library/TypeScript/TsConfig.ts\"));\nconst Package_1 = __importDefault(__webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\"));\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst Text_1 = __importDefault(__webpack_require__(/*! Library/Text */ \"../Library/Text/index.ts\"));\nconst Virtual_1 = __importDefault(__webpack_require__(/*! Library/JFS/Virtual */ \"../Library/JFS/Virtual/index.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nvar Path;\n(function (Path) {\n    Path.removeWildcard = (path) => Text_1.default.removeSuffix(path, '/*');\n})(Path || (Path = {}));\nlet JFC = /** @class */ (() => {\n    class JFC {\n        constructor({ path, isHead }) {\n            this.setup = (onComplete) => this.tsConfig.update({\n                patcher: (tsConfig) => (Object.assign(Object.assign({}, tsConfig), { compilerOptions: Object.assign(Object.assign({}, tsConfig.compilerOptions), { paths: this.pathMappings }) })),\n                onComplete\n            });\n            this.virtualize = (onComplete) => {\n                const virtualEnvironment = new Virtual_1.default.Environment({\n                    root: this.path,\n                    source: path_1.resolve(this.path, 'src')\n                });\n                Object\n                    .keys(this.pathMappings)\n                    .forEach(alias => {\n                    const virtualPath = virtualEnvironment.createVirtualPath(Text_1.default.removePrefix(alias, `${this.aliasPrefix}/`));\n                    const sourcePath = virtualEnvironment.createSourcePath(Text_1.default.removePrefix(this.pathMappings[alias][0], `${this.pathPrefix}/`));\n                    if (Text_1.default.endsWith(sourcePath, '/*')) {\n                        const directory = new Directory_1.default({\n                            path: Path.removeWildcard(sourcePath)\n                        });\n                        const addDirectory = (directory) => {\n                            if (directory.exists()) {\n                                directory.files(files => {\n                                    files.forEach(file => virtualEnvironment.addMirror({\n                                        sourcePath: file.path,\n                                        virtualPath: path_1.resolve(Path.removeWildcard(virtualPath), file.name)\n                                    }));\n                                    directory.directories(directories => directories.forEach(addDirectory));\n                                });\n                            }\n                        };\n                        directory.create(() => addDirectory(directory));\n                    }\n                    else {\n                        const fileWithoutSuffix = new File_1.default({\n                            path: sourcePath\n                        });\n                        const sourceParent = new Directory_1.default({\n                            path: fileWithoutSuffix.parent\n                        });\n                        sourceParent.files(files => {\n                            const fileWithSuffix = files.find(file => Text_1.default.beginsWith(file.name, fileWithoutSuffix.name));\n                            if (fileWithSuffix) {\n                                const { path, name } = fileWithSuffix;\n                                const suffix = Text_1.default.removePrefix(name, fileWithoutSuffix.name);\n                                virtualEnvironment.addMirror({\n                                    sourcePath: path,\n                                    virtualPath: `${virtualPath}${suffix}`\n                                });\n                            }\n                        });\n                    }\n                });\n                setTimeout(() => {\n                    virtualEnvironment.mirrors.forEach(mirror => mirror.apply());\n                    onComplete();\n                }, 1000);\n            };\n            this.isHead = isHead || false;\n            this.path = path;\n            this.directory = new Directory_1.default({ path });\n            this.nodePackage = new Package_1.default(Package_1.default.location(path));\n            this.tsConfig = new TsConfig_1.default(TsConfig_1.default.location(path));\n            this.name = this.directory.name\n                .substring('jfc-'.length)\n                .split('-')\n                .map(Text_1.default.capitalize)\n                .join('');\n            this.aliasPrefix = `Jfc/${this.name}`;\n            this.pathPrefix = (this.isHead\n                ? `./`\n                : `../node_modules/${this.directory.name}`);\n            this.pathMappings = {\n                'Core/*': ['../node_modules/@elumeo/jfs-core/src/*'],\n                [`Jfc/${this.name}/Action/*`]: [`./Store/Action/*`],\n                [`Jfc/${this.name}/Component`]: [`./Component/index.tsx`],\n                [`Jfc/${this.name}/Component/*`]: [`./Component/*`],\n                [`Jfc/${this.name}/Mock/*`]: [`./Mock/*`],\n                [`Jfc/${this.name}/JscApi`]: [`./Jsc/JscApi.ts`],\n                [`Jfc/${this.name}/Setup`]: [`./index.ts`]\n            };\n        }\n    }\n    JFC.fromNodePackage = (nodePackage, onComplete) => nodePackage.json(({ dependencies }) => onComplete(Object.keys(dependencies)\n        .filter(name => Text_1.default.beginsWith(name, 'jfc-'))\n        .map(jfcKey => new JFC({ path: nodePackage.nodeModule(jfcKey).path }))));\n    return JFC;\n})();\nexports.default = JFC;\n\n\n//# sourceURL=webpack:///../Library/JFS/App/JFC/index.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/Language.ts":
/*!***************************************************!*\
  !*** ../Library/JFS/App/Translations/Language.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Language {\n    constructor(props) {\n        this.translationKeys = () => Object.keys(this.translationList);\n        this.missingKeys = (keyList) => {\n            const existingKeys = this.translationKeys();\n            return keyList.filter(keyListEntry => !existingKeys.includes(keyListEntry));\n        };\n        this.name = () => this.languageName;\n        this.lookup = (key) => {\n            return this.translationList[key] || '';\n        };\n        this.translationList = props.translationList;\n        this.languageName = props.languageName;\n    }\n}\nexports.default = Language;\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/Language.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/PageRenderer.ts":
/*!*******************************************************!*\
  !*** ../Library/JFS/App/Translations/PageRenderer.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nclass PageRenderer {\n    constructor(props) {\n        this.renderPreview = ({ scriptInjection, previewReady }) => {\n            this.htmlFile.read({\n                dataReady: html => this.cssFile.read({\n                    dataReady: css => this.javaScriptFile.read({\n                        dataReady: script => previewReady(html\n                            .replace('STYLE', css)\n                            .replace('SCRIPT', `<script type=\"application/javascript\">${scriptInjection || ''}${script}</script>`))\n                    })\n                })\n            });\n        };\n        this.htmlFile = new File_1.default({\n            path: path_1.resolve(props.pageDirectoryPath, 'index.html')\n        });\n        this.cssFile = new File_1.default({\n            path: path_1.resolve(props.pageDirectoryPath, 'style.css')\n        });\n        this.javaScriptFile = new File_1.default({\n            path: path_1.resolve(props.pageDirectoryPath, 'script.js')\n        });\n    }\n}\nexports.default = PageRenderer;\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/PageRenderer.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/TranslationTable.ts":
/*!***********************************************************!*\
  !*** ../Library/JFS/App/Translations/TranslationTable.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst index_1 = __importDefault(__webpack_require__(/*! ./index */ \"../Library/JFS/App/Translations/index.ts\"));\nconst json_2_csv_1 = __webpack_require__(/*! json-2-csv */ \"json-2-csv\");\nclass TranslationTable {\n    constructor(translations) {\n        this.titleRow = () => {\n            const titleRow = {\n                key: `Keys (${this.keys.length})`,\n            };\n            this.languages.forEach(language => titleRow[language.name()] = language.name());\n            return titleRow;\n        };\n        this.rows = (includeCompleteRows = false) => {\n            const allRows = this.keys.map(translationKey => {\n                const row = { key: translationKey };\n                this.languages.forEach(language => row[language.name()] = language.lookup(translationKey));\n                return row;\n            });\n            return allRows.filter((row, index) => includeCompleteRows || (!Object.keys(row).every(stringIndex => row[stringIndex])));\n        };\n        this.csv = (csvOptions) => {\n            json_2_csv_1.json2csv(this.get(csvOptions), (error, csv) => {\n                if (error) {\n                    throw error;\n                }\n                else {\n                    csvOptions.csvReady(csv);\n                }\n            }, {\n                keys: [\n                    'key',\n                    ...this.languages.map(language => language.name())\n                ],\n                prependHeader: false\n            });\n        };\n        this.html = (htmlOptions) => {\n            htmlOptions.htmlReady([\n                `<table>`,\n                ...this.get(htmlOptions).map((row, rowIndex) => [\n                    `<tr class=\\\\\"${rowIndex ? 'value-row' : 'header-row'}\\\\\">`,\n                    ...['key', ...this.languages.map(language => language.name())].map((key, index) => (`<td class=\\\\\"${index ? 'value-cell' : 'key-cell'}\\\\\">${row[key]}</td>`)),\n                    '</tr>'\n                ].join('')),\n                `</table>`\n            ].join(''));\n        };\n        this.get = (options) => [\n            this.titleRow(),\n            ...this.rows((options || {}).includeCompleteRows)\n        ];\n        this.languages = index_1.default.languages(translations);\n        this.keys = index_1.default.keys(...this.languages);\n    }\n}\nexports.default = TranslationTable;\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/TranslationTable.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/index.ts":
/*!************************************************!*\
  !*** ../Library/JFS/App/Translations/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst ansi_colors_1 = __importDefault(__webpack_require__(/*! ansi-colors */ \"ansi-colors\"));\nconst opn_1 = __importDefault(__webpack_require__(/*! opn */ \"opn\"));\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst CLI_1 = __importDefault(__webpack_require__(/*! Library/OS/CLI */ \"../Library/OS/CLI/index.ts\"));\nconst Language_1 = __importDefault(__webpack_require__(/*! ./Language */ \"../Library/JFS/App/Translations/Language.ts\"));\nconst TranslationTable_1 = __importDefault(__webpack_require__(/*! ./TranslationTable */ \"../Library/JFS/App/Translations/TranslationTable.ts\"));\nconst PageRenderer_1 = __importDefault(__webpack_require__(/*! ./PageRenderer */ \"../Library/JFS/App/Translations/PageRenderer.ts\"));\nlet Translations = /** @class */ (() => {\n    class Translations {\n    }\n    Translations.translationsFile = new File_1.default({\n        path: path_1.resolve(process.cwd(), CLI_1.default.parameter('project-path') || '.', 'src', 'Setup', 'Translations.json')\n    });\n    Translations.renderer = new PageRenderer_1.default({\n        pageDirectoryPath: path_1.resolve(__dirname, ...(CLI_1.default.parameter('development')\n            ? ['..', '..']\n            : []), 'Resources', 'check-lang', 'public')\n    });\n    Translations.get = (translationsReady) => {\n        Translations.translationsFile.read({\n            dataReady: (translationsString) => translationsReady(JSON.parse(translationsString))\n        });\n    };\n    Translations.languages = (translations) => Object.keys(translations).map(languageName => new Language_1.default({\n        languageName,\n        translationList: translations[languageName]\n    }));\n    Translations.keys = (...languages) => {\n        const allTranslationKeys = new Set();\n        languages.forEach(language => (language.translationKeys()\n            .forEach(translationKey => allTranslationKeys.add(translationKey))));\n        return Array.from(allTranslationKeys);\n    };\n    Translations.table = (tableReady) => Translations.get(translations => tableReady(new TranslationTable_1.default(translations)));\n    Translations.csv = (csvOptions) => Translations.table(translationTable => translationTable.csv(csvOptions));\n    Translations.html = (htmlOptions) => Translations.table(translationTable => translationTable.html(htmlOptions));\n    Translations.generateViewContent = ({ includeCompleteRows, viewContentReady }) => Translations.csv({\n        includeCompleteRows,\n        csvReady: csvString => Translations.html({\n            includeCompleteRows,\n            htmlReady: htmlString => viewContentReady({\n                csvString,\n                htmlString\n            })\n        })\n    });\n    Translations.setupDirectory = () => new Directory_1.default({\n        path: Translations.translationsFile.parent\n    });\n    Translations.lastHtmlFile = (fileFound) => {\n        Translations.setupDirectory().files(files => {\n            const pattern = /(?<=missing.translations.v)(.*)(?=.html)/;\n            fileFound(files.find(({ name }) => Boolean(name.match(pattern))));\n        });\n    };\n    Translations.lastCsvFile = (fileFound) => {\n        Translations.setupDirectory().files(files => {\n            const pattern = /(?<=missing.translations.v)(.*)(?=.csv)/;\n            fileFound(files.find(({ name }) => Boolean(name.match(pattern).length)));\n        });\n    };\n    Translations.createView = ({ csvString, htmlString, versionNumber, viewCreated }) => {\n        const htmlFile = new File_1.default({\n            path: path_1.resolve(Translations.setupDirectory().path, `missing.translations.v${versionNumber}.html`)\n        });\n        const csvFile = new File_1.default({\n            path: path_1.resolve(Translations.setupDirectory().path, `missing.translations.v${versionNumber}.csv`)\n        });\n        Translations.renderer.renderPreview({\n            scriptInjection: [\n                `const htmlTable = \\\"${htmlString}\\\";`,\n                `const csvPath = \\\"${csvFile.path}\\\";`\n            ].join(''),\n            previewReady: preview => csvFile.create({\n                fileCreated: () => csvFile.write({\n                    data: csvString,\n                    dataWritten: () => htmlFile.create({\n                        fileCreated: () => htmlFile.write({\n                            data: preview,\n                            dataWritten: () => viewCreated(htmlFile.path)\n                        })\n                    })\n                })\n            })\n        });\n    };\n    Translations.updateView = (htmlString, csvString, viewUpdated) => {\n        Translations.lastHtmlFile(lastHtmlFile => lastHtmlFile.read({\n            dataReady: data => {\n                const [versionNumber] = lastHtmlFile.name.match(/(?<=missing.translations.v)(.*)(?=.html)/);\n                if (!data.includes(htmlString)) {\n                    Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({\n                        fileRemoved: () => lastHtmlFile.remove({})\n                    }));\n                    Translations.createView({\n                        htmlString,\n                        csvString,\n                        versionNumber: JSON.parse(versionNumber) + 1,\n                        viewCreated: htmlPath => viewUpdated(htmlPath)\n                    });\n                }\n                else {\n                    viewUpdated(lastHtmlFile.path);\n                }\n            }\n        }));\n    };\n    Translations.removeView = (viewRemoved) => {\n        Translations.lastHtmlFile(lastHtmlFile => Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({\n            fileRemoved: () => lastHtmlFile.remove({\n                fileRemoved: () => viewRemoved()\n            })\n        })));\n    };\n    Translations.check = (checkOptions) => {\n        Translations.lastHtmlFile((lastHtmlFile) => {\n            if (!lastHtmlFile) {\n                Translations.generateViewContent({\n                    includeCompleteRows: (checkOptions || {}).includeCompleteRows,\n                    viewContentReady: ({ csvString, htmlString }) => {\n                        if (csvString.split('\\n').length - 1) {\n                            Translations.createView({\n                                htmlString,\n                                csvString,\n                                versionNumber: 1,\n                                viewCreated: htmlPath => opn_1.default(htmlPath)\n                            });\n                        }\n                        else {\n                            console.log(ansi_colors_1.default.green('No translations missing.'));\n                        }\n                    }\n                });\n            }\n            else {\n                Translations.generateViewContent({\n                    viewContentReady: ({ htmlString, csvString }) => {\n                        if (csvString.split('\\n').length - 1) {\n                            Translations.updateView(htmlString, csvString, htmlPath => opn_1.default(htmlPath));\n                        }\n                        else {\n                            Translations.removeView(() => {\n                                console.log(ansi_colors_1.default.green('No translations missing.'));\n                            });\n                        }\n                    }\n                });\n            }\n        });\n    };\n    return Translations;\n})();\nexports.default = Translations;\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/index.ts?");

/***/ }),

/***/ "../Library/JFS/App/index.ts":
/*!***********************************!*\
  !*** ../Library/JFS/App/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst Package_1 = __importDefault(__webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\"));\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst Config_1 = __importDefault(__webpack_require__(/*! ../Config */ \"../Library/JFS/Config.ts\"));\nconst JSC_1 = __importDefault(__webpack_require__(/*! ../JSC */ \"../Library/JFS/JSC/index.ts\"));\nconst JFC_1 = __importDefault(__webpack_require__(/*! ./JFC */ \"../Library/JFS/App/JFC/index.ts\"));\nconst Translations_1 = __importDefault(__webpack_require__(/*! ./Translations */ \"../Library/JFS/App/Translations/index.ts\"));\nconst TsConfig_1 = __importDefault(__webpack_require__(/*! Library/TypeScript/TsConfig */ \"../Library/TypeScript/TsConfig.ts\"));\nlet App = /** @class */ (() => {\n    class App {\n        constructor({ path }) {\n            this.jfcPath = (jfc) => path_1.join(`..`, `node_modules`, `${jfc.directory.name}`);\n            this.jfcPathMapping = (jfc) => ({\n                [`Jfc/${jfc.name}/Action/*`]: [`${this.jfcPath(jfc)}/src/Store/Action/*`],\n                [`Jfc/${jfc.name}/Component`]: [`${this.jfcPath(jfc)}/src/Component/index.tsx`],\n                [`Jfc/${jfc.name}/Component/*`]: [`${this.jfcPath(jfc)}/src/Component/*`],\n                [`Jfc/${jfc.name}/Mock/*`]: [`${this.jfcPath(jfc)}/src/Mock/*`],\n                [`Jfc/${jfc.name}/JscApi`]: [`${this.jfcPath(jfc)}/src/Jsc/JscApi.ts`],\n                [`Jfc/${jfc.name}/Setup`]: [`${this.jfcPath(jfc)}/src/index.ts`]\n            });\n            this.addJfcPathMappings = (tsConfig) => this.JFC.reduce((tsConfig, jfc) => TsConfig_1.default.addPathMapping(tsConfig, this.jfcPathMapping(jfc)), tsConfig);\n            this.setupTsConfig = (onComplete) => this.tsConfig.update({\n                patcher: this.addJfcPathMappings,\n                onComplete: () => this.JFC.forEach(jfc => jfc.virtualize(onComplete))\n            });\n            this.setup = (onComplete) => {\n                this.discover(() => this.setupTsConfig(onComplete));\n            };\n            this.discover = (onComplete) => (JFC_1.default.fromNodePackage(this.nodePackage, (jfc) => {\n                jfc.forEach(jfc => this.JFC.push(jfc));\n                onComplete();\n            }));\n            this.path = path;\n            this.directory = new Directory_1.default({ path });\n            this.nodePackage = new Package_1.default(Package_1.default.location(path));\n            this.JSC = new JSC_1.default(JSC_1.default.location(path));\n            this.tsConfig = new TsConfig_1.default(TsConfig_1.default.location(path));\n            this.config = new Config_1.default(Config_1.default.location(path));\n            this.JFC = [];\n        }\n    }\n    App.Translations = Translations_1.default;\n    return App;\n})();\nexports.default = App;\n\n\n//# sourceURL=webpack:///../Library/JFS/App/index.ts?");

/***/ }),

/***/ "../Library/JFS/Config.ts":
/*!********************************!*\
  !*** ../Library/JFS/Config.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.JFS = void 0;\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nvar JFS;\n(function (JFS) {\n    let Config = /** @class */ (() => {\n        class Config {\n            constructor(path) {\n                this.read = (configReady) => this.file.read({\n                    encoding: 'utf8',\n                    dataReady: data => configReady(JSON.parse(data))\n                });\n                this.path = path;\n                this.file = new File_1.default({ path: this.path });\n            }\n        }\n        Config.location = (path) => path_1.resolve(path, 'config.json.dist');\n        return Config;\n    })();\n    JFS.Config = Config;\n})(JFS = exports.JFS || (exports.JFS = {}));\nexports.default = JFS.Config;\n\n\n//# sourceURL=webpack:///../Library/JFS/Config.ts?");

/***/ }),

/***/ "../Library/JFS/Core/Settings/index.ts":
/*!*********************************************!*\
  !*** ../Library/JFS/Core/Settings/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Settings {\n    constructor(directory) {\n        this.blackList = [];\n        this.setBlackList = (...blackListNames) => {\n            this.blackList = [...blackListNames];\n        };\n        this.compose = (subSettingsName, compsitionComplete) => (this.subSettings({\n            subSettingsName,\n            subSettingsReady: (subSettings) => compsitionComplete([\n                this,\n                subSettings\n            ])\n        }));\n        this.subSettings = ({ subSettingsName, subSettingsReady }) => this.directory.directory({\n            directoryName: subSettingsName,\n            directoryReady: (directory) => subSettingsReady(new Settings(directory))\n        });\n        this.files = (filesReady) => {\n            this.directory.files(filesReady);\n        };\n        this.deploy = ({ path, deploymentDone }) => {\n            const newFiles = [];\n            this.directory.files(files => (files.forEach(file => {\n                if (this.blackList['includes'](file.name)) {\n                    newFiles.push(null);\n                    if (newFiles.length === files.length) {\n                        deploymentDone(newFiles);\n                    }\n                }\n                else {\n                    file.copy({\n                        newPath: `${path}/${file.name}`,\n                        fileCopied: (newFile) => {\n                            newFiles.push(newFile);\n                            if (newFiles.length === files.length) {\n                                deploymentDone(newFiles);\n                            }\n                        }\n                    });\n                }\n            })));\n        };\n        this.directory = directory;\n    }\n}\nexports.default = Settings;\n\n\n//# sourceURL=webpack:///../Library/JFS/Core/Settings/index.ts?");

/***/ }),

/***/ "../Library/JFS/Core/index.ts":
/*!************************************!*\
  !*** ../Library/JFS/Core/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst Settings_1 = __importDefault(__webpack_require__(/*! ./Settings */ \"../Library/JFS/Core/Settings/index.ts\"));\nconst JSC_1 = __importDefault(__webpack_require__(/*! ../JSC */ \"../Library/JFS/JSC/index.ts\"));\nconst Config_1 = __importDefault(__webpack_require__(/*! ../Config */ \"../Library/JFS/Config.ts\"));\nclass Core {\n    constructor({ path }) {\n        this.path = path;\n        this.directory = new Directory_1.default({ path });\n        this.settings = new Settings_1.default(new Directory_1.default({ path: path_1.resolve(path, 'settings') }));\n        this.JSC = new JSC_1.default(JSC_1.default.location(path));\n        this.config = new Config_1.default(Config_1.default.location(path));\n    }\n}\nexports.default = Core;\n\n\n//# sourceURL=webpack:///../Library/JFS/Core/index.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/Head.ts":
/*!******************************************!*\
  !*** ../Library/JFS/Environment/Head.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Package_1 = __importDefault(__webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\"));\nconst TsConfig_1 = __importDefault(__webpack_require__(/*! Library/TypeScript/TsConfig */ \"../Library/TypeScript/TsConfig.ts\"));\nconst LocalLink_1 = __importDefault(__webpack_require__(/*! ./LocalLink */ \"../Library/JFS/Environment/LocalLink.ts\"));\nconst Config_1 = __webpack_require__(/*! Library/JFS/Config */ \"../Library/JFS/Config.ts\");\nconst JSC_1 = __importDefault(__webpack_require__(/*! Library/JFS/JSC */ \"../Library/JFS/JSC/index.ts\"));\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nclass Head {\n    constructor({ path, type }) {\n        this.synchronize = (...syncDirectoryNames) => {\n            this.nodePackage.json(({ dependencies }) => {\n                const localLinks = Object.keys(dependencies)\n                    .filter(dependencyName => LocalLink_1.default.isLocalLink(dependencies[dependencyName]))\n                    .map((dependencyName) => LocalLink_1.default.fromDependency(this.nodePackage, dependencyName, dependencies[dependencyName]));\n                if (!localLinks.length) {\n                    LocalLink_1.default.warnNoLocalLinks();\n                }\n                else {\n                    LocalLink_1.default.showLocalLinks(localLinks);\n                }\n                localLinks.forEach((localLink) => localLink.sync(this.nodePackage.file.parent, syncDirectoryNames));\n            });\n        };\n        this.path = path;\n        this.type = type;\n        this.directory = new Directory_1.default({ path });\n        this.nodePackage = new Package_1.default(Package_1.default.location(path));\n        this.tsConfig = new TsConfig_1.default(TsConfig_1.default.location(path));\n        this.config = new Config_1.JFS.Config(Config_1.JFS.Config.location(path));\n        this.JSC = new JSC_1.default(JSC_1.default.location(path));\n    }\n}\n(function (Head) {\n    let Type;\n    (function (Type) {\n        Type[\"APP\"] = \"app\";\n        Type[\"JFC\"] = \"jfc\";\n    })(Type = Head.Type || (Head.Type = {}));\n})(Head || (Head = {}));\nexports.default = Head;\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/Head.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/LocalLink.ts":
/*!***********************************************!*\
  !*** ../Library/JFS/Environment/LocalLink.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst ansi_colors_1 = __importDefault(__webpack_require__(/*! ansi-colors */ \"ansi-colors\"));\nconst Notifier_1 = __importDefault(__webpack_require__(/*! Library/Notifier */ \"../Library/Notifier/index.ts\"));\nlet LocalLink = /** @class */ (() => {\n    class LocalLink {\n        constructor(props) {\n            this.toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;\n            this.sync = (projectPath, syncList) => this.linkDirectory.directories(directories => directories\n                .filter(({ name }) => syncList['includes'](name))\n                .forEach(directory => directory.sync(path_1.resolve(projectPath, 'node_modules', this.linkName, directory.name), `${ansi_colors_1.default.yellow(this.linkName)}/${ansi_colors_1.default.cyan(directory.name)}`)));\n            this.linkName = props.linkName;\n            this.linkPath = props.linkPath;\n            this.linkDirectory = new Directory_1.default({\n                path: this.linkPath\n            });\n        }\n    }\n    LocalLink.prefix = 'jfs-sync: ';\n    LocalLink.isLocalLink = (dependencyVersion) => (dependencyVersion.substring(0, LocalLink.prefix.length) === LocalLink.prefix);\n    LocalLink.extractPath = (linkPath) => (linkPath.substring(LocalLink.prefix.length, linkPath.length));\n    LocalLink.showLocalLinks = (localLinks) => console.log(localLinks\n        .map((localLink) => ansi_colors_1.default.green(localLink.toString()))\n        .join('\\n'), '\\n');\n    LocalLink.warnNoLocalLinks = () => console.warn(Notifier_1.default.framedMessage(Notifier_1.default.multiLineMessage(ansi_colors_1.default.yellow([\n        'WARNING: No local links to jfs-core or jfc components detected.',\n        'Please check your dependencies.'\n    ].join(' ')), '', `Troubleshooting: Your local link pattern should match ${ansi_colors_1.default.green(ansi_colors_1.default.bold(`\"${LocalLink.prefix}path/to/jfs/module\"`))}`)));\n    LocalLink.fromDependency = (nodePackage, name, value) => (new LocalLink({\n        linkName: name,\n        linkPath: path_1.resolve(nodePackage.file.parent, LocalLink.extractPath(value))\n    }));\n    return LocalLink;\n})();\nexports.default = LocalLink;\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/LocalLink.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/Location.ts":
/*!**********************************************!*\
  !*** ../Library/JFS/Environment/Location.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Location {\n    constructor({ type, path }) {\n        this.run = (type, callback) => {\n            if (this.type === type) {\n                callback();\n            }\n        };\n        this.type = type;\n        this.path = path;\n    }\n}\n(function (Location) {\n    let Type;\n    (function (Type) {\n        Type[\"LOCAL\"] = \"local\";\n        Type[\"REMOTE\"] = \"remote\";\n    })(Type = Location.Type || (Location.Type = {}));\n})(Location || (Location = {}));\nexports.default = Location;\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/Location.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/index.ts":
/*!*******************************************!*\
  !*** ../Library/JFS/Environment/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Explorer_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Explorer */ \"../Library/OS/Filesystem/Explorer.ts\"));\nconst Package_1 = __importDefault(__webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\"));\nconst Location_1 = __importDefault(__webpack_require__(/*! ./Location */ \"../Library/JFS/Environment/Location.ts\"));\nconst Head_1 = __importDefault(__webpack_require__(/*! ./Head */ \"../Library/JFS/Environment/Head.ts\"));\nlet Environment = /** @class */ (() => {\n    class Environment {\n    }\n    Environment.Head = null;\n    Environment.Satellites = [];\n    Environment.Location = null;\n    Environment.satelliteType = (name, dependencies) => {\n        const pattern = 'jfc-';\n        const match = name.substring(0, pattern.length) === pattern;\n        const hasCoreDependency = Boolean(dependencies['@elumeo/jfs-core']);\n        return (match && hasCoreDependency\n            ? Head_1.default.Type.JFC\n            : Head_1.default.Type.APP);\n    };\n    Environment.locationType = (list) => (list.length === 1\n        ? Location_1.default.Type.LOCAL\n        : Location_1.default.Type.REMOTE);\n    Environment.detect = (onComplete) => {\n        const explorer = new Explorer_1.default(__dirname);\n        explorer.explore(Package_1.default.location, (list) => {\n            let payload = list.length;\n            list\n                .map((path) => new Package_1.default(Package_1.default.location(path)))\n                .forEach((nodePackage, index, nodePackageStack) => (nodePackage.json(({ dependencies, name }) => {\n                if (index) {\n                    const path = nodePackage.file.parent;\n                    const type = Environment.satelliteType(name, dependencies);\n                    if (!Environment.Satellites.length) {\n                        Environment.Head = new Head_1.default({\n                            path,\n                            nodePackage,\n                            type\n                        });\n                    }\n                    Environment.Satellites.push({ path, type });\n                }\n                else {\n                    Environment.Location = new Location_1.default({\n                        path: nodePackage.file.parent,\n                        type: Environment.locationType(nodePackageStack)\n                    });\n                }\n                if (!--payload) {\n                    onComplete();\n                }\n            })));\n        });\n    };\n    return Environment;\n})();\nexports.default = Environment;\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/index.ts?");

/***/ }),

/***/ "../Library/JFS/JSC/Api.ts":
/*!*********************************!*\
  !*** ../Library/JFS/JSC/Api.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nclass Api {\n    constructor(path) {\n        this.parseHash = (apiString) => (apiString\n            .match(/export const JSC_API_VERSION: string = '(.*)';/g)[0]);\n        this.version = (versionReady) => this.read(apiString => versionReady(this.parseHash(apiString)));\n        this.update = (apiString, updateComplete) => {\n            this.file.write({\n                data: apiString,\n                dataWritten: updateComplete\n            });\n        };\n        this.path = path;\n        this.file = new File_1.default({ path: this.path });\n    }\n    read(apiStringReady) {\n        this.file.read({\n            dataReady: apiStringReady\n        });\n    }\n}\nexports.default = Api;\n\n\n//# sourceURL=webpack:///../Library/JFS/JSC/Api.ts?");

/***/ }),

/***/ "../Library/JFS/JSC/Config.ts":
/*!************************************!*\
  !*** ../Library/JFS/JSC/Config.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nvar JSC;\n(function (JSC) {\n    class Config {\n        constructor(path) {\n            this.read = (configReady) => this.file.read({\n                dataReady: (rawConfig) => configReady(JSON.parse(rawConfig))\n            });\n            this.endpoint = (jfsConfig, versionNumber = 2) => (`${jfsConfig.JscClient.Host}/client/generated/v${versionNumber}`);\n            this.file = new File_1.default({ path });\n        }\n    }\n    JSC.Config = Config;\n})(JSC || (JSC = {}));\nexports.default = JSC.Config;\n\n\n//# sourceURL=webpack:///../Library/JFS/JSC/Config.ts?");

/***/ }),

/***/ "../Library/JFS/JSC/index.ts":
/*!***********************************!*\
  !*** ../Library/JFS/JSC/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Api_1 = __importDefault(__webpack_require__(/*! ./Api */ \"../Library/JFS/JSC/Api.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nconst Config_1 = __importDefault(__webpack_require__(/*! ./Config */ \"../Library/JFS/JSC/Config.ts\"));\nconst ansi_colors_1 = __importDefault(__webpack_require__(/*! ansi-colors */ \"ansi-colors\"));\nconst CLI_1 = __importDefault(__webpack_require__(/*! Library/OS/CLI */ \"../Library/OS/CLI/index.ts\"));\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nlet JSC = /** @class */ (() => {\n    class JSC {\n        constructor(path) {\n            this.fetch = (jfsConfig, versionNumber = 2, fetchComplete) => jfsConfig.read(config => {\n                const endpoint = this.config.endpoint(config, versionNumber);\n                console.log({ endpoint });\n                this.config.read(jscApiConfig => (axios_1.default\n                    .post(endpoint, jscApiConfig, JSC.axiosParams())\n                    .then(({ data: apiString }) => fetchComplete(apiString))\n                    .catch(error => {\n                    const { data } = error.response;\n                    const message = data.match(/(?<=\\[message\\] => ).*/gm);\n                    console.error(ansi_colors_1.default.red(message));\n                })));\n            });\n            this.generate = (jfsConfig, versionNumber = 2, generationComplete) => (this.fetch(jfsConfig, versionNumber, apiString => this.api.update(apiString, () => {\n                const message = ansi_colors_1.default.green(`√ New JscApi File '${this.api.path}' successfully created`);\n                console.log(message);\n                const satelliteDirectory = new Directory_1.default({\n                    path: jfsConfig.file.parent\n                });\n                satelliteDirectory.run({\n                    command: 'node',\n                    parameters: [\n                        'node_modules/prettier/bin-prettier.js',\n                        '--write', './src/Jsc/JscApi.ts'\n                    ],\n                    commandExited: generationComplete\n                });\n            })));\n            this.check = (jfsConfig, versionNumber = 2) => (this.fetch(jfsConfig, versionNumber, apiString => this.api.version(apiHash => console.log(this.api.parseHash(apiString) === apiHash\n                ? ansi_colors_1.default.green('√ The JscApi is up to date - nothing to do')\n                : ansi_colors_1.default.red('The JscApi has been changed - please review and update')))));\n            this.api = new Api_1.default(path_1.resolve(path, 'JscApi.ts'));\n            this.config = new Config_1.default(path_1.resolve(path, 'JscApiConfig.json'));\n        }\n    }\n    JSC.location = (path) => path_1.resolve(path, 'src', 'Jsc');\n    JSC.axiosParams = () => (CLI_1.default.parameter('elumeoPath')\n        ? {\n            params: {\n                options: `elumeoPath:${CLI_1.default.parameter('elumeoPath')}`\n            }\n        }\n        : null);\n    return JSC;\n})();\nexports.default = JSC;\n\n\n//# sourceURL=webpack:///../Library/JFS/JSC/index.ts?");

/***/ }),

/***/ "../Library/JFS/Virtual/Environment/index.ts":
/*!***************************************************!*\
  !*** ../Library/JFS/Virtual/Environment/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst __1 = __importDefault(__webpack_require__(/*! .. */ \"../Library/JFS/Virtual/index.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nclass Environment {\n    constructor({ root, source }) {\n        this.mirrors = [];\n        this.createVirtualPath = (...segments) => path_1.resolve(this.root, ...segments);\n        this.createSourcePath = (...segments) => path_1.resolve(this.source.path, ...segments);\n        this.addMirror = ({ virtualPath, sourcePath }) => {\n            this.mirrors.push(new __1.default.Mirror({\n                virtualFile: new File_1.default({ path: virtualPath }),\n                sourceFile: new File_1.default({ path: sourcePath })\n            }));\n        };\n        this.root = root;\n        this.directory = new Directory_1.default({ path: root });\n        this.source = new Directory_1.default({ path: source });\n    }\n}\nexports.default = Environment;\n\n\n//# sourceURL=webpack:///../Library/JFS/Virtual/Environment/index.ts?");

/***/ }),

/***/ "../Library/JFS/Virtual/Mirror/index.ts":
/*!**********************************************!*\
  !*** ../Library/JFS/Virtual/Mirror/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nclass Mirror {\n    constructor({ sourceFile, virtualFile }) {\n        this.apply = () => {\n            const { relativePath } = Array(Math.max(this.virtualFile.predecessors.length, this.sourceFile.predecessors.length))\n                .fill(null)\n                .map((_, index) => ({\n                virtual: this.virtualFile.predecessors[index] || null,\n                source: this.sourceFile.predecessors[index] || null\n            }))\n                .reduce(({ relativePath, equal }, { virtual, source }) => {\n                if (equal) {\n                    if (virtual !== source) {\n                        equal = !equal;\n                        return {\n                            relativePath: ['.', source].join(path_1.sep),\n                            equal\n                        };\n                    }\n                }\n                else {\n                    if (virtual) {\n                        return {\n                            relativePath: ['..', relativePath, source].join(path_1.sep),\n                            equal\n                        };\n                    }\n                    else {\n                        return {\n                            relativePath: [relativePath, source].join(path_1.sep),\n                            equal\n                        };\n                    }\n                }\n                return { relativePath, equal };\n            }, { relativePath: '', equal: true });\n            (new Directory_1.default({ path: this.virtualFile.parent })).create(() => this.sourceFile.read({\n                dataReady: (data) => this.virtualFile.write({\n                    data: [\n                        `export * from '${File_1.default.removeExtension(relativePath)}';`,\n                        ...(data.includes('export default')\n                            ? [\n                                `import d from '${File_1.default.removeExtension(relativePath)}';`,\n                                `export default d;`\n                            ]\n                            : [])\n                    ].join('\\n')\n                })\n            }));\n        };\n        this.sourceFile = sourceFile;\n        this.virtualFile = virtualFile;\n    }\n}\nexports.default = Mirror;\n\n\n//# sourceURL=webpack:///../Library/JFS/Virtual/Mirror/index.ts?");

/***/ }),

/***/ "../Library/JFS/Virtual/index.ts":
/*!***************************************!*\
  !*** ../Library/JFS/Virtual/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Mirror_1 = __importDefault(__webpack_require__(/*! ./Mirror */ \"../Library/JFS/Virtual/Mirror/index.ts\"));\nconst Environment_1 = __importDefault(__webpack_require__(/*! ./Environment */ \"../Library/JFS/Virtual/Environment/index.ts\"));\nlet Virtual = /** @class */ (() => {\n    class Virtual {\n    }\n    Virtual.Mirror = Mirror_1.default;\n    Virtual.Environment = Environment_1.default;\n    return Virtual;\n})();\nexports.default = Virtual;\n\n\n//# sourceURL=webpack:///../Library/JFS/Virtual/index.ts?");

/***/ }),

/***/ "../Library/JFS/index.ts":
/*!*******************************!*\
  !*** ../Library/JFS/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst App_1 = __importDefault(__webpack_require__(/*! ./App */ \"../Library/JFS/App/index.ts\"));\nconst Core_1 = __importDefault(__webpack_require__(/*! ./Core */ \"../Library/JFS/Core/index.ts\"));\nconst Environment_1 = __importDefault(__webpack_require__(/*! ./Environment */ \"../Library/JFS/Environment/index.ts\"));\nconst Location_1 = __importDefault(__webpack_require__(/*! ./Environment/Location */ \"../Library/JFS/Environment/Location.ts\"));\nconst Head_1 = __importDefault(__webpack_require__(/*! ./Environment/Head */ \"../Library/JFS/Environment/Head.ts\"));\nconst JFC_1 = __importDefault(__webpack_require__(/*! ./App/JFC */ \"../Library/JFS/App/JFC/index.ts\"));\nlet JFS = /** @class */ (() => {\n    class JFS {\n    }\n    JFS.Environment = Environment_1.default;\n    JFS.discover = (onComplete) => {\n        const { Environment } = JFS;\n        Environment.detect(() => {\n            const { path } = Environment.Location;\n            JFS.Core = new Core_1.default({ path });\n            if (Environment.Location.type === Location_1.default.Type.REMOTE) {\n                if (Environment.Head.type === Head_1.default.Type.APP) {\n                    JFS.App = new App_1.default({\n                        path: Environment.Head.path\n                    });\n                }\n                else if (Environment.Head.type === Head_1.default.Type.JFC) {\n                    JFS.Component = new JFC_1.default({\n                        path: Environment.Head.path,\n                        isHead: true\n                    });\n                }\n            }\n            onComplete();\n        });\n    };\n    return JFS;\n})();\nexports.default = JFS;\n\n\n//# sourceURL=webpack:///../Library/JFS/index.ts?");

/***/ }),

/***/ "../Library/Node/Module/index.ts":
/*!***************************************!*\
  !*** ../Library/Node/Module/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nlet NodeModule = /** @class */ (() => {\n    class NodeModule {\n        constructor({ path }) {\n            this.path = path;\n        }\n    }\n    NodeModule.location = (path, nodeModuleName) => path_1.resolve(path, 'node_modules', nodeModuleName);\n    return NodeModule;\n})();\nexports.default = NodeModule;\n\n\n//# sourceURL=webpack:///../Library/Node/Module/index.ts?");

/***/ }),

/***/ "../Library/Node/Package/Dependencies/Dependency/LocalLink.ts":
/*!********************************************************************!*\
  !*** ../Library/Node/Package/Dependencies/Dependency/LocalLink.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Directory_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst ansi_colors_1 = __importDefault(__webpack_require__(/*! ansi-colors */ \"ansi-colors\"));\nconst Notifier_1 = __importDefault(__webpack_require__(/*! Library/Notifier */ \"../Library/Notifier/index.ts\"));\nlet LocalLink = /** @class */ (() => {\n    class LocalLink {\n        constructor(props) {\n            this.toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;\n            this.sync = (projectPath, syncList) => this.linkDirectory.directories(directories => directories\n                .filter(({ name }) => syncList['includes'](name))\n                .forEach(directory => directory.sync(path_1.resolve(projectPath, 'node_modules', this.linkName, directory.name), `${ansi_colors_1.default.yellow(this.linkName)}/${ansi_colors_1.default.cyan(directory.name)}`)));\n            this.linkName = props.linkName;\n            this.linkPath = props.linkPath;\n            this.linkDirectory = new Directory_1.default({\n                path: this.linkPath\n            });\n        }\n    }\n    LocalLink.prefix = 'jfs-sync: ';\n    LocalLink.isLocalLink = (dependencyVersion) => (dependencyVersion.substring(0, LocalLink.prefix.length) === LocalLink.prefix);\n    LocalLink.extractPath = (linkPath) => (linkPath.substring(LocalLink.prefix.length, linkPath.length));\n    LocalLink.showLocalLinks = (localLinks) => console.log(localLinks\n        .map((localLink) => ansi_colors_1.default.green(localLink.toString()))\n        .join('\\n'), '\\n');\n    LocalLink.warnNoLocalLinks = () => console.warn(Notifier_1.default.framedMessage(Notifier_1.default.multiLineMessage(ansi_colors_1.default.yellow([\n        'WARNING: No local links to jfs-core or jfc components detected.',\n        'Please check your dependencies.'\n    ].join(' ')), '', `Troubleshooting: Your local link pattern should match ${ansi_colors_1.default.green(ansi_colors_1.default.bold(`\"${LocalLink.prefix}path/to/jfs/module\"`))}`)));\n    return LocalLink;\n})();\nexports.default = LocalLink;\n\n\n//# sourceURL=webpack:///../Library/Node/Package/Dependencies/Dependency/LocalLink.ts?");

/***/ }),

/***/ "../Library/Node/Package/Dependencies/Dependency/index.ts":
/*!****************************************************************!*\
  !*** ../Library/Node/Package/Dependencies/Dependency/index.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst LocalLink_1 = __importDefault(__webpack_require__(/*! ./LocalLink */ \"../Library/Node/Package/Dependencies/Dependency/LocalLink.ts\"));\nlet Dependency = /** @class */ (() => {\n    class Dependency {\n    }\n    Dependency.toLocalLink = (nodePackage, name, value) => (new LocalLink_1.default({\n        linkName: name,\n        linkPath: path_1.resolve(nodePackage.file.parent, LocalLink_1.default.extractPath(value))\n    }));\n    return Dependency;\n})();\nexports.default = Dependency;\n\n\n//# sourceURL=webpack:///../Library/Node/Package/Dependencies/Dependency/index.ts?");

/***/ }),

/***/ "../Library/Node/Package/Dependencies/index.ts":
/*!*****************************************************!*\
  !*** ../Library/Node/Package/Dependencies/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Dependency_1 = __importDefault(__webpack_require__(/*! ./Dependency */ \"../Library/Node/Package/Dependencies/Dependency/index.ts\"));\nconst LocalLink_1 = __importDefault(__webpack_require__(/*! ./Dependency/LocalLink */ \"../Library/Node/Package/Dependencies/Dependency/LocalLink.ts\"));\nclass Dependencies {\n    constructor(nodePackage) {\n        this.value = (valueReady) => {\n            this.nodePackage.json(({ dependencies }) => valueReady(dependencies));\n        };\n        this.detect = (dependencies) => (Object.keys(dependencies)\n            .filter(dependencyName => LocalLink_1.default.isLocalLink(dependencies[dependencyName]))\n            .map((dependencyName) => Dependency_1.default.toLocalLink(this.nodePackage, dependencyName, dependencies[dependencyName])));\n        this.nodePackage = nodePackage;\n    }\n}\nexports.default = Dependencies;\n\n\n//# sourceURL=webpack:///../Library/Node/Package/Dependencies/index.ts?");

/***/ }),

/***/ "../Library/Node/Package/index.ts":
/*!****************************************!*\
  !*** ../Library/Node/Package/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst Dependencies_1 = __importDefault(__webpack_require__(/*! ./Dependencies */ \"../Library/Node/Package/Dependencies/index.ts\"));\nconst Module_1 = __importDefault(__webpack_require__(/*! ../Module */ \"../Library/Node/Module/index.ts\"));\nlet NodePackage = /** @class */ (() => {\n    class NodePackage {\n        constructor(path) {\n            this.json = (jsonReady) => this.file.read({\n                dataReady: json => jsonReady(JSON.parse(json))\n            });\n            this.nodeModule = (nodeModuleName) => new Module_1.default({\n                path: Module_1.default.location(this.file.parent, nodeModuleName)\n            });\n            this.path = path;\n            this.file = new File_1.default({ path });\n            this.dependencies = new Dependencies_1.default(this);\n        }\n    }\n    NodePackage.location = (path) => path_1.resolve(path, 'package.json');\n    return NodePackage;\n})();\nexports.default = NodePackage;\n\n\n//# sourceURL=webpack:///../Library/Node/Package/index.ts?");

/***/ }),

/***/ "../Library/Notifier/index.ts":
/*!************************************!*\
  !*** ../Library/Notifier/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nlet Notfier = /** @class */ (() => {\n    class Notfier {\n    }\n    Notfier.framedMessage = (message) => Notfier.multiLineMessage('', '-------------------------------------------------------------------------------------------------------------', '', message, '', '-------------------------------------------------------------------------------------------------------------', '');\n    Notfier.multiLineMessage = (...messageLines) => [\n        ...messageLines\n    ].join(`\\n`);\n    return Notfier;\n})();\nexports.default = Notfier;\n\n\n//# sourceURL=webpack:///../Library/Notifier/index.ts?");

/***/ }),

/***/ "../Library/OS/CLI/index.ts":
/*!**********************************!*\
  !*** ../Library/OS/CLI/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nlet CLI = /** @class */ (() => {\n    class CLI {\n        static parse() {\n            return process.argv\n                .slice(2)\n                .map(CLI.detectInput)\n                .reduce(CLI.mergeInput, []);\n        }\n        static parameters() {\n            return (CLI.parse()\n                .reduce((result, parameter) => {\n                const parameters = Object.assign({}, result);\n                parameters[parameter.label] = (parameter.value.length > 1\n                    ? parameter.value\n                    : parameter.value[0]);\n                return parameters;\n            }, {}));\n        }\n        static parameter(name) {\n            return CLI.parameters()[name];\n        }\n    }\n    CLI.detectInput = (word) => {\n        const isLongNameLabel = word.substring(0, 2) === '--';\n        const isShortcutLabel = word.substring(0, 1) === '-';\n        const isLabel = isLongNameLabel || isShortcutLabel;\n        return {\n            text: (isLongNameLabel\n                ? word.substring(2, word.length)\n                : isShortcutLabel\n                    ? word.substring(1, word.length)\n                    : word),\n            type: isLabel ? 'label' : 'value'\n        };\n    };\n    CLI.mergeInput = (result, input) => {\n        if (input.type === 'label') {\n            result.push({ label: input.text, value: [] });\n        }\n        else {\n            if (!result.length) {\n                throw `CLI input must be labeled with '-' or '--'`;\n            }\n            result[result.length - 1].value.push(input.text);\n        }\n        return result;\n    };\n    return CLI;\n})();\nexports.default = CLI;\n\n\n//# sourceURL=webpack:///../Library/OS/CLI/index.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/Directory/handleChange.ts":
/*!**********************************************************!*\
  !*** ../Library/OS/Filesystem/Directory/handleChange.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst ansi_colors_1 = __importDefault(__webpack_require__(/*! ansi-colors */ \"ansi-colors\"));\nconst File_1 = __importDefault(__webpack_require__(/*! ../File */ \"../Library/OS/Filesystem/File.ts\"));\nconst index_1 = __importDefault(__webpack_require__(/*! ./index */ \"../Library/OS/Filesystem/Directory/index.ts\"));\nconst formatMessagePrefix = (messagePrefix) => messagePrefix ? `${messagePrefix}: ` : '';\nconst handleNewDirectory = (targetPath, corePath, messagePrefix) => {\n    const newDirectory = new index_1.default({ path: targetPath });\n    newDirectory.create(() => {\n        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.greenBright(`+${corePath}`)}`);\n    });\n};\nconst handleNewFile = (sourcePath, targetPath, corePath, messagePrefix) => {\n    const newFile = new File_1.default({ path: sourcePath });\n    newFile.copy({\n        newPath: targetPath,\n        fileCopied: () => {\n            console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.greenBright(`+${corePath}`)}`);\n        }\n    });\n};\nconst handleRemoveFile = (targetPath, corePath, messagePrefix) => {\n    const removedFile = new File_1.default({ path: targetPath });\n    removedFile.remove({\n        fileRemoved: () => {\n            console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.redBright(`-${corePath}`)}`);\n        }\n    });\n};\nconst handleRemoveDirectory = (targetPath, corePath, messagePrefix) => {\n    const removedDirectory = new index_1.default({ path: targetPath });\n    removedDirectory.remove(() => {\n        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors_1.default.redBright(`-${corePath}`)}`);\n    });\n};\nconst handleChange = ({ event, sourcePath, targetPath, corePath, messagePrefix }) => {\n    switch (event) {\n        case 'addDir': {\n            handleNewDirectory(targetPath, corePath, messagePrefix);\n            break;\n        }\n        case 'add':\n        case 'change': {\n            handleNewFile(sourcePath, targetPath, corePath, messagePrefix);\n            break;\n        }\n        case 'unlink': {\n            handleRemoveFile(targetPath, corePath, messagePrefix);\n            break;\n        }\n        case 'unlinkDir': {\n            handleRemoveDirectory(targetPath, corePath, messagePrefix);\n        }\n    }\n};\nexports.default = handleChange;\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/Directory/handleChange.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/Directory/index.ts":
/*!***************************************************!*\
  !*** ../Library/OS/Filesystem/Directory/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst FsNode_1 = __importDefault(__webpack_require__(/*! ../FsNode */ \"../Library/OS/Filesystem/FsNode.ts\"));\nconst File_1 = __importDefault(__webpack_require__(/*! ../File */ \"../Library/OS/Filesystem/File.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst rimraf_1 = __importDefault(__webpack_require__(/*! rimraf */ \"rimraf\"));\nconst ncp_1 = __importDefault(__webpack_require__(/*! ncp */ \"ncp\"));\nconst child_process_1 = __webpack_require__(/*! child_process */ \"child_process\");\nconst chokidar_1 = __importDefault(__webpack_require__(/*! chokidar */ \"chokidar\"));\nconst handleChange_1 = __importDefault(__webpack_require__(/*! ./handleChange */ \"../Library/OS/Filesystem/Directory/handleChange.ts\"));\nconst Explorer_1 = __importDefault(__webpack_require__(/*! ../Explorer */ \"../Library/OS/Filesystem/Explorer.ts\"));\nclass Directory extends FsNode_1.default {\n    constructor() {\n        super(...arguments);\n        this.children = (childrenReady) => {\n            fs_1.readdir(this.path, (error, childrenNames) => {\n                if (error) {\n                    throw error;\n                }\n                else {\n                    const files = [];\n                    const directories = [];\n                    childrenNames.forEach((childName) => {\n                        const fsNodeProps = { path: path_1.resolve(this.path, childName) };\n                        const fsNode = new FsNode_1.default(fsNodeProps);\n                        fsNode.stats(stats => {\n                            if (stats.isDirectory()) {\n                                directories.push(new Directory(fsNodeProps));\n                            }\n                            else {\n                                files.push(new File_1.default(fsNodeProps));\n                            }\n                            if (childrenNames.length === files.length + directories.length) {\n                                childrenReady({\n                                    directories,\n                                    files\n                                });\n                            }\n                        });\n                    });\n                }\n            });\n        };\n        this.child = ({ childName, childReady }) => this.children(({ files, directories }) => childReady(files.find(file => file.name === childName) ||\n            directories.find(directory => directory.name === childName)));\n        this.files = (filesReady) => this.children(({ files }) => filesReady(files));\n        this.file = ({ fileName, fileReady }) => this.files(files => fileReady(files.find(file => file.name === fileName)));\n        this.directories = (directoriesReady) => this.children(({ directories }) => directoriesReady(directories));\n        this.directory = ({ directoryName, directoryReady }) => this.directories(directories => directoryReady(directories.find(directory => directory.name === directoryName)));\n        this.remove = (directoryRemoved) => rimraf_1.default(this.path, directoryRemoved);\n        this.copy = ({ newPath, directoryCopied }) => ncp_1.default(this.path, newPath, (error) => {\n            if (error) {\n                throw error;\n            }\n            else {\n                directoryCopied();\n            }\n        });\n        this.run = ({ command, parameters, commandExited }) => {\n            const options = {};\n            options.cwd = this.path;\n            const task = child_process_1.spawn(command, parameters, options);\n            task.stdout.on('data', data => console.log(data.toString()));\n            task.stderr.on('data', data => console.log(data.toString()));\n            task.on('exit', code => commandExited(code, task));\n        };\n        this.watch = (watcherReady) => watcherReady(chokidar_1.default.watch(path_1.resolve(this.path)));\n        this.create = (directoryCreated) => ((new Explorer_1.default(this.path)).explore((path) => path, pathStack => {\n            const payload = (this.path\n                .substring(pathStack[0].length, this.path.length)\n                .split(path_1.sep)\n                .slice(1));\n            const createChild = (payload, onComplete) => {\n                if (!payload.length) {\n                    onComplete();\n                }\n                else {\n                    fs_1.mkdir(path_1.resolve(pathStack[0], payload[0]), () => createChild(payload.slice(1), onComplete));\n                }\n            };\n            createChild(payload, directoryCreated);\n        }));\n        this.sync = (targetBasePath, messagePrefix = '') => {\n            this.copy({\n                newPath: targetBasePath,\n                directoryCopied: () => {\n                    this.watch(watcher => setTimeout(() => watcher.on('all', (event, sourcePath) => {\n                        const corePath = sourcePath.substring(this.path.length, sourcePath.length);\n                        handleChange_1.default({\n                            event,\n                            sourcePath,\n                            targetPath: [\n                                targetBasePath,\n                                corePath\n                            ].join(''),\n                            corePath,\n                            messagePrefix\n                        });\n                    }), 1000));\n                }\n            });\n        };\n    }\n}\nexports.default = Directory;\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/Directory/index.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/Explorer.ts":
/*!********************************************!*\
  !*** ../Library/OS/Filesystem/Explorer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nlet Explorer = /** @class */ (() => {\n    class Explorer {\n        constructor(start) {\n            this.pathStack = () => (this.start.split(path_1.sep)\n                .reduce((previous, current, _index, all) => Explorer.finalizeList(all, [...previous, Explorer.createPathItem(previous, current)]), []));\n            this.explore = (pathPattern, explorationComplete) => explorationComplete(this.pathStack()\n                .filter(path => fs_1.existsSync(pathPattern(path)))\n                .reverse());\n            this.start = start;\n        }\n    }\n    Explorer.createPath = (descendants, segment) => [\n        ...(descendants.length\n            ? descendants.map(({ segment }) => segment)\n            : ['']),\n        segment\n    ].join(path_1.sep);\n    Explorer.createPathItem = (previous, current) => ({\n        segment: current,\n        path: Explorer.createPath(previous, current)\n    });\n    Explorer.finalizeList = (all, newPrevious) => (all.length === newPrevious.length\n        ? newPrevious.map(({ path }) => path)\n        : newPrevious);\n    return Explorer;\n})();\nexports.default = Explorer;\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/Explorer.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/File.ts":
/*!****************************************!*\
  !*** ../Library/OS/Filesystem/File.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst FsNode_1 = __importDefault(__webpack_require__(/*! ./FsNode */ \"../Library/OS/Filesystem/FsNode.ts\"));\nlet File = /** @class */ (() => {\n    class File extends FsNode_1.default {\n        constructor() {\n            super(...arguments);\n            this.exists = () => fs_1.existsSync(this.path);\n            this.create = ({ fileCreated }) => fs_1.appendFile(this.path, '', (error) => {\n                if (error) {\n                    throw error;\n                }\n                else if (fileCreated) {\n                    fileCreated();\n                }\n            });\n            this.read = ({ encoding, dataReady }) => fs_1.readFile(this.path, encoding || File.defaultReadSettings.encoding, (error, data) => {\n                if (error) {\n                    throw error;\n                }\n                else {\n                    dataReady(data);\n                }\n            });\n            this.write = ({ data, dataWritten }) => fs_1.writeFile(this.path, data, (error) => {\n                if (error) {\n                    throw error;\n                }\n                else if (dataWritten) {\n                    dataWritten();\n                }\n            });\n            this.remove = ({ fileRemoved }) => this.exists() && fs_1.unlink(this.path, (error) => {\n                if (error) {\n                    throw error;\n                }\n                else if (fileRemoved) {\n                    fileRemoved();\n                }\n            });\n            this.copy = ({ newPath: path, fileCopied }) => this.read({\n                dataReady: data => {\n                    const newFile = new File({ path });\n                    newFile.write({\n                        data,\n                        dataWritten: () => fileCopied(newFile)\n                    });\n                }\n            });\n            this.move = ({ newPath, fileMoved }) => this.copy({\n                newPath,\n                fileCopied: newFile => fileMoved(newFile)\n            });\n            this.update = ({ patcher, onComplete }) => {\n                this.read({\n                    encoding: 'utf8',\n                    dataReady: data => this.write({\n                        data: patcher(data),\n                        dataWritten: onComplete\n                    })\n                });\n            };\n        }\n    }\n    File.removeExtension = (path) => path.substring(0, path.lastIndexOf('.'));\n    File.defaultReadSettings = {\n        encoding: 'utf8',\n    };\n    return File;\n})();\nexports.default = File;\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/File.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/FsNode.ts":
/*!******************************************!*\
  !*** ../Library/OS/Filesystem/FsNode.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst fs_1 = __webpack_require__(/*! fs */ \"fs\");\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nclass FsNode {\n    constructor(props) {\n        this.stats = (statsReady) => fs_1.lstat(this.path, (error, stats) => {\n            if (error) {\n                throw error;\n            }\n            else {\n                statsReady(stats);\n            }\n        });\n        this.exists = () => fs_1.existsSync(this.path);\n        this.path = props.path;\n        this.predecessors = props.path.split(path_1.sep);\n        this.name = this.predecessors[this.predecessors.length - 1];\n        this.parent = this.predecessors.slice(0, this.predecessors.length - 1).join(path_1.sep);\n    }\n}\nexports.default = FsNode;\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/FsNode.ts?");

/***/ }),

/***/ "../Library/Text/index.ts":
/*!********************************!*\
  !*** ../Library/Text/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Text;\n(function (Text) {\n    Text.beginsWith = (text, pattern) => (text.substring(0, pattern.length) === pattern);\n    Text.endsWith = (text, pattern) => (text.substring(text.length - pattern.length, text.length) === pattern);\n    Text.capitalize = text => text[0].toUpperCase() + text.substring(1);\n    Text.removePrefix = (text, prefix) => text.substring(prefix.length, text.length);\n    Text.removeSuffix = (text, suffix) => (Text.endsWith(text, suffix)\n        ? text.substring(0, text.length - suffix.length)\n        : text);\n})(Text || (Text = {}));\nexports.default = Text;\n\n\n//# sourceURL=webpack:///../Library/Text/index.ts?");

/***/ }),

/***/ "../Library/TypeScript/TsConfig.ts":
/*!*****************************************!*\
  !*** ../Library/TypeScript/TsConfig.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst File_1 = __importDefault(__webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\"));\nconst path_1 = __webpack_require__(/*! path */ \"path\");\nconst Text_1 = __importDefault(__webpack_require__(/*! Library/Text */ \"../Library/Text/index.ts\"));\nlet TsConfig = /** @class */ (() => {\n    class TsConfig {\n        constructor(path) {\n            this.update = ({ patcher, onComplete }) => {\n                this.file.update({\n                    patcher: (data) => JSON.stringify(patcher(JSON.parse(data)), null, 2),\n                    onComplete\n                });\n            };\n            this.path = path;\n            this.file = new File_1.default({ path });\n        }\n    }\n    TsConfig.location = (path) => path_1.resolve(path, 'tsconfig.json');\n    TsConfig.pathMappings = ({ prefix, pathPrefix }) => ({\n        [`${prefix}/Action/*`]: [`${pathPrefix}/Store/Action/*`],\n        [`${prefix}/Component/*`]: [`${pathPrefix}/Component/*`],\n        [`${prefix}/JscApi`]: [`${pathPrefix}/Jsc/JscApi`],\n        [`${prefix}/Mock/*`]: [`${pathPrefix}/Mock/*`],\n        [`${prefix}/Setup/*`]: [`${pathPrefix}/Setup/*`]\n    });\n    TsConfig.removeWildcard = (text) => Text_1.default.removeSuffix(text, '/*');\n    TsConfig.addPathMapping = (tsconfig, pathMapping) => (Object.assign(Object.assign({}, tsconfig), { compilerOptions: Object.assign(Object.assign({}, tsconfig.compilerOptions), { paths: Object.assign(Object.assign({}, tsconfig.compilerOptions.paths), pathMapping) }) }));\n    return TsConfig;\n})();\nexports.default = TsConfig;\n\n\n//# sourceURL=webpack:///../Library/TypeScript/TsConfig.ts?");

/***/ }),

/***/ "../Setup/generate-juwelo-icon-font.ts":
/*!*********************************************!*\
  !*** ../Setup/generate-juwelo-icon-font.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst JFS_1 = __importDefault(__webpack_require__(/*! Library/JFS */ \"../Library/JFS/index.ts\"));\nconst Location_1 = __importDefault(__webpack_require__(/*! Library/JFS/Environment/Location */ \"../Library/JFS/Environment/Location.ts\"));\nconst nodeSass = __webpack_require__(/*! node-sass */ \"node-sass\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nconst Fontagon = __webpack_require__(/*! fontagon */ \"fontagon\");\nJFS_1.default.discover(() => {\n    if (JFS_1.default.Environment.Location.type === Location_1.default.Type.LOCAL) {\n        Fontagon({\n            files: [\n                __dirname + '/Resources/juwelo-icon-font/svg/*.svg'\n            ],\n            dist: __dirname + '/Resources/juwelo-icon-font/dist',\n            fontName: 'juwelo-icon-font',\n            style: 'sass',\n            classOptions: {\n                baseClass: 'juwelo-icon-font',\n                classPrefix: 'jif',\n                order: ['woff', 'woff2']\n            }\n        }).then((opts) => {\n            nodeSass.render({\n                file: __dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.sass',\n                outFile: __dirname + '/Resources/juwelo-icon-font/scss/juwelo-icon-font.scss',\n            }, (error, result) => {\n                if (error) {\n                    console.error(error); // used to be \"code\" in v2x and below\n                }\n                else {\n                    const pattern = '.*juwelo-icon-font\\.eot.*';\n                    let cssLineSplit = result.css.toString().split(/\\r?\\n/);\n                    cssLineSplit = cssLineSplit.filter((line) => {\n                        const r = new RegExp(pattern);\n                        return r.exec(line) === null;\n                    });\n                    fs.writeFile(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.scss', cssLineSplit.join('\\n'), (err) => {\n                        if (err) {\n                            return console.log(err);\n                        }\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.sass');\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.eot');\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.ttf');\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.svg');\n                        fs.copyFileSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.scss', __dirname + '/../src/Component/JuweloFontIcon/juwelo-icon-font.scss');\n                        fs.copyFileSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff', __dirname + '/../src/Component/JuweloFontIcon/juwelo-icon-font.woff');\n                        fs.copyFileSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff2', __dirname + '/../src/Component/JuweloFontIcon/juwelo-icon-font.woff2');\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.scss');\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff');\n                        fs.unlinkSync(__dirname + '/Resources/juwelo-icon-font/dist/juwelo-icon-font.woff2');\n                        fs.rmdirSync(__dirname + '/Resources/juwelo-icon-font/dist');\n                        console.log('The file was saved!');\n                    });\n                }\n            });\n        }).catch((err) => {\n            console.error('fail! ', err);\n        });\n    }\n});\n\n\n//# sourceURL=webpack:///../Setup/generate-juwelo-icon-font.ts?");

/***/ }),

/***/ "./":
/*!*********!*\
  !*** . ***!
  \*********/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! Setup/generate-juwelo-icon-font */ \"../Setup/generate-juwelo-icon-font.ts\");\n\n\n//# sourceURL=webpack:///.?");

/***/ }),

/***/ 0:
/*!***************!*\
  !*** multi . ***!
  \***************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/michaelberkhahn/Data/Work/Juwelo/jfs/core/scripts/index.ts */\"./\");\n\n\n//# sourceURL=webpack:///multi_.?");

/***/ }),

/***/ "ansi-colors":
/*!******************************!*\
  !*** external "ansi-colors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ansi-colors\");\n\n//# sourceURL=webpack:///external_%22ansi-colors%22?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "chokidar":
/*!***************************!*\
  !*** external "chokidar" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"chokidar\");\n\n//# sourceURL=webpack:///external_%22chokidar%22?");

/***/ }),

/***/ "fontagon":
/*!***************************!*\
  !*** external "fontagon" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fontagon\");\n\n//# sourceURL=webpack:///external_%22fontagon%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "json-2-csv":
/*!*****************************!*\
  !*** external "json-2-csv" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"json-2-csv\");\n\n//# sourceURL=webpack:///external_%22json-2-csv%22?");

/***/ }),

/***/ "ncp":
/*!**********************!*\
  !*** external "ncp" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ncp\");\n\n//# sourceURL=webpack:///external_%22ncp%22?");

/***/ }),

/***/ "node-sass":
/*!****************************!*\
  !*** external "node-sass" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-sass\");\n\n//# sourceURL=webpack:///external_%22node-sass%22?");

/***/ }),

/***/ "opn":
/*!**********************!*\
  !*** external "opn" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"opn\");\n\n//# sourceURL=webpack:///external_%22opn%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "rimraf":
/*!*************************!*\
  !*** external "rimraf" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rimraf\");\n\n//# sourceURL=webpack:///external_%22rimraf%22?");

/***/ })

/******/ });