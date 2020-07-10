"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const json_diff_1 = __importDefault(require("json-diff"));
const Config_1 = __importDefault(require("./Config"));
const API_1 = __importDefault(require("./Generator/API"));
const File_1 = __importDefault(require("../../../OS/Filesystem/File"));
class JSC {
    constructor(path) {
        this.generate = (project, options) => {
            this.describe(project, description => this.check({
                description,
                onComplete: result => {
                    if (result) {
                        API_1.default.generate({
                            description,
                            options: {
                                namespace: (options || {}).namespace || 'JSCApi',
                                core: (options || {}).core || false
                            },
                            onComplete: code => {
                                this.saveDescription(description);
                                this.saveCode(API_1.default.format(code));
                            }
                        });
                    }
                }
            }));
        };
        this.saveCode = (code, onComplete) => (new File_1.default({ path: path_1.resolve(this.path, 'Api', 'index.ts') })
            .write(code, onComplete));
        this.describe = (project, onDescription) => (project.config.read(({ JscClient: { Host: host } }) => project.JSC.config.read(({ remote }) => API_1.default.describe({
            remote: {
                host: host,
                path: '/client/api/description',
                configuration: remote
            },
            onDescription
        }))));
        this.saveDescription = (description) => {
            fs_1.writeFile(path_1.resolve(this.path, 'Api', 'Description.json'), JSON.stringify(description, null, 2), () => {
            });
        };
        this.check = ({ description, onComplete }) => {
            if (!fs_1.existsSync(path_1.resolve(this.path, 'Api', 'Description.json'))) {
                onComplete('No description found');
            }
            else {
                fs_1.readFile(path_1.resolve(this.path, 'Api', 'Description.json'), 'utf8', (error, data) => {
                    if (error) {
                        throw error;
                    }
                    else {
                        onComplete(json_diff_1.default.diffString(description, JSON.parse(data)));
                    }
                });
            }
        };
        this.path = path;
        this.config = new Config_1.default(path_1.resolve(path, 'Api', 'config.json'));
    }
}
JSC.location = (path) => path_1.resolve(path, 'src', 'Jsc');
exports.default = JSC;
//# sourceMappingURL=index.js.map