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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/TypeScript/TsConfig */ \"../Library/TypeScript/TsConfig.ts\");\n/* harmony import */ var Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\");\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var Library_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Library/Text */ \"../Library/Text/index.ts\");\n/* harmony import */ var Library_JFS_Virtual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Library/JFS/Virtual */ \"../Library/JFS/Virtual/index.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar Path;\n(function (Path) {\n    Path.removeWildcard = (path) => Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removeSuffix(path, '/*');\n})(Path || (Path = {}));\nclass JFC {\n    constructor({ path, isHead }) {\n        this.setup = (onComplete) => this.tsConfig.update({\n            patcher: (tsConfig) => (Object.assign(Object.assign({}, tsConfig), { compilerOptions: Object.assign(Object.assign({}, tsConfig.compilerOptions), { paths: this.pathMappings }) })),\n            onComplete\n        });\n        this.virtualize = (onComplete) => {\n            const virtualEnvironment = new Library_JFS_Virtual__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Environment({\n                root: this.path,\n                source: Object(path__WEBPACK_IMPORTED_MODULE_6__[\"resolve\"])(this.path, 'src')\n            });\n            Object\n                .keys(this.pathMappings)\n                .forEach(alias => {\n                const virtualPath = virtualEnvironment.createVirtualPath(Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removePrefix(alias, `${this.aliasPrefix}/`)).split('/').join(path__WEBPACK_IMPORTED_MODULE_6__[\"sep\"]);\n                const sourcePath = virtualEnvironment.createSourcePath(Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removePrefix(this.pathMappings[alias][0], `${this.pathPrefix}/`)).split('/').join(path__WEBPACK_IMPORTED_MODULE_6__[\"sep\"]);\n                if (Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].endsWith(sourcePath, path__WEBPACK_IMPORTED_MODULE_6__[\"sep\"] + '*')) {\n                    const directory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                        path: Path.removeWildcard(sourcePath)\n                    });\n                    const addDirectory = (directory) => {\n                        if (directory.exists()) {\n                            directory.files(files => {\n                                files.forEach(file => virtualEnvironment.addMirror({\n                                    sourcePath: file.path,\n                                    virtualPath: Object(path__WEBPACK_IMPORTED_MODULE_6__[\"resolve\"])(Path.removeWildcard(virtualPath), file.name)\n                                }));\n                                directory.directories(directories => directories.forEach(addDirectory));\n                            });\n                        }\n                    };\n                    directory.create(() => addDirectory(directory));\n                }\n                else {\n                    const fileWithoutSuffix = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                        path: sourcePath.split('/').join(path__WEBPACK_IMPORTED_MODULE_6__[\"sep\"])\n                    });\n                    const sourceParent = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                        path: fileWithoutSuffix.parent\n                    });\n                    sourceParent.files(files => {\n                        const fileWithSuffix = files.find(file => Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].beginsWith(file.name, fileWithoutSuffix.name));\n                        if (fileWithSuffix) {\n                            const { path, name } = fileWithSuffix;\n                            const suffix = Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].removePrefix(name, fileWithoutSuffix.name);\n                            virtualEnvironment.addMirror({\n                                sourcePath: path,\n                                virtualPath: `${virtualPath}${suffix}`\n                            });\n                        }\n                    });\n                }\n            });\n            setTimeout(() => {\n                virtualEnvironment.mirrors.forEach(mirror => mirror.apply());\n                onComplete();\n            }, 1000);\n        };\n        this.isHead = isHead || false;\n        this.path = path;\n        this.directory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({ path });\n        this.nodePackage = new Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location(path));\n        this.tsConfig = new Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location(path));\n        this.name = this.directory.name\n            .substring('jfc-'.length)\n            .split('-')\n            .map(Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].capitalize)\n            .join('');\n        this.aliasPrefix = `Jfc/${this.name}`;\n        this.pathPrefix = (this.isHead\n            ? `./`\n            : `../node_modules/${this.directory.name}`);\n        this.pathMappings = {\n            'Core/*': ['../node_modules/@elumeo/jfs-core/src/*'],\n            [`Jfc/${this.name}/Action/*`]: [`./Store/Action/*`],\n            [`Jfc/${this.name}/Component`]: [`./Component/index.tsx`],\n            [`Jfc/${this.name}/Component/*`]: [`./Component/*`],\n            [`Jfc/${this.name}/Mock/*`]: [`./Mock/*`],\n            [`Jfc/${this.name}/JscApi`]: [`./Jsc/JscApi.ts`],\n            [`Jfc/${this.name}/Setup`]: [`./index.ts`]\n        };\n    }\n}\nJFC.fromNodePackage = (nodePackage, onComplete) => nodePackage.json(({ dependencies }) => onComplete(Object.keys(dependencies)\n    .filter(name => Library_Text__WEBPACK_IMPORTED_MODULE_4__[\"default\"].beginsWith(name, 'jfc-'))\n    .map(jfcKey => new JFC({ path: nodePackage.nodeModule(jfcKey).path }))));\n/* harmony default export */ __webpack_exports__[\"default\"] = (JFC);\n\n\n//# sourceURL=webpack:///../Library/JFS/App/JFC/index.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/Language.ts":
/*!***************************************************!*\
  !*** ../Library/JFS/App/Translations/Language.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Language {\n    constructor(props) {\n        this.translationKeys = () => Object.keys(this.translationList);\n        this.missingKeys = (keyList) => {\n            const existingKeys = this.translationKeys();\n            return keyList.filter(keyListEntry => !existingKeys.includes(keyListEntry));\n        };\n        this.name = () => this.languageName;\n        this.lookup = (key) => {\n            return this.translationList[key] || '';\n        };\n        this.translationList = props.translationList;\n        this.languageName = props.languageName;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Language);\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/Language.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/PageRenderer.ts":
/*!*******************************************************!*\
  !*** ../Library/JFS/App/Translations/PageRenderer.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass PageRenderer {\n    constructor(props) {\n        this.renderPreview = ({ scriptInjection, previewReady }) => {\n            this.htmlFile.read({\n                dataReady: html => this.cssFile.read({\n                    dataReady: css => this.javaScriptFile.read({\n                        dataReady: script => previewReady(html\n                            .replace('STYLE', css)\n                            .replace('SCRIPT', `<script type=\"application/javascript\">${scriptInjection || ''}${script}</script>`))\n                    })\n                })\n            });\n        };\n        this.htmlFile = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            path: Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(props.pageDirectoryPath, 'index.html')\n        });\n        this.cssFile = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            path: Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(props.pageDirectoryPath, 'style.css')\n        });\n        this.javaScriptFile = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            path: Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(props.pageDirectoryPath, 'script.js')\n        });\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageRenderer);\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/PageRenderer.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/TranslationTable.ts":
/*!***********************************************************!*\
  !*** ../Library/JFS/App/Translations/TranslationTable.ts ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"../Library/JFS/App/Translations/index.ts\");\n/* harmony import */ var json_2_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-2-csv */ \"json-2-csv\");\n/* harmony import */ var json_2_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_2_csv__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass TranslationTable {\n    constructor(translations) {\n        this.titleRow = () => {\n            const titleRow = {\n                key: `Keys (${this.keys.length})`,\n            };\n            this.languages.forEach(language => titleRow[language.name()] = language.name());\n            return titleRow;\n        };\n        this.rows = (includeCompleteRows = false) => {\n            const allRows = this.keys.map(translationKey => {\n                const row = { key: translationKey };\n                this.languages.forEach(language => row[language.name()] = language.lookup(translationKey));\n                return row;\n            });\n            return allRows.filter((row, index) => includeCompleteRows || (!Object.keys(row).every(stringIndex => row[stringIndex])));\n        };\n        this.csv = (csvOptions) => {\n            Object(json_2_csv__WEBPACK_IMPORTED_MODULE_1__[\"json2csv\"])(this.get(csvOptions), (error, csv) => {\n                if (error) {\n                    throw error;\n                }\n                else {\n                    csvOptions.csvReady(csv);\n                }\n            }, {\n                keys: [\n                    'key',\n                    ...this.languages.map(language => language.name())\n                ],\n                prependHeader: false\n            });\n        };\n        this.html = (htmlOptions) => {\n            htmlOptions.htmlReady([\n                `<table>`,\n                ...this.get(htmlOptions).map((row, rowIndex) => [\n                    `<tr class=\\\\\"${rowIndex ? 'value-row' : 'header-row'}\\\\\">`,\n                    ...['key', ...this.languages.map(language => language.name())].map((key, index) => (`<td class=\\\\\"${index ? 'value-cell' : 'key-cell'}\\\\\">${row[key]}</td>`)),\n                    '</tr>'\n                ].join('')),\n                `</table>`\n            ].join(''));\n        };\n        this.get = (options) => [\n            this.titleRow(),\n            ...this.rows((options || {}).includeCompleteRows)\n        ];\n        this.languages = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].languages(translations);\n        this.keys = _index__WEBPACK_IMPORTED_MODULE_0__[\"default\"].keys(...this.languages);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslationTable);\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/TranslationTable.ts?");

/***/ }),

/***/ "../Library/JFS/App/Translations/index.ts":
/*!************************************************!*\
  !*** ../Library/JFS/App/Translations/index.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var opn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opn */ \"opn\");\n/* harmony import */ var opn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(opn__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var Library_OS_CLI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Library/OS/CLI */ \"../Library/OS/CLI/index.ts\");\n/* harmony import */ var _Language__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Language */ \"../Library/JFS/App/Translations/Language.ts\");\n/* harmony import */ var _TranslationTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TranslationTable */ \"../Library/JFS/App/Translations/TranslationTable.ts\");\n/* harmony import */ var _PageRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PageRenderer */ \"../Library/JFS/App/Translations/PageRenderer.ts\");\n\n\n\n\n\n\n\n\n\nclass Translations {\n}\nTranslations.translationsFile = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    path: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(process.cwd(), Library_OS_CLI__WEBPACK_IMPORTED_MODULE_5__[\"default\"].parameter('project-path') || '.', 'src', 'Setup', 'Translations.json')\n});\nTranslations.renderer = new _PageRenderer__WEBPACK_IMPORTED_MODULE_8__[\"default\"]({\n    pageDirectoryPath: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(__dirname, ...(Library_OS_CLI__WEBPACK_IMPORTED_MODULE_5__[\"default\"].parameter('development')\n        ? ['..', '..']\n        : []), 'Resources', 'check-lang', 'public')\n});\nTranslations.get = (translationsReady) => {\n    Translations.translationsFile.read({\n        dataReady: (translationsString) => translationsReady(JSON.parse(translationsString))\n    });\n};\nTranslations.languages = (translations) => Object.keys(translations).map(languageName => new _Language__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n    languageName,\n    translationList: translations[languageName]\n}));\nTranslations.keys = (...languages) => {\n    const allTranslationKeys = new Set();\n    languages.forEach(language => (language.translationKeys()\n        .forEach(translationKey => allTranslationKeys.add(translationKey))));\n    return Array.from(allTranslationKeys);\n};\nTranslations.table = (tableReady) => Translations.get(translations => tableReady(new _TranslationTable__WEBPACK_IMPORTED_MODULE_7__[\"default\"](translations)));\nTranslations.csv = (csvOptions) => Translations.table(translationTable => translationTable.csv(csvOptions));\nTranslations.html = (htmlOptions) => Translations.table(translationTable => translationTable.html(htmlOptions));\nTranslations.generateViewContent = ({ includeCompleteRows, viewContentReady }) => Translations.csv({\n    includeCompleteRows,\n    csvReady: csvString => Translations.html({\n        includeCompleteRows,\n        htmlReady: htmlString => viewContentReady({\n            csvString,\n            htmlString\n        })\n    })\n});\nTranslations.setupDirectory = () => new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n    path: Translations.translationsFile.parent\n});\nTranslations.lastHtmlFile = (fileFound) => {\n    Translations.setupDirectory().files(files => {\n        const pattern = /(?<=missing.translations.v)(.*)(?=.html)/;\n        fileFound(files.find(({ name }) => Boolean(name.match(pattern))));\n    });\n};\nTranslations.lastCsvFile = (fileFound) => {\n    Translations.setupDirectory().files(files => {\n        const pattern = /(?<=missing.translations.v)(.*)(?=.csv)/;\n        fileFound(files.find(({ name }) => Boolean(name.match(pattern).length)));\n    });\n};\nTranslations.createView = ({ csvString, htmlString, versionNumber, viewCreated }) => {\n    const htmlFile = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        path: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(Translations.setupDirectory().path, `missing.translations.v${versionNumber}.html`)\n    });\n    const csvFile = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n        path: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(Translations.setupDirectory().path, `missing.translations.v${versionNumber}.csv`)\n    });\n    Translations.renderer.renderPreview({\n        scriptInjection: [\n            `const htmlTable = \\\"${htmlString}\\\";`,\n            `const csvPath = \\\"${csvFile.path}\\\";`\n        ].join(''),\n        previewReady: preview => csvFile.create({\n            fileCreated: () => csvFile.write({\n                data: csvString,\n                dataWritten: () => htmlFile.create({\n                    fileCreated: () => htmlFile.write({\n                        data: preview,\n                        dataWritten: () => viewCreated(htmlFile.path)\n                    })\n                })\n            })\n        })\n    });\n};\nTranslations.updateView = (htmlString, csvString, viewUpdated) => {\n    Translations.lastHtmlFile(lastHtmlFile => lastHtmlFile.read({\n        dataReady: data => {\n            const [versionNumber] = lastHtmlFile.name.match(/(?<=missing.translations.v)(.*)(?=.html)/);\n            if (!data.includes(htmlString)) {\n                Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({\n                    fileRemoved: () => lastHtmlFile.remove({})\n                }));\n                Translations.createView({\n                    htmlString,\n                    csvString,\n                    versionNumber: JSON.parse(versionNumber) + 1,\n                    viewCreated: htmlPath => viewUpdated(htmlPath)\n                });\n            }\n            else {\n                viewUpdated(lastHtmlFile.path);\n            }\n        }\n    }));\n};\nTranslations.removeView = (viewRemoved) => {\n    Translations.lastHtmlFile(lastHtmlFile => Translations.lastCsvFile(lastCsvFile => lastCsvFile.remove({\n        fileRemoved: () => lastHtmlFile.remove({\n            fileRemoved: () => viewRemoved()\n        })\n    })));\n};\nTranslations.check = (checkOptions) => {\n    Translations.lastHtmlFile((lastHtmlFile) => {\n        if (!lastHtmlFile) {\n            Translations.generateViewContent({\n                includeCompleteRows: (checkOptions || {}).includeCompleteRows,\n                viewContentReady: ({ csvString, htmlString }) => {\n                    if (csvString.split('\\n').length - 1) {\n                        Translations.createView({\n                            htmlString,\n                            csvString,\n                            versionNumber: 1,\n                            viewCreated: htmlPath => opn__WEBPACK_IMPORTED_MODULE_2___default()(htmlPath)\n                        });\n                    }\n                    else {\n                        console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_1___default.a.green('No translations missing.'));\n                    }\n                }\n            });\n        }\n        else {\n            Translations.generateViewContent({\n                viewContentReady: ({ htmlString, csvString }) => {\n                    if (csvString.split('\\n').length - 1) {\n                        Translations.updateView(htmlString, csvString, htmlPath => opn__WEBPACK_IMPORTED_MODULE_2___default()(htmlPath));\n                    }\n                    else {\n                        Translations.removeView(() => {\n                            console.log(ansi_colors__WEBPACK_IMPORTED_MODULE_1___default.a.green('No translations missing.'));\n                        });\n                    }\n                }\n            });\n        }\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Translations);\n\n\n//# sourceURL=webpack:///../Library/JFS/App/Translations/index.ts?");

/***/ }),

/***/ "../Library/JFS/App/index.ts":
/*!***********************************!*\
  !*** ../Library/JFS/App/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\");\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config */ \"../Library/JFS/Config.ts\");\n/* harmony import */ var _JSC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../JSC */ \"../Library/JFS/JSC/index.ts\");\n/* harmony import */ var _JFC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./JFC */ \"../Library/JFS/App/JFC/index.ts\");\n/* harmony import */ var _Translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Translations */ \"../Library/JFS/App/Translations/index.ts\");\n/* harmony import */ var Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Library/TypeScript/TsConfig */ \"../Library/TypeScript/TsConfig.ts\");\n\n\n\n\n\n\n\n\nclass App {\n    constructor({ path }) {\n        this.jfcPath = (jfc) => Object(path__WEBPACK_IMPORTED_MODULE_0__[\"join\"])(`..`, `node_modules`, `${jfc.directory.name}`);\n        this.jfcPathMapping = (jfc) => ({\n            [`Jfc/${jfc.name}/Action/*`]: [`${this.jfcPath(jfc)}/src/Store/Action/*`],\n            [`Jfc/${jfc.name}/Component`]: [`${this.jfcPath(jfc)}/src/Component/index.tsx`],\n            [`Jfc/${jfc.name}/Component/*`]: [`${this.jfcPath(jfc)}/src/Component/*`],\n            [`Jfc/${jfc.name}/Mock/*`]: [`${this.jfcPath(jfc)}/src/Mock/*`],\n            [`Jfc/${jfc.name}/JscApi`]: [`${this.jfcPath(jfc)}/src/Jsc/JscApi.ts`],\n            [`Jfc/${jfc.name}/Setup`]: [`${this.jfcPath(jfc)}/src/index.ts`]\n        });\n        this.addJfcPathMappings = (tsConfig) => this.JFC.reduce((tsConfig, jfc) => Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].addPathMapping(tsConfig, this.jfcPathMapping(jfc)), tsConfig);\n        this.setupTsConfig = (onComplete) => this.tsConfig.update({\n            patcher: this.addJfcPathMappings,\n            onComplete: () => this.JFC.forEach(jfc => jfc.virtualize(onComplete))\n        });\n        this.setup = (onComplete) => {\n            this.discover(() => this.setupTsConfig(onComplete));\n        };\n        this.discover = (onComplete) => (_JFC__WEBPACK_IMPORTED_MODULE_5__[\"default\"].fromNodePackage(this.nodePackage, (jfc) => {\n            jfc.forEach(jfc => this.JFC.push(jfc));\n            onComplete();\n        }));\n        this.path = path;\n        this.directory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ path });\n        this.nodePackage = new Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location(path));\n        this.JSC = new _JSC__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_JSC__WEBPACK_IMPORTED_MODULE_4__[\"default\"].location(path));\n        this.tsConfig = new Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"](Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_7__[\"default\"].location(path));\n        this.config = new _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].location(path));\n        this.JFC = [];\n    }\n}\nApp.Translations = _Translations__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack:///../Library/JFS/App/index.ts?");

/***/ }),

/***/ "../Library/JFS/Config.ts":
/*!********************************!*\
  !*** ../Library/JFS/Config.ts ***!
  \********************************/
/*! exports provided: JFS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JFS\", function() { return JFS; });\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar JFS;\n(function (JFS) {\n    class Config {\n        constructor(path) {\n            this.read = (configReady) => this.file.read({\n                encoding: 'utf8',\n                dataReady: data => configReady(JSON.parse(data))\n            });\n            this.path = path;\n            this.file = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ path: this.path });\n        }\n    }\n    Config.location = (path) => Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(path, 'config.json.dist');\n    JFS.Config = Config;\n})(JFS || (JFS = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (JFS.Config);\n\n\n//# sourceURL=webpack:///../Library/JFS/Config.ts?");

/***/ }),

/***/ "../Library/JFS/Core/Settings/Deployment/index.ts":
/*!********************************************************!*\
  !*** ../Library/JFS/Core/Settings/Deployment/index.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Deployment {\n    constructor({ path, settings, onComplete }) {\n        const totalDeployedFiles = [];\n        settings.forEach(setting => setting.deploy({\n            path,\n            deploymentDone: (deployedFiles) => {\n                totalDeployedFiles.push(deployedFiles);\n                if (settings.length === totalDeployedFiles.length) {\n                    onComplete(totalDeployedFiles.reduce((allDeployedFiles, deployedFiles) => [\n                        ...allDeployedFiles,\n                        ...deployedFiles\n                    ], []));\n                }\n            }\n        }));\n    }\n}\nDeployment.notify = (deployedFiles) => {\n    const title = (message) => ansi_colors__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright(`${message}\\n`);\n    const listEntry = (entry) => ansi_colors__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright(`-- ${entry}`);\n    console.log(title('Deployed config files'));\n    deployedFiles\n        .forEach(({ name }) => console.log(listEntry(name)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Deployment);\n\n\n//# sourceURL=webpack:///../Library/JFS/Core/Settings/Deployment/index.ts?");

/***/ }),

/***/ "../Library/JFS/Core/Settings/index.ts":
/*!*********************************************!*\
  !*** ../Library/JFS/Core/Settings/index.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Settings {\n    constructor(directory) {\n        this.blackList = [];\n        this.setBlackList = (...blackListNames) => {\n            this.blackList = [...blackListNames];\n        };\n        this.compose = (subSettingsName, compsitionComplete) => (this.subSettings({\n            subSettingsName,\n            subSettingsReady: (subSettings) => compsitionComplete([\n                this,\n                subSettings\n            ])\n        }));\n        this.subSettings = ({ subSettingsName, subSettingsReady }) => this.directory.directory({\n            directoryName: subSettingsName,\n            directoryReady: (directory) => subSettingsReady(new Settings(directory))\n        });\n        this.files = (filesReady) => {\n            this.directory.files(filesReady);\n        };\n        this.deploy = ({ path, deploymentDone }) => {\n            const newFiles = [];\n            this.directory.files(files => (files.forEach(file => {\n                if (this.blackList['includes'](file.name)) {\n                    newFiles.push(null);\n                    if (newFiles.length === files.length) {\n                        deploymentDone(newFiles);\n                    }\n                }\n                else {\n                    file.copy({\n                        newPath: `${path}/${file.name}`,\n                        fileCopied: (newFile) => {\n                            newFiles.push(newFile);\n                            if (newFiles.length === files.length) {\n                                deploymentDone(newFiles);\n                            }\n                        }\n                    });\n                }\n            })));\n        };\n        this.directory = directory;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Settings);\n\n\n//# sourceURL=webpack:///../Library/JFS/Core/Settings/index.ts?");

/***/ }),

/***/ "../Library/JFS/Core/index.ts":
/*!************************************!*\
  !*** ../Library/JFS/Core/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var _Settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings */ \"../Library/JFS/Core/Settings/index.ts\");\n/* harmony import */ var _JSC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../JSC */ \"../Library/JFS/JSC/index.ts\");\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Config */ \"../Library/JFS/Config.ts\");\n\n\n\n\n\nclass Core {\n    constructor({ path }) {\n        this.path = path;\n        this.directory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path });\n        this.settings = new _Settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(path, 'settings') }));\n        this.JSC = new _JSC__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_JSC__WEBPACK_IMPORTED_MODULE_3__[\"default\"].location(path));\n        this.config = new _Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_Config__WEBPACK_IMPORTED_MODULE_4__[\"default\"].location(path));\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Core);\n\n\n//# sourceURL=webpack:///../Library/JFS/Core/index.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/Head.ts":
/*!******************************************!*\
  !*** ../Library/JFS/Environment/Head.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_Node_Package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\");\n/* harmony import */ var Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/TypeScript/TsConfig */ \"../Library/TypeScript/TsConfig.ts\");\n/* harmony import */ var _LocalLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalLink */ \"../Library/JFS/Environment/LocalLink.ts\");\n/* harmony import */ var Library_JFS_Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Library/JFS/Config */ \"../Library/JFS/Config.ts\");\n/* harmony import */ var Library_JFS_JSC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Library/JFS/JSC */ \"../Library/JFS/JSC/index.ts\");\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n\n\n\n\n\n\nclass Head {\n    constructor({ path, type }) {\n        this.synchronize = (...syncDirectoryNames) => {\n            this.nodePackage.json(({ dependencies }) => {\n                const localLinks = Object.keys(dependencies)\n                    .filter(dependencyName => _LocalLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isLocalLink(dependencies[dependencyName]))\n                    .map((dependencyName) => _LocalLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fromDependency(this.nodePackage, dependencyName, dependencies[dependencyName]));\n                if (!localLinks.length) {\n                    _LocalLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"].warnNoLocalLinks();\n                }\n                else {\n                    _LocalLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showLocalLinks(localLinks);\n                }\n                localLinks.forEach((localLink) => localLink.sync(this.nodePackage.file.parent, syncDirectoryNames));\n            });\n        };\n        this.path = path;\n        this.type = type;\n        this.directory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({ path });\n        this.nodePackage = new Library_Node_Package__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Library_Node_Package__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location(path));\n        this.tsConfig = new Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Library_TypeScript_TsConfig__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location(path));\n        this.config = new Library_JFS_Config__WEBPACK_IMPORTED_MODULE_3__[\"JFS\"].Config(Library_JFS_Config__WEBPACK_IMPORTED_MODULE_3__[\"JFS\"].Config.location(path));\n        this.JSC = new Library_JFS_JSC__WEBPACK_IMPORTED_MODULE_4__[\"default\"](Library_JFS_JSC__WEBPACK_IMPORTED_MODULE_4__[\"default\"].location(path));\n    }\n}\n(function (Head) {\n    let Type;\n    (function (Type) {\n        Type[\"APP\"] = \"app\";\n        Type[\"JFC\"] = \"jfc\";\n    })(Type = Head.Type || (Head.Type = {}));\n})(Head || (Head = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/Head.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/LocalLink.ts":
/*!***********************************************!*\
  !*** ../Library/JFS/Environment/LocalLink.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Library_Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Library/Notifier */ \"../Library/Notifier/index.ts\");\n\n\n\n\nclass LocalLink {\n    constructor(props) {\n        this.toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;\n        this.sync = (projectPath, syncList) => this.linkDirectory.directories(directories => directories\n            .filter(({ name }) => syncList['includes'](name))\n            .forEach(directory => directory.sync(Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(projectPath, 'node_modules', this.linkName, directory.name), `${ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.yellow(this.linkName)}/${ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.cyan(directory.name)}`)));\n        this.linkName = props.linkName;\n        this.linkPath = props.linkPath;\n        this.linkDirectory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            path: this.linkPath\n        });\n    }\n}\nLocalLink.prefix = 'jfs-sync: ';\nLocalLink.isLocalLink = (dependencyVersion) => (dependencyVersion.substring(0, LocalLink.prefix.length) === LocalLink.prefix);\nLocalLink.extractPath = (linkPath) => (linkPath.substring(LocalLink.prefix.length, linkPath.length));\nLocalLink.showLocalLinks = (localLinks) => console.log(localLinks\n    .map((localLink) => ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green(localLink.toString()))\n    .join('\\n'), '\\n');\nLocalLink.warnNoLocalLinks = () => console.warn(Library_Notifier__WEBPACK_IMPORTED_MODULE_3__[\"default\"].framedMessage(Library_Notifier__WEBPACK_IMPORTED_MODULE_3__[\"default\"].multiLineMessage(ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.yellow([\n    'WARNING: No local links to jfs-core or jfc components detected.',\n    'Please check your dependencies.'\n].join(' ')), '', `Troubleshooting: Your local link pattern should match ${ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green(ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.bold(`\"${LocalLink.prefix}path/to/jfs/module\"`))}`)));\nLocalLink.fromDependency = (nodePackage, name, value) => (new LocalLink({\n    linkName: name,\n    linkPath: Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(nodePackage.file.parent, LocalLink.extractPath(value))\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalLink);\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/LocalLink.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/Location.ts":
/*!**********************************************!*\
  !*** ../Library/JFS/Environment/Location.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Location {\n    constructor({ type, path }) {\n        this.run = (type, callback) => {\n            if (this.type === type) {\n                callback();\n            }\n        };\n        this.type = type;\n        this.path = path;\n    }\n}\n(function (Location) {\n    let Type;\n    (function (Type) {\n        Type[\"LOCAL\"] = \"local\";\n        Type[\"REMOTE\"] = \"remote\";\n    })(Type = Location.Type || (Location.Type = {}));\n})(Location || (Location = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Location);\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/Location.ts?");

/***/ }),

/***/ "../Library/JFS/Environment/index.ts":
/*!*******************************************!*\
  !*** ../Library/JFS/Environment/index.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_Explorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/Explorer */ \"../Library/OS/Filesystem/Explorer.ts\");\n/* harmony import */ var Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/Node/Package */ \"../Library/Node/Package/index.ts\");\n/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Location */ \"../Library/JFS/Environment/Location.ts\");\n/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Head */ \"../Library/JFS/Environment/Head.ts\");\n\n\n\n\nclass Environment {\n}\nEnvironment.Head = null;\nEnvironment.Satellites = [];\nEnvironment.Location = null;\nEnvironment.satelliteType = (name, dependencies) => {\n    const pattern = 'jfc-';\n    const match = name.substring(0, pattern.length) === pattern;\n    const hasCoreDependency = Boolean(dependencies['@elumeo/jfs-core']);\n    return (match && hasCoreDependency\n        ? _Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Type.JFC\n        : _Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Type.APP);\n};\nEnvironment.locationType = (list) => (list.length === 1\n    ? _Location__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Type.LOCAL\n    : _Location__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Type.REMOTE);\nEnvironment.detect = (onComplete) => {\n    const explorer = new Library_OS_Filesystem_Explorer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](__dirname);\n    explorer.explore(Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location, (list) => {\n        let payload = list.length;\n        list\n            .map((path) => new Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Library_Node_Package__WEBPACK_IMPORTED_MODULE_1__[\"default\"].location(path)))\n            .forEach((nodePackage, index, nodePackageStack) => (nodePackage.json(({ dependencies, name }) => {\n            if (index) {\n                const path = nodePackage.file.parent;\n                const type = Environment.satelliteType(name, dependencies);\n                if (!Environment.Satellites.length) {\n                    Environment.Head = new _Head__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n                        path,\n                        nodePackage,\n                        type\n                    });\n                }\n                Environment.Satellites.push({ path, type });\n            }\n            else {\n                Environment.Location = new _Location__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                    path: nodePackage.file.parent,\n                    type: Environment.locationType(nodePackageStack)\n                });\n            }\n            if (!--payload) {\n                onComplete();\n            }\n        })));\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Environment);\n\n\n//# sourceURL=webpack:///../Library/JFS/Environment/index.ts?");

/***/ }),

/***/ "../Library/JFS/JSC/Api.ts":
/*!*********************************!*\
  !*** ../Library/JFS/JSC/Api.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n\nclass Api {\n    constructor(path) {\n        this.parseHash = (apiString) => (apiString\n            .match(/export const JSC_API_VERSION: string = '(.*)';/g)[0]);\n        this.version = (versionReady) => this.read(apiString => versionReady(this.parseHash(apiString)));\n        this.update = (apiString, updateComplete) => {\n            this.file.write({\n                data: apiString,\n                dataWritten: updateComplete\n            });\n        };\n        this.path = path;\n        this.file = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ path: this.path });\n    }\n    read(apiStringReady) {\n        this.file.read({\n            dataReady: apiStringReady\n        });\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Api);\n\n\n//# sourceURL=webpack:///../Library/JFS/JSC/Api.ts?");

/***/ }),

/***/ "../Library/JFS/JSC/Config.ts":
/*!************************************!*\
  !*** ../Library/JFS/JSC/Config.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n\nvar JSC;\n(function (JSC) {\n    class Config {\n        constructor(path) {\n            this.read = (configReady) => this.file.read({\n                dataReady: (rawConfig) => configReady(JSON.parse(rawConfig))\n            });\n            this.endpoint = (jfsConfig, versionNumber = 2) => (`${jfsConfig.JscClient.Host}/client/generated/v${versionNumber}`);\n            this.file = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ path });\n        }\n    }\n    JSC.Config = Config;\n})(JSC || (JSC = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (JSC.Config);\n\n\n//# sourceURL=webpack:///../Library/JFS/JSC/Config.ts?");

/***/ }),

/***/ "../Library/JFS/JSC/index.ts":
/*!***********************************!*\
  !*** ../Library/JFS/JSC/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Api */ \"../Library/JFS/JSC/Api.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ \"../Library/JFS/JSC/Config.ts\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Library_OS_CLI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Library/OS/CLI */ \"../Library/OS/CLI/index.ts\");\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n\n\n\n\n\n\n\nclass JSC {\n    constructor(path) {\n        this.fetch = (jfsConfig, versionNumber = 2, fetchComplete) => jfsConfig.read(config => {\n            const endpoint = this.config.endpoint(config, versionNumber);\n            console.log({ endpoint });\n            this.config.read(jscApiConfig => (axios__WEBPACK_IMPORTED_MODULE_2___default.a\n                .post(endpoint, jscApiConfig, JSC.axiosParams())\n                .then(({ data: apiString }) => fetchComplete(apiString))\n                .catch(error => {\n                const { data } = error.response;\n                const message = data.match(/(?<=\\[message\\] => ).*/gm);\n                console.error(ansi_colors__WEBPACK_IMPORTED_MODULE_4___default.a.red(message));\n            })));\n        });\n        this.generate = (jfsConfig, versionNumber = 2, generationComplete) => (this.fetch(jfsConfig, versionNumber, apiString => this.api.update(apiString, () => {\n            const message = ansi_colors__WEBPACK_IMPORTED_MODULE_4___default.a.green(`√ New JscApi File '${this.api.path}' successfully created`);\n            console.log(message);\n            const satelliteDirectory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_6__[\"default\"]({\n                path: jfsConfig.file.parent\n            });\n            satelliteDirectory.run({\n                command: 'node',\n                parameters: [\n                    'node_modules/prettier/bin-prettier.js',\n                    '--write', './src/Jsc/JscApi.ts'\n                ],\n                commandExited: generationComplete\n            });\n        })));\n        this.check = (jfsConfig, versionNumber = 2) => (this.fetch(jfsConfig, versionNumber, apiString => this.api.version(apiHash => console.log(this.api.parseHash(apiString) === apiHash\n            ? ansi_colors__WEBPACK_IMPORTED_MODULE_4___default.a.green('√ The JscApi is up to date - nothing to do')\n            : ansi_colors__WEBPACK_IMPORTED_MODULE_4___default.a.red('The JscApi has been changed - please review and update')))));\n        this.api = new _Api__WEBPACK_IMPORTED_MODULE_0__[\"default\"](Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(path, 'JscApi.ts'));\n        this.config = new _Config__WEBPACK_IMPORTED_MODULE_3__[\"default\"](Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(path, 'JscApiConfig.json'));\n    }\n}\nJSC.location = (path) => Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(path, 'src', 'Jsc');\nJSC.axiosParams = () => (Library_OS_CLI__WEBPACK_IMPORTED_MODULE_5__[\"default\"].parameter('elumeoPath')\n    ? {\n        params: {\n            options: `elumeoPath:${Library_OS_CLI__WEBPACK_IMPORTED_MODULE_5__[\"default\"].parameter('elumeoPath')}`\n        }\n    }\n    : null);\n/* harmony default export */ __webpack_exports__[\"default\"] = (JSC);\n\n\n//# sourceURL=webpack:///../Library/JFS/JSC/index.ts?");

/***/ }),

/***/ "../Library/JFS/Virtual/Environment/index.ts":
/*!***************************************************!*\
  !*** ../Library/JFS/Virtual/Environment/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! .. */ \"../Library/JFS/Virtual/index.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nclass Environment {\n    constructor({ root, source }) {\n        this.mirrors = [];\n        this.createVirtualPath = (...segments) => Object(path__WEBPACK_IMPORTED_MODULE_3__[\"resolve\"])(this.root, ...segments);\n        this.createSourcePath = (...segments) => Object(path__WEBPACK_IMPORTED_MODULE_3__[\"resolve\"])(this.source.path, ...segments);\n        this.addMirror = ({ virtualPath, sourcePath }) => {\n            this.mirrors.push(new ___WEBPACK_IMPORTED_MODULE_2__[\"default\"].Mirror({\n                virtualFile: new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path: virtualPath }),\n                sourceFile: new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path: sourcePath })\n            }));\n        };\n        this.root = root;\n        this.directory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ path: root });\n        this.source = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ path: source });\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Environment);\n\n\n//# sourceURL=webpack:///../Library/JFS/Virtual/Environment/index.ts?");

/***/ }),

/***/ "../Library/JFS/Virtual/Mirror/index.ts":
/*!**********************************************!*\
  !*** ../Library/JFS/Virtual/Mirror/index.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n\n\n\nclass Mirror {\n    constructor({ sourceFile, virtualFile }) {\n        this.apply = () => {\n            const { relativePath } = Array(Math.max(this.virtualFile.predecessors.length, this.sourceFile.predecessors.length))\n                .fill(null)\n                .map((_, index) => ({\n                virtual: this.virtualFile.predecessors[index] || null,\n                source: this.sourceFile.predecessors[index] || null\n            }))\n                .reduce(({ relativePath, equal }, { virtual, source }) => {\n                if (equal) {\n                    if (virtual !== source) {\n                        equal = !equal;\n                        return {\n                            relativePath: ['.', source].join(path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]),\n                            equal\n                        };\n                    }\n                }\n                else {\n                    if (virtual) {\n                        return {\n                            relativePath: ['..', relativePath, source].join(path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]),\n                            equal\n                        };\n                    }\n                    else {\n                        return {\n                            relativePath: [relativePath, source].join(path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]),\n                            equal\n                        };\n                    }\n                }\n                return { relativePath, equal };\n            }, { relativePath: '', equal: true });\n            (new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ path: this.virtualFile.parent })).create(() => this.sourceFile.read({\n                dataReady: (data) => this.virtualFile.write({\n                    data: [\n                        `export * from '${Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeExtension(relativePath)}';`,\n                        ...(data.includes('export default')\n                            ? [\n                                `import d from '${Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeExtension(relativePath)}';`,\n                                `export default d;`\n                            ]\n                            : [])\n                    ].join('\\n')\n                })\n            }));\n        };\n        this.sourceFile = sourceFile;\n        this.virtualFile = virtualFile;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mirror);\n\n\n//# sourceURL=webpack:///../Library/JFS/Virtual/Mirror/index.ts?");

/***/ }),

/***/ "../Library/JFS/Virtual/index.ts":
/*!***************************************!*\
  !*** ../Library/JFS/Virtual/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Mirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mirror */ \"../Library/JFS/Virtual/Mirror/index.ts\");\n/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Environment */ \"../Library/JFS/Virtual/Environment/index.ts\");\n\n\nclass Virtual {\n}\nVirtual.Mirror = _Mirror__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nVirtual.Environment = _Environment__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Virtual);\n\n\n//# sourceURL=webpack:///../Library/JFS/Virtual/index.ts?");

/***/ }),

/***/ "../Library/JFS/index.ts":
/*!*******************************!*\
  !*** ../Library/JFS/index.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"../Library/JFS/App/index.ts\");\n/* harmony import */ var _Core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Core */ \"../Library/JFS/Core/index.ts\");\n/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Environment */ \"../Library/JFS/Environment/index.ts\");\n/* harmony import */ var _Environment_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Environment/Location */ \"../Library/JFS/Environment/Location.ts\");\n/* harmony import */ var _Environment_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Environment/Head */ \"../Library/JFS/Environment/Head.ts\");\n/* harmony import */ var _App_JFC__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App/JFC */ \"../Library/JFS/App/JFC/index.ts\");\n\n\n\n\n\n\nclass JFS {\n}\nJFS.Environment = _Environment__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nJFS.discover = (onComplete) => {\n    const { Environment } = JFS;\n    Environment.detect(() => {\n        const { path } = Environment.Location;\n        JFS.Core = new _Core__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path });\n        if (Environment.Location.type === _Environment_Location__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Type.REMOTE) {\n            if (Environment.Head.type === _Environment_Head__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Type.APP) {\n                JFS.App = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n                    path: Environment.Head.path\n                });\n            }\n            else if (Environment.Head.type === _Environment_Head__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Type.JFC) {\n                JFS.Component = new _App_JFC__WEBPACK_IMPORTED_MODULE_5__[\"default\"]({\n                    path: Environment.Head.path,\n                    isHead: true\n                });\n            }\n        }\n        onComplete();\n    });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (JFS);\n\n\n//# sourceURL=webpack:///../Library/JFS/index.ts?");

/***/ }),

/***/ "../Library/Node/Module/index.ts":
/*!***************************************!*\
  !*** ../Library/Node/Module/index.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nclass NodeModule {\n    constructor({ path }) {\n        this.path = path;\n    }\n}\nNodeModule.location = (path, nodeModuleName) => Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(path, 'node_modules', nodeModuleName);\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodeModule);\n\n\n//# sourceURL=webpack:///../Library/Node/Module/index.ts?");

/***/ }),

/***/ "../Library/Node/Package/Dependencies/Dependency/LocalLink.ts":
/*!********************************************************************!*\
  !*** ../Library/Node/Package/Dependencies/Dependency/LocalLink.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/Directory */ \"../Library/OS/Filesystem/Directory/index.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Library_Notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Library/Notifier */ \"../Library/Notifier/index.ts\");\n\n\n\n\nclass LocalLink {\n    constructor(props) {\n        this.toString = () => `Link: ${this.linkName} --> ${this.linkPath}`;\n        this.sync = (projectPath, syncList) => this.linkDirectory.directories(directories => directories\n            .filter(({ name }) => syncList['includes'](name))\n            .forEach(directory => directory.sync(Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(projectPath, 'node_modules', this.linkName, directory.name), `${ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.yellow(this.linkName)}/${ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.cyan(directory.name)}`)));\n        this.linkName = props.linkName;\n        this.linkPath = props.linkPath;\n        this.linkDirectory = new Library_OS_Filesystem_Directory__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n            path: this.linkPath\n        });\n    }\n}\nLocalLink.prefix = 'jfs-sync: ';\nLocalLink.isLocalLink = (dependencyVersion) => (dependencyVersion.substring(0, LocalLink.prefix.length) === LocalLink.prefix);\nLocalLink.extractPath = (linkPath) => (linkPath.substring(LocalLink.prefix.length, linkPath.length));\nLocalLink.showLocalLinks = (localLinks) => console.log(localLinks\n    .map((localLink) => ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green(localLink.toString()))\n    .join('\\n'), '\\n');\nLocalLink.warnNoLocalLinks = () => console.warn(Library_Notifier__WEBPACK_IMPORTED_MODULE_3__[\"default\"].framedMessage(Library_Notifier__WEBPACK_IMPORTED_MODULE_3__[\"default\"].multiLineMessage(ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.yellow([\n    'WARNING: No local links to jfs-core or jfc components detected.',\n    'Please check your dependencies.'\n].join(' ')), '', `Troubleshooting: Your local link pattern should match ${ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.green(ansi_colors__WEBPACK_IMPORTED_MODULE_2___default.a.bold(`\"${LocalLink.prefix}path/to/jfs/module\"`))}`)));\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocalLink);\n\n\n//# sourceURL=webpack:///../Library/Node/Package/Dependencies/Dependency/LocalLink.ts?");

/***/ }),

/***/ "../Library/Node/Package/Dependencies/Dependency/index.ts":
/*!****************************************************************!*\
  !*** ../Library/Node/Package/Dependencies/Dependency/index.ts ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LocalLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalLink */ \"../Library/Node/Package/Dependencies/Dependency/LocalLink.ts\");\n\n\nclass Dependency {\n}\nDependency.toLocalLink = (nodePackage, name, value) => (new _LocalLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    linkName: name,\n    linkPath: Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(nodePackage.file.parent, _LocalLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].extractPath(value))\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dependency);\n\n\n//# sourceURL=webpack:///../Library/Node/Package/Dependencies/Dependency/index.ts?");

/***/ }),

/***/ "../Library/Node/Package/Dependencies/index.ts":
/*!*****************************************************!*\
  !*** ../Library/Node/Package/Dependencies/index.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dependency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dependency */ \"../Library/Node/Package/Dependencies/Dependency/index.ts\");\n/* harmony import */ var _Dependency_LocalLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dependency/LocalLink */ \"../Library/Node/Package/Dependencies/Dependency/LocalLink.ts\");\n\n\nclass Dependencies {\n    constructor(nodePackage) {\n        this.value = (valueReady) => {\n            this.nodePackage.json(({ dependencies }) => valueReady(dependencies));\n        };\n        this.detect = (dependencies) => (Object.keys(dependencies)\n            .filter(dependencyName => _Dependency_LocalLink__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isLocalLink(dependencies[dependencyName]))\n            .map((dependencyName) => _Dependency__WEBPACK_IMPORTED_MODULE_0__[\"default\"].toLocalLink(this.nodePackage, dependencyName, dependencies[dependencyName])));\n        this.nodePackage = nodePackage;\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dependencies);\n\n\n//# sourceURL=webpack:///../Library/Node/Package/Dependencies/index.ts?");

/***/ }),

/***/ "../Library/Node/Package/index.ts":
/*!****************************************!*\
  !*** ../Library/Node/Package/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var _Dependencies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dependencies */ \"../Library/Node/Package/Dependencies/index.ts\");\n/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Module */ \"../Library/Node/Module/index.ts\");\n\n\n\n\nclass NodePackage {\n    constructor(path) {\n        this.json = (jsonReady) => this.file.read({\n            dataReady: json => jsonReady(JSON.parse(json))\n        });\n        this.nodeModule = (nodeModuleName) => new _Module__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n            path: _Module__WEBPACK_IMPORTED_MODULE_3__[\"default\"].location(this.file.parent, nodeModuleName)\n        });\n        this.path = path;\n        this.file = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path });\n        this.dependencies = new _Dependencies__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    }\n}\nNodePackage.location = (path) => Object(path__WEBPACK_IMPORTED_MODULE_0__[\"resolve\"])(path, 'package.json');\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodePackage);\n\n\n//# sourceURL=webpack:///../Library/Node/Package/index.ts?");

/***/ }),

/***/ "../Library/Notifier/index.ts":
/*!************************************!*\
  !*** ../Library/Notifier/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Notfier {\n}\nNotfier.framedMessage = (message) => Notfier.multiLineMessage('', '-------------------------------------------------------------------------------------------------------------', '', message, '', '-------------------------------------------------------------------------------------------------------------', '');\nNotfier.multiLineMessage = (...messageLines) => [\n    ...messageLines\n].join(`\\n`);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notfier);\n\n\n//# sourceURL=webpack:///../Library/Notifier/index.ts?");

/***/ }),

/***/ "../Library/OS/CLI/index.ts":
/*!**********************************!*\
  !*** ../Library/OS/CLI/index.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CLI; });\nclass CLI {\n    static parse() {\n        return process.argv\n            .slice(2)\n            .map(CLI.detectInput)\n            .reduce(CLI.mergeInput, []);\n    }\n    static parameters() {\n        return (CLI.parse()\n            .reduce((result, parameter) => {\n            const parameters = Object.assign({}, result);\n            parameters[parameter.label] = (parameter.value.length > 1\n                ? parameter.value\n                : parameter.value[0]);\n            return parameters;\n        }, {}));\n    }\n    static parameter(name) {\n        return CLI.parameters()[name];\n    }\n}\nCLI.detectInput = (word) => {\n    const isLongNameLabel = word.substring(0, 2) === '--';\n    const isShortcutLabel = word.substring(0, 1) === '-';\n    const isLabel = isLongNameLabel || isShortcutLabel;\n    return {\n        text: (isLongNameLabel\n            ? word.substring(2, word.length)\n            : isShortcutLabel\n                ? word.substring(1, word.length)\n                : word),\n        type: isLabel ? 'label' : 'value'\n    };\n};\nCLI.mergeInput = (result, input) => {\n    if (input.type === 'label') {\n        result.push({ label: input.text, value: [] });\n    }\n    else {\n        if (!result.length) {\n            throw `CLI input must be labeled with '-' or '--'`;\n        }\n        result[result.length - 1].value.push(input.text);\n    }\n    return result;\n};\n\n\n//# sourceURL=webpack:///../Library/OS/CLI/index.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/Directory/handleChange.ts":
/*!**********************************************************!*\
  !*** ../Library/OS/Filesystem/Directory/handleChange.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-colors */ \"ansi-colors\");\n/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"../Library/OS/Filesystem/Directory/index.ts\");\n\n\n\nconst formatMessagePrefix = (messagePrefix) => messagePrefix ? `${messagePrefix}: ` : '';\nconst handleNewDirectory = (targetPath, corePath, messagePrefix) => {\n    const newDirectory = new _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ path: targetPath });\n    newDirectory.create(() => {\n        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright(`+${corePath}`)}`);\n    });\n};\nconst handleNewFile = (sourcePath, targetPath, corePath, messagePrefix) => {\n    const newFile = new _File__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path: sourcePath });\n    newFile.copy({\n        newPath: targetPath,\n        fileCopied: () => {\n            console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors__WEBPACK_IMPORTED_MODULE_0___default.a.greenBright(`+${corePath}`)}`);\n        }\n    });\n};\nconst handleRemoveFile = (targetPath, corePath, messagePrefix) => {\n    const removedFile = new _File__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({ path: targetPath });\n    removedFile.remove({\n        fileRemoved: () => {\n            console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors__WEBPACK_IMPORTED_MODULE_0___default.a.redBright(`-${corePath}`)}`);\n        }\n    });\n};\nconst handleRemoveDirectory = (targetPath, corePath, messagePrefix) => {\n    const removedDirectory = new _index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({ path: targetPath });\n    removedDirectory.remove(() => {\n        console.log(`${formatMessagePrefix(messagePrefix)}${ansi_colors__WEBPACK_IMPORTED_MODULE_0___default.a.redBright(`-${corePath}`)}`);\n    });\n};\nconst handleChange = ({ event, sourcePath, targetPath, corePath, messagePrefix }) => {\n    switch (event) {\n        case 'addDir': {\n            handleNewDirectory(targetPath, corePath, messagePrefix);\n            break;\n        }\n        case 'add':\n        case 'change': {\n            handleNewFile(sourcePath, targetPath, corePath, messagePrefix);\n            break;\n        }\n        case 'unlink': {\n            handleRemoveFile(targetPath, corePath, messagePrefix);\n            break;\n        }\n        case 'unlinkDir': {\n            handleRemoveDirectory(targetPath, corePath, messagePrefix);\n        }\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (handleChange);\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/Directory/handleChange.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/Directory/index.ts":
/*!***************************************************!*\
  !*** ../Library/OS/Filesystem/Directory/index.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FsNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FsNode */ \"../Library/OS/Filesystem/FsNode.ts\");\n/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rimraf */ \"rimraf\");\n/* harmony import */ var rimraf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rimraf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var ncp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ncp */ \"ncp\");\n/* harmony import */ var ncp__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ncp__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chokidar */ \"chokidar\");\n/* harmony import */ var chokidar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chokidar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _handleChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handleChange */ \"../Library/OS/Filesystem/Directory/handleChange.ts\");\n/* harmony import */ var _Explorer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Explorer */ \"../Library/OS/Filesystem/Explorer.ts\");\n\n\n\n\n\n\n\n\n\n\nclass Directory extends _FsNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super(...arguments);\n        this.children = (childrenReady) => {\n            Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"readdir\"])(this.path, (error, childrenNames) => {\n                if (error) {\n                    throw error;\n                }\n                else {\n                    const files = [];\n                    const directories = [];\n                    childrenNames.forEach((childName) => {\n                        const fsNodeProps = { path: Object(path__WEBPACK_IMPORTED_MODULE_3__[\"resolve\"])(this.path, childName) };\n                        const fsNode = new _FsNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"](fsNodeProps);\n                        fsNode.stats(stats => {\n                            if (stats.isDirectory()) {\n                                directories.push(new Directory(fsNodeProps));\n                            }\n                            else {\n                                files.push(new _File__WEBPACK_IMPORTED_MODULE_2__[\"default\"](fsNodeProps));\n                            }\n                            if (childrenNames.length === files.length + directories.length) {\n                                childrenReady({\n                                    directories,\n                                    files\n                                });\n                            }\n                        });\n                    });\n                }\n            });\n        };\n        this.child = ({ childName, childReady }) => this.children(({ files, directories }) => childReady(files.find(file => file.name === childName) ||\n            directories.find(directory => directory.name === childName)));\n        this.files = (filesReady) => this.children(({ files }) => filesReady(files));\n        this.file = ({ fileName, fileReady }) => this.files(files => fileReady(files.find(file => file.name === fileName)));\n        this.directories = (directoriesReady) => this.children(({ directories }) => directoriesReady(directories));\n        this.directory = ({ directoryName, directoryReady }) => this.directories(directories => directoryReady(directories.find(directory => directory.name === directoryName)));\n        this.remove = (directoryRemoved) => rimraf__WEBPACK_IMPORTED_MODULE_4___default()(this.path, directoryRemoved);\n        this.copy = ({ newPath, directoryCopied }) => ncp__WEBPACK_IMPORTED_MODULE_5___default()(this.path, newPath, (error) => {\n            if (error) {\n                throw error;\n            }\n            else {\n                directoryCopied();\n            }\n        });\n        this.run = ({ command, parameters, commandExited }) => {\n            const options = {};\n            options.cwd = this.path;\n            const task = Object(child_process__WEBPACK_IMPORTED_MODULE_6__[\"spawn\"])(command, parameters, options);\n            task.stdout.on('data', data => console.log(data.toString()));\n            task.stderr.on('data', data => console.log(data.toString()));\n            task.on('exit', code => commandExited(code, task));\n        };\n        this.watch = (watcherReady) => watcherReady(chokidar__WEBPACK_IMPORTED_MODULE_7___default.a.watch(Object(path__WEBPACK_IMPORTED_MODULE_3__[\"resolve\"])(this.path)));\n        this.create = (directoryCreated) => ((new _Explorer__WEBPACK_IMPORTED_MODULE_9__[\"default\"](this.path)).explore((path) => path, pathStack => {\n            const payload = (this.path\n                .substring(pathStack[0].length, this.path.length)\n                .split(path__WEBPACK_IMPORTED_MODULE_3__[\"sep\"])\n                .slice(1));\n            const createChild = (payload, onComplete) => {\n                if (!payload.length) {\n                    onComplete();\n                }\n                else {\n                    Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"mkdir\"])(Object(path__WEBPACK_IMPORTED_MODULE_3__[\"resolve\"])(pathStack[0], payload[0]), () => createChild(payload.slice(1), onComplete));\n                }\n            };\n            createChild(payload, directoryCreated);\n        }));\n        this.sync = (targetBasePath, messagePrefix = '') => {\n            this.copy({\n                newPath: targetBasePath,\n                directoryCopied: () => {\n                    this.watch(watcher => setTimeout(() => watcher.on('all', (event, sourcePath) => {\n                        const corePath = sourcePath.substring(this.path.length, sourcePath.length);\n                        Object(_handleChange__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({\n                            event,\n                            sourcePath,\n                            targetPath: [\n                                targetBasePath,\n                                corePath\n                            ].join(''),\n                            corePath,\n                            messagePrefix\n                        });\n                    }), 1000));\n                }\n            });\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Directory);\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/Directory/index.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/Explorer.ts":
/*!********************************************!*\
  !*** ../Library/OS/Filesystem/Explorer.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Explorer {\n    constructor(start) {\n        this.pathStack = () => (this.start.split(path__WEBPACK_IMPORTED_MODULE_0__[\"sep\"])\n            .reduce((previous, current, _index, all) => Explorer.finalizeList(all, [...previous, Explorer.createPathItem(previous, current)]), []));\n        this.explore = (pathPattern, explorationComplete) => explorationComplete(this.pathStack()\n            .filter(path => Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"existsSync\"])(pathPattern(path)))\n            .reverse());\n        this.start = start;\n    }\n}\nExplorer.createPath = (descendants, segment) => [\n    ...(descendants.length\n        ? descendants.map(({ segment }) => segment)\n        : ['']),\n    segment\n].join(path__WEBPACK_IMPORTED_MODULE_0__[\"sep\"]);\nExplorer.createPathItem = (previous, current) => ({\n    segment: current,\n    path: Explorer.createPath(previous, current)\n});\nExplorer.finalizeList = (all, newPrevious) => (all.length === newPrevious.length\n    ? newPrevious.map(({ path }) => path)\n    : newPrevious);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Explorer);\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/Explorer.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/File.ts":
/*!****************************************!*\
  !*** ../Library/OS/Filesystem/File.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _FsNode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FsNode */ \"../Library/OS/Filesystem/FsNode.ts\");\n\n\nclass File extends _FsNode__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n    constructor() {\n        super(...arguments);\n        this.exists = () => Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(this.path);\n        this.create = ({ fileCreated }) => Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"appendFile\"])(this.path, '', (error) => {\n            if (error) {\n                fileCreated();\n            }\n            else if (fileCreated) {\n                fileCreated();\n            }\n        });\n        this.read = ({ encoding, dataReady }) => Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"readFile\"])(this.path, encoding || File.defaultReadSettings.encoding, (error, data) => {\n            if (error) {\n                throw error;\n            }\n            else {\n                dataReady(data);\n            }\n        });\n        this.write = ({ data, dataWritten }) => Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFile\"])(this.path, data, (error) => {\n            if (error) {\n                throw error;\n            }\n            else if (dataWritten) {\n                dataWritten();\n            }\n        });\n        this.remove = ({ fileRemoved }) => this.exists() && Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"unlink\"])(this.path, (error) => {\n            if (error) {\n                throw error;\n            }\n            else if (fileRemoved) {\n                fileRemoved();\n            }\n        });\n        this.copy = ({ newPath: path, fileCopied }) => this.read({\n            dataReady: data => {\n                const newFile = new File({ path });\n                newFile.write({\n                    data,\n                    dataWritten: () => fileCopied(newFile)\n                });\n            }\n        });\n        this.move = ({ newPath, fileMoved }) => this.copy({\n            newPath,\n            fileCopied: newFile => fileMoved(newFile)\n        });\n        this.update = ({ patcher, onComplete }) => {\n            this.read({\n                encoding: 'utf8',\n                dataReady: data => this.write({\n                    data: patcher(data),\n                    dataWritten: onComplete\n                })\n            });\n        };\n    }\n}\nFile.removeExtension = (path) => path.substring(0, path.lastIndexOf('.'));\nFile.defaultReadSettings = {\n    encoding: 'utf8',\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (File);\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/File.ts?");

/***/ }),

/***/ "../Library/OS/Filesystem/FsNode.ts":
/*!******************************************!*\
  !*** ../Library/OS/Filesystem/FsNode.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst adjustToOs = (path) => {\n    const hasIncompatibleSeparator = (path) => (path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"] === '\\\\' && path.includes('/') || path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"] === '/' && path.includes('/'));\n    while (hasIncompatibleSeparator(path)) {\n        path = path.replace('/', path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]);\n        path = path.replace('\\\\', path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]);\n    }\n    return path;\n};\nclass FsNode {\n    constructor(props) {\n        this.stats = (statsReady) => Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"lstat\"])(this.path, (error, stats) => {\n            if (error) {\n                throw error;\n            }\n            else {\n                statsReady(stats);\n            }\n        });\n        this.exists = () => Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(this.path);\n        this.path = adjustToOs(props.path);\n        this.predecessors = props.path.split(path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]);\n        this.name = this.predecessors[this.predecessors.length - 1];\n        this.parent = this.predecessors.slice(0, this.predecessors.length - 1).join(path__WEBPACK_IMPORTED_MODULE_1__[\"sep\"]);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (FsNode);\n\n\n//# sourceURL=webpack:///../Library/OS/Filesystem/FsNode.ts?");

/***/ }),

/***/ "../Library/Text/index.ts":
/*!********************************!*\
  !*** ../Library/Text/index.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Text;\n(function (Text) {\n    Text.beginsWith = (text, pattern) => (text.substring(0, pattern.length) === pattern);\n    Text.endsWith = (text, pattern) => (text.substring(text.length - pattern.length, text.length) === pattern);\n    Text.capitalize = text => text[0].toUpperCase() + text.substring(1);\n    Text.removePrefix = (text, prefix) => text.substring(prefix.length, text.length);\n    Text.removeSuffix = (text, suffix) => (Text.endsWith(text, suffix)\n        ? text.substring(0, text.length - suffix.length)\n        : text);\n})(Text || (Text = {}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Text);\n\n\n//# sourceURL=webpack:///../Library/Text/index.ts?");

/***/ }),

/***/ "../Library/TypeScript/TsConfig.ts":
/*!*****************************************!*\
  !*** ../Library/TypeScript/TsConfig.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/Filesystem/File */ \"../Library/OS/Filesystem/File.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Library_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Library/Text */ \"../Library/Text/index.ts\");\n\n\n\nclass TsConfig {\n    constructor(path) {\n        this.update = ({ patcher, onComplete }) => {\n            this.file.update({\n                patcher: (data) => JSON.stringify(patcher(JSON.parse(data)), null, 2),\n                onComplete\n            });\n        };\n        this.path = path;\n        this.file = new Library_OS_Filesystem_File__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ path });\n    }\n}\nTsConfig.location = (path) => Object(path__WEBPACK_IMPORTED_MODULE_1__[\"resolve\"])(path, 'tsconfig.json');\nTsConfig.pathMappings = ({ prefix, pathPrefix }) => ({\n    [`${prefix}/Action/*`]: [`${pathPrefix}/Store/Action/*`],\n    [`${prefix}/Component/*`]: [`${pathPrefix}/Component/*`],\n    [`${prefix}/JscApi`]: [`${pathPrefix}/Jsc/JscApi`],\n    [`${prefix}/Mock/*`]: [`${pathPrefix}/Mock/*`],\n    [`${prefix}/Setup/*`]: [`${pathPrefix}/Setup/*`]\n});\nTsConfig.removeWildcard = (text) => Library_Text__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeSuffix(text, '/*');\nTsConfig.addPathMapping = (tsconfig, pathMapping) => (Object.assign(Object.assign({}, tsconfig), { compilerOptions: Object.assign(Object.assign({}, tsconfig.compilerOptions), { paths: Object.assign(Object.assign({}, tsconfig.compilerOptions.paths), pathMapping) }) }));\n/* harmony default export */ __webpack_exports__[\"default\"] = (TsConfig);\n\n\n//# sourceURL=webpack:///../Library/TypeScript/TsConfig.ts?");

/***/ }),

/***/ "../Setup/deploy-config-files.ts":
/*!***************************************!*\
  !*** ../Setup/deploy-config-files.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Library_OS_CLI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Library/OS/CLI */ \"../Library/OS/CLI/index.ts\");\n/* harmony import */ var Library_JFS_Core_Settings_Deployment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Library/JFS/Core/Settings/Deployment */ \"../Library/JFS/Core/Settings/Deployment/index.ts\");\n/* harmony import */ var Library_JFS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Library/JFS */ \"../Library/JFS/index.ts\");\n/* harmony import */ var Library_JFS_Environment_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Library/JFS/Environment/Location */ \"../Library/JFS/Environment/Location.ts\");\n\n\n\n\nconst blackList = [\n    'webpack.common.js', 'webpack.development.js', 'webpack.production.js',\n    'webpack.scripts.js', 'copyLocal.js'\n];\nLibrary_JFS__WEBPACK_IMPORTED_MODULE_2__[\"default\"].discover(() => {\n    const { Environment, Core } = Library_JFS__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    Core.settings.compose(Library_OS_CLI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].parameter('scripts-mode')\n        ? 'scripts'\n        : 'frontend', settings => {\n        settings.forEach(setting => setting.setBlackList(...blackList));\n        const onComplete = () => { };\n        if (Environment.Location.type === Library_JFS_Environment_Location__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Type.LOCAL) {\n            new Library_JFS_Core_Settings_Deployment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                path: Environment.Location.path,\n                settings,\n                onComplete\n            });\n        }\n        else if (Environment.Location.type === Library_JFS_Environment_Location__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Type.REMOTE) {\n            new Library_JFS_Core_Settings_Deployment__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n                path: Environment.Head.path,\n                settings,\n                onComplete: () => {\n                    if (Library_JFS__WEBPACK_IMPORTED_MODULE_2__[\"default\"].App) {\n                        Library_JFS__WEBPACK_IMPORTED_MODULE_2__[\"default\"].App.setup(() => { });\n                    }\n                    else if (Library_JFS__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Component) {\n                        Library_JFS__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Component.setup(() => { });\n                    }\n                }\n            });\n        }\n    });\n});\n\n\n//# sourceURL=webpack:///../Setup/deploy-config-files.ts?");

/***/ }),

/***/ "./":
/*!*********!*\
  !*** . ***!
  \*********/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Setup_deploy_config_files__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Setup/deploy-config-files */ \"../Setup/deploy-config-files.ts\");\n\n\n\n//# sourceURL=webpack:///.?");

/***/ }),

/***/ 0:
/*!***************!*\
  !*** multi . ***!
  \***************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/mrb/Archiv/Juwelo/jfs/temp/jfs-core/scripts/index.ts */\"./\");\n\n\n//# sourceURL=webpack:///multi_.?");

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